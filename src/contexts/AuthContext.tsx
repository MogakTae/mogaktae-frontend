import { createContext } from 'react';
import type { AuthContextValue } from '../providers/AuthProvider';

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export default AuthContext;
