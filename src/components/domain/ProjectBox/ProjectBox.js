import React from 'react'
import PropTypes from 'prop-types'
import * as S from './Style'
import { TextWithCheck } from 'components/base'
import { IconBox } from 'components/base'

ProjectBox.propTypes = {
	projectInfo: PropTypes.array.isRequired,
}

export default function ProjectBox({ projectInfo }) {
	const { title, imgSrc, icons, text } = projectInfo

	return (
		<S.ArticleBox>
			<S.ImgBox>
				<img src={imgSrc} alt="" />
			</S.ImgBox>
			<S.ContentBox>
				<S.Titile>
					<span>{title}</span>
				</S.Titile>
				<IconBox icons={icons} />
				{text && React.Children.toArray(text.map(el => <TextWithCheck children={el} size={18} />))}
			</S.ContentBox>
		</S.ArticleBox>
	)
}
