import {useState, useEffect} from 'react'

import TagManager from 'react-gtm-module';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import Galeria from './Components/Galeria/Galeria.jsx'
import HomeImg from './assets/img/home.jpeg'
import LogoImg2 from '../public/LogoImg2.png'
import LogoImg1 from '../public/LogoImg1.png'
import LogoImg3 from '../public/LogoImg3.png'
import LogoImg4 from '../public/LogoImg4.png'
import LogoImg5 from '../public/LogoImg5.png'
import LogoImg6 from '../public/LogoImg6.png'
import LogoImg7 from '../public/LogoImg7.png'
import LogoImg8 from '../public/LogoImg8.png'
import PopularImg1 from '../public/zonaSocial.jpg'
import PopularImg2 from '../public/recepcion.jpg'
import PopularImg3 from '../public/diseñoInnovador.png'
import PopularImg4 from '../public/comodas.jpeg'
import PopularImg5 from '../public/conferencias.png'
import ValueImg from '../public/sala2.jpg'
import ContactImg from './Components/Img/OFXXX7.jpg'


import GitHubIcon from '@mui/icons-material/GitHub';
import {styled} from '@mui/material/styles'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'



const TagManagerArgs = {
  gtmId: "GTM-K3VDZC3L"
}

TagManager.initialize(TagManagerArgs)
TagManager.dataLayer({
  dataLayer: {
    event: "pageview",
    path: "/home/",
  }
})


window.addEventListener('scroll', function() {
  var logo = document.querySelector('.nav__logo img');
  var scrollPosition = window.pageYOffset;
  if (scrollPosition > 20) {
    logo.src = 'logo2.png';
  } else {
    logo.src = 'logo.png';
  }
});




const StyledAccordion = styled(Accordion)(({theme}) => ({
  backgroundColor: '#fff',
  border: '2px solid hsl(228, 99%, 98%)',
  borderRadius: '0.5rem',
  padding: '1rem 0.75rem',
  boxShadow: 'none',
  margin: 0,
  '&::before': {
    height: 0
  },
  '&.Mui-expanded': {
    margin: 0,
    boxShadow: '0 12px 32px hsla(228, 66%, 45%, 0.1)'
  }
}))

const StyledSummary = styled((props) => (
  <AccordionSummary
    expandIcon={<i className="bx bxs-down-arrow"></i>}
    {...props}
  />
))(({theme}) => ({
  margin: 0,
  minHeight: 'initial',
  '&.Mui-expanded': {
    minHeight: 'initial'
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: 'hsl(228, 66%, 53%)'
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(-180deg)'
  },
  '& .MuiAccordionSummary-content': {
    margin: 0
  },
  '& .MuiAccordionSummary-content.Mui-expanded': {
    margin: 0
  }
}))

const StyledDetails = styled(AccordionDetails)(({theme}) => ({
  padding: '1.25rem 1.25rem 0.5rem 1.25rem',
  [theme.breakpoints.up('md')]: {
    padding: '1.25rem 2rem 0.5rem 2rem'
  }
}))

const accordions = [
  {
    key: 'interest',
    icon: <i className="bx bxs-shield-x value__accordion-icon"></i>,
    title: 'No Pagues Mas Servicios Publicos',
    description: 'Los servicios de limpieza, mantenimiento de las instalaciones, seguridad y telecomunicaciones están incluidos en una simple cuota mensual.'
  },
  {
    key: 'unstable',
    icon: <i className="bx bxs-x-square value__accordion-icon"></i>,
    title: 'Proporcionamos Personal de Limpieza',
    description: 'Disfruta de oficinas con llave completamente amuebladas y equipadas con amenidades privadas opcionales, como salas interiores para oficinas ejecutivas o reuniones, salas comunes, despensas y más.'
  },
  {
    key: 'prices',
    icon: <i className="bx bxs-bar-chart-square value__accordion-icon"></i>,
    title: 'Sala de Juntas Equipada ',
    description: 'Las salas de juntas que se encuentran Luna-Coworking se caracterizan por ser espacios de lujo y super equipados. En los que tú y tus clientes podrán encontrar la mayor comodidad y podrán trabajar concentrados. Es fundamental que en las reuniones de trabajo haya café. Nos encargamos del Coffe break o catering, para que tú solo te encargues de cerrar negocios.'
  },
  {
    key: 'security',
    icon: <i className="bx bxs-check-square value__accordion-icon"></i>,
    title: 'Disfruta de Pausas Activas ',
    description: 'Desde tomarte un cafe, hasta salir de tu oficina y trabajar en la zona social. Puedes utilizar nuestros sofas ultracomodos y disfrutar de nuestro televisor de 90 pulgadas conectado a internet.'
  }
]

