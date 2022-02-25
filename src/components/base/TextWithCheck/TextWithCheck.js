import * as S from './Style'
import PropTypes from 'prop-types'

TextWithCheck.propTypes = {
	children: PropTypes.string.isRequired,
}

export default function TextWithCheck({ children }) {
	return <S.Text>✔ {children}</S.Text>
}
