
const StudentList = ({students}) => {

  return (
    <div>
      <h2>Students</h2>
      {
        students.length === 0 ? 

        <p>No student found</p> :

        students.map((student) => (
          
          <div key={student.id}>

            <h4>{student.name}</h4>
            <h4>{student.email}</h4>

          </div>
        ))

      }
    </div>
  )
}

export default StudentList