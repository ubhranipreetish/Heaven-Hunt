"use client";
import AuthForm from "@/components/AuthForm";
import { useAuth } from "@/context/AuthContext";
import Welcome_Component from "@/components/Welcome_Component";
import HomePage from "./home/page";

export default function RootPage() {
  const { user } = useAuth();

  return (
    <div>
      {user ? (
        <HomePage />
      ) : (
        <div>
          <Welcome_Component />
        </div>
      )}
    </div>
  );
}
