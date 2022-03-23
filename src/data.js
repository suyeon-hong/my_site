import { FaGithub, FaStar, FaPenNib, FaGithubAlt } from 'react-icons/fa'
import { kkukka, nutrition, web1, web2, grid, shoppingmall, todolist } from 'assets/images'

export const profileInfo = {
	icons: [
		{
			link: 'https://github.com/suyeon-hong',
			name: 'github',
			IconName: FaGithubAlt,
		},
		{
			link: 'https://velog.io/@suyeon-hong',
			name: 'blog',
			IconName: FaPenNib,
		},
	],
	text: [
		'성실하고 꾸준합니다.',
		'균형있는 삶을 지향합니다.',
		'계획하고 분석하는 것을 좋아합니다.',
		'맡은 일에 최선을 다하는 책임감이 있습니다.',
		'새로운 것을 배우고 성장하는 것을 좋아합니다.',
		'남에게는 관대하지만 스스로에겐 엄격한 편입니다.',
	],
}

export const portfolioInfo = [
	{
		title: '바닐라 자바스크립트로 구현한 기업형 웹사이트',
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
		title: '스크롤 모션을 적용한 기업형 웹사이트',
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
		title: 'Isotope을 활용한 Grid 디자인 사이트',
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
			'Isotope API를 활용',
			'이미지 호버시 svg이미지가 그려지는 모션효과 적용.',
			'스크립트를 이용하여 이미지 클릭시 팝업창 생성, 닫기버튼 클릭시 삭제되도록 구현',
			'반응형 구현',
		],
	},
	{
		title: 'Nest.js를 이용한 모바일 기프티콘 판매 사이트',
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
		title: 'filtering 기능을 이용한 영양제 검색 사이트',
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
		title: 'TypeScript 기반으로 제작한 To Do List',
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
			'localStrage를 이용해 새로고침 시에도 리스트 저장',
			'반응형 구현',
		],
	},
	{
		title: '바닐라 자바스크립트로 구현한 온라인 쇼핑몰',
		vidSrc: shoppingmall,
		icons: [
			{
				link: 'https://github.com/suyeon-hong/shoppingmall',
				name: '코드보기',
				IconName: FaGithub,
			},
		],
		text: ['HTML / CSS / JavaScript 사용', '카테고리 필터링 기능 구현', '반응형 구현'],
	},
]
