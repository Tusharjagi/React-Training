import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import MongoClient from "mongodb/lib/mongo_client";
// import { PrismaAdapter } from "@next-auth/prisma-adapter"
// import { PrismaClient } from '@prisma/client'

// import { Providers } from "next-auth/providers";
// const prisma = new PrismaClient();

const uri = 'mongodb+srv://Tango:Tango828@cluster0.relfg.mongodb.net/nextauthDb?retryWrites=true&w=majority'

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

export default NextAuth({
  // adapter: PrismaAdapter(prisma),
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  database: client,
  session: {
    jwt: true,
  },
  jwt: {
    secret: 'kjfljdslflkdsjoifjl',
  },
  callbacks: {
    async jwt(token, user) {
      if(user) {
        token.id = user.id
      }
      return token;
    },
    async session(session, token) {
      session.user.id = token.id
      return session
    }
  }
});
