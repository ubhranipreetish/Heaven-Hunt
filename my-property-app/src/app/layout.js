import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";
import { PropProvider } from "@/context/PropertyWishlist";

export const metadata = {
  title: "Heaven Hunt",
  description: "Search and explore properties by location, price, and type.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <PropProvider>
            {children}
          </PropProvider>
        </AuthProvider>
      </body>
    </html>
  );
}



