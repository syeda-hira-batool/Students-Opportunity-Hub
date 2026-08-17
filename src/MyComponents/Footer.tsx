import { Link } from "react-router-dom";
import "../CssFiles/Footer.css";

export default function Footer() {
  return (
    <footer className="my-footer">
      <p className="my-footer-text">
        © All rights reserved, made for students to explore opportunities in their relevant fields.
      </p>
      <Link to="/AboutPage" className="my-footer-link">
        About
      </Link>
    </footer>
  );
}