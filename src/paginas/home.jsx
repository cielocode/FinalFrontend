import { Link, useNavigate } from 'react-router-dom';

import { Noticias } from '../componentes/Noticias';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import anaMariaImg from '../assets/img/AnaMaria.png';
import bateristaImg from '../assets/img/Bateristamboton.png';
import beneficiariosImg from '../assets/img/beneficiarios.jpg';
import cieloImg from '../assets/img/CieloR.png';
import gislenaImg from '../assets/img/Gislena.png';
import gloriaImg from '../assets/img/GloriaG.png';
import instrumentosImg from '../assets/img/instrumentos.jpg';
import normaImg from '../assets/img/Norma.png';
import { useAuthContext } from '../context/auth';

export function Home() {
  const { login, token, user } = useAuthContext();
  const [state, setState] = React.useState({
    email: '',
    password: '',
  });
  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <main>
      <Toaster position='bottom-right' reverseOrder={true} />
      {token ? (
        <div className='container text-center'>
          <h1 className=' text-dark'>
            Bienvenid@ {user?.username} disfruta de la mejor experiencia
          </h1>
          <button
            className='btn btn-primary'
            onClick={() => navigate('/Formulario')}
          >
            Ir a donadores
          </button>
          <button
            style={{ marginLeft: '10px' }}
            className='btn btn-primary'
            onClick={() => navigate('/instrumentos')}
          >
            Ir a instrumentos
          </button>
        </div>
      ) : (
        <form
          className='row form-ingreso'
          onSubmit={(e) => {
            e.preventDefault();
            login(state);
          }}
        >
          <div className='col-12 col-lg-1' />
          <div className='col-12 col-lg-5' style={{ alignItems: 'center' }}>
            <p>
              Ingrese su correo:{' '}
              <input
                type='text'
                id='nombre'
                name='email'
                onChange={handleChange}
                value={state.email}
              />
            </p>
          </div>
          <div className='col-12 col-lg-5'>
            <p>
              Ingrese su clave:{' '}
              <input
                type='password'
                id='clave'
                name='password'
                onChange={handleChange}
                placeholder='*****'
                value={state.password}
              />
            </p>
          </div>
          <div className='col-12 col-lg-1'>
            <button type='submit'>Aceptar</button>
          </div>
        </form>
      )}

      <hr />

      <div className='container-lg'>
        <section id='services' className='services-section'>
          <div className='row title-container'>
            <h2>SERVICIOS</h2>
          </div>
          <div className='row services-info'>
            <article className='col-12 col-md-6 col-lg-4'>
              <img
                className='services-info__imagen'
                src={bateristaImg}
                alt='ni??o baterista con ollas'
              />
              <h2 className='services-info__title'>
                <Link to='/donadores'>DONACIONES</Link>
              </h2>
              <p className='services-info__text'>
                En este espacio ingresan los donantes para registrarse en la
                Fundaci??n y realizar sus donaciones de de instrumentos
                musicales.
              </p>
            </article>

            <article className='col-12 col-md-6 col-lg-4'>
              <img
                className='services-info__imagen'
                src={instrumentosImg}
                alt='instrumentos musicales'
              />
              <h2 className='services-info__title'>
                <Link to='/instituciones'>INSTITUCIONES EDUCATIVAS</Link>
              </h2>
              <p className='services-info__text'>
                Proximamente iniciaremos inscripciones para las Instituciones
                Educativas interesadas en hacer parte del proyecto ??? ??QUE NOTA
                DE FUTURO! ???
              </p>
            </article>

            <article className='col-12 col-md-6 col-lg-4'>
              <img
                className='services-info__imagen'
                src={beneficiariosImg}
                alt='ni??os con instrumentos'
              />
              <h2 className='services-info__title'>
                <Link to='/album'>ALBUM</Link>
              </h2>
              <p className='services-info__text'>
                Encuentra ac?? las fotograf??as de los ni??os beneficiarios del
                programa disfrutando de los instrumentos y llenando de alegr??a
                sus vidas.
              </p>
            </article>
          </div>
        </section>
        <hr />
        <section id='news' className='news-section'>
          <div className='row title-container'>
            <h2>NOTICIAS</h2>
          </div>
          <Noticias />
        </section>
        <hr />
        <section id='team' className='team-section'>
          <div className='row title-container'>
            <h2>EQUIPO UBUNTU</h2>
          </div>
          <div id='envoltorioServicios' className='row'>
            <article id='servicio1' className='col-12 col-md-6 col-lg-4 equipo'>
              <img className='team-info__imagen' src={anaMariaImg} alt='' />
              <center>
                <h3>Ana Mar??a Giraldo</h3>
              </center>
              <p>
                Administradora de Empresas Tur??sticas y Hoteleras, estoy
                estudiando programaci??n porque quiero hacer parte de la cuarta
                revoluci??n industrial, soy una apasionada por la ense??anza por
                que se que el futuro del mundo depende de ni??os bien preparados
                y sobremodo muy amados.
              </p>
            </article>

            <article id='servicio2' className='col-12 col-md-6 col-lg-4 equipo'>
              <img className='team-info__imagen' src={gloriaImg} alt='' />
              <center>
                <h3>Gloria Guti??rrez</h3>
              </center>
              <p>
                Dise??adora Gr??fica Publicitaria, deseo a trav??s de la
                programaci??n ofrecer opciones creativas a diferentes problemas,
                el proyecto me motiv?? porque para mis los ni??os merecen un mejor
                futuro y considero que la m??sica es importante para la vida y
                sirve para expresarse, crear v??nculos y fomentar valores.
              </p>
            </article>

            <article id='servicio3' className='col-12 col-md-6 col-lg-4 equipo'>
              <img className='team-info__imagen' src={gislenaImg} alt='' />
              <center>
                <h3>Adriana Gislena Gil</h3>
              </center>
              <p>
                Especialista en Control de Tiempo, Control de Costos y Control
                de Avance de Proyectos. Experiencia en el An??lisis de Sistemas
                de Informaci??n. El Proyecto ??Que Nota de Futuro! me ofrece la
                oportunidad de aplicar mis conocimientos con finalidad social.
              </p>
            </article>
            <article className='col-12 col-lg-2'></article>
            <article id='servicio3' className='col-12 col-md-6 col-lg-4 equipo'>
              <img className='team-info__imagen' src={cieloImg} alt='' />
              <center>
                <h3>Cielo Rueda</h3>
              </center>
              <p>
                {' '}
                Ingeniero Electr??nico, experiencia con Sistemas de Gesti??n y
                Sistemas de An??lisis de Datos. Me motiva desarrollar una
                soluci??n donde se pueda tener centralizada la informaci??n de los
                donantes y de los beneficiarios. Educar y culturizar nuestros
                ni??os y jovenes haran que ellos forgen nuestro futuro.
              </p>
            </article>
            <article id='servicio3' className='col-12 col-md-6 col-lg-4 equipo'>
              <img className='team-info__imagen' src={normaImg} alt='' />
              <center>
                <h3>Norma P. Ceballos</h3>
              </center>
              <p>
                {' '}
                Ingeniera de Software. Me encanta el proyecto porque la m??sica
                abre espacios, alienta esperanzas y facilita cumplir los sue??os
                de nuestros peque??os. La ayuda de quien puede ofrecerla con el
                alma es un pelda??o m??s para el crecimiento y proyecci??n de los
                ni??os artistas.
              </p>
            </article>
            <article className='col-12 col-lg-2'></article>
          </div>
        </section>
      </div>
    </main>
  );
}
