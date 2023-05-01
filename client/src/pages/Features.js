import { useCallback, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import styles from "./Features.module.css";
const Features = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onLogInButtonClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <div className={styles.features}>
      <img className={styles.patternIcon} alt="" src="/pattern.svg" />
      <img
        className={styles.workInProgressIcon}
        alt=""
        src="/workinprogress@2x.png"
        data-animate-on-scroll
      />
      <nav className={styles.navigationBar}>
        <Button
          className={styles.registerButton}
          variant="solid"
          w="102.46305084228516px"
          colorScheme="buttonblue"
          size="sm"
          as="a"
          href="/sign-up-page"
        >
          Register
        </Button>
        <div className={styles.aboutButton}>
          <div className={styles.about}>About</div>
        </div>
        <a className={styles.homeButton}>
          <div className={styles.about}>Home</div>
        </a>
        <div className={styles.featuresButton}>
          <div className={styles.about}>Features</div>
        </div>
        <div className={styles.checkerButton}>
          <div className={styles.about}>Checker</div>
        </div>
        <Button
          className={styles.logInButton}
          variant="ghost"
          w="57.55768966674805px"
          colorScheme="buttonblue"
          rightIcon={<ArrowForwardIcon />}
          as="a"
          href="/login-page"
          onClick={onLogInButtonClick}
        >
          Login
        </Button>
      </nav>
    </div>
  );
};

export default Features;
