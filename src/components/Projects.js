import { Container, Row, Col, Tab} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import python from "../assets/img/python.svg";
import html from "../assets/img/html.svg";
import css from "../assets/img/css.svg";
import react from "../assets/img/react.svg";
import javascript from "../assets/img/javascript.svg";
import tailwind from "../assets/img/tailwind.svg"
import node from "../assets/img/node.svg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [ 
    {
      title: "BuzzMania",
      description: "A fullstack web application inspired by the addictive gameplay of Cookie Clicker",
      imgUrl: [react, html, css, javascript],
      link: "https://github.com/kaitchau/buzzmania",
      completed: true,
    },
    {
      title: "Enigma Machine",
      description: "A Python program that simulates the functioning of the Enigma Machine featuring rotors, a plugboard, and a reflector",
      imgUrl: [python],
      link: "https://github.com/felicengie/engimaMachine",
      completed: true,
    },
    {
      title: "Phreddit - Web Application",
      description: "A fullstack web application inspired by the actual reddit.com",
      imgUrl: [react, node, javascript],
      link: "https://github.com/felicengie/Phreddit",
      completed: true,
    },
    {
      title: "From Coffee Machine to Machine Learning",
      description: "A machine learning project to assist a client in the NYC coffee shop industry in optimizing various facets of their business operations.",
      imgUrl: [python],
      link: "https://github.com/felicengie/coffeshops",
      completed: true,
    },
    {
      title: "Big Back Voyage - Wolfie Edition",
      description: "Big Back Voyage is like Akinator for food; just answer a few fun questions, and it picks the perfect nearby cuisine for you.",
      link: "https://github.com/jkyc38/hopperhacksv2",
      imgUrl: [react, css, javascript],
      completed: true,
    },
    {
      title: "Custom TCP Chat Protocol",
      description: "A chat application (like messenger) that will allow users to transfer messages and a custom reliable transport protocol on top of UDP.",
      link: "https://github.com/felicengie/chat-application-tcp-udp",
      imgUrl: [python],
      completed: true,
    },
    {
      title: "Lifetime Financial Planner",
      description: "Financial planning software allows users to analyze the outcomes of their plans for investments, retirement age, and other financial decisions under various assumptions about the future.",
      link: "https://github.com/felicengie/StollerFanClub-LFP",
      imgUrl: [react, html, css, javascript, tailwind],
      completed: true,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here I showcase all of my past and ongoing projects.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                title={project.title} 
                                description={project.description} 
                                imgUrl={project.imgUrl}
                                link={project.link}
                                completed={project.completed}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" /> {/* Alt updated */}
    </section>
  );
}
