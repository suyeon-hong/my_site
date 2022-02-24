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
