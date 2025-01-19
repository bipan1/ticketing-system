import type { DefaultSession } from 'next-auth';
import type { JWT } from 'next-auth/jwt'; // eslint-disable-line

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name: string;
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    idToken?: string;
  }
}
