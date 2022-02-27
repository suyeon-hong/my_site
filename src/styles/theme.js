const breakPoint = {
	tablet: '1024px',
	mobile: '764px',
}

const device = {
	mobile: `screen and (max-width: ${breakPoint.mobile})`,
	tablet: `screen and (max-width: ${breakPoint.tablet})`,
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
