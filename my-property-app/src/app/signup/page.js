"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AuthForm from "@/components/AuthForm";

export default function SignupPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/"); // Already logged in
  }, [user]);

  return (
    <div>
      <h1>Signup</h1>
      <AuthForm type="signup" />
    </div>
  );
}
