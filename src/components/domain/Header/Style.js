import styled from 'styled-components'
import { removeTextCursor } from 'styles/CommonStyle'

export const Header = styled.header`
	width: 100%;
	height: 80px;
	background-color: ${({ theme }) => theme.colors.white};
	${removeTextCursor};

	@media ${({ theme }) => theme.device.mobile} {
		height: auto;
	}
`

export const HeaderInner = styled.div`
	max-width: ${({ theme }) => theme.breakPoint.tablet};
	height: 100%;
	margin: 0 auto;
	padding: 0 30px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media ${({ theme }) => theme.device.mobile} {
		padding: 20px;
	}
`

export const Title = styled.h1`
	font-size: 22px;
	font-weight: 700;
`

export const Br = styled.br`
	display: none;

	@media ${({ theme }) => theme.device.mobile} {
		display: block;
	}
`
