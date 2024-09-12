import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster"
import { Montserrat } from "next/font/google";
const mont  = Montserrat({ subsets: ["latin"] });


export const metadata: Metadata = {
  
  title: "Uni Buddy",
  description: "Connect with fellow students to get your assignments done, discreetly and efficiently. Post your needs and receive quality work from peers—all while maintaining your privacy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <Navbar/>
        {children}
        <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] -z-10",
        )}
      />
      <Toaster />
      </body>
    </html>
  );
}
