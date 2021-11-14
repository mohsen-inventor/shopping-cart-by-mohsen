import Link from 'next/link';

// CSS
import css from './TopNav.module.scss';

const TopNav = () => (
  <div className={css.topNav}>
    <strong>Qogita</strong>
    <nav>
      <Link href="/">
        <a className="underline">Products List</a>
      </Link>
      <Link href="/cart">
        <a className="underline">Your Cart</a>
      </Link>
      <Link href="/product">
        <a className="underline">Product details</a>
      </Link>
    </nav>
  </div>
);

export default TopNav;
