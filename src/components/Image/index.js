import { useState, forwardRef } from 'react'
import classNames from 'classnames/bind'
import imgs from '~/assets/imgs'
import styles from './Image.module.scss'

const cx = classNames.bind(styles)

const Image = forwardRef(({ src, alt, className, fallback, ...props }, ref) => {
  const [crrImg, setCrrImg] = useState(src)

  return (
    <img
      className={cx(className, 'wrapper')}
      src={crrImg}
      alt={alt}
      ref={ref}
      {...props}
      onError={() => {
        setCrrImg(fallback || imgs.avatar)
      }}
    />
  )
})

export default Image
