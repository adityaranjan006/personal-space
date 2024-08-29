import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-around p-5 mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
      <div className="text-white lg:text-xl md:text-lg font-extrabold">Template App</div>
      <div className="flex font-semibold">
        <ul className='flex flex-row gap-5 font-bold'>
        <li className='hover:text-slate-300 transition duration-300 ease-in delay-50 hover:scale-110'><Link to="/home">Home</Link></li>
        <li className='hover:text-slate-300 transition duration-300 ease-in delay-50 hover:scale-110'><Link to="/Signup">SignUp</Link></li>
        <li className='hover:text-slate-300 transition duration-300 ease-in delay-50 hover:scale-110'><Link to="/signin">SignIn</Link></li>
        </ul>
      </div>    
    </div>
  )
}

export default Header
