import { useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses'
import Sidebar from './components/Sidebar/SIdebar'

function App() {
  const [courseDetails, setCourseDetails] = useState([])
  const [courseCredit, setCourseCredit] = useState(0)

  const handleSelectBtn = (course) => {
    const { id, courseName, credit, price, details } = course

  const isExist = courseDetails.find((item) => item.id === id)
  // isExist ?  alert('Already Added')  : setCourseDetails([...courseDetails, course])


  // Credit
  const newCredit = courseCredit + credit
  courseCredit >20 ? alert('Credit Limit Reached') : setCourseCredit(newCredit)
  

  }

  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-4 mb-12">Course Registration</h1>
      <div className='flex justify-center container mx-auto gap-10'>
      <Courses 
      handleSelectBtn ={handleSelectBtn}
      ></Courses>
      <Sidebar
      courseDetails={courseDetails}
      courseCredit={courseCredit}
      ></Sidebar>
      </div>
    </>
  )
}

export default App
