import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';

const authOptions = {
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
	page: {
		signIn: '/auth/signin',
	},
};

const handler = NextAuth(authOptions);

export { authOptions, handler as GET, handler as POST };
