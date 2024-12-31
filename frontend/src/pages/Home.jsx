import React, {useContext} from 'react'
import { UserContext } from '../context/user.context'
const Home = () => {
    const {user} = useContext(UserContext);
  return (
    <>
    <div>
        Home
    </div>
    <div className='text-xl font-bold'>
        {user ? `Welcome ${user.email}` : 'Please login'}
    </div>
    </>
  )
}

export default Home