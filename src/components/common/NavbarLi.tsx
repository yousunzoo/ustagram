import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';

interface IItem {
	href: string;
	icon_active: ReactNode;
	icon: ReactNode;
	title: string;
}
function NavbarLi({ item, pathname }: { item: IItem; pathname: string }) {
	return (
		<li className='mb-2'>
			<Link
				href={item.href}
				className='p-3 flex items-center gap-4 hover:bg-gray-100 transition ease-in-out duration-200 rounded-md'>
				{pathname === item.href ? item.icon_active : item.icon}
				<span className={pathname === item.href ? 'font-bold' : ''}>{item.title}</span>
			</Link>
		</li>
	);
}

export default NavbarLi;
