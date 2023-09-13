import Footer from "@/components/Footer/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import ModalPreview from "@/providers/modalPreview";
import ToastProvider from "@/providers/toastProvider";

const nunito = Urbanist({
  subsets: ["latin"],
  weight: "500",
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "Home- Ecommerce-store",
  description: "Ecommerce store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ModalPreview />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
