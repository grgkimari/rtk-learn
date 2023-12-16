import {useSelector} from 'react-redux'
const User = () => {
  const users = useSelector((state) => {
    state.user.data
  })
  return (
    <div>
        <h3>
            List of Users
            <ul>
              {/* {users.map((user) => {
                return <li key={user}>user</li>
              })} */}
            </ul>
        </h3>
    </div>
  )
}

export default User