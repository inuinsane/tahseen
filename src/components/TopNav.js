import {
  CCollapse,
  CNavbar,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CToggler,
} from "@coreui/react";
import { useContext } from "react";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { ShowContext } from "../context/ShowContext";

const TopNav = () => {
  const [show, setShow] = useContext(ShowContext);
  return (
    <>
      {/* Header */}
      <CNavbar expandable="sm" color="dark">
        <CToggler
          onClick={() => setShow({ ...show, sidebar: !show.sidebar })}
          className="c-header-toggler ml-md-3 d-lg-none"
        >
          <FiMenu className="c-header-togler-icon" />
        </CToggler>
        <CToggler
          onClick={() => setShow({ ...show, sidebar: !show.sidebar })}
          className="c-header-toggler ml-3 d-md-down-none"
        >
          <FiMenu className="c-header-togler-icon" />
        </CToggler>
        <CCollapse className="navbar-collapse" show={show.navbar}>
          <CNavbarNav>
            <CNavItem>
              <CNavLink to="/home" as={NavLink}>
                Home
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink to="/huruf" as={NavLink}>
                Huruf
              </CNavLink>
            </CNavItem>
          </CNavbarNav>
        </CCollapse>
      </CNavbar>
    </>
  );
};

export default TopNav;
