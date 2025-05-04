import { useState, useEffect } from "react"; /* es un hook de la biblioteca de javascript */
import { Container, Row, Col } from "react-bootstrap"; /* es para que se vea bien en diferentes tipos de pantalla*/
import headerImg from "../assets/img/Robot.png";
import { ArrowRightCircle } from 'react-bootstrap-icons'; /* simplemente un icono de una flecha*/
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import astronauta from "../assets/img/astronauta.png"

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Python Development", "Django Development", "React Development", "API Development", "Integration Specialist"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  //Es para el cambio de palabras en la bienvenida

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Bienvenido a Devko</span>
                <h1>{`Somos Devko,`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Python Developer", "Django Developer", "React Developer", "API Developer", "Integration Specialist"]'><span className="wrap">{text}</span></span></h1>
                  <p>Esto es Devko, explora nuestros servicios y descubre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos. ¡Estamos ansiosos por colaborar contigo!.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={astronauta} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
