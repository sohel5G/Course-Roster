import PropTypes from 'prop-types';
import { useState } from "react";
import Course from "../course/Course";
import { useEffect } from "react";

function Courses({ handleSelectItem }) {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])


    return (
        <>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    courses.map(course => <Course key={course.id} course={course} handleSelectItem={handleSelectItem} />)
                }
            </div>
        </>
    )
}

Courses.propTypes = {
    handleSelectItem: PropTypes.func.isRequired
}

export default Courses;