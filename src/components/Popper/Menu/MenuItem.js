import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

function MenuItem({ data, onNext }) {
  return (
    <>
      {data.map((item, index) => {
        const Name = item.to ? Link : item.href ? 'a' : 'div'
        const spacer = item.spacer
        const Icon = item.icon

        return (
          <Name
            key={index}
            href={item.href}
            to={item.to}
            className={cx('menu-item', { spacer })}
            onClick={() => onNext(item)}
          >
            {Icon && <Icon className={cx('menu-icon')} />}
            <h4 className={cx('menu-title')}>{item.title}</h4>
          </Name>
        )
      })}
    </>
  )
}

export default MenuItem
