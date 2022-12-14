import { Fragment, useState, useRef } from "react";
import "./Footer.css";
import ContactUsList from "./ContactUsList/list";
import SocialMedia from "./Social/social";

const Footer = (props) => {
  const [contactUsShow, setContactUsShow] = useState(false);
  const [socialShow, setSocialShow] = useState(false);

  let SocialIcon = useRef();
  let ContactIcon = useRef();

  const ShowHideSocial = () => {
    setSocialShow(!socialShow);
    props.HideContainer();

    document.addEventListener("mousedown", (event) => {
      if (!SocialIcon.current.contains(event.target)) {
        setSocialShow(false);
        props.ShowContainer();
      }
    });
  };

  const ShowHideContact = () => {
    setContactUsShow(!contactUsShow);
    props.HideContainer();

    document.addEventListener("mousedown", (event) => {
      if (!ContactIcon.current.contains(event.target)) {
        setContactUsShow(false);
        props.ShowContainer();
      }
    });
  };

  return (
    <Fragment>
      <div className="footer-nav">
        <div
          ref={ContactIcon}
          className="nav-link div-footer"
          href="#"
          style={{
            paddingRight: "80px",
            opacity: contactUsShow ? "" : "50%",
          }}
        >
          <p className="p-footer">Contact Us</p>
          <img
            className="img-footer"
            alt=""
            src={
              process.env.PUBLIC_URL +
              "/Assests/_innablink website icons-contact us after crop.png"
            }
            onClick={ShowHideContact}
          ></img>
          {contactUsShow && <ContactUsList />}
        </div>
        <div
          ref={SocialIcon}
          className="nav-link div-footer"
          href="#"
          style={{
            opacity: socialShow ? "" : "50%",
          }}
        >
          <p className="p-footer">Social</p>
          <img
            className="img-footer"
            alt=""
            src={
              process.env.PUBLIC_URL +
              "/Assests/_innablink website icons-social after crop.png"
            }
            onClick={ShowHideSocial}
          ></img>
          {socialShow && <SocialMedia />}
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
