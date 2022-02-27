import { FaGithub, FaStar } from 'react-icons/fa'
import { kkukka, nutrition, web1, web2, grid, shoppingmall, todolist } from 'assets/images'

export const portfolioInfo = [
	{
		title: '모바일 웹 클론',
		vidSrc: kkukka,
		icons: [
			{
				link: 'https://github.com/suyeon-hong/3week_ncnc',
				name: '코드보기',
				IconName: FaGithub,
			},
			{
				link: 'https://3week-ncnc.vercel.app/',
				name: '사이트보기',
				IconName: FaStar,
			},
		],
		text: [
			'HTML / styled-components / nextJs 사용',
			'4인 팀으로 진행된 팀 협업 프로젝트',
			'Items 페이지 구현',
			'CategoryList 재사용가능한 컴포넌트 구현',
			'OptionBox 컴포넌트, 모달기능, warning데이터 내용 분리 및 수정하는 기능 구현',
			'반응형 구현',
		],
	},
	{
		title: '영양제 검색 사이트',
		vidSrc: nutrition,
		icons: [
			{
				link: 'https://github.com/suyeon-hong/3week_SearchFilter',
				name: '코드보기',
				IconName: FaGithub,
			},
			{
				link: 'https://wanted-team2.netlify.app/',
				name: '사이트보기',
				IconName: FaStar,
			},
		],
		text: [
			'HTML / styled-components / nextJs 사용',
			'3인 팀으로 진행된 팀 협업 프로젝트',
			'TagList, Tag 컴포넌트 - 토글기능 구현',
			'Input, ResetBtn 컴포넌트 구현',
			'Main 컴포넌트에 domain 컴포넌트 병합 및 UI 수정',
			'반응형 구현',
		],
	},
	{
		title: '기업형 웹사이트',
		imgSrc: web1,
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
			'반응형 구현',
		],
	},
	{
		title: '기업형 웹사이트',
		imgSrc: web2,
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
			'반응형 구현',
		],
	},
	{
		title: 'Grid 디자인 사이트',
		imgSrc: grid,
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
			'반응형 구현',
		],
	},
	{
		title: 'To Do List',
		vidSrc: todolist,
		icons: [
			{
				link: 'https://github.com/suyeon-hong/todolist_ts',
				name: '코드보기',
				IconName: FaGithub,
			},
		],
		text: [
			'HTML / CSS / ReactTs 사용',
			'TypeScript 기반으로 제작된 투두리스트',
			'localStrage를 이용해 새로고침 시에도 리스트 저장',
			'반응형 구현',
		],
	},
	{
		title: '온라인 쇼핑몰',
		vidSrc: shoppingmall,
		icons: [
			{
				link: 'https://github.com/suyeon-hong/shoppingmall',
				name: '코드보기',
				IconName: FaGithub,
			},
		],
		text: [
			'HTML / CSS / JavaScript 사용',
			'Javascript 기반으로 제작된 온라인 쇼핑몰',
			'카테고리 필터링 기능 구현',
			'반응형 구현',
		],
	},
]
