export const saveUser = user => {
    const currentUser = {
      email: user.email,
      name: user.displayName,
      photo: user.photoURL,
      role: 'user'
    }
    console.log(currentUser)
    fetch(`${import.meta.env.VITE_SERVER_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(currentUser),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error));
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