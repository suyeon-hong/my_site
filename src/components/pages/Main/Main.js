import { useEffect } from 'react'
import { useState } from 'react'
import * as S from './Style'

export default function Main({ profileInfo }) {
	const INTRO_TEXT = '안녕하세요. 프론트엔드 개발자 홍수연 입니다.'
	const [text, setText] = useState('')
	const [count, setCount] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setText(text => text + INTRO_TEXT[count])
			setCount(count => count + 1)
		}, 150)

		count === INTRO_TEXT.length && clearInterval(interval)
		return () => clearInterval(interval)
	}, [count])

	return (
		<S.Figure>
			<S.TextWrapper>{text}</S.TextWrapper>
		</S.Figure>
	)
}
