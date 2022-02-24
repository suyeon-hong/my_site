import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { hideTextCursor } from './CommonStyle'

const GlobalStyles = createGlobalStyle` 
  ${reset}
  *{
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	body{
		font-family: 'Noto Sans KR', sans-serif;
		color: ${({ theme }) => theme.colors.primary};
		${hideTextCursor};
	}
	ul,ol{
		list-style: none;
	}
	a{
		text-decoration: none;
		color: inherit;
	}
	input, textarea{
		border: none;
		font-family: inherit;

		&:focus{
			outline: none;
		}
	}
	button{
		background: transparent;
		border: none;
		cursor: pointer;
		font-family: inherit;
	}
`

export default GlobalStyles
