import NextAuth from "next-auth";
import GoogLeProvider from "next-auth/providers/google"

const handler = NextAuth({
    providers: [
        GoogLeProvider({
            clientId: process.env.CLIENT_ID!,
            clientSecret: process.env.CLIENT_SECRET!,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
