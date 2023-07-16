import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Signin from '@/components/Signin';
import { getServerSession } from 'next-auth';
import { getProviders } from 'next-auth/react';
import React from 'react';

type Props = {
	searchParams: { callbackUrl: string };
};
export default async function SignInPage({ searchParams: { callbackUrl } }: Props) {
	const session = await getServerSession(authOptions);
	if (session) {
		console.log(session);
	}
	const providers = (await getProviders()) ?? {};

	return (
		<section className='flex h-full px-60 flex-col gap-10 justify-center'>
			<h2 className='text-3xl font-bold text-center mb-10'>간편 로그인</h2>
			<Signin providers={providers} callbackUrl={callbackUrl ?? '/'} />
		</section>
	);
}
