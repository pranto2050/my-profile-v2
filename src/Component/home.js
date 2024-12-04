
import "./css/home__page.css";
function HomePage() {
    return (
      <>
        <header>
          <a href="#" className="logo"><span>P</span>ranto</a>
          <ul className="navlist">
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="right-header">
            <a href="#" className="btn">Let s chat <i className='bx bx-message-dots'></i></a>
            <div className="menu-icon">
              <div className="bar"></div>
            </div>
          </div>
        </header>
  
        <section className="home" id="home">
          <div className="hero-info">
            <h3>Welcome To my World</h3>
            <h1>Hi I am Richard</h1>
  
            <div className="text-animate">
              <h2>Frontend Developer</h2>
            </div>
  
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi rerum cupiditate delectus ullam voluptates accusamus sapiente minima deleniti cum amet.</p>
  
            <div className="btn-box">
              <a href="mailto:richard@mail.com" className="btn">Hire Me Now ! <i className='bx bx-right-arrow-alt'></i></a>
              <a href="img/resume.pdf" target="_blank" className="btn d-CV">Download CV <i className='bx bx-download'></i></a>
            </div>
  
            <div className="social-media">
              <div className="bg-icon">
                <a href="#"><i className='bx bxl-instagram'></i></a>
                <span></span>
              </div>
  
              <div className="bg-icon">
                <a href="#"><i className='bx bxl-github'></i></a>
                <span></span>
              </div>
  
              <div className="bg-icon">
                <a href="#"><i className='bx bxl-twitter'></i></a>
                <span></span>
              </div>
  
              <div className="bg-icon">
                <a href="#"><i className='bx bxl-facebook'></i></a>
                <span></span>
              </div>
            </div>
          </div>
          <div className="img-hero">
            <img src="img/hero.png" alt="Hero Image" />
            <div className="rotate-text">
              <div className="text">
                <p>I am Youtuber And I am Frontend Developer And I am Designer</p>
              </div>
              <span><i></i></span>
            </div>
          </div>
        </section>
  
        <section className="about" id="about">
          <div className="about-img">
            <img src="img/aboutMe.png" alt="About Me" className="aboutHero" />
            <div className="showcase-ring">
              <img src="shapes/ring.png" className="ring" alt="Ring" />
              <img src="shapes/circle.png" className="circle" alt="Circle" />
            </div>
          </div>
          <div className="about-content">
            <h2 className="heading">About Me</h2>
            <h3>3 Year is Experience on Product Design</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint voluptatem autem ex in. Temporibus et maiores ipsum recusandae voluptas consequatur!</p>
            <div className="about-btn">
              <button className="active">Main Skills</button>
              <button>Awards</button>
              <button>Education</button>
            </div>
            <div className="content-btn">
              <div className="content">
                <div className="text-box">
                  <p>User Experience Design - UI / UX</p>
                  <span>Delight the user and make it work.</span>
                </div>
                <div className="text-box">
                  <p>Web & User Interface Design - Development</p>
                  <span>Website , Web Experience , ...</span>
                </div>
                <div className="text-box">
                  <p>Interaction Design - Animation</p>
                  <span>I Like to move it move it</span>
                </div>
              </div>
  
              <div className="content">
                <div className="text-box">
                  <p>Web Design Award</p>
                  <span>Award for creativity and user experience.</span>
                </div>
                <div className="text-box">
                  <p>Code and Development Award</p>
                  <span>Exceptional coding skills and development techniques</span>
                </div>
                <div className="text-box">
                  <p>Hackathons and coding Competitions</p>
                  <span>Participating in hackathons and coding.</span>
                </div>
              </div>
  
              <div className="content">
                <div className="text-box">
                  <p>Online Courses and Bootcamps</p>
                  <span>Delight the user and make it work.</span>
                </div>
                <div className="text-box">
                  <p>Internships and Work Experience</p>
                  <span>Website , Web Experience , ...</span>
                </div>
                <div className="text-box">
                  <p>Bachelor s Degree in Computer Science</p>
                  <span>I Like to move it move it</span>
                </div>
              </div>
            </div>
            <div className="cvContent">
              <a href="img/resume.pdf" target="_blank" className="btn d-CV">Download CV <i className='bx bx-download'></i></a>
            </div>
          </div>
        </section>
      </>
    );
  }
  
  export default HomePage;