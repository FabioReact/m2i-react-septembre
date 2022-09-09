import { memo } from 'react'

type Props = {
	onClick: () => void
	children?: React.ReactNode
}

const Button = ({ onClick, children }: Props): JSX.Element => {
	return (
		<button onClick={onClick}>{children || 'Button'}</button>
	)
}

// React.memo sert à mémoizer un composant si aucune des props n'a changée
const MemoButton = memo(Button)

export { Button as default, MemoButton }