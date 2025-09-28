export async function generateProblem(difficulty) {
  const res = await fetch("http://localhost:8000/generate-problem", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ difficulty }),
    credentials: "include", // optional if you use cookies
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json(); // { problem: "..." }
}