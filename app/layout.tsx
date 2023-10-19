import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ConvexClientProvider } from "@/components/providers/convex-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Note App",
  description: "Create a modern Notes",
  icons: {
    icon: [

      {
        media: "(prefers-color-scheme: light)",
        url: "/light.svg",
        href: "/light.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/dark_icon.svg",
        href: "/dark_icon.svg",
      }
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <ConvexClientProvider>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          // disableTransitionOnChange
          storageKey="notely-theme"
          >
          {children}
        </ThemeProvider>
          </ConvexClientProvider>
      </body>
    </html>
  );
}
