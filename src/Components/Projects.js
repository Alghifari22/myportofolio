import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../Assets/img/Porto 1.png";
import projImg2 from "../Assets/img/Porto 2.png";
import projImg3 from "../Assets/img/Porto 3.png";
import projImg4 from "../Assets/img/Porto 4.png";
import projImg5 from "../Assets/img/Porto 5.png";
import colorSharp2 from "../Assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Arthama.id",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Artsitek.id",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Lensagram.com",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "JTEN.co.id",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Skillnation.id",
      description: "Design & Development",
      imgUrl: projImg5,
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
                <p>Developed projects utilizing modern technologies such as Laravel for backend, Tailwind CSS and Bootstrap for responsive design, and JavaScript for interactivity. Built mobile applications using Java and Kotlin, and delivered efficient, scalable solutions with PHP.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
