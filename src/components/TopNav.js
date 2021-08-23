import {
  CButton,
  CCollapse,
  CContainer,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CForm,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CInput,
  CNavItem,
  CNavLink,
} from "@coreui/react";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const TopNav = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      {/* Header */}
      <CHeader>
        <CContainer>
          <button
            className="c-header-toggler ml-md-3 d-lg-none"
            onClick={() => setVisible(!visible)}
            ƒ
          >
            <span className="c-header-togler-icon">
              <FiMenu />
            </span>
          </button>
          {/* <CHeaderBrand className="c-header-brand mx-auto d-lg-none active">
            Tahseen.
          </CHeaderBrand>
          <CHeaderNav className="d-md-down-none mr-auto">
            <CHeaderNavItem class="px-3">
              <CHeaderNavLink as={NavLink} to="/" className="">
                Home
              </CHeaderNavLink>
              <CHeaderNavLink as={NavLink} to="/huruf">
                Huruf
              </CHeaderNavLink>
            </CHeaderNavItem>
          </CHeaderNav> */}
        </CContainer>
      </CHeader>
    </>
  );
};

export default TopNav;
