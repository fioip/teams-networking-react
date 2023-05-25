import htmlLogo from "../images/html_logo.png";
import cssLogo from "../images/css_logo.png";
import jsLogo from "../images/js_logo.png";
import phpLogo from "../images/php_logo.png";
import bootstrapLogo from "../images/bootstrap_logo.jpg";
import wedding from "../images/wedding.jpg";
import macro from "../images/macro.jpg";
import christing from "../images/christing.jpg";

export function SkillsComponent() {
  return (
    <div id="skills" className="page">
      <h2 className="page-heading">Skills</h2>
      <h4 className="skills-head">Programming skills:</h4>
      <ul id="skills-list"></ul>
      <img src={htmlLogo} alt="html-logo" className="logos" />
      <img src={cssLogo} alt="css_logo" className="logos" />
      <img src={jsLogo} alt="js_logo" className="logos" />
      <img src={phpLogo} alt="php_logo" className="logos" />
      <img src={bootstrapLogo} alt="bootstrap_logo" className="logos" />

      <h4 className="skills-head">Photography skills:</h4>
      <ul id="skills-list-photo"></ul>

      <div>
        <span className="hovertext" data-hover="Wedding">
          <img src={wedding} style={{ height: "175px", width: "250px" }} />
        </span>
      </div>

      <div>
        <span className="hovertext" data-hover="Macro">
          <img src={macro} style={{ height: "175px", width: "250px" }} />
        </span>
      </div>

      <div>
        <span className="hovertext" data-hover="Christening">
          <img src={christing} style={{ height: "175px", width: "250px" }} />
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
