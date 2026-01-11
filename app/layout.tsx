import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Dr. Anjali Meena – Best Eye Specialist in Jaipur",
  description:
    "Dr. Anjali Meena – Best Eye Specialist in Jaipur. Expert ophthalmologist providing comprehensive eye care, diagnosis, and treatment of eye diseases. Book appointment for professional eye care.",

  keywords: [
    "Best Eye Specialist in Jaipur",
    "Best Ophthalmologist Jaipur",
    "Eye Doctor Jaipur",
    "Eye Care Specialist Jaipur",
    "Eye Treatment Jaipur",
    "Ophthalmologist near Jagatpura Jaipur",
    "Eye Clinic Jaipur",
  ],

  icons: {
    icon: "/favicon.ico",
  },

  authors: [{ name: "Dr. Anjali Meena" }],
  creator: "Dr. Anjali Meena",
  publisher: "Dr. Anjali Meena",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Dr. Anjali Meena – Best Eye Specialist in Jaipur",
    description:
      "Expert ophthalmology services, comprehensive eye care, diagnosis & treatment of eye diseases in Jaipur",
    url: "https://www.dranjalieyecare.in",
    siteName: "Dr. Anjali Meena - Eye Specialist",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.dranjalieyecare.in/images/hero-section-img.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Anjali Meena – Best Eye Specialist in Jaipur",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dr. Anjali Meena – Best Eye Specialist in Jaipur",
    description:
      "Expert ophthalmology services, comprehensive eye care, diagnosis & treatment of eye diseases in Jaipur",
    images: ["https://www.dranjalieyecare.in/images/hero-section-img.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.dranjalieyecare.in" />

        {/* Open Graph */}
        <meta
          property="og:site_name"
          content="Best Eye Specialist Jaipur – Dr. Anjali Meena"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dranjalieyecare.in" />

        {/* Physician Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              "name": "Dr. Anjali Meena",
              "alternateName": "Eye Specialist in Jaipur - Dr. Anjali Meena",
              "description": "Dr. Anjali Meena is a qualified Ophthalmologist (Eye Specialist) in Jaipur, providing expert eye care services including diagnosis and treatment of various eye diseases.",
              "image": "https://www.dranjalieyecare.in/doctor-image.jpg",
              "medicalSpecialty": "Ophthalmology",
              "jobTitle": "Consultant Ophthalmologist",
              "worksFor": {
                "@type": "MedicalBusiness",
                "name": "Navit Eye & Uro Care Clinic"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "C-108, Aanand Vihar, Railway Colony",
                "addressLocality": "Jagatpura",
                "addressRegion": "Rajasthan",
                "postalCode": "302017",
                "addressCountry": "IN"
              },
              "url": "https://www.dranjalieyecare.in",
              "areaServed": {
                "@type": "City",
                "name": "Jaipur"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "26.8467",
                "longitude": "75.7873"
              },
              "priceRange": "$$"
            })
          }}
        />

        {/* MedicalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Navit Eye & Uro Care Clinic",
              "image": "https://www.dranjalieyecare.in/clinic-image.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "C-108, Aanand Vihar, Railway Colony",
                "addressLocality": "Jagatpura",
                "addressRegion": "Rajasthan",
                "postalCode": "302017",
                "addressCountry": "IN"
              },
              "medicalSpecialty": "Ophthalmology",
              "areaServed": "Jaipur",
              "priceRange": "$$",
              "url": "https://www.dranjalieyecare.in"
            })
          }}
        />

      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
