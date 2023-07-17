'use client';
import { DetailUser } from '@/model/user';
import Link from 'next/link';
import { PropagateLoader } from 'react-spinners';
import useSWR from 'swr';
import Avartar from './Avartar';

export default function Storybar() {
	const { data, isLoading: loading, error } = useSWR<DetailUser>('/api/me');
	const users = data?.following && [...data.following, ...data.following, ...data.following];

	return (
		<section className='w-full flex justify-center items-center mb-4 min-h-[90px] overflow-x-auto'>
			{loading ? (
				<PropagateLoader size={8} color='red' />
			) : (
				(!users || users.length === 0) && <p>팔로우하는 사람이 없습니다.</p>
			)}
			{users && users.length > 0 && (
				<ul className='flex gap-4 w-full'>
					{users.map(({ image, username }) => (
						<li key={username}>
							<Link href={`/user/${username}`} className='flex flex-col items-center w-16'>
								<Avartar image={image} highlight />
								<p className='w-full text-xs mt-1 text-center text-ellipsis overflow-hidden text-neutral-500'>
									{username}
								</p>
							</Link>
						</li>
					))}
				</ul>
			)}
		</section>
	);
}
