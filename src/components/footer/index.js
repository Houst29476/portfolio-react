import Icon from "../Icon";
import React from "react";
import { LINKS } from "../../utils/footerLinks";

function Footer() {
  return (
    <footer className="footer">
      <Icon links={LINKS}></Icon>
    </footer>
  );
}

export default Footer;
