import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import * as S from './Style'

GNB.propTypes = {
	menuList: PropTypes.array.isRequired,
}

export default function GNB({ menuList }) {
	return (
		<S.MenuContainer>
			{menuList &&
				menuList.map((name, index) => (
					<S.Menu key={index}>
						<NavLink activeclassname="active" to={`/${name.toLowerCase()}`}>
							{name}
						</NavLink>
					</S.Menu>
				))}
		</S.MenuContainer>
	)
}
