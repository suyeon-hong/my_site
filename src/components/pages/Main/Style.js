import styled, { keyframes } from 'styled-components'
import { figure } from 'assets/images'

export const Figure = styled.figure`
	width: 100%;
	height: calc(100vh - 80px);
	display: flex;
	justify-content: center;
	align-items: flex-start;
	position: relative;
	background: url(${figure}) no-repeat center/cover;
	padding-top: 300px;
`

const cursor = keyframes`
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
`

export const TextWrapper = styled.div`
	font-size: 20px;
	color: ${({ theme }) => theme.colors.lightGray};

	&::after {
		content: '';
		display: inline-block;
		width: 1px;
		height: 24px;
		background: ${({ theme }) => theme.colors.darkGray};
		animation: ${cursor} 0.8s infinite;
		vertical-align: sub;
		margin-left: ${({ theme }) => `${theme.base.padding / 2}px`};
	}
`
