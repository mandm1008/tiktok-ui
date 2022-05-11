import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({
  children,
  to,
  href,
  primary = false,
  outline = false,
  underline = false,
  disabled = false,
  small = false,
  large = false,
  rounded = false,
  ...any
}) {
  const Btn = to ? Link : href ? 'a' : 'button'

  const props = {
    to,
    href,
    ...any
  }

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key]
      }
    })
  }

  return (
    <Btn
      className={cx('btn', {
        primary,
        outline,
        underline,
        disabled,
        small,
        large,
        rounded
      })}
      {...props}
    >
      {children}
    </Btn>
  )
}

export default Button
