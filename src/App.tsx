import logo from "./logo.svg";
import cat from "./images/cat.png";
import catInverted from "./images/cat-inverted.png";
import myCat from "./images/myCat.jpg";
import gamer from "./images/gamer.jpg";
import photographer from "./images/photographer.jpeg";

import React from "react";
import "./App.css";
import { AppFooter } from "./footer/components";
import AppHeader from "./header";

function ContentWrapper() {
  return (
    <section id="content">
      <SideMenu />

      <div id="main">
        <HomeComponent />

        <SkillsComponent />

        <Languages />

        <div id="photography" className="page">
          <h2 className="page-heading">PHOTOGRAPHY</h2>
          <h3>COMING SOON...</h3>
        </div>

        <div id="rubik" className="page">
          <h2 className="page-heading">RUBIK</h2>
          <h3>COMING SOON...</h3>
        </div>
      </div>
    </section>
  );
}

function Languages() {
  return (
    <div id="languages" className="page" style={{ display: "block" }}>
      <h2 className="page-heading">KNOWN LANGUAGES</h2>
      <table>
        <thead>
          <tr>
            <th>Language</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Romanian</td>
            <td>Native</td>
          </tr>
          <tr>
            <td>Hungarian</td>
            <td>Conversation level</td>
          </tr>
          <tr>
            <td>English</td>
            <td>C1</td>
          </tr>
          <tr>
            <td>German</td>
            <td>Begginer</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function SkillsComponent() {
  return (
    <div id="skills" className="page">
      <h2 className="page-heading">Skills</h2>
      <h4 className="skills-head">Programming skills:</h4>
      <ul id="skills-list"></ul>
      <img src="images/html_logo.png" alt="html-logo" className="logos" />
      <img src="images/css_logo.png" alt="css_logo" className="logos" />
      <img src="images/js_logo.png" alt="js_logo" className="logos" />
      <img src="images/php_logo.png" alt="php_logo" className="logos" />
      <img src="images/bootstrap_logo.jpg" alt="bootstrap_logo" className="logos" />

      <h4 className="skills-head">Photography skills:</h4>
      <ul id="skills-list-photo"></ul>

      <div>
        <span className="hovertext" data-hover="Wedding">
          <img src="images/wedding.jpg" style={{ height: "175px", width: "250px" }} />
        </span>
      </div>

      <div>
        <span className="hovertext" data-hover="Macro">
          <img src="images/macro.jpg" style={{ height: "175px", width: "250px" }} />
        </span>
      </div>

      <div>
        <span className="hovertext" data-hover="Christening">
          <img src="images/christing.jpg" style={{ height: "175px", width: "250px" }} />
        </span>
      </div>

      <div>
        <span className="hovertext" data-hover="Portrait">
          <img src="images/portrait2.jpg" style={{ height: "175px", width: "250px" }} />
        </span>
      </div>

      <div>
        <span className="hovertext" data-hover="Landscape">
          <img src="images/landscape.jpg" style={{ height: "175px", width: "250px" }} />
        </span>
      </div>

      <div>
        <span className="hovertext" data-hover="Festivals">
          <img src="images/festivals.jpg" style={{ height: "175px", width: "250px" }} />
        </span>
      </div>
    </div>
  );
}

function HomeComponent() {
  return (
    <div id="home" className="page">
      <h2 className="page-heading">HOME</h2>
      <div id="main-text">
        <h3 className="skills-head">Hi there!</h3>

        <p>
          This page is about me, an 18 year old student who likes to take photos and would like that passion to be a
          further job.
        </p>
        <p>Also, this thing with web dev would be a cool job, ngl 😊</p>

        <h3 className="skills-head">Small details about me:</h3>
        <ul id="meDetails">
          <li>love cats</li>
          <li>my cat is 12</li>
          <li>like gaming</li>
          <li>like web development</li>
          <li>wedding photographer</li>
          <li>favorite color: green</li>
          <li>favorite food: pizza or burger</li>
          <li>been a gamer since 6 years old</li>
          <li>discovered my passion for photography at 16</li>
        </ul>

        <div>
          <span className="hovertext" data-hover="My cat">
            <img src={myCat} style={{ height: "175px", width: "250px" }} />
          </span>
        </div>

        <div>
          <span className="hovertext" data-hover="Gamer">
            <img src={gamer} style={{ height: "175px", width: "250px" }} />
          </span>
        </div>

        <div>
          <span className="hovertext" data-hover="Photographer">
            <img src={photographer} style={{ height: "175px", width: "250px" }} />
          </span>
        </div>
      </div>
    </div>
  );
}

function SideMenu() {
  return (
    <div id="side-menu">
      <section id="page-left">
        <h2 className="page-heading">Subscriber email</h2>
        <form action="">
          <div>
            <label htmlFor="subscriberEmail">
              {" "}
              <strong> Email: </strong>
            </label>
            <input type="email" name="email" id="subscriberEmail" required placeholder="your@email.com" />
          </div>

          <div>
            <label htmlFor="subscriber">
              <strong> Name: </strong>
            </label>
            <input type="text" name="nume" id="subscriber" required placeholder="full name" />
          </div>
          <button type="submit" className="sbutton">
            Subscribe
          </button>
        </form>
      </section>
      <div className="figures">
        <img src={cat} alt="poza" id="imageMain" />
        <img src={catInverted} alt="poza" id="imageHover" />
      </div>
    </div>
  );
}

function App() {
  return (
    // React.Fragment
    <>
      <AppHeader />
      <ContentWrapper />
      <AppFooter />
    </>
  );
}

function Old_App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
