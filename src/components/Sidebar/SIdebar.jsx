
import PropTypes from "prop-types"
const Sidebar = ({ courseDetails, courseCredit, remainingCredit, totalPrice }) => {

    return (
        <div className=" w-full lg:w-1/3 bg-white py-4 px-4 mx-auto ">
           <div className="mb-6">
                <p className=" text-lg font-bold text-cyan-500">Credit Hour Remaining {remainingCredit} hr</p>
            </div>
            <hr />
            <div className="py-6">
                <h2 className="text-2xl font-bold mb-5">Course Name</h2>
                <ol className="list-decimal text-opacity-60 text-gray-900 font-normal pl-4">
                    {
                        courseDetails.map(course => <li key={course.id}>{course.courseName}</li>)
                    }
                </ol>
            </div>
            <hr />
            <div className="py-6 text-opacity-60 text-gray-900 font-medium">
                <p>Total Credit Hour: {courseCredit}</p>
            </div>
            <hr />
            <div className="mt-6 font-semibold text-opacity-60 text-gray-900 ">
                <p>Total Price: {totalPrice.toFixed(2)} USD</p>
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