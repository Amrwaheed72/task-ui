import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import AppNavbar from './components/AppNavbar';
import { cn } from './lib/utils';
import { AppThemeProvider } from './ThemeProvider';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Dashboard App',
    description: 'A modern dashboard project',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ar" dir="rtl" suppressHydrationWarning>
            <body className={cn('font-sans antialiased', geistSans.variable)}>
                <AppThemeProvider>
                    <div className="flex min-h-screen w-full flex-col bg-gray-100 dark:bg-gray-950">
                        <AppNavbar />
                        <Navbar />
                        <main className="flex-1 p-6 md:p-8">{children}</main>
                    </div>
                </AppThemeProvider>
            </body>
        </html>
    );
}
