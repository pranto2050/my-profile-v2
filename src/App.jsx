import './App.css';
import './Component/css/home.css';


function App() {
    return (
      <header>
      <a href="#" className="logo"><span>R</span>ichi</a>
      <ul className="navlist">
        <li><a href="#home" className="active">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="right-header">
        <a href="#" className="btn">Let qs chat <i className='bx bx-message-dots'></i></a>
        <div className="menu-icon">
          <div className="bar"></div>
        </div>
      </div>
    </header>

    );
}

export default App;
