import "./globals.css";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // Add weights you want
  variable: '--font-roboto', // Optional: use CSS variable
})

export const metadata = {
  title: "Neptune Pool & Spa",
  description: "Your ultimate destination for relaxation and luxury",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
