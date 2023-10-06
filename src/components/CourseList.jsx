import React from 'react';

const CourseList = ({course}) => (
  <div className="container">
  <div className="row">
    {Object.entries(course.courses).map(([coursekey, coursedata]) => (
      <div className="col-3 mb-3" key={coursekey}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">CS {coursedata.number}: {coursedata.title}</h5>
            <p className="card-text">Term: {coursedata.term}</p>
            <p className="card-text">{coursedata.meets}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
);

export default CourseList;