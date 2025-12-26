import type { Metadata } from "next";
import { Schibsted_Grotesk,Martian_Mono } from "next/font/google";
import "./globals.css";
import LightRays from './components/LightRays';
import NavBar from "./components/NavBar";
const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevEvents",
  description: "DevEvents is a platform for developers to find and attend events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen antialiased`}
      >     <div className="absolute inset-0 z-0 min-h-screen ">
            <LightRays
              raysOrigin="top-center"
              raysColor="#5dfeca"
              raysSpeed={1.5}
              lightSpread={0.8}
              rayLength={1.2}
              followMouse={true}
              mouseInfluence={0.02}
              noiseAmount={0.1}
              distortion={0.05}
              className="custom-rays"
            />
          </div>
        <NavBar/>
        <main>{children}</main>
        
      </body>
    </html>
  );
}
