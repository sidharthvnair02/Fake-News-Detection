import { useCallback, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import styles from "./CheckerResult.module.css"
import { useLocation, useParams } from "react-router-dom";

const CheckerResult = () => {
  const location = useLocation();
  const result = useParams().result;

  const navigate = useNavigate();

  const onCheckMoreNewButtonClick = useCallback(() => {
    navigate("/checker");
  }, [navigate]);

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
    <div className={styles.checkerResult}>
      <img className={styles.patternIcon} alt="" src="/pattern.svg" />
      <Button
        className={styles.checkMoreNewButton}
        variant="solid"
        w="270px"
        colorScheme="buttonblue"
        as="a"
        href="/checker"
        onClick={onCheckMoreNewButtonClick}
      >
        Check More News?
      </Button>
      <img
        className={styles.fakeNewsIllustrationIcon}
        alt=""
        src="/fake-news-illustration@2x.png"
        data-animate-on-scroll
      />
      <div className={styles.textBox} data-animate-on-scroll>
        <div className={styles.textBox1} />
        <div className={styles.prediction} data-animate-on-scroll>
          Prediction 
        </div>
        <div className={styles.prediction1} data-animate-on-scroll>
          {(result==0)?<>Fake News</>:<>Real News</>}
        </div>
      </div>
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

export default CheckerResult;
