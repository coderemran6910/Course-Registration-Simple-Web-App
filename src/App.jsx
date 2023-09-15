import { useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses'
import Sidebar from './components/Sidebar/SIdebar'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [courseDetails, setCourseDetails] = useState([]);
  const [courseCredit, setCourseCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelectBtn = (course) => {
    const { id, credit, price,  } = course

    const isExist = courseDetails.find((item) => item.id === id)
    // isExist ?  alert('Already Added')  : setCourseDetails([...courseDetails, course])
    if(isExist){
      toast.error('This item is already added', {
        position: toast.POSITION.TOP_CENTER
      });
      return
    }else{
      setCourseDetails([...courseDetails, course])
    }

    // Credit
    const newCredit = courseCredit + credit
    // courseCredit > 20 ? alert('Credit Limit Reached') : setCourseCredit(newCredit)
    if(newCredit > 20){
      toast.error('Sorry, You have reached your credit limit', {
        position: toast.POSITION.TOP_CENTER
      });
      return
    }
    setCourseCredit(newCredit)


    // Credit Remaining
    const remaining = 20 - newCredit
    setRemainingCredit(remaining)


    // Total Price
  const total = parseFloat(totalPrice + price)
  
  setTotalPrice(total)
  }


 

  return (
    <>
      <h1 className=" text-2xl lg:text-4xl font-bold text-center mt-4 mb-12">Course Registration</h1>
      <div className='flex flex-col lg:flex-row justify-center container mx-auto gap-10 my-12'>
        <Courses
          handleSelectBtn={handleSelectBtn}
        ></Courses>
        <Sidebar
          courseDetails={courseDetails}
          courseCredit={courseCredit}
          remainingCredit={remainingCredit}
          totalPrice={totalPrice}
        ></Sidebar>
      </div>
    </>
  )
}

export default App
