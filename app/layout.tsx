import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "Christina Tang — Portfolio";
  const description =
    "Multimedia creator working across branding, filmmaking and AI-generative storytelling.";

  return {
    title,
    description,
    openGraph: {
      type: "website",
      locale: "en_US",
      title,
      description,
      images: [
        {
          url: `${origin}/og-christina.png`,
          width: 1536,
          height: 1024,
          alt: "Christina Tang Portfolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og-christina.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
