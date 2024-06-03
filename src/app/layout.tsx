import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/contexts/auth/index.";
export const metadata: Metadata = {
  title: "Next testes",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
