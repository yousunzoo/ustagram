type Props = {
	text: string;
	handleClick: () => void;
	size?: 'small' | 'big';
};

function ColorButton({ text, handleClick, size = 'small' }: Props) {
	return (
		<div
			className={`rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 ${
				size === 'big' ? 'p-[0.3rem]' : 'p-[0.15rem]'
			}`}>
			<button
				onClick={handleClick}
				className={`w-full bg-white rounded-sm text-base p-[0.3rem] hover:opacity-90 transition-opacity ${
					size === 'big' ? 'p-4 text-2xl' : 'p-[0.3rem] text-base'
				}`}>
				{text}
			</button>
		</div>
	);
}

export default ColorButton;
