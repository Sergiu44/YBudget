import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

const GOOGLE_CLIENT_ID = process.env.AUTH_GOOGLE_ID;
const GOOGLE_CLIENT_SECRET = process.env.AUTH_GOOGLE_SECRET;
const SECRET = process.env.SECRET;

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    Google({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        console.log(credentials);
        let user = null;

        // const pwHash = saltAndHashPassword(credentials.password)
        // user = await getUserFromDb(credentials.email, pwHash)

        // if (!user) {
        //   throw new Error("Invalida credentials");
        // }

        return {
          email: credentials.email as string,
          id: "123",
          image: "",
          name: (credentials.email as string).split("@")[0],
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile, credentials }) {
      if (!profile?.email && !credentials) throw new Error("No profile");
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
});
