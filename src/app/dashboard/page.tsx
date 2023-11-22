"use client";
import ButtonAuth from '@/components/ButtonAuth';
import { useSession } from 'next-auth/react'



const Dashboard = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Cargando...</p>
  }
  return (
    <>
      <div>
        <h1>Dashboard</h1>
        <pre>
          <code>{JSON.stringify(session, null, 2)}</code>
        </pre>
      </div>
    </>
  )
}

export default Dashboard