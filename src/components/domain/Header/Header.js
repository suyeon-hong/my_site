import * as S from './Style'
import { GNB } from 'components/base'
import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<S.Header>
			<S.HeaderInner>
				<S.Title>
					<Link to="/">
						HONG <S.Br />
						SUYEON
					</Link>
				</S.Title>
				<GNB />
			</S.HeaderInner>
		</S.Header>
	)
}
