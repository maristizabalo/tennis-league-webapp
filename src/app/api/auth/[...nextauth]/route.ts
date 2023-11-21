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
                    headers: { "Content-Type": "application/json"},
                }
            );

            const response = await res.json();
            console.log(response.user);

            if(response.detail) throw response;

            return response.user;
          },
        }),
      ],
});

export { handler as GET, handler as POST};