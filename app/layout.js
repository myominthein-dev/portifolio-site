import "./globals.css";
import  localFont  from "next/font/local";

const poppins = localFont({
  src: "../public/fonts/poppins/Poppins-Regular.ttf",
  variable: "--font-poppins",
})

const pacifico = localFont({
  src: "../public/fonts/pacifico/Pacifico-Regular.ttf",
  variable: "--font-pacifico",
})

const roboto = localFont({
  src: "../public/fonts/roboto/static/Roboto-Regular.ttf",
  variable: "--font-roboto",
})


const geistSans = localFont({
  src: "../public/fonts/geist/sans/Geist-Regular.woff2",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "../public/fonts/geist/mono/GeistMono-Thin.woff2",
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "Myo Min Thein",
  description: "Developed by Myo Min Thein",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${pacifico.variable} ${roboto.variable} ${geistMono.variable} ${geistSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
