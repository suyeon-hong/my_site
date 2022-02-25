import * as S from './Style'
import { GNB } from 'components/base'
import { Link } from 'react-router-dom'

const MENU = ['ABOUT', 'SKILLS', 'PORTFOLIO', 'CONTACT']

export default function Header() {
	return (
		<S.Header>
			<S.HeaderInner>
				<S.Logo>
					<Link to="/">
						HONG <S.Br />
						SUYEON
					</Link>
				</S.Logo>
				<GNB menuList={MENU} />
			</S.HeaderInner>
		</S.Header>
	)
}
