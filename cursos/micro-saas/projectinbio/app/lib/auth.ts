import NextAuth from "next-auth"
import { FirestoreAdapter } from "@auth/firebase-adapter"
import { firebaseAdmin } from "./firebase"
import Google from "next-auth/providers/google";


export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: FirestoreAdapter({
        credential: firebaseAdmin,
    }),
    providers: [Google({
        clientId: process.env.AUTH_GOOGLE_ID!,
        clientSecret: process.env.AUTH_GOOGLE_SECRET!,
      })],
})