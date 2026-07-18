import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Loader2, RotateCcw } from "lucide-react";
import Markdown from "markdown-to-jsx";

const SYSTEM_INSTRUCTION = `You are an AI assistant for Jerico Gatpandan's portfolio website.
Your role is to answer questions about Jerico based on the provided information.

If a user asks a question that is NOT related to Jerico's portfolio, professional background, education, skills, projects, or contact information, politely decline to answer by saying something like: "I am an AI assistant for Jerico's portfolio. I can only answer questions related to his professional background, projects, and contact info."

Here is the information about Jerico Gatpandan:
- Name: Jerico Gatpandan
- Roles: Computer Science Student, Web Developer Intern, Full-Stack Developer
- Contact Information:
  - Email: jericogatpandan0905@gmail.com
  - Phone: +63 991 251 1750
  - Location: Naga City, Philippines
  - GitHub: github.com/JericoGatpandan
- Education: 
  - BS Computer Science at University of Nueva Caceres (Naga City, 2024-2027 Expected). Dean's Lister for 1st and 2nd Year.
  - TVL - Computer Systems Servicing at Sacred Heart High School, Sipocot (2022-2024).
  - Certification: National Certificate II — Computer Systems Servicing.
- Professional Experience:
  - Web Developer Intern at ServiceBai Philippines (Remote, June 2026 - Sept 2026 Expected): Developing backend features for an on-demand service marketplace using Cloudflare Workers and D1.
  - Trainee / Intern at LGU Calagbangan, Sipocot (Jan 2024): Admin, filing, tech support.
  - Student Assistant at Sacred Heart High School (Jan 2023 - Jan 2024): Tech support, OS/network troubleshooting.
- Expertise / Skills:
  - Full-Stack Development: React, Node.js, Express, MySQL, Docker, Hostinger.
  - Frontend & UI: React, Tailwind CSS, shadcn/ui, Figma.
  - Data & Backend: Python, PINN (Physics-Informed Neural Networks), MySQL, Postgres, Cloudflare Workers, D1.
- Projects:
  - Jerico has built over 10 applications spanning cooperative management, travel booking, and AI-assisted forecasting.
- Awards:
  - 2nd Runner-Up at Naga IDEA2STARTUP 2025 (Team UNC Colab).
  - Finalist at Hack4Gov Region V (2025).
  - Outstanding Rookie Programmer (2025).
  - 1st Place at LeetCode Programming Competition.
  - Congressional District Champion (CSS) at TLE Expo 2023.

Keep your answers concise, professional, and friendly. Use Markdown for formatting.`;

type Role = "user" | "model";

interface ChatMessage {
  role: Role;
  text: string;
}

const SUGGESTED_QUESTIONS = [
  "What is your tech stack?",
  "Tell me about your professional experience.",
  "What are some projects you've built?",
];

