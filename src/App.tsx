import classNames from 'classnames/bind'
import styles from './App.module.scss'

const cx = classNames.bind(styles)

function App() {
  return (
    <div className={cx('container')}>
      <h1>Hello World</h1>
    </div>
  )
}

export default App
