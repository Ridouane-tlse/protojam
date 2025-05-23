import GameCard from './GameCard';

const GameCardList = ({ lessons, onSelectLesson }) => {
  return (
    <div className="card-container">
      {lessons.map((lesson) => (
        <GameCard
          key={lesson.id}
          lesson={lesson}
          onSelectLesson={onSelectLesson}
        />
      ))}
    </div>
  );
};

export default GameCardList;
