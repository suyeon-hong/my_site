import * as S from './Style'
import { TextWithCheck, Title } from 'components/base'
import { react, jquery, js, html, css, sass, ts } from 'assets/images'

export default function Skills() {
	return (
		<S.PageWrapper>
			<S.PageInner>
				<Title>Skills.</Title>
				<S.ContentBox>
					<S.IconBox>
						<img src={react} alt="react_icon" />
						<img src={ts} alt="typescript_icon" />
						<img src={js} alt="javascript_icon" />
						<img src={jquery} alt="jquery_icon" />
						<img src={html} alt="html_icon" />
						<img src={css} alt="css_icon" />
						<img src={sass} alt="sass_icon" />
					</S.IconBox>
					<div>
						<TextWithCheck>웹표준, 웹접근성을 고려한 시멘틱 작업 가능</TextWithCheck>
						<TextWithCheck>반응형 웹 사이트 제작 가능</TextWithCheck>
						<TextWithCheck>API 데이터 작업 가능</TextWithCheck>
						<TextWithCheck>React 활용 웹 사이트 제작 가능</TextWithCheck>
						<TextWithCheck>크로스브라우징</TextWithCheck>
					</div>
				</S.ContentBox>
			</S.PageInner>
		</S.PageWrapper>
	)
}
