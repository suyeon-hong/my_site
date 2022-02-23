import React from 'react'
import { NavLink } from 'react-router-dom'
import * as S from './Style'

const MENU = ['ABOUT', 'SKILLS', 'PORTFOLIO', 'CONTACT']

export default function GNB() {
	return (
		<S.MenuContainer>
			{MENU &&
				React.Children.toArray(
					MENU.map(name => (
						<S.Menu>
							<NavLink activeclassname="active" to={`/${name.toLowerCase()}`}>
								{name}
							</NavLink>
						</S.Menu>
					)),
				)}
		</S.MenuContainer>
	)
}
