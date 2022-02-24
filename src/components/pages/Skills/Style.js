import styled from 'styled-components'
import { pageWrapper, pageInner } from 'styles/CommonStyle'

export const PageWrapper = styled.main`
	${pageWrapper}
`

export const PageInner = styled.div`
	${pageInner}
`

export const ContentBox = styled.div`
	text-align: center;
`

export const IconBox = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: ${({ theme }) => `${theme.base.padding * 3}px`};
	gap: ${({ theme }) => `${theme.base.padding}px`};

	img {
		width: 100px;
		height: 100px;
		object-fit: contain;
		transition: 0.4s ease;

		&:hover {
			transform: scale(1.05) translateY(-5px);
		}
	}
`
