import fio1 from "../images/fio1.jpg";
import MainMenu from "../menu/MainMenu";

export default function AppHeader() {
  return (
    <header>
      <div id="header-wrapper">
        <img src={fio1} alt="profile pic" className="pp" />
        <div className="header-info">
          <h1 className="fio">Iuhasz P. Fiona</h1>

          <h2 id="job-title">Student at Ieti - Calculatoare @ photographer @ gamer</h2>
        </div>
        <label className="switch">
          <input
            type="checkbox"
            id="remember"
            onClick={() => {
              // darkTheme()
              console.log("To be continued darkTheme()");
            }}
          />
          <span className="slider"></span>
        </label>
      </div>
      <MainMenu />
    </header>
  );
}
