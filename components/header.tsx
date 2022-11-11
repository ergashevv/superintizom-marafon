import Image from "next/image";
import Link from "next/link";
import Logo from "../public/images/logo.png";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-inner">
          <div className="infos">
            <div className="header-info">
              <div className="inner">
                <h2>21-22-23-noyabr</h2>
                <span>19:00</span>
              </div>
            </div>
          </div>

          <Link href="/">
            <Image
              objectFit="contain"
              width={"100px"}
              className="logo"
              height={"100px"}
              alt="Picture of the author"
              src={Logo}
            />
          </Link>
        </div>
      </div>
    </>
  );
};
export default Header;
