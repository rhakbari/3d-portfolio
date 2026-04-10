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
                <h4>Software Engineer</h4>
                <h5>iVolve Technologies</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designing and building full-stack microservice-based web applications
              with TypeScript, React, Next.js, Nest.js, Express.js, FastAPI, and
              Django. Architecting REST and GraphQL APIs, maintaining monorepo
              microfrontends, managing cloud infrastructure on AWS, GCP, VMWare,
              and OpenStack, and shipping containerized Docker deployments with
              CI/CD pipelines.
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
              Aug 2021 – Nov 2021. Completed intensive training in TypeScript and
              modern software development practices. Contributed to documentation
              and assisted in developing and maintaining software applications.
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
              May 2019 – Jun 2019. Programmed and debugged PLCs, commissioned a
              new fabric cutting machine for tyres, conducted electrical system
              analysis, and designed UI on Siemens HMI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
