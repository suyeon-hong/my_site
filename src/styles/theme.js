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
	gray: '#52616B',
	lightGray: '#C9D6DF',
	white: '#F0F5F9',
	orange: '#FF5722',
	blue: '#00ADB5',
}

const theme = {
	breakPoint,
	device,
	colors,
}
export default theme
