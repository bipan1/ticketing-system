import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
// import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '../../../../lib/Prisma';
import bcrypt from 'bcryptjs';
import { exclude } from '@/lib/Helpers';

const options: NextAuthOptions = {
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID ?? '',
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
    // }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials) return null;

        try {
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
            select: {
              id: true as const,
              email: true,
              password: true,
              name: true,
              image: true,
            },
          });

          if (!user) {
            return null;
          }

          const isPasswordValid = bcrypt.compareSync(
            credentials.password,
            user.password!,
          );

          if (isPasswordValid) {
            return exclude({ ...user, id: user.id.toString() }, ['password']);
          } else {
            return null;
          }
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: 'auth/login',
  },
  session: { strategy: 'jwt', maxAge: 24 * 60 * 60 },
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.name = token.name;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
      }
      return token;
    },
  },
  useSecureCookies: false,
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 60 * 60 * 24 * 30,
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const nextAuth = NextAuth(options);
export { nextAuth as GET, nextAuth as POST };
