import React from "react";
import Header from "./components/Header";
import MainScreen from "./components/MainScreen";
import StudyGroupSection from "./components/StudyGroupSection";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <MainScreen />
      <StudyGroupSection />
    </div>
  );
}

export default App;