import { Geist, Geist_Mono } from "next/font/google";
import Header from '@/Components/Header';
import Footer from "@/Components/Footer";
import '@/Assets/Styles/globals.css';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SpotUrSpace | Spot Schedule and Secure",
  description: "A Meeting Room Booking System for Small Businesses in Coworking Space",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
         <Header />
         <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
         {children}
         </main>
       <Footer />
      </body>
    </html>
  );
}
