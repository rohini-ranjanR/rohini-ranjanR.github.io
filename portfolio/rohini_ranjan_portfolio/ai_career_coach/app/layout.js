import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AI Career Coach",
  description: "This app will guide you in best possible way.",
};

export default function RootLayout({ children }) {
  return (

    <ClerkProvider appearance={
      {
        baseTheme:dark,
      }
    }>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
        
          <Header />
          <main className="min-h-screen">   {children}
          <Toaster richColors />
          </main>
       <footer className="bg-muted/50 py-12">
        <div className="container mx-auto px-4 text-center text-gray-200">
          <p>AI Career Coach</p>
        </div>
       </footer>
    
       
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
