import React from 'react'
import { Title } from 'components/base'
import { ProjectBox } from 'components/domain'
import * as S from './Style'
import { portfolioInfo } from './data.js'

export default function Portfolio() {
	return (
		<S.PageWrapper>
			<S.PageInner>
				<Title>Portfolio.</Title>
				<section>
					{portfolioInfo &&
						portfolioInfo.map((projectInfo, index) => (
							<ProjectBox key={index} projectInfo={projectInfo} />
						))}
				</section>
			</S.PageInner>
		</S.PageWrapper>
	)
}
