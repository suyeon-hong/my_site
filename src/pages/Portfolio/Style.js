import styled from 'styled-components'
import { pageWrapper, pageInner } from 'styles/CommonStyle'

export const PageWrapper = styled.main`
	${pageWrapper}
`

export const PageInner = styled.div`
	${pageInner}
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => `${theme.base.padding * 7}px`};
`
