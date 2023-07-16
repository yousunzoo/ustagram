type Props = { image?: string | null; size?: 'small' | 'normal'; highlight?: boolean };

export default function Avartar({ image, size = 'normal', highlight = false }: Props) {
	return (
		<div className={getContainerStyle(size, highlight)}>
			{/*eslint-disable-next-line @next/next/no-img-element*/}
			<img
				alt='프로필'
				className={`bg-white rounded-full p-[0.1rem] ${getImageSizeStyle(size)}`}
				src={image ?? undefined}
				referrerPolicy='no-referrer'
			/>
		</div>
	);
}

function getContainerStyle(size: string, highlight: boolean): string {
	const baseStyle = 'rounded-full flex justify-center items-center';
	const highlightStyle = highlight ? 'bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300' : '';
	const sizeStyle = size === 'small' ? 'w-8 h-8' : 'w-16 h-16';
	return `${baseStyle} ${highlightStyle} ${sizeStyle}`;
}

function getImageSizeStyle(size: string): string {
	return size === 'small' ? 'w-[34px] h-[34px p-[0.1rem]' : 'w-16 h-16 p-[0.2rem]';
}
