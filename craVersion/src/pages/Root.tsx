import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../components/Header';

function RootPage() {
    const navigation = useNavigation();

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="pt-20 flex-grow bg-[#F8F9FA]">
                {navigation.state === 'loading' && <p>Loading...</p>}
                <Outlet />
            </main>
        </div>
    );
}

export default RootPage;
