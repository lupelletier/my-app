import Student from './Student';
import AddStudent from './AddStudent';
import "../styles/index.css";
import { useState } from 'react';

export default function Classroom() {
        const [students, setStudents] = useState([
            
            { id: 1, name: "Lucie" },
            { id: 2, name: "Oriane" },
            { id: 3, name: "Valentine" }
        ]);
        const [newStudent, setNewStudent] = useState("");

        const handleDelete = (id) => {
            const studentCopy = [...students];
            const studentsCopyUpdate = studentCopy.filter((student) => student.id !== id);
            setStudents(studentsCopyUpdate);
        };

    return (
    <div>
        
        <AddStudent
        students={students}
        newStudent={newStudent}
        setStudents={setStudents}
        setNewStudent={setNewStudent}
        />
        <h2>Liste des étudiants</h2>
        <ul className="student-list">
            {students.map((student) => (
                <Student
                student={student}
                studentDelete={handleDelete}
                key={student.id}
                />
            ))}
        </ul>
    </div>
    )
}