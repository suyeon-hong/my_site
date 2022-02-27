import * as S from './Style'
import { Title } from 'components/base'
import { ProfileBox } from 'components/domain'
import { FaPenNib, FaGithubAlt } from 'react-icons/fa'

const profileInfo = {
	icons: [
		{
			link: 'https://github.com/suyeon-hong',
			name: 'github',
			IconName: FaGithubAlt,
		},
		{
			link: 'https://velog.io/@suyeon-hong',
			name: 'blog',
			IconName: FaPenNib,
		},
	],
	text: [
		'성실하고 꾸준합니다.',
		'균형있는 삶을 지향합니다.',
		'계획하고 분석하는 것을 좋아합니다.',
		'맡은 일에 최선을 다하는 책임감이 있습니다.',
		'새로운 것을 배우고 성장하는 것을 좋아합니다.',
		'남에게는 관대하지만 스스로에겐 엄격한 편입니다.',
	],
}

export default function About() {
	return (
		<S.PageWrapper>
			<S.PageInner>
				<Title>About Me.</Title>
				<ProfileBox profileInfo={profileInfo} />
			</S.PageInner>
		</S.PageWrapper>
	)
}
