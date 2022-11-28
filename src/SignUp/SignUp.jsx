import React, {useState} from "react";


function SignUp(props) {
    const [name, setName] = useState("default");
    const [gender, setGender] = useState("");
    const [result, setResult] = useState([]);

    const handleChangeName = (event) => {
        setName(event.target.value);
        setResult([
            name,
            gender
        ])
    };

    const handleChangeGender = (event) => {
        setGender(event.target.value);
        setResult([
            name,
            gender
        ])
        //alert(`name : ${name}, gender : ${gender}`);
    };

    const handleSubmit = (event) => {
        alert(`name : ${name}, gender : ${gender}`);
        console.log(result);
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                name :
                <input type="text" value={name} onChange={handleChangeName} />
            </label>
            <br/>
            gender :
            <select value={gender} onChange={handleChangeGender}>
                <option value="">선택해</option>
                <option value="men">men</option>
                <option value="women">women</option>
            </select>
            <button type="submit">END!!!</button>
        </form>
    );
}

export default SignUp;