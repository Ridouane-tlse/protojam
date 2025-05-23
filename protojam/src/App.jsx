import { useState } from "react";
import Header from "./components/HeadingArea";
import GameCardList from "./components/GameCardList";
import LessonCard from "./components/LessonCard";
import AnswerFeedback from "./components/AnswerFeedback";
import "./App.css"

const lessons = [{
    id: 1,
    language: "HTML",
    title: "Les balises HTML",
    explanation:
      "En HTML, on utilise des balises pour structurer une page. Par exemple, la balise <h1> permet d’écrire un titre important, tandis que <p> sert pour un paragraphe.",
    question: "Quelle balise est utilisée pour créer un titre principal ?",
    options: ["<h1>", "<p>"],
    correctAnswer: "<h1>",
  }, 
   {
      title: "Les images HTML",
      explanation: "La balise <img> permet d'afficher une image sur une page web.",
      question: "Quelle balise est utilisée pour insérer une image ?",
      options: ["<img>", "<image>"],
      correctAnswer: "<img>",
    },
  
  

  {
    id: 2,
    language: "CSS",
    title: "La couleur du texte",
    explanation:
      "CSS sert à styliser une page. Par exemple, on peut changer la couleur du texte avec la propriété `color`. Elle s’applique sur une balise, une classe ou un id.",
    question: "Quelle propriété CSS change la couleur du texte ?",
    options: ["color", "background-color"],
    correctAnswer: "color",
  },
  
  
  
  
  {
    id: 3,
    language: "JavaScript",
    title: "Afficher une alerte",
    explanation:
      "JavaScript permet de rendre une page interactive. Par exemple, la fonction `alert()` affiche une boîte de message à l’utilisateur.",
    question: "Quelle ligne affiche un message à l’écran ?",
    options: ["alert('Bonjour !')", "console.log('Bonjour !')"],
    correctAnswer: "alert('Bonjour !')",
  },]


function App() {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleCardClick = (lessonKey) => {
    setSelectedLesson(lessonKey);
    setIsAnswered(false);
    setIsCorrect(null);
  };

  const handleAnswer = (answer) => {
    const correct = answer === lessons[selectedLesson - 1].correctAnswer;
    setIsCorrect(correct);
    setIsAnswered(true);
  };

  return (
    <div className="min-h-screen p-4 text-center">
      <Header />
      {!selectedLesson ? (
        <GameCardList onSelectLesson={handleCardClick} lessons={lessons} />
      ) : (
        <>
        {/* 🔙 BOUTON RETOUR À LA LISTE DES LANGAGES */}
          <button className="back-button" onClick={() => setSelectedLesson(null)}>
            🔙 Retour
          </button>
        <LessonCard
          lesson={lessons[selectedLesson - 1]}
          onAnswer={handleAnswer}
          isAnswered={isAnswered}
          isCorrect={isCorrect}
        />
  {isAnswered && !isCorrect && (
    <button
      className="retry-button"
      onClick={() => {
        setIsAnswered(false);
        setIsCorrect(null);
      }}
    >
      🔁 Réessayer
    </button>
  )}
</>
    
      )}
      <AnswerFeedback isCorrect={isCorrect}/>
    </div>
  );
}

export default App;