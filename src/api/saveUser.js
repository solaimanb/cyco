export const saveUser = user => {
    const currentUser = {
      email: user.email,
      role:'admin'
    }
  
    fetch(`${import.meta.env.VITE_SERVER_URL}/users/${user?.email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(currentUser),
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }