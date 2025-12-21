import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header.server";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CarMart - Find Your Dream Car",
  description: "The modern way to buy and sell premium vehicles",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <head>
          <link rel="icon" href="/logo-white.png" sizes="any" />
        </head>
        <body className={`${inter.className} bg-background min-h-screen `}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />
        </body>
      </html>
    </ClerkProvider>
  );
}
