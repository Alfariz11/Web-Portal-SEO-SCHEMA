// app/login/page.tsx
"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      toast.success("Login berhasil, selamat datang!");
      setTimeout(() => {
        router.push("/");
      }, 1500);
    }
  }, [session, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <button
        onClick={() => signIn("google")}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Login with Google
      </button>
    </div>
  );
}
