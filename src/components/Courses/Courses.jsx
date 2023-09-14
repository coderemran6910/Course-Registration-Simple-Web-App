import { useState, useEffect } from "react";
import Course from "../Course/Course";


const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

    return (
       <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full gap-5">
            {
                courses.map((course)=>{
                    return <Course
                    key={course.id}
                    course={course}
                    ></Course>
                })
            }
        </div>
       </>
    );
};

export default Courses;