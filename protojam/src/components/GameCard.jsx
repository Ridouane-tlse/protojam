import React from "react";

const GameCard = ({ lesson, onSelectLesson }) => {
    console.log();
    
    return (
        <div 
            className="game-card"
            onClick={() => onSelectLesson(lesson.id)}
        >
            {lesson.language}
        </div>
    );
};

export default GameCard;