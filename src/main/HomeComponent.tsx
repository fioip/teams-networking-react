import myCat from "../images/myCat.jpg";
import gamer from "../images/gamer.jpg";
import photographer from "../images/photographer.jpeg";

export function HomeComponent() {
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
