import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="mb-4">
      <Link className="btn btn-outline-primary me-2" to="/">
        Home
      </Link>
      <Link className="btn btn-outline-success me-2" to="/AddHours">
        Add Hours
      </Link>
      <Link className="btn btn-outline-info me-2" to="/CurrentHours">
        Current Hours
      </Link>
      <Link className="btn btn-outline-secondary" to="/AddNewClass">
        Add New Class
      </Link>
    </nav>
  );
}
