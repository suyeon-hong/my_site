import * as S from './Style'
import PropTypes from 'prop-types'

TextWithCheck.propTypes = {
	children: PropTypes.string.isRequired,
	size: PropTypes.number,
}

export default function TextWithCheck({ children, size }) {
	return <S.Text size={size}>✔ {children}</S.Text>
}

TextWithCheck.defaultProps = {
	size: 20,
}
