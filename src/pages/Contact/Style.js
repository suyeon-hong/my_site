import styled from 'styled-components'
import { hideScrollbar, pageInner, pageWrapper } from 'styles/CommonStyle'

export const PageWrapper = styled.main`
	${pageWrapper}
`
export const PageInner = styled.div`
	${pageInner};
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => `${theme.base.padding * 5}px`};
`

export const Form = styled.form`
	padding: ${({ theme }) => `${theme.base.padding * 2}px`};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
	gap: ${({ theme }) => `${theme.base.padding * 2}px`};

	button {
		width: 90px;
		height: 45px;
		font-size: 16px;
		line-height: 45px;
		text-align: center;
		background: ${({ theme }) => theme.colors.lightGray};
		border-radius: 2px;
		transition: 0.6s ease;

		&:hover {
			background: ${({ theme }) => theme.colors.darkGray};
			color: ${({ theme }) => theme.colors.white};
		}
	}
`

export const InputWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: ${({ theme }) => `0 ${theme.base.padding}px`};

	label {
		font-size: 18px;
		flex: 0 0 auto;
	}

	input,
	textarea {
		width: 90%;
		height: 50px;
		border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
		padding: ${({ theme }) => `0 ${theme.base.padding}px`};
		font-size: 16px;
		font-weight: 400;
		line-height: 1.4;
		color: ${({ theme }) => theme.colors.darkGray};
	}

	textarea {
		height: 200px;
		overflow-y: auto;
		border: 1px solid ${({ theme }) => theme.colors.lightGray};
		border-radius: 2px;
		padding: ${({ theme }) => `${theme.base.padding}px`};
		resize: none;
		${hideScrollbar};
	}

	@media ${({ theme }) => theme.device.mobile} {
		flex-direction: column;
		align-items: flex-start;

		label {
			margin-bottom: 10px;
		}

		input,
		textarea {
			width: 100%;
		}
	}
`
