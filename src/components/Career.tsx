import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Software Engineer</h4>
                <h5>iVolve Technologies</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Leading architecture and development of high-traffic
              microservice-based full stack applications using TypeScript,
              React.js, Next.js, Nest.js, and FastAPI. Directing engineering teams
              in building monorepo microfrontend systems, driving system
              performance improvements, and defining code review standards and
              CI/CD pipeline strategies across AWS, GCP, and Azure.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>iVolve Technologies</h5>
              </div>
              <h3>2021 – 2025</h3>
            </div>
            <p>
              Nov 2021 – Dec 2025. Designed and developed full stack
              microservice-based web applications using TypeScript, React.js,
              Next.js, Nest.js, Express.js, FastAPI, Django, and Flask. Built and
              scaled frontend and backend systems, maintained monorepo-based
              microfrontend architectures, and deployed containerized solutions
              using Docker across AWS, GCP, VMware, and OpenStack.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Trainee Software Engineer</h4>
                <h5>iVolve Technologies</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Aug 2021 – Nov 2021. Completed intensive TypeScript and full stack
              training; contributed to documentation and assisted in maintaining
              production software applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Internee Engineer</h4>
                <h5>The General Tyre and Rubber Company</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              May 2019 – Jun 2019. Programmed and debugged PLCs for industrial
              automation; commissioned a fabric cutting machine and designed
              Siemens HMI interfaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
