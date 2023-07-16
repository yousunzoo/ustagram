type Props = { image?: string | null };

export default function Avartar({ image }: Props) {
	return (
		<div className='w-8 h-8 rounded-full bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300'>
			{/*eslint-disable-next-line @next/next/no-img-element*/}
			<img alt='프로필' className='rounded-full p-[0.1rem]' src={image ?? undefined} referrerPolicy='no-referrer' />
		</div>
	);
}
