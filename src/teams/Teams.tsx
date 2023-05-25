import "./style.css";

export function Teams(props) {
  console.warn("props", props);
  return (
    <form id="editForm" action="" method="POST" className={props.loading ? "loading-mask" : ""}>
      <table id="teams">
        <thead>
          <tr>
            <th>Group</th>
            <th>Members</th>
            <th>Project Name</th>
            <th>Project URL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.teams.map(({ promotion, members, name, url, id }) => (
            <tr key={id}>
              <td>{promotion}</td>
              <td>{members}</td>
              <td>{name}</td>
              <td>
                <a href="${url}" target="_blank">
                  {url.replace("https://github.com/", "")}
                </a>
              </td>
              <td>
                <a data-id="${id}" className="remove-btn">
                  {" "}
                  ✖{" "}
                </a>
                <a data-id="${id}" className="edit-btn">
                  {" "}
                  &#9998;{" "}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <input type="text" name="promotion" id="promotion" placeholder="Enter Group" required />
            </td>
            <td>
              <input type="text" name="members" id="members" placeholder="Enter Members" required />
            </td>
            <td>
              <input type="text" name="name" id="name" placeholder="Enter Project Name" required />
            </td>
            <td>
              <input type="text" name="url" id="url" placeholder="Project URL" required />
            </td>
            <td>
              <button type="submit" title="Save">
                💾
              </button>
              <button type="reset" title="Cancel">
                ✖
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </form>
  );
}

export function TeamsTableWrapper() {
  const teams = [
    {
      id: "toze8j1610313009673",
      promotion: "html",
      members: "Nicolae Matei, HTML",
      name: "Web Presentation",
      url: "https://github.com/nmatei/web-intro-presentation"
    },
    {
      id: "ezabnf1630345987541",
      promotion: "css",
      members: "Nicolae",
      name: "Names",
      url: "https://github.com/nmatei/nmatei.github.io"
    },
    {
      id: "86mq81630347385708",
      promotion: "js",
      members: "Matei, Andrei",
      name: "JS/HTML/CSS Quiz",
      url: "https://github.com/nmatei/simple-quiz-app"
    },
    {
      id: "lgc7c1679590352971",
      promotion: "da",
      members: "da",
      name: "da",
      url: "da"
    },
    {
      id: "gqk81679591993711",
      promotion: "ada",
      members: "ada",
      name: "ada",
      url: "ada"
    },
    {
      id: "13atzy1679592546309",
      promotion: "Fio",
      members: "Fio",
      name: "Fio",
      url: "Fio"
    },
    {
      id: "6o490v1679592803803",
      promotion: "Rox",
      members: "Rox",
      name: "Rox",
      url: "Rox"
    },
    {
      id: "bh3b61680798473339",
      promotion: "Ana",
      members: "are",
      name: "mere",
      url: "anaaremere.io"
    },
    {
      id: "5w9ps1680800870404",
      promotion: "js",
      members: "js",
      name: "js",
      url: "js"
    },
    {
      id: "qwhrl41680801144323",
      promotion: "Adriana",
      members: "are",
      name: "mere",
      url: "Pere"
    }
  ];

  return (
    <>
      <Teams teams={[]} loading={true} />
      <hr />
      <Teams teams={[]} loading={false} />
      <hr />
      <Teams teams={teams} loading={true} />
      <hr />
      <Teams teams={teams} loading={false} />
    </>
  );
}
