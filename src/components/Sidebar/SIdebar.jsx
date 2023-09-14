
import PropTypes from "prop-types"
const Sidebar = ({ courseDetails, courseCredit, remainingCredit }) => {

    return (
        <div className="w-3/12 bg-white py-6 px-6">
            <h1 className="text-5xl">This is SIdebar</h1>
            <hr />
            <div className="mt-6">
                <ol className="list-decimal">
                    {
                        courseDetails.map(course => <li key={course.id}>{course.courseName}</li>)
                    }
                </ol>
            </div>
            <hr />
            <div className="mt-6">
                <p>Total Credit Hour: {courseCredit}</p>
            </div>
        

        </div>
    );
};

Sidebar.propTypes = {
    courseDetails: PropTypes.array,
    courseCredit: PropTypes.number,
    remainingCredit: PropTypes.number
}

export default Sidebar;