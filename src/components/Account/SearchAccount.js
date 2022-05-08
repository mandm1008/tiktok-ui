import classNames from 'classnames/bind'
import styles from './SearchAccount.module.scss'

const cx = classNames.bind(styles)

function SearchAccount() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://symbols.vn/wp-content/uploads/2022/02/Hinh-Kirito-chibi-de-thuong-ngau-nhat.jpg"
        alt="Avatar"
      />
      <div className={cx('info')}>
        <span className={cx('name')}>mandm1008</span>
        <p className={cx('message')}>Trùm</p>
      </div>
    </div>
  )
}

export default SearchAccount
