import cat from "../images/cat.png";
import catInverted from "../images/cat-inverted.png";

export function SideMenu() {
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
