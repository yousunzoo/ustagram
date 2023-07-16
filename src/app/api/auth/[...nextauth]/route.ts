import { isDev } from 'sanity';
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';

const authOptions: NextAuthOptions = {
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_OAUTH_ID || '',
			clientSecret: process.env.GITHUB_OAUTH_SECRET || '',
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_OAUTH_ID || '',
			clientSecret: process.env.GOOGLE_OAUTH_SECRET || '',
		}),
	],
	callbacks: {
		async session({ session }) {
			const user = session?.user;
			if (user) {
				session.user = {
					...user,
					username: user.email?.split('@')[0] || '',
				};
			}
			return session;
		},
	},
	pages: {
		signIn: '/auth/signin',
	},
};

const handler = NextAuth(authOptions);

export { authOptions, handler as GET, handler as POST };
