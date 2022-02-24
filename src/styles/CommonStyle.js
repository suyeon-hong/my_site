export const hideTextCursor = `
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
`

export const hideScrollbar = `
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
		&::-webkit-scrollbar {
			display: none; /* Chrome, Safari, Opera*/
		}
`

export const pageWrapper = `
	width: 100%;
	min-height: calc(100vh - 200px);
`

export const pageInner = `
	max-width: 1024px;
	height: 100%;
	margin: 0 auto;
	padding: 100px 30px;
`
