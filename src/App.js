import MyNavbar from "./components/MyNavbar/MyNavbar";
import { Routes, Route } from "react-router-dom";
import ProblemOfTheDay from "./components/ProblemOfTheDay/ProblemOfTheDay";
import LandingPage from "./components/LandingPage/LandingPage";
import DetailedQuizPaze from "./components/DetailedQuizPaze/DetailedQuizPaze";
import QuizApp from "./QuizApp/QuizApp";
import ResultPage from "./QuizApp/ResultPage";
import TodaysPic from "./components/TodaysPic/TodaysPic";

function App() {
  return (
    <div>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/problem-of-the-Day" element={<ProblemOfTheDay />} />
        <Route path="//todays-pic" element={<TodaysPic />} />
        <Route path="/quiz/javascript" element={<DetailedQuizPaze />} />
        <Route path="/quiz/react" element={<DetailedQuizPaze />} />
        <Route path="/quiz/algorithms" element={<DetailedQuizPaze />} />
         {/* A specific quiz page */}
         <Route path="/quiz/:quizId" element={<QuizApp />} />
        
        {/* Result page after quiz completion */}
        <Route path="/result" element={<ResultPage/>} />
      </Routes>
    </div>
  );
}

export default App;
