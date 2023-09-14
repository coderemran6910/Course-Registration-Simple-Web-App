import './App.css'
import Courses from './components/Courses/Courses'
import Sidebar from './components/Sidebar/SIdebar'

function App() {

  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-4 mb-12">Course Registration</h1>
      <div className='flex justify-center container mx-auto gap-10'>
      <Courses></Courses>
      <Sidebar></Sidebar>
      </div>
    </>
  )
}

export default App
