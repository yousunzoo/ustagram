'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import HomeIcon from '../ui/icons/HomeIcon';
import HomeActiveIcon from '../ui/icons/HomeActiveIcon';
import SearchIcon from '../ui/icons/SearchIcon';
import SearchActiveIcon from '../ui/icons/SearchActiveIcon';
import AddIcon from '../ui/icons/AddIcon';
import AddActiveIcon from '../ui/icons/AddActiveIcon';
import NavbarLi from './NavbarLi';
import ColorButton from '../ui/ColorButton';
import Avartar from '../Avartar';
import { usePathname } from 'next/navigation';

const menus = [
	{
		icon: <HomeIcon />,
		icon_active: <HomeActiveIcon />,
		title: '홈',
		href: '/',
	},
	{ icon: <SearchIcon />, icon_active: <SearchActiveIcon />, title: '검색', href: '/search' },
	{ icon: <AddIcon />, icon_active: <AddActiveIcon />, title: '만들기', href: '/write' },
];
function Navbar() {
	const { data: session } = useSession();
	const pathname = usePathname();
	const user = session?.user;

	return (
		<div className='sticky top-0 w-[244px] h-full border-r-[1px] z-10 border-gray-300 py-5 px-3'>
			<div className='w-full h-[73px] py-4 px-3 mb-5'>
				<Link href='/' className='block relative w-full h-full text-2xl font-bold'>
					UStagram
				</Link>
			</div>
			<nav>
				<ul>
					{menus.map((item) => (
						<NavbarLi key={item.title} item={item} pathname={pathname} />
					))}
					{user && (
						<li className='mb-3'>
							<Link
								className='p-3 flex items-center gap-4 hover:bg-gray-100 transition ease-in-out duration-200 rounded-md'
								href={`/user/${user.username}`}>
								<Avartar image={user.image} />
								<span className={pathname === `/user/${user.username}` ? 'font-bold' : ''}>프로필</span>
							</Link>
						</li>
					)}
					<li>
						{session ? (
							<ColorButton size='small' text='로그아웃' handleClick={() => signOut()} />
						) : (
							<ColorButton size='small' text='로그인' handleClick={() => signIn()} />
						)}
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;
