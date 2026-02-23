export const sendChat = async (question, userId, sessionId) => {
  const res = await fetch("http://127.0.0.1:5000/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      question: question,
      user_id: userId,
      session_id: sessionId,
    }),
  });

  if (!res.ok) {
    throw new Error("API error");
  }

  return res.json();
};
