import styled from 'styled-components'

export const MenuContainer = styled.ul`
	display: flex;

	@media ${({ theme }) => theme.device.tablet} {
		flex-direction: column;
		text-align: right;
	}
`

export const Menu = styled.li`
	cursor: pointer;

	a {
		display: block;
		font-size: 16px;
		padding: 10px 20px;
		transition: 0.2s ease;
		color: ${({ theme }) => theme.colors.darkGray};

		@media ${({ theme }) => theme.device.tablet} {
			font-size: 14px;
			padding: 10px 0;
		}
	}

	&:hover a,
	.active {
		color: ${({ theme }) => theme.colors.point};
	}
`
