import { createFileRoute } from '@tanstack/react-router';
import FlowArt, { FlowSection } from '../components/ui/story-scroll';
import { Nav } from '../components/portfolio/Nav';
import { Code2, Database, Rocket } from 'lucide-react';

export const Route = createFileRoute('/story')({
  component: StoryPage,
});

function StoryPage() {
  return (
    <>
      <Nav />
      <FlowArt aria-label="Jerico Gatpandan Story">
        <FlowSection aria-label="Who am I" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] px-2 py-1 bg-[#FFD60A] border-2 border-black inline-block shadow-[2px_2px_0_#000]">01 — The Developer</p>
          <hr className="my-[2vw] border-none border-t-[3px] border-black opacity-100" />
          <div>
            <h1 className="text-[clamp(3.5rem,12vw,14rem)] font-black leading-[0.85] uppercase tracking-tight display-font">
              Code
              <br />
              With
              <br />
              Purpose
            </h1>
          </div>
          <hr className="my-[2vw] border-none border-t-[3px] border-black opacity-100" />
          <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-bold leading-relaxed">
            I am a Computer Science student and Full-Stack Developer. I build systems that don't just look good, but solve real problems from the ground up.
          </p>
        </FlowSection>

        <FlowSection aria-label="The Mission" style={{ backgroundColor: '#FFD60A', color: '#000000' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] px-2 py-1 bg-white border-2 border-black inline-block shadow-[2px_2px_0_#000]">02 — The Mission</p>
          <hr className="my-[2vw] border-none border-t-[3px] border-black opacity-100" />
          <div>
            <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-black leading-[0.85] uppercase tracking-tight display-font">
              Impact
              <br />
              First
              <br />
              Always
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t-[3px] border-black opacity-100" />
          <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-bold leading-relaxed">
            Whether it's a hackathon prototype or a production-ready application, my goal is to engineer solutions that empower users and businesses.
          </p>
          <hr className="my-[2vw] border-none border-t-[3px] border-black opacity-100" />
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1 bg-white border-[3px] border-black p-6 shadow-[4px_4px_0_#000] hover:-translate-y-1 hover:shadow-[6px_6px_0_#000] transition-all">
              <Code2 className="mb-4 w-8 h-8 text-black" />
              <p className="mb-2 text-sm font-black uppercase tracking-wider">Frontend</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed font-medium">
                React, Tailwind, and considered motion. Pixel-perfect interfaces that delight users.
              </p>
            </div>
            <div className="min-w-[180px] flex-1 bg-white border-[3px] border-black p-6 shadow-[4px_4px_0_#000] hover:-translate-y-1 hover:shadow-[6px_6px_0_#000] transition-all">
              <Database className="mb-4 w-8 h-8 text-black" />
              <p className="mb-2 text-sm font-black uppercase tracking-wider">Backend</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed font-medium">
                Node.js, Express, and MySQL. Secure, scalable, and robust architectures.
              </p>
            </div>
          </div>
          <hr className="my-[2vw] border-none border-t-[3px] border-black opacity-100" />
          <p className="mt-auto ml-auto max-w-[50ch] text-right text-[clamp(1rem,2.5vw,2rem)] font-black leading-relaxed">
            Every feature I build starts with one question — does this serve the end user?
          </p>
        </FlowSection>

        <FlowSection aria-label="The Journey" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
          <p className="text-xs font-bold text-black uppercase tracking-[0.2em] px-2 py-1 bg-[#FFD60A] border-2 border-white inline-block shadow-[2px_2px_0_#fff]">03 — The Journey</p>
          <hr className="my-[2vw] border-none border-t-[3px] border-white opacity-100" />
          <div>
            <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-black leading-[0.85] uppercase tracking-tight display-font">
              Learn.
              <br />
              Build.
              <br />
              Ship.
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t-[3px] border-white opacity-100" />
          <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-bold leading-relaxed">
            From regional hackathons to startup pitch competitions, I thrive in fast-paced environments where innovation is key.
          </p>
          <hr className="my-[2vw] border-none border-t-[3px] border-white opacity-100" />
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#FFD60A]">01 — 10+ Apps Shipped</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-90">
                Spanning cooperative management systems, booking platforms, and AI-assisted tools.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#FFD60A]">02 — Naga IDEA2STARTUP</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-90">
                2nd Runner-Up. Proved ability to pitch and build viable startup concepts.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#FFD60A]">03 — Hack4Gov V</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-90">
                Finalist. Demonstrated rapid prototyping and problem-solving under pressure.
              </p>
            </div>
          </div>
        </FlowSection>

        <FlowSection aria-label="Join Me" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] px-2 py-1 bg-[#FFD60A] border-2 border-black inline-block shadow-[2px_2px_0_#000]">04 — Let's Connect</p>
          <hr className="my-[2vw] border-none border-t-[3px] border-black opacity-100" />
          <div>
            <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-black leading-[0.85] uppercase tracking-tight display-font">
              Ready
              <br />
              To
              <br />
              Build?
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t-[3px] border-black opacity-100" />
          <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-bold leading-relaxed mb-8">
            Looking for a dedicated developer to bring your next big idea to life? Let's talk.
          </p>
          
          <div>
            <a href="/#contact" className="inline-flex items-center gap-3 bg-black border-[3px] border-black text-white font-bold py-4 px-8 text-xl shadow-[6px_6px_0_#FFD60A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0_#FFD60A] transition-all">
              <Rocket className="w-6 h-6 text-[#FFD60A]" /> Get In Touch
            </a>
          </div>
        </FlowSection>
      </FlowArt>
    </>
  );
}
