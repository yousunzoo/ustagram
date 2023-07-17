import { ReactNode } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
	desktop: {
		breakpoint: { max: 4000, min: 786 },
		items: 8,
	},
	mobile: {
		breakpoint: { max: 786, min: 0 },
		items: 6,
	},
};

export default function ScrollableBar({ children }: { children: ReactNode }) {
	return (
		<Carousel containerClass='flex gap-4 md:gap-2 w-full' responsive={responsive}>
			{children}
		</Carousel>
	);
}
