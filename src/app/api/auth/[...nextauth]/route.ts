import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "mjaristizabal" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/login`,
                    {
                        method: "POST",
                        body: JSON.stringify({
                            username: credentials?.username,
                            password: credentials?.password,
                        }),
                        headers: { "Content-Type": "application/json" },
                    }
                );

                const user = await res.json();
                if (user.detail) {
                    throw new Error(user.detail);
                }
                return user;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user }
        },
        async session({ session, token }) {
            session.user = token as any;
            return session
        }
    },
    pages: {
        signIn: '/login'
    }
});

export { handler as GET, handler as POST };