import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingDonateButton from "@/components/FloatingDonateButton";
import LoadingScreen from "@/components/LoadingScreen";
import PageTransition from "@/components/PageTransition";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Talawa | Empowering Jamaican Youth Through Education",
  description:
    "Talawa provides scholarships and educational tools for children in Jamaica. Strong, fearless, resilient - supporting the next generation of Jamaican leaders.",
  keywords: [
    "Jamaican education",
    "scholarships Jamaica",
    "Caribbean charity",
    "educational support",
    "Talawa",
  ],
  openGraph: {
    title: "Talawa | Empowering Jamaican Youth Through Education",
    description:
      "Supporting Jamaican children with scholarships and educational tools. Join us in making a difference.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <LoadingScreen />
        <Header />
        <PageTransition>
          <main className="min-h-screen">{children}</main>
        </PageTransition>
        <Footer />
        <FloatingDonateButton />
      </body>
    </html>
  );
}
