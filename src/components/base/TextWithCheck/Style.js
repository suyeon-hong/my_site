import styled from 'styled-components'

export const Text = styled.p`
	font-size: ${props => `${props.size}px` || '20px'};
	line-height: 2;

	@media ${({ theme }) => theme.device.mobile} {
		font-size: 12px;
	}
`
