import classNames from 'classnames'
import style from './style.module.scss'

type ButtonProps = {
  content: string
  isPrimary?: boolean
}

const Button = ({ content, isPrimary = true }: ButtonProps) => {
  const { btn, primaryBtn, secondaryBtn } = style

  return (
    <button
      className={classNames(btn, {
        [primaryBtn]: isPrimary,
        [secondaryBtn]: !isPrimary
      })}
    >
      {content}
    </button>
  )
}

export default Button
