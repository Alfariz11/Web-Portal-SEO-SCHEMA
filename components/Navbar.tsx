// components/Navbar.tsx
"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-md p-4">
      <nav className="container mx-auto flex justify-between items-center" aria-label="Main navigation">
        <Link href="/" className="text-2xl font-bold text-blue-600" aria-label="Beranda">
          News Portal
        </Link>
        <div>
          {session ? (
            <button
              onClick={() => signOut()}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              aria-label="Logout"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${pathname === "/login" ? "underline" : ""}`}
              aria-label="Login ke akun"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}