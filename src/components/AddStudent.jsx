
export default function AddStudent({
    students,
    newStudent,
    setStudents,
    setNewStudent

}) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const studentsCopy = [...students];
        const id = new Date().getTime();
        const name = newStudent;
        studentsCopy.push({ id:id, name:name });
        setStudents(studentsCopy);
        setNewStudent("");
    };
    const handleChange = (event) => {
        setNewStudent(event.target.value);
    };

    return (
        <div>
            <form action="submit" onSubmit={handleSubmit}>
                <input type="text" placeholder="Nom de l'étudiant" value={newStudent} onChange={handleChange} className="input"/>
                <button >Ajouter</button>
            </form>
        </div>
    )

}

