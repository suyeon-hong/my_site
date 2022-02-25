import * as S from './Style'
import { Title } from 'components/base'
import { ProfileBox } from 'components/domain'

const profileInfo = {
	links: {
		github: 'https://github.com/suyeon-hong',
		blog: 'https://velog.io/@suyeon-hong',
	},
	desc: [
		'성실하고 꾸준합니다.',
		'균형있는 삶을 지향합니다.',
		'운동을 하며 스트레스를 해소합니다.',
		'달달한 디저트를 좋아합니다.',
		'커피보다 차를 선호합니다.',
		'ISPJ',
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
