import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import linkedin from "../assets/img/linkedin.svg";
import github from "../assets/img/github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/felice-chandra/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="Icon" /></a>
              <a href="https://github.com/felicengie" target="_blank" rel="noopener noreferrer"><img src={github} alt="Icon" /></a>
            </div>
            <p>© Felice Chandra 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}