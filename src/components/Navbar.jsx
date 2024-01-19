import profile from "../assets/logo.png";
import logo from "../assets/bucket-list.webp";
import logoBanner from "../assets/bucketlist_logo.webp";
function Navbar() {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <img src={logoBanner} alt="logo banner" />
      <img src={profile} alt="logo" />
    </nav>
  );
}
export default Navbar;
