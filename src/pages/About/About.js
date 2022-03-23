import * as S from './Style'
import { Title } from 'components/base'
import { ProfileBox } from 'components/domain'
import { profileInfo } from 'data.js'

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
