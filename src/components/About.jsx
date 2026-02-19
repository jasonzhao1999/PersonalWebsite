import './About.css';

const skills = [
  'Python', 'Javascript', 'React', 'HTML5', 'CSS3',
  'Git', 'Node.js', 'SQL', 'MongoDB', 'Docker', 'PHP'
];

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          A little bit about who I am!
        </p>

        <div className="about__grid">
          <div className="about__avatar">
            <img src="/jason.jpg" alt="Jason" className="about__avatar-img" />
          </div>

          <div className="about__text">
            <p>
              Hi! I'm Jason, a software engineer who loves building clean, 
              scalable full-stack applications.
              I'm always looking to deepen my understanding of system design and software architecture. 
              My peers describe me as someone who's passionate, easy-going, and great to collaborate with.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies,
              working on side projects, probably hiking somewhere! After all,
              A software developer needs a hobby that allows him to not stay
              glued to his chair for any longer than they already are!
            </p>

            <div className="about__skills">
              <h3>Tech I Work With</h3>
              <div className="about__skill-tags">
                {skills.map((skill) => (
                  <span key={skill} className="about__skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
