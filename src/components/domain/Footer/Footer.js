import * as S from './Style'
import { FaGoogle, FaGithubAlt } from 'react-icons/fa'

export default function Footer() {
	return (
		<S.Footer>
			<S.FooterInner>
				<S.IconContainer>
					<li>
						<a href="https://github.com/suyeon-hong" target="_blank" rel="noopener noreferrer">
							<FaGithubAlt />
						</a>
					</li>
					<li>
						<a href="/" target="_blank">
							<FaGoogle />
						</a>
					</li>
				</S.IconContainer>
				<p>&copy; 2022 SuyeonHong All Rights Reserved</p>
			</S.FooterInner>
		</S.Footer>
	)
}
