import { Fragment } from "react";
import Header from "./Components/Layout/Header/Header";
import Container from "./Components/Layout/Container/Container";
import Footer from "./Components/Layout/Footer/Footer";

const LandingPages = () => {
    
    const Hide = () => { 
        var element = document.getElementById("whatDiv");
        element.classList.add('test');
        var element1 = document.getElementById("whenDiv");
        element1.classList.add('test');
        var element2 = document.getElementById("whereDiv");
        element2.classList.add('test');
        var element3 = document.getElementById("howDiv");
        element3.classList.add('test');
        var element4 = document.getElementById("whoDiv");
        element4.classList.add('test');
        var element5 = document.getElementById("whichDiv");
        element5.classList.add('test');
        var element6 = document.getElementById("whyDiv");
        element6.classList.add('test');
    }

    const Show = () => {
        var collection = document.getElementById("whatDiv");
        collection.classList.remove("test");
        var collection1 = document.getElementById("whenDiv");
        collection1.classList.remove("test");
        var collection2 = document.getElementById("whereDiv");
        collection2.classList.remove("test");
        var collection3 = document.getElementById("howDiv");
        collection3.classList.remove("test");
        var collection4 = document.getElementById("whoDiv");
        collection4.classList.remove("test");
        var collection5 = document.getElementById("whichDiv");
        collection5.classList.remove("test");
        var collection6 = document.getElementById("whyDiv");
        collection6.classList.remove("test");
    }
    

    return (
        <Fragment>
            <Header HideContainer={Hide} ShowContainer={Show} />
            <Container />
            <Footer HideContainer={Hide} ShowContainer={Show} />
        </Fragment>
    )
}

export default LandingPages;