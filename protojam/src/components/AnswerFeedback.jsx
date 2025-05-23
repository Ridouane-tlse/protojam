import React from "react";

function AnswerFeedback({ isCorrect }) {
  console.log("Rendenred once,isCorrect");
  if (isCorrect === null) return null;
  return (
    <div className={`feedback ${isCorrect ? "correct" : "incorrect"}`}>
      {isCorrect ? "BRAVO ! Bonne réponse" : "Mauvaise réponse"}
    </div>
  );
}

export default AnswerFeedback;