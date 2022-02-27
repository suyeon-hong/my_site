import styled, { keyframes } from 'styled-components'

export const Titile = styled.h2`
	display: inline-block;
	margin-bottom: ${({ theme }) => `${theme.base.padding * 4}px`};
	position: relative;

	&::before {
		content: '';
		display: block;
		width: 105%;
		height: 12px;
		background: ${({ theme }) => theme.colors.lightGray};
		position: absolute;
		left: -2px;
		bottom: -5px;
	}
	span {
		font-size: 20px;
		position: relative;
		z-index: 1;
	}
`

const scroll = keyframes`
	0% {
		transform: translateY(0%);
	}
	50%{
		transform: translateY(-50%);
	}
	100% {
		transform: translateY(0%);
	}
`

export const ImgBox = styled.div`
	width: 300px;
	height: 500px;
	flex: 0 0 auto;
	overflow: hidden;

	img,
	video {
		width: 100%;
		object-fit: contain;
	}
	video {
		height: 100%;
	}

	@media ${({ theme }) => theme.device.mobile} {
		width: 100%;
		height: 300px;
	}
`
export const ArticleBox = styled.article`
	display: flex;
	gap: ${({ theme }) => `${theme.base.padding * 5}px`};
	margin-bottom: ${({ theme }) => `${theme.base.padding * 10}px`};
	padding: ${({ theme }) => `${theme.base.padding * 3}px`};
	border: 1px solid #eee;
	box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.05);
	transition: 0.6s ease;

	&:hover {
		box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.15);
	}
	&:hover ${ImgBox} {
		img {
			animation: ${scroll} 5s ease;
		}
	}

	@media ${({ theme }) => theme.device.mobile} {
		flex-direction: column;
		gap: ${({ theme }) => `${theme.base.padding * 2}px`};
	}
`

export const ContentBox = styled.div`
	padding-top: ${({ theme }) => `${theme.base.padding * 3}px`};
`
