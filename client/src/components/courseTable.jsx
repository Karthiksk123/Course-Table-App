import React, { useEffect, useState } from "react";
import "./courseTable.scss";
import axios from "axios";

const CourseTable = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:5000/courses");
      setCourses(res.data);
    };
    fetchData();
  }, []);

  console.log(courses);

  function getPercent(x, y) {
    return Math.ceil((x / y) * 100);
  }

  return (
    <div className="table-component">
      <div className="head-wrap">
        <h2>My Courses</h2>
        <h2>View All</h2>
      </div>
      <div className="table-wrap">
        <table>
          <tr>
            <th>Course Name</th>
            <th>Start Date</th>
            <th>Lesson Completed</th>
            <th>Duration</th>
          </tr>
          {courses.map((val, key) => (
            <tr key={key}>
              <td>
                <span>{val.courseName}</span>
                <br />
                <span> {val.lessonCount} lessons</span>
              </td>
              <td>{val.startDate}</td>
              <td>
                <span>{val.lessonCompleted}</span>/
                <span>{val.lessonCount}</span>
                &nbsp;(
                {getPercent(
                  `${val.lessonCompleted}`,
                  `${val.lessonCount}`
                ).toFixed(0)}
                %)
              </td>
              <td>{val.duration}</td>
            </tr>
          ))}
        </table>
      </div>
      <h6> --- Done by Karthik | Developer @ 2023 ---</h6>
    </div>
  );
};

export default CourseTable;
