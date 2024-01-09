import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedUser = useLoaderData()
    const handleUpdateUser = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        
        const updateUser = {
            name, 
            email
        }

        console.log(updateUser)

        fetch(`http://localhost:3000/users/${loadedUser._id}`, {
            method: "PUT",
            headers: {
                'content-type' : 'application/json'
              },
              body: JSON.stringify(updateUser)
        })
        .then(res => res.json())
        .then( data => {
            console.log(data)
            if(data.modifiedCount > 0){
                alert('user info updated successfully')
            }
        })
    }
    return (
        <div>
            <h3 className="update-profile">Update information of {loadedUser.name}</h3>
            <form onSubmit={handleUpdateUser} className="update-form">
                <input type="text" name="name" defaultValue={loadedUser.name}/>
                <input type="email" name="email" defaultValue={loadedUser.email}/>
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default Update;