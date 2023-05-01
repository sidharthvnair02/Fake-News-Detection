import { useCallback, useEffect } from "react";
import { Button, FormControlLabel, Checkbox, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpPage.module.css";
const SignUpPage = () => {
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

  const onLoginButtonContainerClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <div className={styles.signUpPage}>
      <img className={styles.patternIcon} alt="" src="/pattern.svg" />
      <img
        className={styles.siggUpIllustration}
        alt=""
        src="/sigg-up-illustration@2x.png"
        data-animate-on-scroll
      />
      <div className={styles.formParent} data-animate-on-scroll>
        <div className={styles.form}>
          <div className={styles.signUp} />
          <Button
            className={styles.googleButton}
            sx={{ width: 252.6041717529297 }}
            variant="contained"
            color="primary"
          >
            Sign-in with google
          </Button>
          <div
            className={styles.loginButton}
            onClick={onLoginButtonContainerClick}
          >
            <div className={styles.loginButtonChild} />
            <div className={styles.createAccount}>Create account</div>
          </div>
          <div className={styles.forgotPassword}>Forgot password?</div>
          <div className={styles.termsAndPrivacyPolicy}>
            <FormControlLabel
              className={styles.termsAndPrivacyPolicyChild}
              label=""
              control={<Checkbox color="primary" size="medium" />}
            />
            <div className={styles.iAgreeToContainer}>
              <span>I agree to all the</span>
              <span className={styles.span}>{` `}</span>
              <span className={styles.terms}>Terms</span>
              <span>{` and `}</span>
              <span className={styles.terms}>{`Privacy policy `}</span>
            </div>
          </div>
          <div className={styles.rememberMe}>
            <FormControlLabel
              className={styles.termsAndPrivacyPolicyChild}
              label=""
              control={<Checkbox color="primary" size="medium" />}
            />
            <div className={styles.iAgreeToContainer}>Remember me</div>
          </div>
          <div className={styles.entryField} data-animate-on-scroll>
            <TextField
              className={styles.entryField1}
              color="primary"
              variant="outlined"
              type="text"
              label=" First Name"
              placeholder="Placeholder"
              size="medium"
              margin="none"
              required
            />
            <TextField
              className={styles.entryField2}
              color="primary"
              variant="outlined"
              type="tel"
              label="Phone Number"
              placeholder="Placeholder"
              size="medium"
              margin="none"
              required
            />
            <TextField
              className={styles.entryField3}
              color="primary"
              variant="outlined"
              type="text"
              label="Last Name"
              placeholder="Placeholder"
              size="medium"
              margin="none"
              required
            />
            <TextField
              className={styles.entryField4}
              color="primary"
              variant="outlined"
              type="email"
              label="Email ID"
              placeholder="Placeholder"
              size="medium"
              margin="none"
              required
            />
            <div className={styles.calendarMonthOutline} />
            <TextField
              className={styles.entryField5}
              color="primary"
              variant="outlined"
              type="password"
              label="Password"
              placeholder="Placeholder"
              size="medium"
              margin="none"
              required
            />
            <TextField
              className={styles.entryField6}
              color="primary"
              variant="outlined"
              type="password"
              label="Confirm password"
              placeholder="Placeholder"
              size="medium"
              margin="none"
              required
            />
          </div>
        </div>
        <b className={styles.createAccount1} data-animate-on-scroll>
          Create account
        </b>
      </div>
    </div>
  );
};

export default SignUpPage;
