import React from "react";
import { useThemeConfig } from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import "./index.css";
export default function FooterLayout({ style, links, logo, copyright }) {
  const { siteConfig } = useDocusaurusContext();
  const logoLink = useBaseUrl(siteConfig.themeConfig.footer.logo.src);
  return (
    <footer className="footer">
      <div className="main-wrapper">
        <div className="cast">
          <a href={siteConfig.url}>
            <img src={logoLink} alt={siteConfig.title} width="150" height="150" />
          </a>
          <p>{siteConfig.themeConfig.footer.copyright}</p>
        </div>
        <div className="links">
          <div className="top">
            <div className="topleft">
              <h3>See Yourself</h3>
              <button className="btn">Book A Demo</button>
            </div>
            <div className="topright">
              <h3>Follow Us</h3>
              <ul>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>Linkedin</li>
              </ul>
            </div>
          </div>
          <div className="bottom">
            <div className="bleft">
              <h3>Helpfull Links</h3>
              <li>Features</li>
              <li>Faq</li>
              <li>Acheivements</li>
            </div>
            <div className="bmid">
              <h3>Contact Us</h3>
              <li>Contact Us</li>
              <li>Work with us</li>
            </div>
            <div className="bright">
              <h3>Policy</h3>
              <li>Report</li>
              <li>Privacy</li>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
