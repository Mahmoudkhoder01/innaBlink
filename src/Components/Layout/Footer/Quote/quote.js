import { Fragment, useState } from "react";
import Thanks from "../ContactUsList/EmailUS/ButtonClick/thanks";
import classes from "./quote.module.css";
import { MenuItem, Select } from "@mui/material";

const QuoteDiv = (props) => {
  const [thanksShow, setThanksShow] = useState(false);
  const [valueShow, setValueShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(false);
  const [select3, setSelect3] = useState(false);
  const [select4, setSelect4] = useState(false);


  const ThanksDiv = () => {
    setThanksShow(!thanksShow);
  };

  const Values = () => {
    setValueShow(true);
  };

  const arrowStyles1 = {
    backgroundImage: valueShow
    ? `url(${process.env.PUBLIC_URL + "/Assests/arrowright.png"})`
      : `url(${process.env.PUBLIC_URL + "/Assests/arrowbottom.png"})`
  };
  const arrowStyles2 = {
    backgroundImage: select1
    ? `url(${process.env.PUBLIC_URL + "/Assests/arrowright.png"})`
    : `url(${process.env.PUBLIC_URL + "/Assests/arrowbottom.png"})`
  };

  const arrowStyles3 = {
    backgroundImage: select2
    ? `url(${process.env.PUBLIC_URL + "/Assests/arrowright.png"})`
    : `url(${process.env.PUBLIC_URL + "/Assests/arrowbottom.png"})`
  };

  const arrowStyles4 = {
    backgroundImage: select3
    ? `url(${process.env.PUBLIC_URL + "/Assests/arrowright.png"})`
    : `url(${process.env.PUBLIC_URL + "/Assests/arrowbottom.png"})`
  };

  

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const firstSelect = () =>{
    setSelect1(true);
  }

  const secondSelect = () => {
    setSelect2(true);
    setSelect1(false);
  };

  const thirdSelect = () =>{
    setSelect2(false);
    setSelect3(true);
  }

  const fourSelect = () =>{
    setSelect3(false);
    setSelect4(true);
  }

  return (
    <Fragment>
      <div className={classes.verticalLigne} id="ChangeDiv"></div>
      <div
        className={classes.quoteDiv}
        style={{
          width: thanksShow ? "30%" : "59%",
        }}
      >
        <table
          style={{
            display: thanksShow ? "none" : "",
          }}
        >
          <tr>
            <td rowSpan={2}>
              <p className={classes.pQuote}>
                Please add your details form, so we can assist you better.
              </p>
            </td>
            <td>
              <img
                alt=""
                className={classes.quoteImg}
                src={
                  process.env.PUBLIC_URL + "/Assests/firstcropimagequote.png"
                }
              ></img>
              <Select
                style={arrowStyles1}
                className={classes.quoteSelect}
                onClick={Values}
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                onChange={firstSelect}
                IconComponent={ () => null}
              >
                <MenuItem value="individual">I am individual</MenuItem>
                <MenuItem value="business">I am business</MenuItem>
              </Select>
            </td>
          </tr>
          <tr>
            <img
              alt=""
              className={classes.quoteImg}
              src={process.env.PUBLIC_URL + "/Assests/secondcropimagequote.png"}
            ></img>
            <Select
              style={arrowStyles2}
              className={classes.quoteSelect}
              open={select1}
              onOpen={handleOpen}
              onClose={handleClose}
              onChange={secondSelect}
              IconComponent={ () => null}
            >
              <MenuItem value="send">I need to send a package</MenuItem>
              <MenuItem value="multiple">
                I need to send multiple packages
              </MenuItem>
            </Select>
          </tr>
          <tr>
            <td>
              <label className={classes.labels}>your full name</label>
              <input
                className={classes.inputs}
                type="text"
                onClick={Values}
                value={valueShow ? "Sara Al Hamadi" : ""}
                required
              />
            </td>
            <td>
              <img
                alt=""
                className={classes.quoteImg}
                src={
                  process.env.PUBLIC_URL + "/Assests/thirdcropimagequote.png"
                }
              ></img>
              <Select
              style={arrowStyles3}
                className={classes.quoteSelect}
                open={select2}
                onOpen={handleOpen}
                onClose={handleClose}
                onChange={thirdSelect}
                IconComponent={ () => null}
              >
                <MenuItem value="destination">
                  Destination id within my emirate
                </MenuItem>
                <MenuItem value="outside">
                  Destination is outside my emirate
                </MenuItem>
                <MenuItem value="country">
                  Destination is outside my country
                </MenuItem>
              </Select>
            </td>
          </tr>
          <tr>
            <td>
              <label className={classes.labels}>e-mail address</label>
              <input
                className={classes.inputs}
                type="email"
                value={valueShow ? "salhamadi7@gmail.com" : ""}
                required
              />
            </td>
            <td>
              <img
                alt=""
                style={{ width: "54px" }}
                className={classes.quoteImg}
                src={process.env.PUBLIC_URL + "/Assests/foroptionimage.png"}
              ></img>
              <Select
              style={arrowStyles4}
                className={classes.quoteSelect}
                open={select3}
                onOpen={handleOpen}
                onClose={handleClose}
                onChange={fourSelect}
                IconComponent={ () => null}
              >
                <MenuItem value="soon">Deliver as soon as possible</MenuItem>
                <MenuItem value="tomorrow">Deliver tomorrow</MenuItem>
                <MenuItem value="specific">Deliver on a specific date</MenuItem>
              </Select>
            </td>
          </tr>
          <tr>
            <td>
              <label className={classes.labels}>city of residence</label>
              <input
                className={classes.inputs}
                type="email"
                value={valueShow ? "Abu Dhabi" : ""}
                required
              />
            </td>
            <td>
              <img
                alt=""
                className={classes.quoteImg}
                src={
                  process.env.PUBLIC_URL + "/Assests/thirdcropimagequote.png"
                }
              ></img>
              <input
                style={{ width: "17rem" }}
                className={classes.inputs}
                type="text"
                placeholder="Any additional info goes here :)"
              />
            </td>
          </tr>
          <button className={classes.quoteButton} onClick={ThanksDiv}>
            Send
          </button>
        </table>
        {thanksShow && <Thanks className={classes.thanks} />}
      </div>
    </Fragment>
  );
};

export default QuoteDiv;
