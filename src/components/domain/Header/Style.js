import styled from 'styled-components'
import { pageInner } from 'styles/CommonStyle'

export const Header = styled.header`
	width: 100%;
	height: 80px;
	background-color: ${({ theme }) => theme.colors.white};

	@media ${({ theme }) => theme.device.tablet} {
		height: auto;
	}
`

export const HeaderInner = styled.div`
	${pageInner};
	padding: 0 30px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media ${({ theme }) => theme.device.tablet} {
		padding: 20px;
	}
`

export const Logo = styled.h1`
	font-size: 22px;
	font-weight: 700;
	color: ${({ theme }) => theme.colors.darkGray};

	.active {
		color: ${({ theme }) => theme.colors.point};
	}
`

export const Br = styled.br`
	display: none;

	@media ${({ theme }) => theme.device.tablet} {
		display: block;
	}
`