function App() {
  const [scrollHeader, setScrollHeader] = useState(false)
  const [expanded, setExpanded] = useState('panel1')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset
      if (scrollY >= 54) {
        setScrollHeader(true)
      } else {
        setScrollHeader(false)
      }
    }
    window.addEventListener("scroll", updateScrollDirection) // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection) // clean up
    }
  }, [scrollHeader])

  const swiper = new Swiper(".popular__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlices: true,
    slidesPerView: 'auto',
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  })


  return (
    <div className="App">
      {/*==================== HEADER ====================*/}
      <header className={`${scrollHeader ? 'header scroll-header' : 'header'}`} id="header">
        <nav className="nav container">
          <a className="nav__logo" href="#home"><img src="/logo.png" alt="" style={{ width: '150px', height: '100px' }} />
          <i className="bx bxs-home-alt-2">   </i>
          </a>
    
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i>< HomeIcon/></i>
                  <span>Inicio</span>
                </a>
              </li>
              <li className="nav__item">
                <a href="#popular" className="nav__link">
                <a href="tel:3153150304"><i>< CallIcon/></i></a>
                  <span>Espacios</span>
                </a>
              </li>
              <li className="nav__item">
                <a href="#gallery" className="nav__link">
                <a href="https://www.instagram.com/luna_coworking_/"><i>< InstagramIcon/></i></a>
                  <span>Oficinas y HotDesk</span>
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                <a href="https://www.facebook.com/profile.php?id=100088816520540"><i>< FacebookIcon/></i></a>
                  <span>Contacto &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
                </a>
              </li>
            </ul>
          </div>

          <a href="https://wa.link/se3b0n" className="nav__button button1">WhatsApp</a>
        </nav>
      </header>

      {/*==================== MAIN ====================*/}
      <main className="main">
        {/*==================== HOME ====================*/}
        <section className="home section" id="home">
          <div className="home__container container grid">
            <div className="home__data">
              <h1 className="home__title">
                Descubre El <br/> Mejor Espacio <br/> Para Trabajar
              </h1>

              <p className="home__description">
              ¡Imagina llegar y elegir entre un escritorio en un vibrante espacio compartido o reservar tu propia oficina privada!
              </p>

              <form action="" className="home__search">
                <i className='bx bxs-map'></i>
                <input type="search" placeholder="Cl. 5 #13e-19, Br. Colsag Cúcuta" className="home__search-input"/>
                <button className="button" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <GoogleIcon style={{ fontSize: '20px' }}/> {/* Ajusta el tamaño según tus necesidades */}
</button>

              </form>

              <div className="home__value">
                <div>
                  <h1 className="home__value-number">
                    2 <span>+</span>
                  </h1>
                  <span className="home__value-description">
                    Sala de <br/> Juntas
                  </span>
                </div>

                <div>
                  <h1 className="home__value-number">
                    300 <span>+</span>
                  </h1>
                  <span className="home__value-description">
                    Megas de <br/> Internet
                  </span>
                </div>

                <div>
                  <h1 className="home__value-number">
                    10 <span>+</span>
                  </h1>
                  <span className="home__value-description">
                    Oficinas <br/> Amobladas
                  </span>
                </div>
              </div>
            </div>

            <div className="home__images">
              <div className="home__orbe"></div>
              <div className="home__img">
                <img src={HomeImg} alt=""/>
              </div>
            </div>
          </div>
        </section>

        {/*==================== LOGOS ====================*/}
        <section className="logos section">
          <div className="logos__container container grid">
            <div className="logos__img">
              <img src={LogoImg1} alt=""/>
            </div>
            <div className="logos__img">
              <img src={LogoImg2} alt=""/>
            </div>
            <div className="logos__img">
              <img src={LogoImg3} alt=""/>
            </div>
            <div className="logos__img">
              <img src={LogoImg4} alt=""/>
            </div>
            <div className="logos__img">
              <img src={LogoImg5} alt=""/>
            </div>
            <div className="logos__img">
              <img src={LogoImg6} alt=""/>
            </div>
            <div className="logos__img">
              <img src={LogoImg7} alt=""/>
            </div>
            <div className="logos__img">
              <img src={LogoImg8} alt=""/>
            </div>
          </div>
        </section>
    
        {/*==================== POPULAR ====================*/}
        <section className="section" id="popular">
          <div className="container">
            <span className="section__subtitle">Galeria</span>
            <h2 className="section__title">
              Trabaja Donde Quieras<span>!</span>
            </h2>

            <div className="popular__container swiper">
              <div className="swiper-wrapper">
                <article className="popular__card swiper-slide">
                  <img className="popular__img" src={PopularImg1} alt=""/>

                  <div className="popular__data">
                    <h2 className="popular__price">
                  
<span><PeopleOutlineIcon className='iconito'/></span>12
                    </h2>
                    <h3 className="popular__title">
                    Zona Social
                    </h3>
                    <p className="popular__description">
                    Escoge cualquier area de nuestro coworking para hacer tu trabajo e inspirate!
                    </p>
                  </div>
                </article>

                <article className="popular__card swiper-slide">
                  <img className="popular__img" src={PopularImg2} alt=""/>

                  <div className="popular__data">
                    <h2 className="popular__price">
                    <span><PeopleOutlineIcon className='iconito'/></span>5
                    </h2>
                    <h3 className="popular__title">
                    Recepción

                    </h3>
                    <p className="popular__description">
                    Redireccionamos a tus clientes, recibimos tus pedidos e informamos cualquier novedad!
                    </p>
                  </div>
                </article>

                <article className="popular__card swiper-slide">
                  <img className="popular__img" src={PopularImg3} alt=""/>

                  <div className="popular__data">
                    <h2 className="popular__price">
                    <span><PeopleOutlineIcon className='iconito'/></span>8
                    </h2>
                    <h3 className="popular__title">
                    Diseño Innovador
                    </h3>
                    <p className="popular__description">
                    Con nuestras oficinas generaras el impacto que buscas en tus clientes potenciales!
                    </p>
                  </div>
                </article>

                <article className="popular__card swiper-slide">
                  <img className="popular__img" src={PopularImg4} alt=""/>

                  <div className="popular__data">
                    <h2 className="popular__price">
                    <span><PeopleOutlineIcon className='iconito'/></span>20
                    </h2>
                    <h3 className="popular__title">
                    Comodas
                    </h3>
                    <p className="popular__description">
                    Usa el televisor perfecto para realizar presentaciones interactivas!
                    </p>
                  </div>
                </article>

                <article className="popular__card swiper-slide">
                  <img className="popular__img" src={PopularImg5} alt=""/>

                  <div className="popular__data">
                    <h2 className="popular__price">
                    <span><PeopleOutlineIcon className='iconito'/></span>8
                    </h2>
                    <h3 className="popular__title">
                    Video Conferencias
                    </h3>
                    <p className="popular__description">
                    Reuniones: Sincroniza facilmente tus dispositivos en nuestra sala de juntas
                    </p>
                  </div>
                </article>
              </div>
              <div className="swiper-button-next">
                <i className="bx bx-chevron-right"></i>
              </div>
              <div className="swiper-button-prev">
                <i className="bx bx-chevron-left"></i>
              </div>
            </div>
          </div>
        </section>





        <section className="section" id="popular">
          <div className="container">
            <span className="section__subtitle">Elige El Mejor Para Tu Equipo De Trabajo
</span>
            <h2 className="section__title">
            Espacios Populares<span>.</span>
            </h2>

           
          </div>
        </section>









            {/*<==================== GALERIA ====================*/}
            <section className='galeria-container' id='gallery'>

              <div className='galeria-item'>
               <Galeria descripcion=" El piso está hecho de grandes baldosas grises que agregan al estética contemporánea del espacio. Las mesas son de madera clara y las sillas son negras y ergonómicas." capacidad="7" />
               </div>

               <div className='galeria-item'>
               <Galeria descripcion="Optimizada para fomentar la colaboración y la eficiencia. Con una mesa redonda central que invita al diálogo y a la toma de decisiones colectiva." capacidad="7" />
               </div>

               <div className='galeria-item'>
               <Galeria  descripcion="La iluminación brillante proviene de luces empotradas en el techo, asegurando un espacio bien iluminado para la productividad, Con escritorios de madera clara, y sillas ergonómicas." capacidad="6"/>
               </div>

               <div className='galeria-item'>
               <Galeria descripcion="Oficina con diseño moderno gracias a la estructura de paneles, Además, puedes beneficiarte de la convivencia con tu equipo de trabajo, disfruntando de un excelente confort." capacidad="6"/>
               </div>

               <div className='galeria-item'>
               <Galeria descripcion="Oficina Pequeña pero perfecta para equipos de trabajo pequeños, recuerda que puedes disfrutar sin costo de las demas extensiones que ofrecemos (sala de juntas, zona social)." capacidad="3"/>
               </div>

               <div className='galeria-item'>
               <Galeria descripcion="Oficina acogedora y funcional para equipos dinámicos. Si buscas impulsar tu proyecto en un ambiente creativo y colaborativo, donde podrás aprender, compartir con tu equipo." capacidad="4"/>
               </div>
        
          
       
        
        </section>
        {/*<==================== VALUE ====================*/}
        <section className="value section" id="value">
          <div className="value__container container grid">
            <div className="value__images">
              <div className="value__orbe"></div>
              <div className="value__img">
                <img src={ValueImg} alt=""/>
              </div>
            </div>

            <div className="value__content">
              <div className="value__data">
                <span className="section__subtitle">Hot Desk
</span>
                <h2 className="section__title">Escritorios Permanentes<span>.</span></h2>
                <p className="value__description">
                Ideal para freelancers, emprendedores y equipos remotos que buscan un lugar de trabajo profesional sin la necesidad de una oficina privada permanente, con acceso a servicios de alta velocidad de internet, impresión y áreas comunes.
                </p>
              </div>

              <div className="value__accordion">
                {accordions.map((accordion, index) => (
                  <StyledAccordion
                    key={accordion.key}
                    expanded={expanded === `panel${index+1}`}
                    onChange={handleChange(`panel${index+1}`)}
                  >
                    <StyledSummary>
                      <div className="value__accordion-header">
                        {accordion.icon}
                        <h3 className="value__accordion-title">
                          {accordion.title}
                        </h3>
                      </div>
                    </StyledSummary>
                    <StyledDetails>
                      <p className="value__accordion-description">
                        {accordion.description}
                      </p>
                    </StyledDetails>
                  </StyledAccordion>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/*<==================== CONTACT ====================*/}
        <section className="contact section" id="contact">
          <div className="contact__container container grid">
            <div className="contact__images">
              <div className="contact__orbe"></div>
              <div className="contact__img">
                <img src={ContactImg} alt="" />
              </div>
            </div>

            <div className="contact__content">
              <div className="contact__data">
                <span className="section__subtitle">Contactanos
</span>
                <h2 className="contact__title">
                Da el Primer Paso .<span></span>
                </h2>
                <p className="contact__description">
                ¡No esperes más! Contáctanos hoy y descubre cómo puedes enriquecer tu jornada laboral. En Luna Coworking Cúcuta, no solo trabajas, ¡creces y te conectas con un mundo de posibilidades!
                </p>
              </div>

              <div className="contact__card">
                <div className="contact__card-box">
                  <div className="contact__card-info">
                    <i className='bx bxs-phone-call'></i>
                    <div>
                      <h3 className="contact__card-title">
                      WhatsApp
                      </h3>
                      <p className="contact__card-description">
                      315 3150304
                      </p>
                    </div>
                  </div>
                  <a className="button contact__card-button" href="https://wa.link/se3b0n">Chatear Ya</a>
                </div>

                <div className="contact__card-box">
                  <div className="contact__card-info">
                    <i className='bx bxs-message-rounded-dots'></i>
                    <div>
                      <h3 className="contact__card-title">
                      Llamar
                      </h3>
                      <p className="contact__card-description">
                      3153150304

                      </p>
                    </div>
                  </div>
                  <a className="button contact__card-button" href="tel:3153150304">Llamar Ya</a>
                </div>

                <div className="contact__card-box">
                  <div className="contact__card-info">
                    <i className='bx bxs-video'></i>
                    <div>
                      <h3 className="contact__card-title">
                        Correo
                      </h3>
                      <p className="contact__card-description">
                      contacto@lunacoworking.co
                      </p>
                    </div>
                  </div>
                  <a className="button contact__card-button" href="mailto:contacto@lunacoworking.co">E-mail</a>
                </div>

                <div className="contact__card-box">
                  <div className="contact__card-info">
                    <i className='bx bxs-envelope'></i>
                    <div>
                      <h3 className="contact__card-title">
                        Video Llamada
                      </h3>
                      <p className="contact__card-description">
                      Recorrido Virtual

                      </p>
                    </div>
                  </div>
                  <a className="button contact__card-button" href="#">Ir a Team</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*<==================== SUBSCRIBE ====================*/}
        <section className="subscribe section">
          <div className="subscribe__container container">
            <h1 className="subscribe__title">¡Respondemos de Inmediato!</h1>
            <p className="subscribe__description">
            Animate a chatear con nuestro equipo de atención, con gusto responderemos todas tus dudas y preguntas!
            </p>
            <a className="button subscribe__button" href="https://wa.link/se3b0n">Ir a WhatsApp</a>
          </div>
        </section>
      </main>

      {/*<==================== FOOTER ====================*/}
      <footer className="footer section">
        <div className="footer__container container grid">
          <div>
            <a className="footer__logo" href="#home">
              Luna-Coworking <i className="bx bxs-home-alt-2"></i>
            </a>
            <p className="footer__description">
            Inspirate en nuestro Coworking <br />
            aprovecha nuestros espacios modernos!
            </p>
          </div>

          <div className="footer__content">
            <div>
              <h3 className="footer__title">
              Nuestro Espacio
              </h3>
              <ul className="footer__links">
                <li>
                  <a className="footer__link" href="#">
                    Inicio
                  </a>
                </li>
                <li>
                  <a className="footer__link" href="#">
                    Eventos
                  </a>
                </li>
                <li>
                  <a className="footer__link" href="#">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="footer__title">
                Coworking
              </h3>
              <ul className="footer__links">
                <li>
                  <a className="footer__link" href="#">
                    ¿Como Trabajamos?
                  </a>
                </li>
                <li>
                  <a className="footer__link" href="#">
                    Crea Contenido
                  </a>
                </li>
                <li>
                  <a className="footer__link" href="#">
                    Hot Desk
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="footer__title">
                Soporte
              </h3>
              <ul className="footer__links">
                <li>
                  <a className="footer__link" href="#">
                    Preguntas Frecuentes
                  </a>
                </li>
                <li>
                  <a className="footer__link" href="#">
                    Centro de Soporte
                  </a>
                </li>
                <li>
                  <a className="footer__link" href="#">
                    Contactanos
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="footer__title">
                Siguenos
              </h3>
              <ul className="footer__social">
                <a className="footer__social-link" href="https://www.facebook.com/profile.php?id=100088816520540" target="_blank">
                  <i className='bx bxl-facebook-circle'></i>
                </a>
                <a className="footer__social-link" href="https://www.instagram.com/luna_coworking_/" target="_blank">
                  <i className='bx bxl-instagram-alt'></i>
                </a>
            
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__info container">
          <span className="footer__copy">
        
          <a href="">&#169;Sitio Web Creado Por  <strong>eiohan7777</strong>  <GitHubIcon style={{ fontSize: '12px' }} /></a>
          </span>

          <div className="footer__privacy">
            <a href="#">Terminos y Condiciones</a>
            <a href="#">Policitas de Privacidad</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
