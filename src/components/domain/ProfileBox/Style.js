import styled from 'styled-components'

export const ProfileBox = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
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

export const IconBox = styled.div`
	display: flex;
	margin-bottom: ${({ theme }) => `${theme.base.padding * 2}px`};

	a {
		font-size: 18px;
		color: ${({ theme }) => theme.colors.darkGray};
		margin-right: ${({ theme }) => `${theme.base.padding * 2}px`};
		transition: 0.4s ease;

		svg {
			font-size: 24px;
			vertical-align: sub;
		}
		span {
			display: inline-block;
			margin-left: ${({ theme }) => `${theme.base.padding / 2}px`};
		}
		&:hover {
			transform: translateY(-5px);
			color: ${({ theme }) => theme.colors.primary};
		}
	}
`
