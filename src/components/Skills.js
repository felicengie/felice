import python from "../assets/img/python.svg";
import react from "../assets/img/react.svg";
import tailwind from "../assets/img/tailwind.svg";
import c from "../assets/img/c.svg";
import java from "../assets/img/java.svg";
import html from "../assets/img/html.svg";
import csssvg from "../assets/img/css.svg";
import javascript from "../assets/img/javascript.svg";
import node from "../assets/img/node.svg";
import bootstrap from "../assets/img/bootstrap.svg";
import jupyter from "../assets/img/jupyter.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I'm proficient in the following programming languages/frameworks:</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={python} alt="Python" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="React" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="Html" />
                                <h5>Html</h5>
                            </div>
                            <div className="item">
                                <img src={csssvg} alt="Css" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={tailwind} alt="Tailwind CSS" />
                                <h5>Tailwind</h5>
                            </div>
                            <div className="item">
                                <img src={c} alt="C" />
                                <h5>C</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="Java" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} alt="JavaScript" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={jupyter} alt="Jupyter Notebook" />
                                <h5>Jupyter Notebook</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="Node.js" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="Bootstrap" />
                                <h5>Bootstrap</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  )
}
