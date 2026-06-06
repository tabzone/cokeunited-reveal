import "./globals.css";
import { AuthProvider } from "./components/AuthProvider";
import AuthGuard from "./components/AuthGuard";

export const metadata = {
  title: "Reveal - Space Analysis System",
  description: "Reveal Space Analysis System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <AuthGuard>{children}</AuthGuard>
        </AuthProvider>
      </body>
    </html>
  );
}