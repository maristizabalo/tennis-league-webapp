"use client";

import { signIn, signOut, useSession } from "next-auth/react"

export default function ButtonAuth() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <p>Cargando...</p>
    }

    if (session) {
        return (
            <>
                Hola {session.user?.name}<br />
                <button
                    onClick={() => signOut()}
                    className="btn btn-danger"
                >
                    Cerrar Sesion
                </button>
            </>
        )
    }

    return (
        <>
            No has iniciado sesion <br />
            <button
                onClick={() => signIn()}
                className="btn btn-danger"
            >
                Iniciar sesion
            </button>
        </>
    )
}