import React from 'react'
import { Title } from 'components/base'
import { ProjectBox } from 'components/domain'
import * as S from './Style'
import { FaGithub, FaStar, FaFileDownload } from 'react-icons/fa'
import { project1, project2, project3 } from 'assets/images'

const portfolioInfo = [
	{
		title: 'project1',
		imgSrc: project1,
		icons: [
			{
				link: 'https://github.com/suyeon-hong/portfolio_jQ',
				name: '코드보기',
				IconName: FaGithub,
			},
			{
				link: 'https://suyeon-hong.github.io/portfolio_jQ/',
				name: '사이트보기',
				IconName: FaStar,
			},
			{
				link: '',
				name: '가이드파일',
				IconName: FaFileDownload,
			},
		],
		text: [
			'HTML / SCSS / J-Query 사용',
			'웹표준, 웹접근성에 맞추어 제작한 기업형 사이트 입니다.',
			'메인페이지 외에 ABOUTUS, COMMUNITY, YOUTUBE, GALLERY, LOCATION, JOIN, 6개의 서브페이지를 포함하고 있습니다.',
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
			'웹표준, 웹접근성에 맞추어 제작한 기업형 사이트 입니다.',
			'메인페이지 외에 ABOUTUS, COMMUNITY, YOUTUBE, GALLERY, LOCATION, JOIN, 6개의 서브페이지를 포함하고 있습니다.',
			'youtube, flickr, isotope, kakaomap API 활용',
		],
	},
	{
		title: '그리드 디자인',
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
			'Isotope API를 활용해 만든 그리드디자인 사이트 입니다.',
			'이미지 호버시 svg이미지가 그려지는 모션효과를 주었고, 스크립트를 이용하여 이미지 클릭시 팝업창이 생성, 닫기버튼 클릭시 삭제되도록 구현하였습니다.',
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
						React.Children.toArray(
							portfolioInfo.map(projectInfo => <ProjectBox projectInfo={projectInfo} />),
						)}
				</section>
			</S.PageInner>
		</S.PageWrapper>
	)
}
