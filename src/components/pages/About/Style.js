import styled from 'styled-components'
import { pageWrapper, pageInner } from 'styles/CommonStyle'

export const PageWrapper = styled.main`
	${pageWrapper};
`

export const PageInner = styled.div`
	${pageInner};
`

export const ProfileBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	gap: ${({ theme }) => `${theme.base.padding * 10}px`};
`

export const ImgBox = styled.div`
	width: 300px;
	height: 300px;
	background: #efefef;
	border-radius: 50%;
	overflow: hidden;
	box-shadow: -2px 2px 20px rgba(0, 0, 0, 0.15);

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`
