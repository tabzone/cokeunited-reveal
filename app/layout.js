import "./globals.css";

export const metadata = {
  title: "Reveal - Space Analysis System",
  description: "Reveal Space Analysis System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}