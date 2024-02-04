import type { Metadata } from "next";
import { Poppins, Nunito_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
 });
 
export const nunitoSans = Nunito_Sans({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito-sans',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900']
 });

export const metadata: Metadata = {
  title: "Feature/Multiple",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
