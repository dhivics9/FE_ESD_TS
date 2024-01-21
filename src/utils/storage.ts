// get local item user as a function
const getUser = () => {
  const user = localStorage.getItem('user')
  return user ? JSON.parse(user) : null
}

// save user for remember me function
const saveUser = (user: any) => {
  localStorage.setItem('user', JSON.stringify(user))
}

// remove user from local storage
const removeUser = () => {
  localStorage.removeItem('user')
}


export { getUser, saveUser, removeUser }