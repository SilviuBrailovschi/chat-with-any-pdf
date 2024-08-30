import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChatWithAny PDF",
  description: "Upload a pdf to provide context to a OpenAi LLM model",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
        <html lang="en">
          <body className={inter.className}>
          <SignedOut>
              <SignInButton />
          </SignedOut>
          <SignedIn>
              <UserButton />
          </SignedIn>
          {children}
          </body>
        </html>
    </ClerkProvider>
  );
}
