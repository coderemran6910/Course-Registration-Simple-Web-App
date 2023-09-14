import { useState, useEffect } from "react";
import Course from "../Course/Course";
import PropTypes from "prop-types";


const Courses = ({handleSelectBtn}) => {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

    return (
       <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full gap-5 justify-items-center ">
            {
                courses.map((course)=>{
                    return <Course
                    key={course.id}
                    course={course}
                    handleSelectBtn={handleSelectBtn}
                    ></Course>
                })
            }
        </div>
       </>
    );
};
Courses.propTypes = {
    handleSelectBtn: PropTypes.func
}
export default Courses;