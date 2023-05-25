import "./style.css";

export function Teams() {
  return (
    <form id="editForm" action="" method="POST">
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
        <tbody></tbody>
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
