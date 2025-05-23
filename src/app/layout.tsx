// import '@heroui/theme/style.css';
import './globals.css';
import type { Metadata } from "next";
import { Providers } from "./providers";
import { Inter } from "next/font/google"

export const metadata: Metadata = {
  title: "ScrapeMyTrip",
  description: "Your trip companion",
};

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
