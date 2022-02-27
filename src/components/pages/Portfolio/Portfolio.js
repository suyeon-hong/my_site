import React from 'react'
import { Title } from 'components/base'
import { ProjectBox } from 'components/domain'
import * as S from './Style'
import { FaGithub, FaStar } from 'react-icons/fa'
import { project1, project2, project3, todolist } from 'assets/images'

const portfolioInfo = [
	{
		title: '반응형 웹',
		imgSrc: project1,
		icons: [
			{
				link: 'https://github.com/suyeon-hong/portfolio_JS',
				name: '코드보기',
				IconName: FaGithub,
			},
			{
				link: 'https://suyeon-hong.github.io/portfolio_JS/',
				name: '사이트보기',
				IconName: FaStar,
			},
		],
		text: [
			'HTML / SCSS / JavaScript 사용',
			'J-Query를 이용해 작업했던 기존의 사이트를 JavaScript로 재구현',
			'웹표준, 웹접근성에 맞추어 제작한 기업형 사이트',
			'메인페이지 외에 ABOUTUS, COMMUNITY, YOUTUBE, GALLERY, LOCATION, JOIN, 6개의 서브페이지 포함',
			'swiper, youtube, flickr, kakaomap API 활용',
			'cookie data를 이용한 팝업창 제공',
		],
	},
	{
		title: 'project2',
		imgSrc: project2,
		icons: [
			{
				link: 'https://github.com/suyeon-hong/portfolio2',
				name: '코드보기',
				IconName: FaGithub,
			},
			{
				link: 'https://suyeon-hong.github.io/portfolio2/',
				name: '사이트보기',
				IconName: FaStar,
			},
		],
		text: [
			'HTML / SCSS / JavaScript 사용',
			'웹표준, 웹접근성에 맞추어 제작한 기업형 사이트',
			'메인페이지 외에 ABOUTUS, COMMUNITY, YOUTUBE, GALLERY, LOCATION, JOIN, 6개의 서브페이지 포함',
			'youtube, flickr, isotope, kakaomap API 활용',
			'cookie data를 이용한 팝업창 제공',
		],
	},
	{
		title: 'project3',
		imgSrc: project3,
		icons: [
			{
				link: 'https://github.com/suyeon-hong/grid',
				name: '코드보기',
				IconName: FaGithub,
			},
			{
				link: 'https://suyeon-hong.github.io/grid/',
				name: '사이트보기',
				IconName: FaStar,
			},
		],
		text: [
			'HTML / SCSS / JavaScript 사용',
			'Isotope API를 활용해 만든 그리드디자인 사이트',
			'이미지 호버시 svg이미지가 그려지는 모션효과 적용.',
			'스크립트를 이용하여 이미지 클릭시 팝업창 생성, 닫기버튼 클릭시 삭제되도록 구현',
		],
	},
	{
		title: 'To Do List',
		vidSrc: todolist,
		icons: [
			{
				link: 'https://github.com/suyeon-hong/grid',
				name: '코드보기',
				IconName: FaGithub,
			},
			{
				link: 'https://suyeon-hong.github.io/grid/',
				name: '사이트보기',
				IconName: FaStar,
			},
		],
		text: [
			'HTML / CSS / React / TypeScript 사용',
			'TypeScript를 기반으로 제작된 투두리스트',
			'localStrage를 이용해 새로고침 시에도 리스트 저장',
		],
	},
]

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
