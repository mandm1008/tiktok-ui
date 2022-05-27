import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { TickIcon } from '../Icons'
import styles from './SearchAccount.module.scss'

const cx = classNames.bind(styles)

function SearchAccount({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
      <img className={cx('avatar')} src={data.avatar} alt={data.full_name} />
      <div className={cx('info')}>
        <span className={cx('name')}>
          {data.nickname}
          {data.tick && <TickIcon className={cx('tick-icon')} />}
        </span>
        <p className={cx('message')}>{data.full_name}</p>
      </div>
    </Link>
  )
}

export default SearchAccount
