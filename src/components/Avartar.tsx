type Props = { image?: string | null; size?: 'small' | 'normal'; highlight?: boolean };

export default function Avartar({ image, size = 'normal', highlight = false }: Props) {
	return (
		<div className={getContainerStyle(size, highlight)}>
			{/*eslint-disable-next-line @next/next/no-img-element*/}
			<img
				alt='프로필'
				className={`rounded-full object-cover ${getImageSizeStyle(size, highlight)}`}
				src={image ?? undefined}
				referrerPolicy='no-referrer'
			/>
		</div>
	);
}

function getContainerStyle(size: string, highlight: boolean): string {
	const baseStyle = 'rounded-full flex justify-center items-center';
	const highlightStyle = highlight ? ' bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300' : '';
	const sizeStyle = size === 'small' ? 'w-8 h-8' : 'w-16 h-16';
	return `${baseStyle} ${highlightStyle} ${sizeStyle}`;
}

function getImageSizeStyle(size: string, highlight: boolean): string {
	const sizeStyle =
		size === 'small'
			? 'w-[34px] h-[34px] p-[0.1rem]'
			: highlight
			? 'w-[60px] h-[60px] p-[0.16rem]'
			: 'w-[60px] h-[60px]';
	const highlightStyle = highlight ? 'bg-white p-[0.1rem]' : '';
	return `${sizeStyle} ${highlightStyle}`;
}
