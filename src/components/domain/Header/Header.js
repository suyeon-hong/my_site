import * as S from './Style'
import { GNB } from 'components/base'
import { NavLink } from 'react-router-dom'

const MENU = ['ABOUT', 'SKILLS', 'PORTFOLIO', 'CONTACT']

export default function Header() {
	return (
		<S.Header>
			<S.HeaderInner>
				<S.Logo>
					<NavLink to="/" activeclassname="active">
						HONG <S.Br />
						SUYEON
					</NavLink>
				</S.Logo>
				<GNB menuList={MENU} />
			</S.HeaderInner>
		</S.Header>
	)
}
