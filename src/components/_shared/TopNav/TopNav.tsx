import Link from 'next/link';

// CSS
import css from './TopNav.module.scss';

const TopNav = () => (
  <div className={css.topNav}>
    <strong>Qogita</strong>
    <nav>
      <ul className="flex gap-4">
        <li>
          <Link href="/">
            <a className="underline">Products List</a>
          </Link>
        </li>
        <li>
          <Link href="/cart">
            <a className="underline">Your Cart</a>
          </Link>
        </li>
        <li>
          <Link href="/product">
            <a className="underline">Product details</a>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default TopNav;
