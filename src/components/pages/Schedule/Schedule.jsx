import React, { useState, useRef, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import img from "../../../assets/img/img.jpg";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { EmailContext } from "../Context/ContextMail";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import emailjs from "emailjs-com";

dayjs.extend(utc);
dayjs.extend(timezone);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: "none",
  boxShadow: "none",
}));

export default function Schedule() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [storedData, setStoredData] = useState(null);
  const { userData } = useContext(EmailContext);
  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData")) || {
      name: null,
      email: null,
    };
    setStoredData(storedUserData);
  }, []);
  console.log(storedData, "so");
  const sendMail = () => {
    const templateParams = {
      // Set your email template variables here
      to_email: storedData.email, // Email address where you want to send the email
      // Other template variables...
    };

    emailjs
      .send(
        "service_xj0e45n", // Your EmailJS service ID
        "template_mnmppi3", // Your EmailJS template ID
        templateParams,
        "QN6v275vBUqJa3yid" // Your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully", result.text);
        },
        (error) => {
          console.error("Failed to send email", error.text);
        }
      );
    // e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_xj0e45n",
    //     "template_mnmppi3",
    //     form.current,
    //     "QN6v275vBUqJa3yid"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    if (selectedDate != null) {
      const formattedTime = dayjs(selectedDate)
        .tz("Asia/KolKata")
        .format("DD/MM/YYYY hh:mm A");

      toast.success(`Your meeting has been scheduled on ${formattedTime}  `);
      setTimeout(() => {
        setSelectedDate(null);
      }, 500);
      setStoredData(null);
      localStorage.removeItem("userData");
    } else {
      toast.error("Please select date and time");
    }
  };

  console.log("selectedDate", selectedDate);

  return (
    <Box style={{ marginTop: "120px" }} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8} md={12}>
          <Item>
            <h3>Awesome! Let’s find some time for you and us to chat</h3>
            <p>
              We will reach out to you shortly. If you would like to speak with
              us immediately, please schedule a call here
            </p>
            <p>
              Hi <b>{storedData?.name}</b>, Your Email Address is{" "}
              <b>{storedData?.email}</b>
            </p>
          </Item>
        </Grid>
      </Grid>
      {/* <form ref={form} onSubmit={sendMail}> */}
      <Grid style={{ margin: "8px" }} container spacing={2}>
        <Grid item md={5} xs={8}>
          <Item>
            <img className="rounded" src={img} alt="profile" />
          </Item>
        </Grid>
        <Grid item md={3} xs={8}>
          <Item>
            <h1>Schedule your meet</h1>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateTimePicker"]}>
                <DateTimePicker
                  label="Meeting Date and Time"
                  name="message"
                  value={selectedDate}
                  onChange={(newValue) => setSelectedDate(newValue)}
                />
              </DemoContainer>
            </LocalizationProvider>
            <Button
              style={{ marginTop: "9px" }}
              marginTop
              color="success"
              variant="contained"
              type="submit"
              onClick={sendMail}
            >
              Schedule Meeting
            </Button>
          </Item>
        </Grid>
      </Grid>
      {/* </form> */}

      <ToastContainer position="top-center" />
    </Box>
  );
}
