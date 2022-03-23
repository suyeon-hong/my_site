import React from 'react'
import { Title } from 'components/base'
import { ProjectBox } from 'components/domain'
import * as S from './Style'

export default function Portfolio() {
	return (
		<S.PageWrapper>
			<S.PageInner>
				<Title>Portfolio.</Title>
				<ProjectBox />
			</S.PageInner>
		</S.PageWrapper>
	)
}
