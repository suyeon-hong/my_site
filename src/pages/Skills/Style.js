import styled from 'styled-components'
import { pageWrapper, pageInner } from 'styles/CommonStyle'

export const PageWrapper = styled.main`
	${pageWrapper}
`

export const PageInner = styled.div`
	${pageInner}
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => `${theme.base.padding * 10}px`};

	@media ${({ theme }) => theme.device.mobile} {
		gap: ${({ theme }) => `${theme.base.padding * 5}px`};
	}
`

export const ContentBox = styled.div`
	text-align: center;
`

export const IconBox = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: ${({ theme }) => `${theme.base.padding * 5}px`};
	gap: ${({ theme }) => `${theme.base.padding}px`};

	img {
		width: 100px;
		height: 100px;
		object-fit: contain;
		transition: 0.4s ease;

		&:hover {
			transform: scale(1.05) translateY(-5px);
		}
		@media ${({ theme }) => theme.device.tablet} {
			width: 10vw;
			height: 60px;
		}
	}
	@media ${({ theme }) => theme.device.mobile} {
		margin-bottom: ${({ theme }) => `${theme.base.padding * 3}px`};
	}
`
