import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'

import imgs from '~/assets/imgs'
import styles from './Header.module.scss'
import { Menu } from '~/components/Popper'
import Search from '../Search'
import Button from '~/components/Button'
import {
  InboxIcon,
  KeyboardIcon,
  LanguageIcon,
  LogOutIcon,
  MenuIcon,
  MessageIcon,
  QuestionIcon,
  SettingIcon,
  TiktokIcon,
  UploadIcon,
  UserIcon
} from '~/components/Icons'
import Image from '~/components/Image'

const cx = classNames.bind(styles)

function Header() {
  let currentUser = true

  const dataMenu = [
    {
      icon: LanguageIcon,
      title: 'English',
      subMenu: {
        title: 'Language',
        data: [
          {
            code: 'en',
            title: 'English'
          },
          {
            code: 'vi',
            title: 'Tiếng Việt'
          }
        ]
      }
    },
    {
      icon: QuestionIcon,
      title: 'Feedback and help',
      to: '/feedback'
    },
    {
      icon: KeyboardIcon,
      title: 'Keyboard Shortcuts',
      modal: true
    }
  ]

  const dataUser = [
    {
      icon: UserIcon,
      title: 'View Profile',
      to: '/profile'
    },
    {
      icon: TiktokIcon,
      title: 'Get coins',
      to: '/coin'
    },
    {
      icon: SettingIcon,
      title: 'Setting',
      to: '/setting'
    },
    ...dataMenu,
    {
      icon: LogOutIcon,
      title: 'Log out',
      to: '/logout',
      spacer: true
    }
  ]

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={imgs.logo} className={cx('logo')} alt="Tiktok" />

        <Search />

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy
                interactive
                placement="bottom"
                delay={[0, 200]}
                render={(attrs) => (
                  <div className={cx('user-popper')} tabIndex="-1" {...attrs}>
                    Upload
                  </div>
                )}
              >
                <div className={cx('user-wrapper-btn')}>
                  <Button className={cx('user-btn')} to="/upload">
                    <UploadIcon />
                  </Button>
                </div>
              </Tippy>

              <Tippy
                interactive
                placement="bottom"
                delay={[0, 200]}
                render={(attrs) => (
                  <div className={cx('user-popper')} tabIndex="-1" {...attrs}>
                    Message
                  </div>
                )}
              >
                <div className={cx('user-wrapper-btn')}>
                  <Button to="/message" className={cx('user-btn')}>
                    <MessageIcon className={cx('message-icon')} />
                  </Button>
                </div>
              </Tippy>

              <Tippy
                interactive
                placement="bottom"
                delay={[0, 200]}
                render={(attrs) => (
                  <div className={cx('user-popper')} tabIndex="-1" {...attrs}>
                    Inbox
                  </div>
                )}
              >
                <div className={cx('user-wrapper-btn')}>
                  <Button className={cx('user-btn')}>
                    <InboxIcon />
                    <span className={cx('inbox-counter')}>12</span>
                  </Button>
                </div>
              </Tippy>

              <div className={cx('avatar')}>
                <Menu data={dataUser} className={cx('user-menu')}>
                  <Image
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7097832713986441222~c5_720x720.jpeg?x-expires=1652763600&x-signature=18OagVxEshvTYMaNtM5mhoh2tCQ%3D"
                    alt="User Avatar"
                  />
                </Menu>
              </div>
            </>
          ) : (
            <>
              <Button underline>Upload</Button>
              <Button primary>Log in</Button>
              <div className={cx('menu')}>
                <Menu data={dataMenu}>
                  <div className={cx('menu-wrapper')}>
                    <MenuIcon />
                  </div>
                </Menu>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
