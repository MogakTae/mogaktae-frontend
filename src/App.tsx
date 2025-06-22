import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MainScreen from './components/MainScreen';
import StudyGroupSection from './components/StudyGroupSection';
import MyPage from './components/MyPage';

// 현재 페이지 타입 정의
type CurrentPage = 'home' | 'mypage';

function App() {
  const [currentPage, setCurrentPage] = useState<CurrentPage>('home');

  // 페이지 변경 핸들러
  const handlePageChange = (page: CurrentPage) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header에 페이지 변경 함수 전달 */}
      <Header onPageChange={handlePageChange} currentPage={currentPage} />
      
      {/* 현재 페이지에 따라 다른 컴포넌트 렌더링 */}
      {currentPage === 'home' ? (
        <>
          <MainScreen />
          <StudyGroupSection />
        </>
      ) : (
        <MyPage onBackToHome={() => setCurrentPage('home')} />
      )}
    </div>
  );
}

export default App;