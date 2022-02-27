import React from 'react'
import PropTypes from 'prop-types'
import * as S from './Style'
import { TextWithCheck, IconBox } from 'components/base'

ProfileBox.propTypes = {
	profileInfo: PropTypes.object.isRequired,
}

export default function ProfileBox({ profileInfo }) {
	const { icons, text } = profileInfo

	return (
		<S.ProfileBox>
			<S.ImgBox />
			<div>
				<IconBox icons={icons} />
				{text && text.map((el, index) => <TextWithCheck key={index} children={el} />)}
			</div>
		</S.ProfileBox>
	)
}
