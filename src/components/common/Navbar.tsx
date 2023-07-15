import Link from 'next/link';
import HomeIcon from '../ui/icons/HomeIcon';
import HomeActiveIcon from '../ui/icons/HomeActiveIcon';
import SearchIcon from '../ui/icons/SearchIcon';
import SearchActiveIcon from '../ui/icons/SearchActiveIcon';
import AddIcon from '../ui/icons/AddIcon';
import AddActiveIcon from '../ui/icons/AddActiveIcon';
import NavbarLi from './NavbarLi';

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
	return (
		<div className='sticky top-0 w-[244px] h-full border-r-[1px] border-gray-300 py-5 px-3'>
			<div className='w-full h-[73px] py-4 px-3 mb-5'>
				<Link href='/' className='block relative w-full h-full text-2xl font-bold'>
					UStagram
				</Link>
			</div>
			<nav>
				<ul>
					{menus.map((item) => (
						<NavbarLi key={item.title} item={item} />
					))}
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;
