import React from "react";
import "../styles/Home.css";
import { Col, Container, Row } from "react-bootstrap";
import ScrollSpy from "../components/ScrollSpy";
import { BsGithub } from "react-icons/bs";
import { FaFilePdf } from "react-icons/fa";

const Home = () => {
  const sectionIds = ["about", "experiences", "projects", "certifications"];
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
                <a href="https://github.com/LloydBolences29">
                  <BsGithub size={32} color="white" />
                </a>
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
                      PatientFirst <span className="ml-1">↗</span>
                    </a>
                  </h2>
                  <p>
                    A full-stack web application created in a MERN Stack that
                    allows patients to view their profile, get a preliminary
                    diagnosis using a symptom checker powered by an AI from
                    Infermedica engine API. This desktop web application is
                    mainly designed for AUP clinic staff and medical
                    practitioner to modernize their workflow of clinic's
                    procedure.
                  </p>
                </div>
              </div>
              <br />
            </section>

            <section id="certifications" className="mb-4 hero-section">
              <div className="sticky-section-header">
                <h2 className="fw-semibold section-name">Certifications</h2>
              </div>
              <Row className="cert">
                <Col
                  xs={12}
                  md={4}
                  className="mb-md-0 text-center text-md-start"
                >
                  <div className="certification">
                    <h3>
                      <a
                        href="/ITSNetworkSec.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFilePdf className="text-red-600" />
                        Information Technology Specialist - Network Security
                      </a>
                    </h3>
                    <p>
                      Completed a certification of ITS - Network security that
                      was issued by Certiport and held at Adventist university
                      of the philippines last May 13, 2024. Earning an ITS
                      Network Security badge or certificate demonstrate
                      foundational security knowledge and skills, including an
                      understanding of core security principles operating system
                      security, network and device security, and secure
                      computing practices.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="cert">
                <Col
                  xs={12}
                  md={4}
                  className="mb-md-0 text-center text-md-start"
                >
                  <div className="certification">
                    <h3>
                      <a
                        href="/ITSPython.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFilePdf className="text-red-600" />
                        Information Technology Specialist - Python
                      </a>
                    </h3>
                    <p>
                      Earned the IT Specialist certification in Python issued by
                      Certiport and held at Adventist University of the
                      Philippines last December 4, 2023, demonstrating
                      foundational knowledge of Python programming, including
                      data types, control structures, functions, error handling,
                      and basic object-oriented concepts. This certification
                      validates the ability to write, debug, and maintain Python
                      code and confirms readiness for entry-level programming
                      roles or further study in software development.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="cert">
                <Col
                  xs={12}
                  md={4}
                  className="mb-md-0 text-center text-md-start"
                >
                  <div className="certification">
                    <h3>
                      <a
                        href="/Microsoft.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFilePdf className="text-red-600" />
                        Microsoft Office Specialist - Word Associate Microsoft
                        365 Apps
                      </a>
                    </h3>
                    <p>
                      Earned last May 14, 2025 at Adventist University of the
                      Philippiens that certifies proficiency in creating,
                      editing, formatting, and managing professional documents
                      using Microsoft Word. Covers advanced features such as
                      tables, references, collaboration tools, and layout
                      design, proving capability in producing high-quality
                      documentation in business or academic settings.
                    </p>
                  </div>
                </Col>
              </Row>
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
