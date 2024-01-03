//@ts-nocheck
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';



const StudentAttendanceTable: React.FC = () => {
    const [currentMonth, setCurrentMonth] = useState(moment().startOf('month'));

    const generateCalendar = () => {
        const calendar: string[] = [];
        let currentDate = currentMonth.clone();

        while (currentDate.isSameOrBefore(currentMonth.clone().endOf('month'), 'day')) {
            calendar.push(currentDate.format('YYYY-MM-DD'));
            currentDate = currentDate.add(1, 'day');
        }

        return calendar;
    };

    const renderTableHeader = () => {
        return (

            <div style={{marginLeft:"30%"}}>
                <button onClick={() => setCurrentMonth(currentMonth.clone().subtract(1, 'month'))}>
                    <FontAwesomeIcon icon={faArrowLeft} /> Prev Month
                </button>
                <span>{currentMonth.format('MMMM YYYY')}</span>
                <button onClick={() => setCurrentMonth(currentMonth.clone().add(1, 'month'))}>
                    Next Month <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        );
    };


    const [students, setstudents] = useState([]);
    useEffect(() => {
        getStudents()
    }, [])

    const getStudents = async () => {
        console.log("Called");

        const students = await axios.get("http://localhost:3001/students/")
        setstudents(students.data)
    }


    const renderTableBody = () => {


        const calendar = generateCalendar();

        const handleChangeStatus = (rollNo: number, date: string, newStatus: string) => {

            const student = students.find((s) => s.rollNo === rollNo);
            if (student) {
                console.log(`Changed status for ${student.name} on ${date} to ${newStatus}`);
            }
        };

        console.log({ students });


        return (
            <>
                {students.length && <tr>
                    <td></td>
                    {calendar.map((date) => (
                        <td key={date}>{moment(date).format('DD')}</td>
                    ))}
                </tr>}
                {students.length && students.map((student) => (
                    <tr key={student.rollNo}>
                        <td>{student.name}</td>
                        {calendar.map((date) => (
                            <td key={date}>
                                <select onChange={(e) => handleChangeStatus(student.id, date, e.target.value)}>
                                    <option value="Present"> Present</option>
                                    <option value="Half Day"> Half Day</option>
                                    <option value="Absent"> Absent</option>
                                </select>
                            </td>
                        ))}
                    </tr>
                ))}
            </>
        );
    };

    return (
        <div>
            <h2>Student Monthly Attendance Table</h2>
            {renderTableHeader()}
            <table border={1}>

                <tbody>{renderTableBody()}</tbody>
            </table>
        </div>
    );
};

export default StudentAttendanceTable;
