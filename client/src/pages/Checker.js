import { useState, useCallback, useEffect } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Button as ChakraButton } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import styles from "./Checker.module.css";
import axios from 'axios';

const Checker = () => {
  const [author, setAuthor] = useState("");
  const [source, setSource] = useState("");
  const [statement, setStatement] = useState("");
  const [date, setDate] = useState(new Date());

  const navigate = useNavigate();

  const handlePredict = useCallback(() => {
    // Create the data object to send in the request
    const data = {
      author: author,
      source: source,
      statement: statement,
      date: date
    };

    // Send a POST request to the server/API
    axios.post('http://127.0.0.1:5000/predict', data)
      .then(response => {
        // Handle the response from the server/API
        const result = response.data.result;
        alert('Prediction Result: $result');
      })
      .catch(error => {
        console.error(error);
      });
  }, [author, source, statement, date]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll("[data-animate-on-scroll]");
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
 

  const handleButtonClick = () => {
     // Save the state variables into your data storage
    console.log(author, source, statement, date);
    
    // Send the data to the Flask API
    fetch('/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        author: author,
        source: source,
        statement: statement,
        date: date.toISOString() // Convert the date to ISO string format
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.result);
      //alert(`The prediction result is: ${data.result}`);
      if (data.result){
        //navigate('/checker-result',{result: data.result})
        navigate(`/checker-result/${data.result}`)
      }
    })
    .catch(error => {
      console.error(error);
    });
    
    // Reset the state variables to their initial values
    setAuthor("");
    setSource("");
    setStatement("");
    setDate(new Date());


  };
  
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
          placeholder="Author"
          value = {author}
          onChange = {(e) => setAuthor(e.target.value)}
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
          placeholder="Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
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
          label="Statement"
          placeholder="Statement"
          value={statement}
          onChange={(e) => setStatement(e.target.value)}
          size="medium"
          margin="none"
          required
        />
        <div className={styles.textBox3}>
          <DatePicker
            label="Date"
            value={date}
            onChange={(newValue) => setDate(newValue)}
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
          onClick={handleButtonClick}
          //as="a"
          //href="/checker-result"
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
