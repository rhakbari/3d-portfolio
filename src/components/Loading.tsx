import { useEffect, useRef, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";
import Marquee from "react-fast-marquee";

const Loading = () => {
  const { modelReady, setIsLoading } = useLoading();
  const [percent, setPercent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [hidden, setHidden] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const percentRef = useRef(0);

  // Simulate progress while model loads
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      if (percentRef.current < 90) {
        const increment =
          percentRef.current < 40
            ? Math.random() * 6 + 1
            : Math.random() * 2 + 0.5;
        percentRef.current = Math.min(90, percentRef.current + increment);
        setPercent(Math.round(percentRef.current));
      }
    }, 150);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // When model is ready, complete the progress bar
  useEffect(() => {
    if (!modelReady) return;
    if (intervalRef.current) clearInterval(intervalRef.current);

    const finishInterval = window.setInterval(() => {
      percentRef.current += 3;
      if (percentRef.current >= 100) {
        percentRef.current = 100;
        setPercent(100);
        clearInterval(finishInterval);
        setTimeout(() => setLoaded(true), 400);
      } else {
        setPercent(Math.round(percentRef.current));
      }
    }, 20);

    return () => clearInterval(finishInterval);
  }, [modelReady]);

  // Auto-transition out after showing "Welcome"
  useEffect(() => {
    if (!loaded) return;
    const timer = setTimeout(() => {
      setExiting(true);
      import("./utils/initialFX").then((module) => {
        if (module.initialFX) module.initialFX();
      });
      setTimeout(() => {
        setHidden(true);
        setIsLoading(false);
      }, 1200);
    }, 800);
    return () => clearTimeout(timer);
  }, [loaded, setIsLoading]);

  if (hidden) return null;

  return (
    <>
      <div className={`loading-header ${exiting ? "loading-header-exit" : ""}`}>
        <a href="/#" className="loader-title" data-cursor="disable">
          AM
        </a>
        <div className={`loaderGame ${exiting ? "loader-out" : ""}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, index) => (
                <div className="loaderGame-line" key={index}></div>
              ))}
            </div>
            <div className="loaderGame-ball"></div>
          </div>
        </div>
      </div>
      <div
        className={`loading-screen ${exiting ? "loading-screen-exit" : ""}`}
      >
        <div className="loading-marquee">
          <Marquee>
            <span> Full Stack Developer</span> <span>Software Engineer</span>
            <span> Full Stack Developer</span> <span>Software Engineer</span>
          </Marquee>
        </div>
        <div className={`loading-wrap ${exiting ? "loading-clicked" : ""}`}>
          <div className="loading-hover"></div>
          <div className={`loading-button ${loaded ? "loading-complete" : ""}`}>
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading <span>{percent}%</span>
                </div>
              </div>
              <div className="loading-box"></div>
            </div>
            <div className="loading-content2">
              <span>Welcome</span>
            </div>
          </div>
        </div>
        <div className="loading-progress-track">
          <div
            className="loading-progress-bar"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </>
  );
};

export default Loading;
