import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Linkedin, Twitter, FileText, Github } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme/theme-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Angel Chavez",
  description: "Software Developer, Tech Enthusiast, and Lifelong Learner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <ThemeProvider>
          <div className="min-h-screen flex flex-col max-w-2xl mx-auto px-4">
            <header className="py-4 border-b border-border/30 flex justify-between items-center text-sm font-medium">
              <span className="tracking-tight hover:opacity-70 transition-opacity cursor-default uppercase font-bold">
                ac.
              </span>

              <div className="flex items-center gap-4">
                <nav className="text-muted-foreground font-mono text-[10px] uppercase tracking-wider hidden sm:block">
                  Software Developer
                </nav>
                <ThemeToggle />
              </div>
            </header>

            <main className="flex-1">{children}</main>

            <footer className="py-4 border-t border-border/30 flex justify-between items-center text-muted-foreground">
              <div className="flex gap-5 items-center">
                <Link
                  href="https://github.com/angelstchavez"
                  target="_blank"
                  className="hover:text-foreground transition-colors"
                  title="GitHub"
                >
                  <Github size={18} strokeWidth={1.5} />
                </Link>
                <Link
                  href="https://linkedin.com/in/angelstchavez"
                  target="_blank"
                  className="hover:text-foreground transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin size={18} strokeWidth={1.5} />
                </Link>
                <Link
                  href="https://x.com/angelstchavez"
                  target="_blank"
                  className="hover:text-foreground transition-colors"
                  title="X (Twitter)"
                >
                  <Twitter size={18} strokeWidth={1.5} />
                </Link>
                <Link
                  href="https://registry.jsonresume.org/angelstchavez"
                  target="_blank"
                  className="hover:text-foreground transition-colors"
                  title="Descargar CV"
                >
                  <FileText size={18} strokeWidth={1.5} />
                </Link>
              </div>
              <p className="text-[10px] tracking-[0.2em] uppercase opacity-50">
                © {new Date().getFullYear()}
              </p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
