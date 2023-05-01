import { useState, useCallback, useEffect } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Button as ChakraButton } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import styles from "./Checker.module.css";
const Checker = () => {
  const [textBoxDateTimePickerValue, setTextBoxDateTimePickerValue] =
    useState(null);
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
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.checker}>
        <img className={styles.patternIcon} alt="" src="/pattern.svg" />
        <img
          className={styles.image1Icon}
          alt=""
          src="/image-1@2x.png"
          data-animate-on-scroll
        />
        <img
          className={styles.checker1Icon}
          alt=""
          src="/checker-1@2x.png"
          data-animate-on-scroll
        />
        <TextField
          className={styles.textBox}
          sx={{ width: 903 }}
          color="primary"
          variant="outlined"
          type="text"
          label="Author"
          placeholder="Placeholder"
          size="medium"
          margin="none"
          required
        />
        <TextField
          className={styles.textBox1}
          sx={{ width: 903 }}
          color="primary"
          variant="outlined"
          type="text"
          label="Source"
          placeholder="Placeholder"
          size="medium"
          margin="none"
          required
        />
        <TextField
          className={styles.textBox2}
          sx={{ width: 903 }}
          color="primary"
          variant="outlined"
          type="text"
          label="News"
          placeholder="Placeholder"
          size="medium"
          margin="none"
          required
        />
        <div className={styles.textBox3}>
          <DatePicker
            label="Date"
            value={textBoxDateTimePickerValue}
            onChange={(newValue) => {
              setTextBoxDateTimePickerValue(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                color="primary"
                variant="standard"
                size="medium"
                helperText=""
                required
              />
            )}
          />
        </div>
        <ChakraButton
          className={styles.generateButton}
          variant="solid"
          w="180px"
          colorScheme="buttonblue"
          size="lg"
          as="a"
          href="/checker-result"
        >
          Generate
        </ChakraButton>
        <div className={styles.enterToCheck}>Enter to Check</div>
        <nav className={styles.navigationBar}>
          <ChakraButton
            className={styles.registerButton}
            variant="solid"
            w="102.46305084228516px"
            colorScheme="buttonblue"
            size="sm"
            as="a"
            href="/sign-up-page"
          >
            Register
          </ChakraButton>
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
          <ChakraButton
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
          </ChakraButton>
        </nav>
      </div>
    </LocalizationProvider>
  );
};

export default Checker;
