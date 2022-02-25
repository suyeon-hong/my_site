import React from 'react'
import PropTypes from 'prop-types'
import * as S from './Style'
import { TextWithCheck } from 'components/base'
import { FaPenNib, FaGithubAlt } from 'react-icons/fa'

ProfileBox.propTypes = {
	profileInfo: PropTypes.object.isRequired,
}

export default function ProfileBox({ profileInfo }) {
	const { links, desc } = profileInfo

	return (
		<S.ProfileBox>
			<S.ImgBox />
			<div>
				<S.IconBox>
					<a href={links.github} target="_blank" rel="noreferrer">
						<FaGithubAlt />
						<span>깃허브 프로필</span>
					</a>
					<a href={links.blog} target="_blank" rel="noreferrer">
						<FaPenNib />
						<span>블로그</span>
					</a>
				</S.IconBox>
				{desc && React.Children.toArray(desc.map(text => <TextWithCheck children={text} />))}
			</div>
		</S.ProfileBox>
	)
}
