import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/Global";
import theme from "./styles/theme";

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<div>hi</div>
			</ThemeProvider>
		</>
	);
}

export default App;
