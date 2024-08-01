import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold">MemeApp</span>
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/upload">
              Upload
            </Link>
          </li>
          <li>
            <Link href="/categories">
              Categories
            </Link>
          </li>
          <li>
            <Link href="/profile">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
