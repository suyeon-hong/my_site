import React from 'react'
import { portfolioInfo } from 'data.js'
import { Project } from 'components/base'

export default function ProjectBox() {
	return (
		<section>
			{portfolioInfo &&
				portfolioInfo.map((projectInfo, index) => (
					<Project key={index} projectInfo={projectInfo} />
				))}
		</section>
	)
}
