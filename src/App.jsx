import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"


const courseData = [
  {
    id:1,
    title:"Introduction To Javascript",
    description:"Learn the basics of javascript programming"
  },
  {
    id:2,
    title:"React Fundamentals ",
    description:"Explore the fundamentals of react framework"
  },
  {
    id:3,
    title:"HTML",
    description:"Explore Web designing and makeing interactive website"
  },
]
function App() {
  const [courses] = useState(courseData);


  return (
    <>
      <div className='bg-danger-subtle text-center p-4 vh-100'>
        <h1 className='bg-warning text-light p-4'> Code Learning Website </h1>
        <div className='container my-3'>
          <CourseList courses={courses}/>
        </div>
      </div>
    </>
  )
}

export default App

function CourseList({courses}){
  const enrollHandler = (title) => {
    alert(`Enrolled In ${title}`)
  }

  return(
    <div className='row'>
      {
       courses.map(course => (
        <div className='col-md-6 col-lg-4 mb-4'>
          <div className='card text-center p-4 shadow-lg'>
            <div className='card-body'>
              <h4>{course.title}</h4>
              <p>{course.description}</p>
              <button className='btn btn-success' onClick={()=>enrollHandler(course.title)}> Enroll Now </button>
            </div>
          </div> 
        </div>
       ))
      }
    </div>
  )

}