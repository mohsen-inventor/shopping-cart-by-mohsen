import Link from 'next/link';
import { AppState } from '../../../state/store';

// CSS
import css from './TopNav.module.scss';
import { useSelector } from 'react-redux';

const TopNav = () => {
  const { cartItemsCount } = useSelector<AppState>(state => state.shoppingCart);

  return (
    <nav className={css.topNav}>
      <Link href="/">
        <a>Logo</a>
      </Link>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/cart">
        <a>Your Cart ( {cartItemsCount} items )</a>
      </Link>
    </nav>
  )
}

export default TopNav;
