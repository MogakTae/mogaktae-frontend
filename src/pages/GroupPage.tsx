import React from 'react';
import Header from '../components/Header';
import MainScreen from '../components/MainScreen';
import StudyGroupSection from '../components/StudyGroupSection';

export default function GroupPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <MainScreen />
            <StudyGroupSection />
        </div>
    );
}
