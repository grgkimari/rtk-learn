import {useDispatch, useSelector} from 'react-redux'
import { fetchUsers } from './UserSlice'
import { useEffect } from 'react'



const User = () => {
  const userState = useSelector((state) => {
    return state.user
  })
  console.log(`Userstate : ${JSON.stringify(userState)}`)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  return (
    <div>
        <h3>
            List of Users
            <ul>
              {
                userState.loading ? "Loading data ..." : userState.error !== '' ? "Error : Couldn't fetch data" : userState.data.map((user) => user.id)
              }
            </ul>
        </h3>
    </div>
  )
}

export default User