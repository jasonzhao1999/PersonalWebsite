import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg">
        <div className="hero__blob hero__blob--1"></div>
        <div className="hero__blob hero__blob--2"></div>
        <div className="hero__blob hero__blob--3"></div>
      </div>

      <div className="hero__content container">
        <p className="hero__greeting">Hey there, I'm</p>
        <h1 className="hero__name">Jason<span className="hero__dot">.</span></h1>
        <h2 className="hero__tagline">
          I build things for the <span className="gradient-text">web</span>
        </h2>
        <p className="hero__description">
          A junior developer passionate about creating beautiful, functional
          web experiences. Currently looking for opportunities to grow and
          make an impact.
        </p>
        <div className="hero__actions">
          <a href="#projects" className="btn btn-primary">
            View My Work
            <span>&#8595;</span>
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
