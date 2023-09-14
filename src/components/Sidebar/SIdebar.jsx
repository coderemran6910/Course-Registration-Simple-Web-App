
import PropTypes from "prop-types"
const Sidebar = ({ courseDetails, courseCredit, remainingCredit, totalPrice }) => {

    return (
        <div className="w-3/12 bg-white py-6 px-6">
           <div className="mb-6">
                <p>Credit Hour Remaining {remainingCredit}hr</p>
            </div>
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
            <hr />
            <div className="mt-6">
                <p>Total Price: {totalPrice} USD</p>
            </div>
            
            
        

        </div>
    );
};

Sidebar.propTypes = {
    courseDetails: PropTypes.array,
    courseCredit: PropTypes.number,
    remainingCredit: PropTypes.number,
    totalPrice: PropTypes.number
}

export default Sidebar;