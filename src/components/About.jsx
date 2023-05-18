import aboutImg from '../images/nosotros.jpg';
import Title from './Title';

const About = () => {
  return (
    <section className='section' id='acerca'>
      <Title title='acerca' subTitle='nosotros' />

      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={aboutImg} className='about-photo' alt='awesome beach' />
        </div>
        <article className='about-info'>
          <h3>Sobre nosotros</h3>
          <p>
          Nuestra misión es diseñar, desarrollar e implementar sistemas computacionales
           de vanguardia que impulsen el crecimiento y el éxito de nuestros alumnos.
          </p>
          <p>
          En cada proyecto que emprendemos, nos esforzamos por alcanzar la excelencia, 
          buscamos la perfección en cada línea de código, en cada diseño de arquitectura 
          y en cada interacción del usuario. Nuestro objetivo es crear soluciones que sean 
          eficientes, escalables y confiables, para impulsar el éxito a largo plazo de nuestros clientes.
          </p>
          <a href='#' className='btn'>
            mas informacion
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;