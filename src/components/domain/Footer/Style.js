import styled from 'styled-components'
import { removeTextCursor } from 'styles/CommonStyle'

export const Footer = styled.footer`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.darkGray};
	${removeTextCursor};
`

export const FooterInner = styled.div`
	max-width: ${({ theme }) => theme.breakPoint.tablet};
	padding: 50px 30px;
	margin: 0 auto;
	text-align: center;
	color: ${({ theme }) => theme.colors.white};

	p {
		font-size: 12px;
		font-weight: 300;
		line-height: 1.4;
	}
`

export const IconContainer = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: ${({ theme }) => `${theme.base.padding}px`};
	margin-bottom: ${({ theme }) => `${theme.base.padding}px`};

	li {
		padding: 3px;
		font-size: 18px;
		border-radius: 20px;
		border: 1px solid ${({ theme }) => theme.colors.white};
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
`
