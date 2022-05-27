import { useState } from 'react'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'

import styles from './Menu.module.scss'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import MenuItem from './MenuItem'
import Header from './Header'

const cx = classNames.bind(styles)

function Menu({ children, data = [], className }) {
  const [history, setHistory] = useState([{ data: data }])

  const backMenu = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1))
  }

  const nextMenu = (item) => {
    if (item.subMenu) {
      setHistory((prev) => [...prev, item.subMenu])
    }
  }

  return (
    <Tippy
      placement="bottom-end"
      interactive
      trigger="click mouseenter focus"
      delay={[0, 800]}
      offset={[12, 12]}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
      render={(attrs) => (
        <div className={cx('menu-popper', className)} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('wrapper')}>
            {history[history.length - 1].title && (
              <Header title={history[history.length - 1].title} onBack={backMenu} />
            )}
            <MenuItem data={history[history.length - 1].data} onNext={nextMenu} />
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  )
}

export default Menu
