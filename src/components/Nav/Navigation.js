import React from "react";
import { Nav, NavItem} from "reactstrap";
import { NavLink } from "react-router-dom";

//do profile separate from tabs
const tabs = [
    {
        route: "/",
        label: "Home",
    },
    {
        route: "about",
        label: "About",
    },
    {
        route: "contact",
        label: "Contact",
    },
];

//add logo to right of the navbar
const Navigation = (props) => {
    return (
      <nav className="tab-nav navbar navbar-light" role="navigation">
        <Nav className="w-100">
          <div className="d-flex flex-row justify-content-around w-100">
            {tabs.map((tab, index) => (
              <NavItem key={`tab-${index}`}>
                <NavLink
                  to={tab.route}
                  className="nav-link"
                  activeClassName="active"
                >
                  <div className="row d-flex flex-column justify-content-center align-items-center">
                    <div>{tab.label}</div>
                  </div>
                </NavLink>
              </NavItem>
            ))}
          </div>
        </Nav>
      </nav>
    );
  };
  
  export default Navigation;