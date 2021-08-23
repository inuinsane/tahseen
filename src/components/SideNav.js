import CIcon from "@coreui/icons-react";
import { CSidebar, CSidebarBrand, CSidebarMinimizer } from "@coreui/react";
import { useContext } from "react";
import { ShowContext } from "../context/ShowContext";
import TahseenFav from "../assets/tahseen-favicon.png";
import TahseenLogo from "../assets/tahseen-logo.png";

const SideNav = () => {
  const [show, setShow] = useContext(ShowContext);
  return (
    <>
      <CSidebar
        show={show.sidebar}
        onShowChange={() => setShow({ ...show, sidebar: !show.sidebar })}
        unfoldable
      >
        <CSidebarBrand to="/" className="d-md-down-none">
          <CIcon
            className="c-sidebar-brand-minimized"
            src={TahseenFav}
            size="lg"
            height={35}
          />
          <CIcon
            className="c-sidebar-brand-full"
            src={TahseenLogo}
            size="lg"
            height={35}
          />
        </CSidebarBrand>
        <CSidebarMinimizer className="c-d-md-down-none" />
      </CSidebar>
    </>
  );
};
export default SideNav;
