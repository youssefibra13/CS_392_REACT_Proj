import React from 'react';

const CourseList = ({ course, selectedTerm }) => {

  const filteredCourses = Object.entries(course.courses)
    .filter(([courseKey, coursedata]) => coursedata.term === selectedTerm)
    .map(([coursekey, coursedata]) => (
      <div className="card" key={coursekey}>
        <div className="card-body">
          <h5 className="card-title">CS {coursedata.number}: {coursedata.title}</h5>
          <p className="card-text">Term: {coursedata.term}</p>
          <p className="card-text"> {coursedata.meets}</p>
        </div>
      </div>
    ));

  return (
    <div className="container">
      {filteredCourses.length > 0 ? (
        filteredCourses
      ) : (
        <p>No classes available for {selectedTerm}.</p>
      )}
    </div>
  );
};

export default CourseList;
