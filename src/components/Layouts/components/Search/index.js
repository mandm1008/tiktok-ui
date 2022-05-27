import { useEffect, useState, useRef } from 'react'
import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'

import { useDebounce } from '~/hooks'
import styles from './Search.module.scss'
import { SearchAccount as Account } from '~/components/Account'
import { ClearIcon, LoadingIcon, SearchIcon } from '~/components/Icons'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function Search() {
  const [searchResults, setSearchResults] = useState([])
  const [searchValues, setSearchValues] = useState('')
  const [showSearchResults, setShowSearchResults] = useState(true)
  const [loading, setLoading] = useState(false)
  const debounce = useDebounce(searchValues, 500)

  const inputElement = useRef()
  const Btn = debounce ? Link : 'button'

  useEffect(() => {
    if (!debounce) {
      setSearchResults([])
      return
    }

    setLoading(true)

    // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce)}&type=less`)
    fetch(`http://127.0.0.1:8000/api/user/search?q=${encodeURIComponent(debounce)}&type=less`)
      .then((res) => res.json())
      .then((res) => {
        setSearchResults(res.data)
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
      })
  }, [debounce])

  const handleClear = () => {
    setSearchValues('')
    inputElement.current.focus()
    handleClearResults()
  }

  const handleClearResults = () => {
    setSearchResults([])
  }

  return (
    <div>
      <Tippy
        interactive
        visible={showSearchResults && searchResults.length > 0}
        onClickOutside={() => setShowSearchResults(false)}
        render={(attrs) => (
          <div className={cx('search-results')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <div className={cx('any-search')}>
                <SearchIcon width="1.5rem" heigth="1.5rem" />
                <h4 className={cx('any-search-title')}>styles</h4>
              </div>
              <h4 className={cx('account')}>Accounts</h4>
              {searchResults.map((data) => (
                <Account key={data.id} data={data} />
              ))}

              <h4 className={cx('view-all')}>View all results for "{debounce}"</h4>
            </PopperWrapper>
          </div>
        )}
      >
        <div className={cx('search')}>
          <input
            value={searchValues}
            type="text"
            placeholder="Search accounts and videos ..."
            spellCheck={false}
            ref={inputElement}
            onChange={(e) => {
              if (e.target.value.trim()) {
                setSearchValues(e.target.value)
              } else {
                setSearchValues('')
              }
            }}
            onFocus={() => setShowSearchResults(true)}
          />
          <ClearIcon
            className={cx('clear', {
              active: !loading
            })}
            onClick={handleClear}
          />
          <LoadingIcon className={cx('loading', { active: loading })} />
          <Btn to={`/search?q=${debounce}`} className={cx('search-btn')}>
            <SearchIcon />
          </Btn>
        </div>
      </Tippy>
    </div>
  )
}

export default Search
