import React, { useEffect } from "react";
import bg from "../../assets/img/computer.gif";
import AOS from "aos";
import "aos/dist/aos.css";
import ChatBot from "react-simple-chatbot";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      {/* <!-- banner-section  --> */}
      <section className="banner-section">
        <div className="banner-slider slick-initialized slick-slider">
          {/* <button
            className="slick-prev slick-arrow"
            aria-label="Previous"
            type="button"
            style={{}}
          >
            Previous
          </button> */}
          <div className="slick-list draggable">
            <div
              className="slick-track"
              style={{
                opacity: "1",
                width: "11081px",
                // transform: translate3d("-3166px", "0px", "0px"),
              }}
            >
              {/* <div
                className="banner-slide slick-slide slick-cloned"
                data-slick-index="-1"
                id=""
                aria-hidden="true"
                // tabindex="-1"
                style={{ width: "1583px" }}
              >
                {" "}
                <img src={bg} alt="" />
                <div className="outer-box">
                  <div className="auto-container">
                    <div className="content-box">
                      {" "}
                      <span className="sub-title">
                        Next level Automation System
                      </span>
                      <h1
                        data-animation-in="fadeInLeft"
                        data-delay-in="0.2"
                        style="opacity: 0;"
                      >
                        Cast Effective Digital Marketing Agency
                      </h1>
                      <div className="btn-box">
                        {" "}
                        <a
                          href=""
                          data-animation-in="fadeInUp"
                          data-delay-in="0.4"
                          className="theme-btn"
                          //   tabindex="-1"
                          style={{ opacity: 0 }}
                        >
                          Discover More
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div
                className="banner-slide slick-slide"
                data-slick-index="0"
                aria-hidden="true"
                // tabindex="-1"
                style={{ width: "1583px" }}
              >
                {" "}
                <img src="./computer.gif" alt="" />
                <div className="outer-box">
                  <div className="auto-container">
                    <div className="content-box">
                      {" "}
                      <span className="sub-title">
                        Next level Automation System
                      </span>
                      <h1
                        data-animation-in="fadeInLeft"
                        data-delay-in="0.2"
                        className=""
                        style="opacity: 0; animation-delay: 0.2s;"
                      >
                        Cast Effective Digital Marketing Agency
                      </h1>
                      <div className="btn-box">
                        {" "}
                        <a
                          href=""
                          data-animation-in="fadeInUp"
                          data-delay-in="0.4"
                          className="theme-btn"
                          tabindex="-1"
                          style={{ opacity: 0, animationDelay: "0.4s" }}
                        >
                          Discover More
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div
                className="banner-slide slick-slide slick-current slick-active"
                data-slick-index="1"
                aria-hidden="false"
                // tabindex="0"
                style={{ width: "1583px" }}
              >
                {" "}
                <img src={bg} alt="" />
                <div className="outer-box">
                  <div className="auto-container">
                    <div className="content-box">
                      {" "}
                      <span
                        className="sub-title fadeInUp animated"
                        data-animation-in="fadeInUp"
                        data-delay-in="0.2"
                        style={{
                          opacity: "1",
                          animationDelay: "0.2s",
                          marginBottom: "-25px",
                          background: "transparent",
                          fontSize: "x-large",
                        }}
                      >
                        US IT RESOURCES
                      </span>
                      <h1
                        data-animation-in="fadeInLeft"
                        data-delay-in="0.2"
                        style={{ opacity: "1", animationDelay: "0.2s" }}
                        className="fadeInLeft animated"
                      >
                        Best Technology Solutions for Large Businesses{" "}
                      </h1>
                      <div className="btn-box">
                        {" "}
                        <a
                          href=""
                          data-animation-in="fadeInUp"
                          data-delay-in="0.4"
                          className="theme-btn fadeInUp animated"
                          //   tabindex="0"
                          style={{ opacity: "1", animationDelay: "0.2s" }}
                        >
                          Discover More
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="banner-slide slick-slide"
                data-slick-index="2"
                aria-hidden="true"
                // tabindex="-1"
                style={{ width: "1583px" }}
              >
                {" "}
                <img src={bg} alt="" />
                <div className="outer-box">
                  <div className="auto-container">
                    <div className="content-box">
                      {" "}
                      <span className="sub-title">
                        Next level Automation System
                      </span>
                      <h1
                        data-animation-in="fadeInLeft"
                        data-delay-in="0.2"
                        style={{ opacity: "1", animationDelay: "0.2s" }}
                        className=""
                      >
                        Cast Effective Digital Marketing Agency
                      </h1>
                      <div className="btn-box">
                        {" "}
                        <a
                          href=""
                          data-animation-in="fadeInUp"
                          data-delay-in="0.4"
                          className="theme-btn"
                          //   tabindex="-1"
                          style={{ opacity: "1", animationDelay: "0.2s" }}
                        >
                          Discover More
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="banner-slide slick-slide slick-cloned"
                data-slick-index="3"
                id=""
                aria-hidden="true"
                // tabindex="-1"
                style={{ width: "1583px" }}
              >
                {" "}
                <img src="./computer.gif" alt="" />
                <div className="outer-box">
                  <div className="auto-container">
                    <div className="content-box">
                      {" "}
                      <span className="sub-title">
                        Next level Automation System
                      </span>
                      <h1
                        data-animation-in="fadeInLeft"
                        data-delay-in="0.2"
                        style={{ opacity: 0 }}
                      >
                        Cast Effective Digital Marketing Agency
                      </h1>
                      <div className="btn-box">
                        {" "}
                        <a
                          href=""
                          data-animation-in="fadeInUp"
                          data-delay-in="0.4"
                          className="theme-btn"
                          //   tabindex="-1"
                          style={{ opacity: 0 }}
                        >
                          Discover More
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="banner-slide slick-slide slick-cloned"
                data-slick-index="4"
                id=""
                aria-hidden="true"
                // tabindex="-1"
                style={{ width: "1583px" }}
              >
                {" "}
                <img src={bg} alt="" />
                <div className="outer-box">
                  <div className="auto-container">
                    <div className="content-box">
                      {" "}
                      <span
                        className="sub-title"
                        data-animation-in="fadeInUp"
                        data-delay-in="0.2"
                        style={{ opacity: 0 }}
                      >
                        Next level Automation System
                      </span>
                      <h1
                        data-animation-in="fadeInLeft"
                        data-delay-in="0.2"
                        style={{ opacity: 0 }}
                      >
                        Cast Effective Digital Marketing Agency
                      </h1>
                      <div className="btn-box">
                        {" "}
                        <a
                          href=""
                          data-animation-in="fadeInUp"
                          data-delay-in="0.4"
                          className="theme-btn"
                          //   tabindex="-1"
                          style={{ opacity: 0 }}
                        >
                          Discover More
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="banner-slide slick-slide slick-cloned"
                data-slick-index="5"
                id=""
                aria-hidden="true"
                // tabindex="-1"
                style={{ width: "1583px" }}
              >
                {" "}
                <img src={bg} alt="" />
                <div className="outer-box">
                  <div className="auto-container">
                    <div className="content-box">
                      {" "}
                      <span className="sub-title">
                        Next level Automation System
                      </span>
                      <h1
                        data-animation-in="fadeInLeft"
                        data-delay-in="0.2"
                        style={{ opacity: 0 }}
                      >
                        Cast Effective Digital Marketing Agency
                      </h1>
                      <div className="btn-box">
                        {" "}
                        <a
                          href=""
                          data-animation-in="fadeInUp"
                          data-delay-in="0.4"
                          className="theme-btn"
                          //   tabindex="-1"
                          style={{ opacity: 0 }}
                        >
                          Discover More
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <button
            className="slick-next slick-arrow"
            aria-label="Next"
            type="button"
            style={{}}
          >
            Next
          </button> */}
        </div>
      </section>
      {/* <!-- End banner-section --> */}

      <ChatBot
        steps={[
          {
            id: "waiting",
            message: "Hi there!",
            trigger: "AskName",
          },
          {
            id: "AskName",
            message: "Please enter your name.",
            trigger: "WaitingForName",
          },
          {
            id: "WaitingForName",
            user: true,
            trigger: "AskNumber",
          },
          {
            id: "AskNumber",
            message: "Hello {previousValue}! May I Know your number, please?",
            trigger: "WaitingForNumber",
          },
          {
            id: "WaitingForNumber",
            user: true,
            trigger: "AskEmail",
          },
          {
            id: "AskEmail",
            message: "Great! What is your email address?",
            trigger: "WaitingForEmail",
          },
          {
            id: "WaitingForEmail",
            user: true,
            trigger: "AskPurpose",
          },
          {
            id: "AskPurpose",
            message:
              "Thanks! Why are you here today? Please provide a brief purpose.",
            trigger: "WaitingForPurpose",
          },
          {
            id: "WaitingForPurpose",
            user: true,
            trigger: "ShowThanks",
          },
          {
            id: "ShowThanks",
            message:
              "Thank you for providing the information. We appreciate it!",
            end: true,
          },
        ]}
        floating={true}
      />
    </>
  );
}
