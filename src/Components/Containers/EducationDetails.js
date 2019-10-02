import React from "react";
const EducationDetails = () => {
  return (
    <div className="education">
      <h1 className="font-italic text-center">
        <i
          className="fa fa-graduation-cap"
          style={{ fontSize: "48px", color: "purple" }}
        ></i>
        Education
      </h1>
      <table className="table-custom">
        <tbody>
          <th>S.No</th>
          <th>Degree</th>
          <th>Passed Year</th>
          <th>Percentage</th>
        </tbody>
        <tbody>
          <td>01</td>
          <td>SSC</td>
          <td>2013</td>
          <td>7.3 GPA</td>
        </tbody>
        <tbody>
          <td>02</td>
          <td>Intermediate</td>
          <td>2015</td>
          <td>60.5</td>
        </tbody>
        <tbody>
          <td>03</td>
          <td>B.Tech</td>
          <td>2019</td>
          <td>70</td>
        </tbody>
      </table>
    </div>
  );
};
export default EducationDetails;
