import { Fragment, useState, forwardRef, useImperativeHandle, useEffect, useRef } from "react";
import './Container.css';
import WhichCardContainer from "../CardConatiners/WhichCard/which";
import WhatCardContainer from "../CardConatiners/WhatCard/what";
import WhenCardContainer from "../CardConatiners/WhenCard/when";
import WhereCardContainer from "../CardConatiners/WhereCard/where";
import HowCardContainer from "../CardConatiners/HowCard/How";
import WhoCardContainer from "../CardConatiners/WhoCard/who";
import WhyCardContainer from "../CardConatiners/WhyCard/why.";



const Container = forwardRef((props, ref) => {

    const [whichCardSHow, setWhichCardShow] = useState(false);
    const [whatCardSHow, setWhatCardShow] = useState(false);
    const [whenCardShow, setWhenCardShow] = useState(false);
    const [whereCardShow, setWhereCardShow] = useState(false);
    const [howCardShow, setHowCardShow] = useState(false);
    const [whoCardShow, setWhoCardShow] = useState(false);
    const [whyCardShow, setWhyCardShow] = useState(false);

    // Refs

    const whichRef = useRef();

    // Change Class Section

    const whychangeClass = (m) => {
        var element = document.getElementById("whatDiv");
        element.classList.add('test');
        var element = document.getElementById("whenDiv");
        element.classList.add('test');
        var element = document.getElementById("whereDiv");
        element.classList.add('test');
        var element = document.getElementById("howDiv");
        element.classList.add('test');
        var element = document.getElementById("whoDiv");
        element.classList.add('test');
        var element = document.getElementById("whichDiv");
        element.classList.add('test');
        setWhyCardShow(!whyCardShow);

        document.addEventListener("mousedown", () => {
            var collection = document.getElementById("whatDiv");
            collection.classList.remove("test");
            var collection = document.getElementById("whenDiv");
            collection.classList.remove("test");
            var collection = document.getElementById("whereDiv");
            collection.classList.remove("test");
            var collection = document.getElementById("howDiv");
            collection.classList.remove("test");
            var collection = document.getElementById("whoDiv");
            collection.classList.remove("test");
            var collection = document.getElementById("whichDiv");
            collection.classList.remove("test");
            setWhyCardShow(false);
        });
    }

    const whichchangeClass = () => {
        var element = document.getElementById("whatDiv");
        element.classList.add('test');
        var element = document.getElementById("whenDiv");
        element.classList.add('test');
        var element = document.getElementById("whereDiv");
        element.classList.add('test');
        var element = document.getElementById("howDiv");
        element.classList.add('test');
        var element = document.getElementById("whoDiv");
        element.classList.add('test');
        var element = document.getElementById("whyDiv");
        element.classList.add('test');
        setWhichCardShow(!whichCardSHow);

        document.addEventListener("mousedown", (event) => {
            var collection = document.getElementById("whatDiv");
            collection.classList.remove("test");
            var collection = document.getElementById("whenDiv");
            collection.classList.remove("test");
            var collection = document.getElementById("whereDiv");
            collection.classList.remove("test");
            var collection = document.getElementById("howDiv");
            collection.classList.remove("test");
            var collection = document.getElementById("whoDiv");
            collection.classList.remove("test");
            var collection = document.getElementById("whyDiv");
            collection.classList.remove("test");
            if(!whichRef.current.contains(event.target)){
                setWhichCardShow(false);
            }
        });
    }

    const whatChangeClass = () => {
        var element = document.getElementById("whichDiv");
        element.classList.add('test');
        var element = document.getElementById("whenDiv");
        element.classList.add('test');
        var element = document.getElementById("whereDiv");
        element.classList.add('test');
        var element = document.getElementById("howDiv");
        element.classList.add('test');
        var element = document.getElementById("whoDiv");
        element.classList.add('test');
        var element = document.getElementById("whyDiv");
        element.classList.add('test');
        setWhatCardShow(!whatCardSHow);

        document.addEventListener("mousedown", () => {
            var collection = document.getElementById("whichDiv");
            collection.classList.remove("test");
            var collection = document.getElementById("whenDiv");
            collection.classList.remove("test");
            var collection = document.getElementById("whereDiv");
            collection.classList.remove("test");
            var collection = document.getElementById("howDiv");
            collection.classList.remove("test");
            var collection = document.getElementById("whoDiv");
            collection.classList.remove("test");
            var collection = document.getElementById("whyDiv");
            collection.classList.remove("test");
            setWhatCardShow(false);
        })
    }

    const whenChangeClass = () => {
        var element = document.getElementById("whichDiv");
        element.classList.add('test');
        var element = document.getElementById("whatDiv");
        element.classList.add('test');
        var element = document.getElementById("whereDiv");
        element.classList.add('test');
        var element = document.getElementById("howDiv");
        element.classList.add('test');
        var element = document.getElementById("whoDiv");
        element.classList.add('test');
        var element = document.getElementById("whyDiv");
        element.classList.add('test');
        setWhenCardShow(!whenCardShow);

        document.addEventListener("mousedown", () => {
            var collection = document.getElementById("whichDiv");
            collection.classList.remove("test");
            var collection = document.getElementById("whatDiv");
            collection.classList.remove("test");
            var collection = document.getElementById("whereDiv");
            collection.classList.remove("test");
            var collection = document.getElementById("howDiv");
            collection.classList.remove("test");
            var collection = document.getElementById("whoDiv");
            collection.classList.remove("test");
            var collection = document.getElementById("whyDiv");
            collection.classList.remove("test");
            setWhenCardShow(false);
        })
    }

    const whereChangeClass = () => {
        var element = document.getElementById("whichDiv");
        element.classList.add('test');
        var element = document.getElementById("whatDiv");
        element.classList.add('test');
        var element = document.getElementById("whenDiv");
        element.classList.add('test');
        var element = document.getElementById("howDiv");
        element.classList.add('test');
        var element = document.getElementById("whoDiv");
        element.classList.add('test');
        var element = document.getElementById("whyDiv");
        element.classList.add('test');
        setWhereCardShow(!whereCardShow);

        document.addEventListener("mousedown", () => {
            var collection = document.getElementById("whichDiv");
            collection.classList.remove("test");
            var collection = document.getElementById("whatDiv");
            collection.classList.remove("test");
            var collection = document.getElementById("whenDiv");
            collection.classList.remove("test");
            var collection = document.getElementById("howDiv");
            collection.classList.remove("test");
            var collection = document.getElementById("whoDiv");
            collection.classList.remove("test");
            var collection = document.getElementById("whyDiv");
            collection.classList.remove("test");
            setWhereCardShow(false);
        })
    }

    const howChangeClass = () => {
        var element = document.getElementById("whichDiv");
        element.classList.add('test');
        var element = document.getElementById("whatDiv");
        element.classList.add('test');
        var element = document.getElementById("whenDiv");
        element.classList.add('test');
        var element = document.getElementById("whereDiv");
        element.classList.add('test');
        var element = document.getElementById("whoDiv");
        element.classList.add('test');
        var element = document.getElementById("whyDiv");
        element.classList.add('test');
        setHowCardShow(!howCardShow);

        document.addEventListener("mousedown", () => {
            var collection = document.getElementById("whichDiv");
            collection.classList.remove("test");
            var collection = document.getElementById("whatDiv");
            collection.classList.remove("test");
            var collection = document.getElementById("whenDiv");
            collection.classList.remove("test");
            var collection = document.getElementById("whereDiv");
            collection.classList.remove("test");
            var collection = document.getElementById("whoDiv");
            collection.classList.remove("test");
            var collection = document.getElementById("whyDiv");
            collection.classList.remove("test");
            setHowCardShow(false);
        })
    }

    const whoChangeClass = () => {
        var element = document.getElementById("whichDiv");
        element.classList.add('test');
        var element = document.getElementById("whatDiv");
        element.classList.add('test');
        var element = document.getElementById("whenDiv");
        element.classList.add('test');
        var element = document.getElementById("whereDiv");
        element.classList.add('test');
        var element = document.getElementById("howDiv");
        element.classList.add('test');
        var element = document.getElementById("whyDiv");
        element.classList.add('test');
        setWhoCardShow(!whoCardShow);

        document.addEventListener("mousedown", () => {
            var collection = document.getElementById("whichDiv");
            collection.classList.remove("test");
            var collection = document.getElementById("whatDiv");
            collection.classList.remove("test");
            var collection = document.getElementById("whenDiv");
            collection.classList.remove("test");
            var collection = document.getElementById("whereDiv");
            collection.classList.remove("test");
            var collection = document.getElementById("howDiv");
            collection.classList.remove("test");
            var collection = document.getElementById("whyDiv");
            collection.classList.remove("test");
            setWhoCardShow(false);
        })


    }


    // useImperativeHandle(ref, () => ({
    //     CallContainerFunction: () => {
    //         console.log('this work!');
    //         var element = document.getElementById("whichDiv");
    //         element.classList.add('test');  
    //     }
    // }));

    return (
        <Fragment>
            <div className="div-container">
                <div className="nav-link cursor" id="whichDiv" ref={whichRef}>
                    <p>Which</p>
                    <img src={process.env.PUBLIC_URL + '/Assests/whichcrop.png'}
                        onClick={whichchangeClass}
                    ></img>
                </div>
                <div className="nav-link cursor" id="whatDiv">
                    <p>What</p>
                    <img src={process.env.PUBLIC_URL + '/Assests/whatcrop.png'}
                        onClick={whatChangeClass}
                    ></img>
                </div>
                <div className="nav-link cursor" id="whenDiv">
                    <p>When</p>
                    <img src={process.env.PUBLIC_URL + '/Assests/whencrop.png'}
                        onClick={whenChangeClass}></img>
                </div>
                <div className="nav-link cursor" id="whereDiv">
                    <p>Where</p>
                    <img src={process.env.PUBLIC_URL + '/Assests/wherecrop.png'}
                        onClick={whereChangeClass}></img>
                </div>
                <div className="nav-link cursor" id='howDiv'>
                    <p>How</p>
                    <img src={process.env.PUBLIC_URL + '/Assests/howcrop.png'}
                        onClick={howChangeClass}></img>
                </div>
                <div className="nav-link cursor" id='whoDiv'>
                    <p>Who</p>
                    <img src={process.env.PUBLIC_URL + '/Assests/whocrop.png'}
                        onClick={whoChangeClass}></img>
                </div>
                <div className="nav-link cursor" id="whyDiv">
                    <p>Why</p>
                    <img src={process.env.PUBLIC_URL + '/Assests/whycrop.png'}
                        onClick={whychangeClass}></img>
                </div>
            </div>
            {whichCardSHow && <WhichCardContainer />}
            {whatCardSHow && <WhatCardContainer />}
            {whenCardShow && <WhenCardContainer />}
            {whereCardShow && <WhereCardContainer />}
            {howCardShow && <HowCardContainer />}
            {whoCardShow && <WhoCardContainer />}
            {whyCardShow && <WhyCardContainer />}
        </Fragment>
    )
})

export default Container;
