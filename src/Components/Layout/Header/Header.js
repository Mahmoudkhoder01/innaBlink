import { Fragment, useState, useRef } from "react";
import "./Header.css";
import QuoteDiv from "../Footer/Quote/quote";

const Header = (props) => {
  const [quoteShow, setQuoteShow] = useState(false);

  let quoteRef = useRef();

  const QuoteShow = () => {
    setQuoteShow(!quoteShow);
    props.HideContainer();

    // document.addEventListener("mousedown", (event) => {
    //   if (!quoteRef.current.contains(event.target)) {
    //     setQuoteShow(false);
    //     props.ShowContainer();
    //   }
    // });
  };

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="navbar-brand">
            <img
              className="Logo-type"
              src={
                process.env.PUBLIC_URL +
                "/Assests/_innablinkwebsitelogotype.png"
              }
              alt=""
            ></img>
          </div>
          <div
            className="collapse navbar-collapse"
            id="navbarNavAltMarkup"
            style={{ justifyContent: "end", textAlign: "center" }}
          >
            <div className="navbar-nav" ref={quoteRef}>
              {quoteShow && <QuoteDiv />}
              <div
                className="nav-link qucu"
                onClick={QuoteShow}
                style={{
                  opacity: quoteShow ? "" : "50%",
                }}
              >
                <p className="p-nav">quote with innablink</p>
                <img
                  className="img-nav"
                  src={process.env.PUBLIC_URL + "/Assests/quote.png"}
                  alt=""
                ></img>
              </div>
              <div className="nav-link qucu" style={{ opacity: "50%" }}>
                <p className="p-nav">customer login</p>
                <img
                  className="img-nav"
                  src={process.env.PUBLIC_URL + "/Assests/customerlogin.png"}
                  alt=""
                ></img>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;

// axios and redux