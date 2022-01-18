import Link from "next/link";

import LogoSymbol from "@/shared/icons/logo-symbol/component";

const Header = () => (
  <header className="inline-block">
    <Link href="/">
      <a className="flex flex-row items-center hover:no-underline">
        <LogoSymbol className="h-10 mq2:h-14 mq3:h-14" />
        <h1 className="ml-3 text-blue-600">Tweetulator</h1>
      </a>
    </Link>
  </header>
);

export default Header;
