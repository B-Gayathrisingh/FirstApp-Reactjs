import React from "react";
import "./student.css";

function Student() {
  
  const students = [
    { id: 1, name: "Alice", mark1: 85, mark2: 90 },
    { id: 2, name: "Bob", mark1: 70, mark2: 65 },
    { id: 3, name: "Charlie", mark1: 50, mark2: 55 },
    { id: 4, name: "David", mark1: 95, mark2: 92 },
  ];

  
  const getGrade = (total) => {
    if (total >= 180) return "A+";
    if (total >= 150) return "A";
    if (total >= 120) return "B";
    if (total >= 100) return "C";
    return "Fail";
  };

  return (
    <div className="student">
      <h1>Student Marks Report</h1>
      <table className="student-table">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Mark 1</th>
            <th>Mark 2</th>
            <th>Total Score</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            const total = student.mark1 + student.mark2;
            return (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.mark1}</td>
                <td>{student.mark2}</td>
                <td>{total}</td>
                <td>{getGrade(total)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Student;
