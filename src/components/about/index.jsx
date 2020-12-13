import aboutImg from 'assets/images/about.jpg'
import './about.sass'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__inner">
                <h3 className="about__title-mob">О нас</h3>
            <div className="about__content">
              <div className="about__photo">
                  <img src={aboutImg} alt=""/>
              </div>
              <div className="about__text">
                  <h3 className="about__title-dest">О нас</h3>
                  <p>
                  Мы верим в возможность люви к себе и в то, что эта любовь вaжна<br/>
                  появляться даже в мелочах. 
                  Это может быть вкусное пироженое<br/>
                  за ланчем, кофе с подругой, долгий сон в выходные дни или<br/>
                  бронирование отпуска мечты<br/>
                  <br/>
                  Иногда мелкие радости куда важнее крупных
                  </p>
              </div>
            </div>
        </div>
      </div>
  </section> 
  )
}

export default About