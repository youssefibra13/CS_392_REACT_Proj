import React from 'react';

const CourseList = ({course}) => (
    <div>
        {Object.entries(course.courses).map(([coursekey, coursedata]) => (
            <p>{coursedata.term} CS {coursedata.number}: {coursedata.title}</p>
        ))}
    </div>
);

export default CourseList;