import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Cogni.do</title>
        <meta property="og:title" content="Cogni.do" />
      </Helmet>
      <div className="navbar-container">
        <div className="max-width">
          <div className="home-logo">
            <img
              src="/playground_assets/group%2098%403x-500h.png"
              className="home-image"
            />
            <span className="home-text brand-Name">Cogni.do</span>
          </div>
          <div className="home-links">
            <span className="home-text01 navbar-Link">How it works</span>
            <span className="home-text02 navbar-Link">Features</span>
            <span className="home-text03 navbar-Link">Blog</span>
            <button className="home-button button button-primary">
              <span className="home-text04">
                <span>Get in the loop</span>
                <br></br>
              </span>
            </button>
          </div>
          <div className="home-burger-menu navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="home-hero hero-container section-container">
        <div className="home-max-width1 max-width">
          <div className="home-content">
            <span className="home-subtitle before-Heading">
              up-start finance system
            </span>
            <h1 className="home-title">
              <span>Decrease your cognitive load.</span>
              <br></br>
              <span>Get more done.</span>
              <br></br>
            </h1>
            <span className="home-description">
              Reduce the cognitive load on your brain. Manage tasks, plan your
              schedule, and reflect on your time all in one smart, integrated
              platform.
            </span>
            <div className="home-container01">
              <button className="button button-gradient home-button1">
                Get started
              </button>
              <button className="button button-transparent">Log in</button>
            </div>
          </div>
          <img
            alt="image"
            src="/playground_assets/group%2098%403x-500h.png"
            className="home-image1"
          />
          <div className="home-image2"></div>
        </div>
      </div>
      <div className="home-section section-container">
        <div className="home-max-width2 max-width">
          <div className="home-content1">
            <span className="home-text11 before-Heading">how it works</span>
            <h1 className="home-text12">
              Endlessly customizable to match your brain.
            </h1>
            <span className="home-text13">
              Cogni.do is customizable to the max to work best with your mental
              systems. Customize lists &amp; widgets to view your tasks, create
              goals that link directly to your tasks.
            </span>
            <div className="home-container02">
              <button className="button-secondary button bg-transparent">
                Learn more
              </button>
            </div>
          </div>
          <div className="home-container03">
            <img
              alt="image"
              src="/playground_assets/simulator%20screen%20shot%20-%20iphone%2012%20-%202022-08-23%20at%2017.22.42-300w.png"
              className="home-image3"
            />
          </div>
        </div>
      </div>
      <div className="home-section1 section-container">
        <div className="home-max-width3 max-width">
          <div className="home-content2">
            <span className="home-text14 before-Heading">save money</span>
            <h1 className="home-text15">
              <span className="home-text16">Right things,</span>
              <br></br>
              <span>Right place,</span>
              <br></br>
              <span>Right time.</span>
              <br></br>
            </h1>
            <span className="home-text22">
              See tasks in completely customizable view. Scheduling is flexible,
              like you. Schedule for a time, place. Completely customize
              scheduling rules for your tasks. Let Smart Schedule take over for
              you.
            </span>
            <div className="home-container04">
              <button className="button-secondary button bg-transparent">
                See how
              </button>
            </div>
          </div>
          <div className="home-content3">
            <span className="home-text23 before-Heading">save money</span>
            <h1 className="home-text24">
              <span className="home-text25">Right things,</span>
              <br></br>
              <span>Right place,</span>
              <br></br>
              <span>Right time.</span>
              <br></br>
            </h1>
            <span className="home-text31">
              See tasks in completely customizable view. Scheduling is flexible,
              like you. Schedule for a time, place. Completely customize
              scheduling rules for your tasks. Let Smart Schedule take over for
              you.
            </span>
            <div className="home-container05">
              <button className="button-secondary button bg-transparent">
                See how
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section2 section-container">
        <div className="home-max-width4 max-width">
          <div className="home-image4">
            <img
              alt="image"
              src="/playground_assets/jc-gellidon-fnc3yctccoi-unsplash%2014%20%5B1%5D-1200w.png"
              className="home-hero-image"
            />
          </div>
          <div className="home-content4">
            <span className="home-text32 before-Heading">get started</span>
            <h1 className="home-text33">Open your account today</h1>
            <div className="home-step">
              <div className="home-number">
                <span className="home-text34">1</span>
              </div>
              <div className="home-container06">
                <span className="home-title1">Download UpStart App</span>
                <span className="home-text35">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </span>
              </div>
            </div>
            <div className="home-step1">
              <div className="home-number1">
                <span className="home-text36">2</span>
              </div>
              <div className="home-container07">
                <span className="home-title2">Create your free account</span>
                <span className="home-text37">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </span>
              </div>
            </div>
            <div className="home-step2">
              <div className="home-number2">
                <span className="home-text38">3</span>
              </div>
              <div className="home-container08">
                <span className="home-title3">
                  Link your existing credit cards
                </span>
                <span className="home-text39">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="home-max-width5 max-width">
          <span className="home-text40 before-Heading">get started</span>
          <h1 className="home-text41">
            <span>No matter what you do,</span>
            <br></br>
            <span>UpStart will save you money</span>
          </h1>
          <div className="home-cards-container"></div>
        </div>
      </div>
      <div className="home-section4 section-container">
        <div className="home-max-width6 max-width">
          <div className="home-f-a-q">
            <div className="home-questions">
              <span className="home-text44 before-Heading">faq</span>
              <h1 className="home-text45">
                <span className="home-text46">
                  Frequently Asked
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span className="home-text48">Questions</span>
              </h1>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger">
                  <span className="home-text49">
                    Designed for neurodivergence
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-ff">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger1">
                  <span className="home-text50">Future features</span>
                  <svg viewBox="0 0 1024 1024" className="home-icon04">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text51">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger2">
                  <span className="home-text52">
                    Is this a globally available bank?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon06">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text53">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger3">
                  <span className="home-text54">
                    Do you have an iOS or Android app?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon08">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text55">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/playground_assets/group%202-1200w.png"
              className="home-image5"
            />
          </div>
          <div className="home-banner">
            <span className="home-text56 before-Heading">Beta test</span>
            <h1 className="home-text57">Get early access.</h1>
            <span className="home-text58">
              Sign up to join the public beta testing program.
            </span>
            <div className="home-btns">
              <button className="home-button6 button button-transparent">
                See all plans
              </button>
              <button className="home-button7 button button-gradient">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-links-container">
          <div className="home-container09">
            <div className="footer-column home-container10">
              <span className="home-title4">
                <span className="home-text59">GitHub</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
