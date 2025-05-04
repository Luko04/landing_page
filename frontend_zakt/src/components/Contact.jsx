//pagdibujo y contactImg es importado de la carpeta assets, son imagenes de la parte de contacto de la pagina

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import pagdibujo from "../assets/img/pagdibujo.png"
import cerebro from "../assets/img/cerebro.png"
import planeta from "../assets/img/planeta.png"
import planetaestetic from "../assets/img/planeta estetic.png"
import cohete from "../assets/img/cohete.png"
import astronauta from "../assets/img/astronauta.png"
import correo from "../assets/img/correo.png"

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={correo} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Contacto</h2>
                <form action="https://formsubmit.co/devkocompany@gmail.com" method="POST">
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input name="Name" type="text" value={formDetails.firstName} placeholder="Nombre" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input name="Lastname" type="text" value={formDetails.lasttName} placeholder="Apellido" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input name="mail" type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input name="Numero de celular" type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea name="Mensaje" rows="6" value={formDetails.message} placeholder="Mensaje" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
