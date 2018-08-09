import React from 'react'
import Header from '@components/Header/Header'
import Block from '@components/Block/Block'
import Title from '@components/Title/Title'
import Line from '@components/Line/Line'
import Span from '@components/Span/Span'
import IconText from '@components/IconText/IconText'
import LineBox from '@components/LineBox/LineBox'
import Portfolio from '@components/Portfolio/Portfolio'

import emailIcon from '@assets/email_icon.png'
import linkedinIcon from '@assets/linkedin_icon.png'
import githubIcon from '@assets/github_icon.png'

const HomePage = () => (
  <div>
    <Header />

    <Block>
      <Title text="BIOGRAPHY" />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Span col={8.5}>
          <p>
            “Full stack” Javascript developer with over 7 years of commercial
            experience. Extensive front end knowledge including React and other
            frame works coupled with Node and API proficiency. Passion for
            writing functional, testable, clean code that employs the latest and
            most efficient technologies + practices. Goals include improving my
            knowledge of lambda calculus, functional programming and mastering
            testing + redux.
          </p>
        </Span>
        <Span col={3.5} end>
          <IconText href="mailto:luke@designalcehmy.co.uk" icon={emailIcon}>
            luke@designalchemy.co.uk
          </IconText>
          <IconText
            href="https://www.linkedin.com/in/designalchemy/"
            icon={linkedinIcon}
          >
            /designalchemy
          </IconText>
          <IconText href="https://github.com/designalchemy" icon={githubIcon}>
            /designalchemy
          </IconText>
        </Span>
      </div>
    </Block>

    <Line />

    <Block>
      <Title text="EXPERIENCE" />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Span col={6}>
          <LineBox
            title="FULL STACK DEVELOPER"
            subTitle="Korelogic | 2016 - 2 years"
          >
            Lead developer and project manager for 6+ projects, including 2 CMS
            builds (front end, APIs and database), a socket based animated bet
            tipping display, canvas to video horse betting tips videos, a
            language translation application and a IP/hardware authentication
            system. Liaising with the customer I would spec out projects,
            distributing work between myself and other developers, ensuring a
            high quality product was always delivered within budget, on schedule
            and to the specification. Tech stack included React, Node, Express,
            Mobx, Redux, Feathers and more.
          </LineBox>
        </Span>
        <Span col={6} end>
          <LineBox
            title="FRONT END DEVELOPER"
            subTitle="Ffrees | 2014 - 2 years"
            padBottom
          >
            At Ffrees, I was part of a 2 person team responsible for the design
            and build of a online banking interface, main priority is to ensure
            cross compatibility and responsiveness across all devices and screen
            sizes.
          </LineBox>
          <LineBox title="WEB DEVELOPER" subTitle="Plusnet | 2012 - 2 years">
            Part of a 12 dev front end team responsible for maintaining, bug
            fixing and new updates to the Plusnet site. Working closely with the
            marketing team A/B testing with the goal of improving conversion.
          </LineBox>
        </Span>
      </div>
    </Block>

    <Line />

    <Block>
      <Title text="SKILLS" />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Span col={3}>
          <ul>
            <li>HTML</li>
            <li>SCSS / JSS</li>
            <li>Javascript</li>
            <li>ES2016+</li>
          </ul>
        </Span>
        <Span col={3}>
          <ul>
            <li>Node</li>
            <li>React</li>
            <li>Express</li>
            <li>Feathers</li>
          </ul>
        </Span>
        <Span col={3}>
          <ul>
            <li>Mongo / PostgreSQL </li>
            <li>Redux</li>
            <li>Mobx / MST</li>
            <li>Mocha / Chai</li>
          </ul>
        </Span>
        <Span col={3}>
          <ul>
            <li>Vue</li>
            <li>Photoshop</li>
            <li>Webpack</li>
            <li>AWS</li>
          </ul>
        </Span>
      </div>
    </Block>

    <Line />

    <Block>
      <Title text="PORTFOLIO" />
      <Portfolio />
    </Block>

    <Line />

    <Block>
      <Title text="EDUCATION" />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Span col={6}>
          <ul>
            <li>Sheffield Hallam University | Multimedia technologies</li>
          </ul>
          <p>Bsc 2:1 (hons) - 2009 - 2012</p>
        </Span>
        <Span col={6}>
          <ul>
            <li>Doncaster College | Applied ICT</li>
          </ul>
          <p>HND - AAAA - 2007 - 2009</p>
        </Span>
      </div>
    </Block>
    <Line />

    <Block>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Span col={6}>
          <Title text="CONTACT" />
          <p>EMAIL</p>
          <input type="email" name="email" />
          <p>MESSAGE</p>
          <textarea />
          <button>SEND MESSAGE</button>
        </Span>
        <Span col={6}>
          <Title text="MISC" />
          <p>
            Outside of programming I have a passion for travelling, hiking,
            fitness and cooking. In the future I would like to learn more about
            machine learning plus AI programming and have been learning Python
            to support this. I attend monthly Javascript conferences and have
            been arranging bi-monthly lectures at Korelogic to improve the teams
            and my own knowledge.
          </p>
        </Span>
      </div>
    </Block>
  </div>
)

export default HomePage
