'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

export function AppThemeProvider({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={true}
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
    );
}
