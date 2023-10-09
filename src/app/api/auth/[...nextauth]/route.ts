import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/github";

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
        }),
    ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };