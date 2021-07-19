import React from "react"

function EntryForm() {
  return (
    <>
      <form action="">
        <table border="1px" width="100%">
          <span>
            {" "}
            <b>Add Sessions</b>{" "}
          </span>
          <tr>
            <td>City*</td>
            <td>
              <select name="" id=""></select>
            </td>
            <td>Office*</td>
            <td>
              <select name="" id=""></select>
            </td>
            <td>Date*</td>
            <td>
              <select name="" id=""></select>
            </td>
            <td>Time*</td>
            <td>
              <select name="from" id=""></select>
            </td>
            <td>
              <select name="to" id=""></select>
            </td>
          </tr>
          <tr>
            <td>Title*</td>
            <td>
              <input type="text" id="title" />
            </td>
            <td>Representative(s)</td>
            <td>
              <select name=""></select>
            </td>
          </tr>
          <tr>
            <td>Venue</td>
            <td>
              <select name="" id=""></select>
            </td>
          </tr>
          <tr>
            <td>Summary*</td>
            <td>
              <input type="text" id="summary" />
            </td>
          </tr>
          <tr>
            <td>Attachments</td>
            <td>
              <input type="file" />
            </td>
          </tr>
          <tr>
            <td id="submt" colSpan="9">
              <button id="sub">Add Session</button>
              <button>Cancel</button>
            </td>
          </tr>
        </table>
      </form>
    </>
  )
}
export default EntryForm
