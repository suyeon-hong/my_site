import styled from 'styled-components'

export const ProfileBox = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: ${({ theme }) => `${theme.base.padding * 10}px`};

	@media ${({ theme }) => theme.device.mobile} {
		flex-direction: column;
	}
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
