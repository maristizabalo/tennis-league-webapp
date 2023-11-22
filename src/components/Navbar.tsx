"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link
          href="/"
          className="btn btn-primary btn-sm"
        >
          Inicio
        </Link>
        <Link
          href="/tournaments"
          className="btn btn-secondary btn-sm"
        >
          Prueba Fetch
        </Link>
        {session?.user ? (
          <>
            <button
              onClick={() => signOut()}
              className="btn btn-danger btn-sm"
            >
              Signout
            </button>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className="btn btn-primary btn-sm"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="btn btn-primary btn-sm"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};
export default Navbar;