import React from 'react'
import * as S from './Style'

export default function IconBox({ icons }) {
	return (
		<S.IconBox>
			{icons &&
				icons.map((icon, index) => (
					<a key={index} href={icon.link} target="_blank" rel="noreferrer">
						<icon.IconName />
						<span>{icon.name}</span>
					</a>
				))}
		</S.IconBox>
	)
}
