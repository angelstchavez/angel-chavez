import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { Alexandria, Poppins } from 'next/font/google';
import { getMessages } from "next-intl/server";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { routing } from "@/i18n/routing";

import "./globals.css";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";


const alexandria = Alexandria({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--display-family',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--text-family',
});


export const metadata: Metadata = {
  title: "Angel Chavez",
  description: "Software Developer",
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${alexandria.variable} ${poppins.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-screen flex flex-col">
              <div className="w-full max-w-2xl mx-auto flex flex-col flex-1">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
