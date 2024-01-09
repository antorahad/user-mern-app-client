import './App.css'

function App() {
  const handleAddUser = e => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const user = {
      name,
      email
    }
    console.log(user)

    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user)
    }) 
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        alert('user added successfully');
        form.reset()
      }
    })
  }

  return (
    <>
      <form className='userForm' onSubmit={handleAddUser}>
        <input type="text" name='name' placeholder='Your name' />
        <input type="email" name='email' placeholder='Your email' />
        <input type="submit" value="Add user" />
      </form>
    </>
  )
}

export default App
