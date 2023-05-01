import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./LogInPage.module.css";
const LogInPage = () => {
  const navigate = useNavigate();

  const onButton1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.loginPage}>
      <img className={styles.patternIcon} alt="" src="/pattern.svg" />
      <img
        className={styles.loginpageillustration1Icon}
        alt=""
        src="/loginpageillustration-1@2x.png"
      />
      <form className={styles.loginPanel} method="get">
        <legend className={styles.login}>Login</legend>
        <div className={styles.option2}>
          <div className={styles.loginForm}>
            <div className={styles.input}>
              <TextField
                className={styles.inputTextField}
                color="primary"
                variant="outlined"
                type="text"
                label="Enter Your Email Address"
                placeholder="Email Address"
                size="medium"
                margin="none"
                required
              />
              <TextField
                className={styles.inputTextField}
                color="primary"
                variant="outlined"
                type="password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton aria-label="toggle password visibility">
                        <Icon>visibility</Icon>
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                label="Enter your Password"
                placeholder="Password"
                size="medium"
                margin="none"
                required
              />
              <div className={styles.forgetPass}>
                <div className={styles.checkboxmain}>
                  <FormControlLabel
                    label=""
                    control={<Checkbox color="primary" size="medium" />}
                  />
                  <div className={styles.label}>Remember Me</div>
                  <div className={styles.label1}>Label</div>
                </div>
                <Button variant="text" color="primary" href="/features">
                  Forget Password?
                </Button>
              </div>
            </div>
            <Button
              className={styles.button}
              variant="contained"
              color="primary"
              href="/checker"
              onClick={onButton1Click}
            >
              Login
            </Button>
          </div>
        </div>
        <div className={styles.forgetPass}>
          <div className={styles.newMember}>New Member?</div>
          <Button
            className={styles.button1}
            variant="text"
            color="primary"
            href="/sign-up-page"
          >
            Signup
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LogInPage;
