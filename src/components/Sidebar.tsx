import { User } from '@/model/user';
import Avartar from './Avartar';

type Props = {
	user: User;
};

export default function Sidebar({ user: { name, username, image } }: Props) {
	return (
		<div className='basis-1/4 pt-20'>
			<div className='flex items-center'>
				{image && <Avartar image={image} />}
				<div className='ml-4'>
					<p className='font-bold'>{username}</p>
					<p className='text-lg text-neutral-500 leading-4'>{name}</p>
				</div>
			</div>
			<p className='text-xs text-neutral-400 mt-8 break-keep'>
				소개 ・ 도움말 ・ 홍보 센터 ・ API ・ 채용 정보 ・ 개인정보처리방침 ・ 약관 ・ 위치 ・ 언어
			</p>
			<p className='font-bold text-xs mt-8 text-neutral-400 break-keep'>&copy; USTAGRAM from YOOSUNZOO</p>
		</div>
	);
}
