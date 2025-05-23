import AnswerFeedback from "./AnswerFeedback";

function LessonCard({ lesson, onAnswer, isAnswered, isCorrect }) {
  return (
    <div className="Lesson-card">
      <p className="Lessontext">{lesson.explanation}</p>
      <p className="Lesson-Q">{lesson.question}</p>
      <div className="Lesson-A">
        {lesson.options.map((option) => (
          <button
            key={option}
            onClick={() => onAnswer(option)}
            disabled={isAnswered}
            className="Lesson-btn"
          >
            {option}
          </button>
        ))}
      </div>
      {isAnswered && <AnswerFeedback isCorrect={isCorrect} />}
    </div>
  );
}

export default LessonCard;
