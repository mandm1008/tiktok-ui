import { useEffect, useState } from 'react'
import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCircleXmark, faEllipsisVertical, faLanguage } from '@fortawesome/free-solid-svg-icons'

import imgs from '~/assets/imgs'
import styles from './Header.module.scss'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import { SearchAccount as Account } from '~/components/Account'
import Button from '~/components/Button'

const cx = classNames.bind(styles)

function Header() {
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setSearchResults([1])
    }, 500)
  }, [])

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={imgs.logo} className={cx('logo')} alt="Tiktok" />

        <div>
          <Tippy
            interactive
            visible={searchResults.length > 0}
            render={(attrs) => (
              <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                  <div className={cx('any-search')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <h4 className={cx('any-search-title')}>styles</h4>
                  </div>
                  <h4 className={cx('account')}>Accounts</h4>
                  <Account />
                  <Account />
                  <h4 className={cx('view-all')}>View all results for ""</h4>
                </PopperWrapper>
              </div>
            )}
          >
            <div className={cx('search')}>
              <input type="text" placeholder="Search accounts and videos ..." spellCheck={false} />
              <FontAwesomeIcon className={cx('clear', 'active')} icon={faCircleXmark} />
              {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
              <button className={cx('search-btn')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </Tippy>
        </div>

        <div className={cx('actions')}>
          <Button underline>Upload</Button>
          <Button primary>Log in</Button>
          {/* <Tippy
            interactive
            visible
            render={(attrs) => (
              <div className={cx('menu-popper')} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                  <div className={cx('menu-item')}>
                    <FontAwesomeIcon className={cx('menu-icon')} icon={faLanguage} />
                    <h4 className={cx('menu-title')}>English</h4>
                  </div>
                </PopperWrapper>
              </div>
            )}
          >
            <div className={cx('menu')}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
          </Tippy> */}
        </div>
      </div>
    </div>
  )
}

export default Header
