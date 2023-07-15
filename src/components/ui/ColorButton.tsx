type Props = {
	text: string;
	handleClick: () => void;
};

function ColorButton({ text, handleClick }: Props) {
	return (
		<div className='rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 p-[0.15rem]'>
			<button
				onClick={handleClick}
				className='w-full bg-white rounded-sm text-base p-[0.3rem] hover:opacity-90 transition-opacity'>
				{text}
			</button>
		</div>
	);
}

export default ColorButton;
