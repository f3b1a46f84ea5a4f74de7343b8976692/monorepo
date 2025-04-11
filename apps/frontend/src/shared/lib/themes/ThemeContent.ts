import { createContext } from 'react';
import { Theme, ThemeContentProps } from './theme';

export const ThemeContent = createContext<ThemeContentProps>({
    theme: Theme.LIGHT,
    setTheme: undefined,
});
