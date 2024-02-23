import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <div className="container">
          <h1 className="logo">Syed Jawad Shah</h1>
          <nav>
            <ul>
              <li>
                <a href="#" className="nav-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Contact Me
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className="firstsectionanimated">
          <div className="leftsection">
            Hi, I'm <span id="typed-output" className="purple"></span>
          </div>
          <div className="rightsection">
            <img src="pp.jpeg" alt="Web Developer" className="animated-img" />
          </div>
        </section>
        <section className="secondsectionanimated">
          <div className="container">
            <hr className="aesthetic-line" />
            <h2>Work experience</h2>
            <p id="experience-text">
              Over four years, I have cultivated expertise in Node.js, excelling
              in building scalable backend solutions, crafting RESTful APIs, and
              optimizing application performance. In my second year, my focus
              shifted to SQL, showcasing adeptness in designing, managing, and
              optimizing relational databases for seamless data retrieval. Year
              three saw my proficiency in React.js, where I mastered
              component-based architecture, state management, and API
              integration, creating responsive and interactive user interfaces.
              Finally, in year four, I delved into Next.js, utilizing its
              server-side rendering capabilities to develop dynamic and
              efficient web applications with features like automatic code
              splitting. My diverse skill set encompasses backend development,
              database management, and front-end frameworks, reflecting my
              commitment to delivering robust and user-friendly digital
              experiences.
            </p>
          </div>
        </section>
        <section className="timeline-sectionanimated">
          <hr className="aesthetic-line" />
          <h2>Work Timeline</h2>
          <div className="timeline">
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-year">Year 1</div>
                <div className="timeline-content">
                  <h3>node.js</h3>
                  <p>
                    During my professional journey, I have acquired valuable
                    experience in Node.js, a powerful server-side JavaScript
                    runtime. I have successfully leveraged Node.js to develop
                    scalable and efficient backend solutions for various
                    projects. My expertise includes building RESTful APIs,
                    handling asynchronous operations with ease, and utilizing
                    the event-driven architecture of Node.js to enhance
                    application performance. I am adept at using popular
                    frameworks like Express.js to streamline the development
                    process and create robust web applications. My experience in
                    Node.js extends to working with databases, implementing
                    authentication systems, and ensuring the overall
                    responsiveness of web applications. Through continuous
                    learning and practical application, I have honed my skills
                    in Node.js to contribute effectively to the dynamic field of
                    web development.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">Year 2</div>
                <div className="timeline-content">
                  <h3>SQL</h3>
                  <p>
                    In my professional journey, I have acquired substantial
                    experience in SQL, demonstrating proficiency in managing and
                    manipulating relational databases. Throughout various
                    projects, I have effectively utilized SQL to design and
                    optimize database structures, construct complex queries, and
                    ensure seamless data retrieval and modification. My
                    expertise extends to tasks such as data normalization,
                    indexing, and performance tuning, contributing to the
                    overall efficiency and reliability of database systems.
                    Additionally, I have employed SQL for tasks like data
                    analysis, reporting, and integration with other
                    technologies, showcasing a comprehensive understanding of
                    database management and a commitment to delivering
                    data-driven solutions.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">Year 3</div>
                <div className="timeline-content">
                  <h3>React.js</h3>
                  <p>
                    During my journey as a web developer, I have gained valuable
                    experience in React.js, a powerful and widely-used
                    JavaScript library for building user interfaces. I have
                    successfully leveraged React's component-based architecture
                    to create dynamic and efficient front-end applications.
                    Through hands-on projects, I have mastered state management,
                    component lifecycle methods, and the virtual DOM, enabling
                    me to build responsive and interactive user interfaces.
                    Additionally, my proficiency extends to integrating React
                    applications with RESTful APIs, ensuring seamless data flow
                    and optimal performance. Overall, my experience in React.js
                    has equipped me with the skills to develop modern and
                    scalable web applications that meet the demands of today's
                    dynamic digital landscape.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">Year 4</div>
                <div className="timeline-content">
                  <h3>Next.js</h3>
                  <p>
                    In my professional journey, I have gained valuable
                    experience in utilizing Next.js, a powerful React framework.
                    Working extensively with Next.js, I've developed efficient
                    and dynamic web applications that leverage its server-side
                    rendering capabilities, enhancing performance and user
                    experience. Leveraging features like automatic code
                    splitting and optimized routing, I've been able to create
                    scalable and maintainable projects. My proficiency in
                    handling data fetching, both on the server and client side,
                    has allowed me to build interactive and fast-loading
                    applications. Overall, my experience with Next.js has
                    significantly contributed to my expertise in modern web
                    development, enabling me to create robust and user-friendly
                    digital experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="aesthetic-line" />
        <section className="social-icons">
          <div className="containersocial-icons">
            <a
              href="https://www.linkedin.com/in/syed-jawad-shah-06974b206/"
              target="_blank"
              className="social-link"
            >
              <img
                src="LinkedInlogo.png"
                alt="LinkedIn Logo"
                className="social-icon-img"
              />
              Click here to access my LinkedIn account
            </a>
            <a
              href="https://github.com/jawad1529"
              target="_blank"
              className="social-link"
            >
              <img
                src="/GitHublogo.png"
                alt="/GitHub Logo"
                className="/social-icon-img"
              />
              Click here to access my github
            </a>
            <a
              href="mailto:syedjawadshah00@gmail.com"
              target="_blank"
              className="social-link"
            >
              <img
                src="/email.png"
                alt="Email Logo"
                className="social-icon-img"
              />
              Click here to contact me through mail
            </a>
            <br />
            <br />
            <br />
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>
            &copy; <span id="currentYear"></span> Syed Jawad Shah's portfolio.
            All rights reserved.
          </p>
          <p>Designed and developed by Syed Jawad Shah</p>
        </div>
      </footer>
    </>
  );
}
