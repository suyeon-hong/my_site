import * as S from './Style'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Title } from 'components/base'

export default function Contact() {
	const form = useRef()

	const sendEmail = e => {
		e.preventDefault()

		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICE_ID,
				process.env.REACT_APP_TEMPLATE_ID,
				form.current,
				process.env.REACT_APP_USER_ID,
			)
			.then(() => {
				form.current.querySelectorAll('input').forEach(input => (input.value = ''))
				form.current.querySelector('textarea').value = ''
				alert('메일 전송이 완료되었습니다.')
			})
	}

	return (
		<S.PageWrapper>
			<Title>Contact Me.</Title>
			<S.Form ref={form} onSubmit={sendEmail}>
				<S.InputWrapper>
					<label htmlFor="name">Name</label>
					<input
						name="name"
						id="name"
						type="text"
						placeholder="이름을 입력해 주세요"
						maxLength={10}
					/>
				</S.InputWrapper>
				<S.InputWrapper>
					<label htmlFor="email">E-mail</label>
					<input
						name="email"
						id="email"
						type="email"
						placeholder="이메일 주소를 입력해 주세요"
						required
					/>
				</S.InputWrapper>
				<S.InputWrapper>
					<label htmlFor="message">Message</label>
					<textarea name="message" id="message" placeholder="메세지를 입력해 주세요" required />
				</S.InputWrapper>
				<button type="submit">Send</button>
			</S.Form>
		</S.PageWrapper>
	)
}
