import * as S from './Style'
import { Title } from 'components/base'

export default function About() {
	return (
		<S.PageWrapper>
			<S.PageInner>
				<Title>About Me.</Title>
				<S.ProfileBox>
					<S.ImgBox src="" alt="" />
					<S.TextBox>
						<p>✔ 성실하고 꾸준합니다.</p>
						<p>✔ 새로운 것을 배우고 성장하는 것을 즐깁니다.</p>
						<p>✔ 균형있는 삶을 지향합니다.</p>
						<p>✔ 운동을 하며 스트레스를 해소합니다.</p>
						<p>✔ 달달한 디저트를 좋아합니다.</p>
						<p>✔ 커피보다 차를 선호합니다.</p>
						<p>✔ ISPJ</p>
					</S.TextBox>
				</S.ProfileBox>
			</S.PageInner>
		</S.PageWrapper>
	)
}
