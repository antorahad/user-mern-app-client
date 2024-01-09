import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
    const users = useLoaderData()
    return (
        <div>
            <p className="num-users">Total Users: {users.length}</p>
            <div className="user-list">
                {
                    users.map(data => <User key={data._id} data={data}/>)
                }
            </div>
        </div>
    );
};

export default Users;