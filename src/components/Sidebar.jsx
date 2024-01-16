import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/about" className="link">
        About
      </Link>
      <Link to="/board" className="link">
        List
      </Link>
      <Link to="/create" className="link">
        Create
      </Link>
    </div>
  );
}
export default Sidebar;
