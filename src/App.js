import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyle'
import theme from './styles/theme'
import { Header, Footer } from 'components/domain'
import { Routes, Route } from 'react-router-dom'
import { Main, About, Contact, Skills, Portfolio } from 'components/pages'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/about" element={<About />} />
				<Route path="/skills" element={<Skills />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</ThemeProvider>
	)
}

export default App