const MAX_MESSAGES = 15;

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [messageCount, setMessageCount] = useState(() => {
    if (typeof window !== "undefined") {
      return parseInt(localStorage.getItem("chat_message_count") || "0", 10);
    }
    return 0;
  });
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("chat_messages");
      if (saved) return JSON.parse(saved);
    }
    return [
      {
        role: "model",
        text: "Hi! I'm Jerico's AI assistant. Ask me anything about his projects, experience, or skills.",
      },
    ];
  });
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const resetChat = () => {
    setMessages([
      {
        role: "model",
        text: "Hi! I'm Jerico's AI assistant. Ask me anything about his projects, experience, or skills.",
      },
    ]);
    setInput("");
  };

  // Scroll to bottom whenever messages update
  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("chat_messages", JSON.stringify(messages));
    }
  }, [messages, isOpen]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    if (messageCount >= MAX_MESSAGES) {
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: "You've reached the maximum number of questions for this session to prevent API spam. Please reach out to Jerico directly via email for more details!",
        },
      ]);
      return;
    }

    const userText = text.trim();
    setInput("");

    // Add user message to UI
    const newMessages: ChatMessage[] = [...messages, { role: "user", text: userText }];
    setMessages([...newMessages, { role: "model", text: "" }]);
    setIsLoading(true);

    const newCount = messageCount + 1;
    setMessageCount(newCount);
    if (typeof window !== "undefined") {
      localStorage.setItem("chat_message_count", newCount.toString());
    }

    try {
      // Format messages for OpenRouter (OpenAI-compatible format)
      const apiMessages = [
        { role: "system", content: SYSTEM_INSTRUCTION },
        ...newMessages.map((m) => ({
          role: m.role === "model" ? "assistant" : "user",
          content: m.text,
        })),
      ];

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": window.location.href, // Recommended by OpenRouter
          "X-Title": "Jerico Portfolio", // Recommended by OpenRouter
        },
        body: JSON.stringify({
          // Using Gemma free model on OpenRouter since Llama was rate limited
          model: "google/gemma-4-26b-a4b-it:free",
          messages: apiMessages,
          stream: true,
        }),
      });

      if (!response.ok) {
        throw new Error("API request failed");
      }

      setIsLoading(false); // Done waiting for TTFB, now streaming

      const reader = response.body?.getReader();
      const decoder = new TextDecoder("utf-8");
      if (!reader) throw new Error("No reader");

      let currentText = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (line.startsWith("data: ") && line !== "data: [DONE]") {
            try {
              const parsed = JSON.parse(line.slice(6));
              const token = parsed.choices?.[0]?.delta?.content || "";
              currentText += token;
              setMessages((prev) => {
                const newArr = [...prev];
                newArr[newArr.length - 1] = { role: "model", text: currentText };
                return newArr;
              });
            } catch (e) {
              // Ignore parse errors on partial chunks
            }
          }
        }
      }
    } catch (error) {
      console.error("OpenRouter API Error:", error);
      setMessages((prev) => {
        const newArr = [...prev];
        newArr[newArr.length - 1] = { 
          role: "model", 
          text: "Oops, something went wrong. Please check your OpenRouter API key or try again later." 
        };
        return newArr;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Floating Action Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
          {!hasOpened && (
            <div className="bg-cyan-950/80 border border-cyan-500/40 text-cyan-100 px-4 py-2 rounded-2xl rounded-br-sm text-sm shadow-xl animate-bounce backdrop-blur-md mr-1 pointer-events-auto cursor-pointer" onClick={() => { setIsOpen(true); setHasOpened(true); }}>
              Have a question? Ask my AI!
            </div>
          )}
          <button
            onClick={() => { setIsOpen(true); setHasOpened(true); }}
            className="w-14 h-14 rounded-full glass-strong flex items-center justify-center text-white/80 hover:text-white hover:scale-105 transition-all shadow-lg pointer-events-auto"
            aria-label="Open AI Chat"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[350px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-3rem)] flex flex-col glass rounded-2xl overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 glass-strong shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <Bot className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Jerico's AI</h3>
                <p className="text-[10px] text-white/50 font-mono uppercase tracking-wider">
                  Online
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {messages.length > 1 && (
                <button
                  onClick={resetChat}
                  title="Reset chat"
                  className="p-2 text-white/50 hover:text-white transition-colors rounded-full hover:bg-white/5"
                  aria-label="Reset chat"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-white/50 hover:text-white transition-colors rounded-full hover:bg-white/5"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`flex gap-2 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-white/5 border border-white/10 mt-1">
                    {msg.role === "user" ? (
                      <User className="w-3 h-3 text-white/70" />
                    ) : (
                      <Bot className="w-3 h-3 text-cyan-400" />
                    )}
                  </div>
                  <div
                    className={`px-4 py-2.5 rounded-2xl text-sm ${
                      msg.role === "user"
                        ? "bg-white/10 text-white rounded-tr-sm"
                        : "bg-black/20 text-white/80 rounded-tl-sm border border-white/5"
                    }`}
                  >
                    <div className="prose prose-invert prose-sm max-w-none">
                      <Markdown>{msg.text}</Markdown>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-2 max-w-[85%] flex-row">
                  <div className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-white/5 border border-white/10 mt-1">
                    <Bot className="w-3 h-3 text-cyan-400" />
                  </div>
                  <div className="px-4 py-3 rounded-2xl bg-black/20 rounded-tl-sm border border-white/5 flex items-center gap-1 h-[40px]">
                    <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}
            {!isLoading && messages.length === 1 && (
              <div className="flex flex-col gap-2 mt-4 ml-10 max-w-[85%]">
                <p className="text-[10px] text-white/50 font-mono uppercase tracking-widest mb-1">Suggested Questions</p>
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="text-sm text-cyan-300 bg-cyan-950/20 hover:bg-cyan-900/40 border border-cyan-800/40 rounded-xl px-4 py-2 transition-colors text-left"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-white/10 shrink-0 bg-black/20">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={messageCount >= MAX_MESSAGES ? "Message limit reached." : "Ask about my skills or projects..."}
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-500/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading || messageCount >= MAX_MESSAGES}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading || messageCount >= MAX_MESSAGES}
                className="shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
