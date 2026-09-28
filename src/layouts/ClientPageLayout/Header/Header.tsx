import { useState } from "react";
import HamburgerIcon from "./HamburgerIcon";
import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import DefaultProfileImg from "./DefaultProfileImg/DefaultProfileImg";
import Logo from "../Shared/Logo";

interface HeaderProps {
  onClickHamburger: () => void;
  css: string;
}

export const Header: React.FC<HeaderProps> = ({ onClickHamburger, css }) => {
  const [keyword, setKeyword] = useState("");
  return (
    <section className={`${css}`}>
      <div className="flex shrink-0 items-center">
        <button
          type="button"
          onClick={onClickHamburger}
          className="p-2 rounded-full hover:bg-gray-100 active:bg-gray-200 hover:cursor-pointer flex items-center justify-center"
        >
          <HamburgerIcon css="h-6 w-6" />
        </button>
        <Logo />
      </div>
      <SearchBar
        value={keyword}
        onChange={setKeyword}
        onSearch={() => console.log(keyword)}
      />
      <Link
        to={`/profile`}
        className={` rounded-full 
        h-[40px] w-[40px] overflow-hidden
        hover:cursor-pointer`}
      >
        <DefaultProfileImg className="object-cover border border-gray-200 rounded-full" />
      </Link>
    </section>
  );
};
