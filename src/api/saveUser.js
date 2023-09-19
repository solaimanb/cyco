export const saveUser = user => {
    const currentUser = {
      email: user.email,
      name: user.displayName,
      photo: user.photoURL,
      role: 'user'
    }
    console.log(currentUser)
    fetch(`${import.meta.env.VITE_API_URL}/users`,{
      method: 'POST',
      headers: {
          'content-type': 'application/json',
      },
      body: JSON.stringify(currentUser),
  })
  .then(res => res.json())
  .then(data => console.log(data))
}

  //   fetch(`${import.meta.env.VITE_SERVER_URL}/users/${user?.email}`, {
  //     method: 'PUT',
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //     body: JSON.stringify(currentUser),
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // }