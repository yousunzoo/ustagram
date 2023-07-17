import Postlist from '@/components/Postlist';
import Sidebar from '@/components/Sidebar';
import Storybar from '@/components/Storybar';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function HomePage() {
	const session = await getServerSession(authOptions);
	const user = session?.user;
	if (!user) {
		redirect('/auth/signin');
	}

	return (
		<section className='max-w-[1000px] mx-auto flex flex-col md:flex-row '>
			<div className='w-full basis-2/3 max-w-[624px] pt-16'>
				<Storybar />
				<Postlist />
			</div>
			<Sidebar user={user} />
		</section>
	);
}
