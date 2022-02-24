import * as S from './Style'
import { Title, TextWithCheck } from 'components/base'

export default function About() {
	return (
		<S.PageWrapper>
			<S.PageInner>
				<Title>About Me.</Title>
				<S.ProfileBox>
					<S.ImgBox />
					<div>
						<TextWithCheck>성실하고 꾸준합니다.</TextWithCheck>
						<TextWithCheck>새로운 것을 배우고 성장하는 것을 즐깁니다.</TextWithCheck>
						<TextWithCheck>균형있는 삶을 지향합니다.</TextWithCheck>
						<TextWithCheck>운동을 하며 스트레스를 해소합니다.</TextWithCheck>
						<TextWithCheck>달달한 디저트를 좋아합니다.</TextWithCheck>
						<TextWithCheck>커피보다 차를 선호합니다.</TextWithCheck>
						<TextWithCheck>ISPJ</TextWithCheck>
					</div>
				</S.ProfileBox>
			</S.PageInner>
		</S.PageWrapper>
	)
}
