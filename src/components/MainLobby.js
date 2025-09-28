import { useEffect, useState, useCallback } from "react";
import PlayerProgress from "./PlayerProgress";
import QuestionBox from "./QuestionBox";
import AnswerBox from "./AnswerBox";

const MAX_BARS = 10;

function getCookie(name) {
  return document.cookie
    .split("; ")
    .find((c) => c.startsWith(name + "="))
    ?.split("=")[1];
}

export default function MainLobby() {
  const [difficulty, setDifficulty] = useState("Beginner Multiple Choice");
  const [problem, setProblem] = useState({ id: null, text: "" });
  const [loading, setLoading] = useState(false);
  const [scores, setScores] = useState({ p1: 0, p2: 0 });

  const fetchNextProblem = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("http://127.0.0.1:8000/generate-problem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ difficulty }),
      });
      const data = await res.json(); // { problem, problem_id? }
      setProblem({ id: data.problem_id ?? null, text: data.problem ?? "" });
    } catch (e) {
      console.error(e);
      setProblem({ id: null, text: "Failed to fetch problem" });
    } finally {
      setLoading(false);
    }
  }, [difficulty]);

  useEffect(() => { fetchNextProblem(); }, [fetchNextProblem]);

  const handleSubmitAnswer = async (answerText) => {
    const player = getCookie("Player");           // "1" | "2"
    const key = player === "2" ? "p2" : "p1";     // default to p1

    try {
      const res = await fetch("http://127.0.0.1:8000/grade-problem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ question: problem.text, answer: answerText }),
      });
      const data = await res.json(); 
      console.log(res)             // { answer: "pass" | "fail" }
      const correct = (String(data.grade).toLowerCase() === "pass") || (String(data.grade).toLowerCase() === "pass\n");
      console.log({ correct });
      if (correct) {
        console.log(`Player ${player} correct!`);
        setScores(prev => ({ ...prev, [key]: Math.min(prev[key] + 1, MAX_BARS) }));
      }
    } catch (e) {
      console.error("grade_problem failed", e);
    } finally {
      fetchNextProblem();
    }
  };

  return (
    <div style={{ height: "100vh", width: "100vw", display: "flex", flexDirection: "column"}}>
      <div style={{ flex: 1 , alignContent: "center",background: '#e6f2ff'}}>
        <PlayerProgress p1Score={scores.p1} p2Score={scores.p2} maxBars={MAX_BARS} />
      </div>
      <div style={{ flex: 1, display: "flex" }}>
        <div style={{ flex: 1, borderRight: "1px solid #000000ff", background: '#d4da9cff' }}>
          <QuestionBox
            prompt={problem.text}
            loading={loading}
            difficulty={difficulty}
            onChangeDifficulty={setDifficulty}
          />
        </div>
        <div style={{ flex: 1 , background: '#95c5f9ff'}}>
          <AnswerBox onSubmit={handleSubmitAnswer} loading={loading} />
        </div>
      </div>
    </div>
  );
}