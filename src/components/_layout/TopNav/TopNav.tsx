import Link from 'next/link';


const TopNav = () => (
  <div className="container mx-auto px-4">
    <div className="flex justify-between">
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
  </div>
);

export default TopNav;
