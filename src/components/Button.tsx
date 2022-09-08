type Props = {
	onClick: () => void
	children?: React.ReactNode
}

const Button = ({ onClick, children }: Props): JSX.Element => {
	return (
		<button onClick={onClick}>{children || 'Button'}</button>
	)
}

export default Button