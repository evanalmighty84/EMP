import React from "react";
import "./styles.css";

const UserProfile = (props) => {
  return (
    <div>
      <h1>Personal Information</h1>
      <ul className="profile-list">
        {props.data.map((content) => (
          <li>
            <span>
              <strong>ID:</strong> this is {content.id}
            </span>
            <span>
              <strong>First Name:</strong> {content.brand}
            </span>

            {content.emails.map((details, index) => (
              <React.Fragment>
                <table>
                  <th>emails </th>
                  <tr>Course: ID:{details.emailAddress}</tr>
                  <tr>First Name:{details.firstName}</tr>
                  <tr>Last Name:{details.lastName}</tr>
                </table>
              </React.Fragment>
            ))}

            {content.licenses.map((details, index) => (
              <React.Fragment>
                <table>
                  <th>licenses </th>
                  <tr>Create Date:{details.CreateDate}</tr>
                  <tr>license type:{details.licenseType}</tr>
                  <tr>Last Name:{details.lastName}</tr>
                </table>
              </React.Fragment>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
