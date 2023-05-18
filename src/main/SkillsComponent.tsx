export function SkillsComponent() {
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
