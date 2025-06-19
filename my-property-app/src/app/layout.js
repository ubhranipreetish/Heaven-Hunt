import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";

export const metadata = {
  title: "Heaven Hunt",
  description: "Search and explore properties by location, price, and type.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}


function AuthWrapper({ children }) {
  const { user } = useAuth();

  // If user is not logged in, show login/signup choice
  if (!user) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h2>Welcome to Heaven Hunt</h2>
        <p>Please login or sign up to continue</p>
        <a href="/login">
          <button style={{ marginRight: "10px" }}>Login</button>
        </a>
        <a href="/signup">
          <button>Sign Up</button>
        </a>
      </div>
    );
  }

  return children;
}
