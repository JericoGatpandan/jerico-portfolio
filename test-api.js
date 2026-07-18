const key = "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";

async function test() {
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${key}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "google/gemma-4-26b-a4b-it:free", 
      messages: [{role: "user", content: "hi"}]
    })
  });
  const data = await response.json();
  console.log(JSON.stringify(data, null, 2));
}
test();
