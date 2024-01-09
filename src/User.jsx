import { Link } from "react-router-dom";

const User = ({ data }) => {
    const { _id, name, email } = data;
    const handleClick = _id => {
        console.log(_id)
        fetch(`http://localhost:3000/users/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('data delete successfully')
                }
            })
    }
    return (
        <div className="user-card">
            <p>User Id: {_id}</p>
            <p>User Name: {name}</p>
            <p>User Email: {email}</p>
            <div className="buttons">
                <Link to={`/update/${_id}`}>
                    <button className="editBtn">Edit</button>
                </Link>
                <button className="dltBtn" onClick={() => handleClick(_id)}>Delete</button>
            </div>
        </div>
    );
};

export default User;