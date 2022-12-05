export default function Student( { student, studentDelete } ) {
    return (
        <li>
            {student.name}
            <button onClick={() => studentDelete(student.id)}>X</button>
        </li>
    )
}