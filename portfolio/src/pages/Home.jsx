import React from "react";
import "../styles/Home.css";
import { Col, Container, Row } from "react-bootstrap";
import ScrollSpy from "../components/ScrollSpy";
import { BsGithub } from "react-icons/bs";

const Home = () => {
  const sectionIds = ["about", "experiences", "projects"];
  const activeSection = ScrollSpy(sectionIds);
  return (
    <div className="home-container">
      <Container>
        <Row className="home align-items-center" style={{ minHeight: "100vh" }}>
          <Col
            xs={12}
            md={6}
            className="home-left home-child mb-4 mb-md-0 d-flex flex-column justify-content-center align-items-center align-items-md-start text-center text-md-start"
          >
            <div className="hero-info">
              <h1 className="fw-bold">Lloyd Matthew D. Bolences</h1>
              <h2 className="text-primary">Information Technology</h2>
              <p className="lead">
                Passionate for building solutions to tech-related challenges
                mainly using MERN Stack.
              </p>

              <div className="mobile-nav-container">
                <nav className="mobile-nav">
                  {sectionIds.map((id) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      className={activeSection === id ? "active" : ""}
                    >
                      {" "}
                      {id.charAt(0).toUpperCase() + id.slice(1)}
                    </a>
                  ))}
                </nav>
              </div>


              <div className="contact-icons">
                <a href="https://github.com/LloydBolences29"><BsGithub size={32} color="white"/></a>

                
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} className="home-right home-child">
            {/* section for about me */}
            <section id="about" className="mb-4 hero-section">
              <div className="sticky-section-header">
                <h2 className="fw-semibold section-name">About</h2>
              </div>

              <div>
                <p>
                  An enthusiastic Information Technology graduate with a passion
                  for building solutions to tech-related challenges. Built and
                  deployed a full-stack web application using MERN stack. Enjoys
                  solving problems by thinking critically and approaching
                  challenges with logic. Served as President of both a religious
                  and departmental organization, demonstrating effective
                  communication and team management abilities. Has basic
                  knowledge of Python and Java, with a strong desire to grow as
                  a Full-Stack Developer or Programmer.
                </p>
              </div>
            </section>
            <br />

            <section id="experiences" className="mb-4 hero-section">
              <div className="sticky-section-header">
                <h2 className="fw-semibold section-name">Experience</h2>
              </div>

              <div>
                <Row className="experience">
                  <Col
                    xs={12}
                    md={4}
                    className="mb-md-0 text-center text-md-start"
                  >
                    <p className="experience-date">2024 - Present</p>
                  </Col>
                  <Col xs={12} md={8}>
                    <div className="experience-content">
                      <h3>
                        Digital Solution Intern (Internship) | Southern Asia
                        Pacific Division
                      </h3>
                      <p>
                        Develop a DTR application using SharePoint and Power
                        Platform, worked with the IT project manager and
                        assisted in project planning and research, and
                        contributed as a solutions architect for digital health
                        initiatives by designing workflows, access controls, and
                        implementation strategies.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
              <div>
                <Row className="experience">
                  <Col
                    xs={12}
                    md={4}
                    className="mb-md-0 text-center text-md-start"
                  >
                    <p className="experience-date">JANUARY- FEBRUARY 2024</p>
                  </Col>
                  <Col xs={12} md={8}>
                    <div>
                      <h3>ESL TEACHER | Haiyan Learning Academy</h3>

                      <p>
                        Handled multiple Korean Student ages from 8 to 15 years
                        old, focusing on improving and developing their
                        speaking, listening, reading, and comprehension skills
                        in English by using prepared materials while providing
                        regular feedback to help improve their language skills
                        and boost their confidence in using English.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
              <div>
                <Row className="experience">
                  <Col
                    xs={12}
                    md={4}
                    className="mb-md-0 text-center text-md-start"
                  >
                    <p className="experience-date">2023 - 2024</p>
                  </Col>
                  <Col xs={12} md={8}>
                    <div>
                      <h3>
                        WORDPRESS WEB DESIGNER | Manns Marketing (WFH Setup)
                      </h3>

                      <p>
                        Contributed to a various website-related tasks on a
                        contractual basis, including assisting in the
                        maintenance and enhancement of a WordPress based church
                        website, fixing design elements, updating content
                        layouts, customizing themes, and ensuring a responsive,
                        user-friendly interface.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </section>
            <br />

            <section id="projects" className="mb-4 hero-section">
              <div className="sticky-section-header">
                <h2 className="fw-semibold section-name">Project</h2>
              </div>
              <div className="patientfirst-project">
                {/* thumbnail */}
                <div className="patientfirst-thumbnail">
                  <img
                    className="patientfirst-img"
                    src="/patientfirst.jpg"
                    alt="PatientFirst Thumbnail"
                  />
                </div>

                <div className="patientfirst-info">
                  <h2 className="fw-semibold">
                    <a
                      className="patientfirst-title"
                      href="https://aup-patient-first-frontend.vercel.app/"
                    >
                      PatientFirst
                    </a>
                  </h2>
                  <p>
                    A full-stack web application that allows patients to view
                    their profile, get a preliminary diagnosis using a symptom
                    checker powered by an AI from Infermedica engine API. This
                    web application is mainly designed for AUP clinic staff and
                    medical practitioner to modernize their workflow of clinic's
                    procedure.
                  </p>
                </div>
              </div>
              <br />
              <div className="patientfirst-project">
                {/* thumbnail */}
                <div className="patientfirst-thumbnail">
                  <img
                    className="patientfirst-img"
                    src="/patientfirst.jpg"
                    alt="PatientFirst Thumbnail"
                  />
                </div>

                <div className="patientfirst-info">
                  <h2 className="fw-semibold">
                    <a
                      className="patientfirst-title"
                      href="https://aup-patient-first-frontend.vercel.app/"
                    >
                      PatientFirst
                    </a>
                  </h2>
                  <p>
                    A full-stack web application that allows patients to view
                    their profile, get a preliminary diagnosis using a symptom
                    checker powered by an AI from Infermedica engine API. This
                    web application is mainly designed for AUP clinic staff and
                    medical practitioner to modernize their workflow of clinic's
                    procedure.
                  </p>
                </div>
              </div>
            </section>
          </Col>
        </Row>
      </Container>

      <br />

      <footer>
        {/* <Container> */}
        <Row className="footer">
          <Col xs={12} className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Lloyd Matthew D. Bolences
            </p>
          </Col>
        </Row>
        {/* </Container> */}
      </footer>
    </div>
  );
};

export default Home;
