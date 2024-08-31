import Counter from "./Counter";
import Image from 'next/image';

const About = ({ dark }) => {
  return (
    <div className="dizme_tm_section" id="about">
      <div className="dizme_tm_about">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div className="image">
                <Image
                  src={`/img/about/${dark ? 2 : 1}.jpg`}
                  alt="About Image"
                  id="aboutImg"
                  width={350} // Adjust width as needed
                  height={450} // Adjust height as needed
                />
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      <Counter end={18} />
                    </h3>
                    <span className="name">
                      Years of
                      <br />
                      Success
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      <Counter end={9} />K
                    </h3>
                    <span className="name">
                      Total
                      <br />
                      Projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title wow fadeInUp" data-wow-duration="1s">
                <span>{`I'm a Full Stack Developer`}</span>
                <h3>I Can Build Anything You Need</h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration="1s">
                <p>
                  {`Hello there! I'm a Full Stack Developer, passionate and dedicated to my craft. With years of experience in both front-end and back-end development, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the development process, from discussion and collaboration to final deployment.`}
                </p>
              </div>
              <div
                className="dizme_tm_button wow fadeInUp"
                data-wow-duration="1s"
              >
                <a className="anchor" href="#contact" id="hireMe">
                  <span>Hire Me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <Image
            src="/img/brushes/about/1.png"
            alt="Brush 1"
            width={100} // Adjust width as needed
            height={100} // Adjust height as needed
          />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <Image
            src="/img/brushes/about/2.png"
            alt="Brush 2"
            width={100} // Adjust width as needed
            height={100} // Adjust height as needed
          />
        </div>
      </div>
    </div>
  );
};

export default About;
