const breakPoint = {
	desktop: '1024px',
	tablet: '764px',
	mobile: '540px',
}

const device = {
	desktop: `screen and (max-width: ${breakPoint.desktop})`,
	tablet: `screen and (max-width: ${breakPoint.tablet})`,
	mobile: `screen and (max-width: ${breakPoint.mobile})`,
}

const colors = {
	primary: '#1E2022',
	darkGray: '#52616B',
	lightGray: '#C9D6DF',
	white: '#F0F5F9',
	point: '#5D8BF4',
	blue: '#00ADB5',
}

const base = {
	padding: 10,
}

const theme = {
	breakPoint,
	device,
	colors,
	base,
}
export default theme
