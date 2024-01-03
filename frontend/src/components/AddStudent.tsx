import axios from 'axios';
import React, { useState } from 'react'

function AddStudent() {
    const [student, setstudent] = useState({
        name: "",
        rollNo: ""
    })

    const addStudent = async () => {

        await axios.post('http://localhost:3001/students', student)

    }


    return (
        <div>
            <div style={{ marginTop: "200px" }}>
                <input style={{ height: "30px" }} type="text" placeholder='Enter student name.' onChange={(e) => setstudent({ ...student, name: e.currentTarget.value })} />
                <input style={{ height: "30px" }} type="text" placeholder='Enter student roll no.' onChange={(e) => setstudent({ ...student, rollNo: e.currentTarget.value })} />
                <button style={{ height: "36px" }} onClick={addStudent}>Add student</button>
            </div>
        </div>
    )
}

export default AddStudent