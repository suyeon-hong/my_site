import styled from 'styled-components'

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
			color: ${({ theme }) => theme.colors.point};
		}
	}

	@media ${({ theme }) => theme.device.mobile} {
		margin-bottom: ${({ theme }) => `${theme.base.padding}px`};

		a {
			font-size: 14px;

			svg {
				font-size: 20px;
			}
		}
	}
`
