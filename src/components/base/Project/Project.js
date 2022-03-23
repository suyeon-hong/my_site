import React from 'react'
import PropTypes from 'prop-types'
import * as S from './Style'
import { TextWithCheck } from 'components/base'
import { IconBox } from 'components/base'

Project.propTypes = {
	projectInfo: PropTypes.object.isRequired,
}

export default function Project({ projectInfo }) {
	const { title, imgSrc, vidSrc, icons, text } = projectInfo

	const handelMouseEnter = e => {
		const target = e.target.querySelector('video')
		target !== null && target.play()
	}

	const handelMouseLeave = e => {
		const target = e.target.querySelector('video')

		if (target !== null) {
			target.pause()
			target.load()
		}
	}

	return (
		<S.ArticleBox onMouseEnter={handelMouseEnter} onMouseLeave={handelMouseLeave}>
			<S.ImgBox>
				{imgSrc ? <img src={imgSrc} alt={title} /> : <video src={vidSrc} alt={title} muted />}
			</S.ImgBox>
			<S.ContentBox>
				<S.Titile>
					<span>{title}</span>
				</S.Titile>
				<IconBox icons={icons} />
				{text && text.map((el, index) => <TextWithCheck key={index} children={el} size={18} />)}
			</S.ContentBox>
		</S.ArticleBox>
	)
}
