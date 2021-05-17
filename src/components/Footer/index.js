import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./style.scss";

const Footer = () => {
  return (
    <footer>
      <h1>Criado por Hugo da Silva Gomes</h1>
      <div className="links">
        <a href="https://www.linkedin.com/in/hugo-gomes-dev/" target="_blank">
          <LinkedInIcon fontSize="large" />
        </a>
        <a href="https://github.com/hugosgomes" target="_blank">
          <GitHubIcon fontSize="large" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
