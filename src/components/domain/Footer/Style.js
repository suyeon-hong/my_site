import styled from 'styled-components'

export const Footer = styled.footer`
	width: 100%;
	height: 120px;
	background-color: ${({ theme }) => theme.colors.darkGray};
`

export const FooterInner = styled.div`
	max-width: ${({ theme }) => theme.breakPoint.tablet};
	height: 100%;
	margin: 0 auto;
	text-align: center;
	color: ${({ theme }) => theme.colors.white};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: ${({ theme }) => `${theme.base.padding}px`};

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
