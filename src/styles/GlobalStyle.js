import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

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
	}
	ul,ol{
		list-style: none;
	}
	a{
		text-decoration: none;
		color: inherit;
	}
`

export default GlobalStyles
