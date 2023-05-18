import { SideMenu } from "../menu/SideMenu";
import { HomeComponent } from "./HomeComponent";
import { Languages } from "./Languages";
import { SkillsComponent } from "./SkillsComponent";

export function ContentWrapper() {
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
