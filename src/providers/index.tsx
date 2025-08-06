import React from 'react';
import AuthProvider from './AuthProvider';

interface AppProvidersProps {
    children: React.ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
    return <AuthProvider>{children}</AuthProvider>;
};
