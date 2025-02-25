import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "INE INTERNATIONAL",
  icons: {
    icon: "/imgs/logo-icon.png",
  },
  description: "Managed by a team of professionals with over 7 years of experience in the industry, INE International is a leading supplier of spices, herbs, and other food ingredients.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}
        style={{ margin: "0px", padding: "0px" }}
      >
        {children}
      </body>
    </html>
  );
}
