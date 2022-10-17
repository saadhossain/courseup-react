import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './book.png'
import { Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'
import { AuthContext } from '../../Context/UserContext';
const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const [expand, setExpand] = useState(false);
    //Logout function
    const handleLogOut = () => {
        logOut()
    }
    return (
        <div className='bg-violet-500 text-white'>
            <div className='flex w-10/12 mx-auto items-center justify-between py-2'>
                <Link to='/' className='flex items-center gap-2'>
                    <img src={logo} alt="" className='h-10 w-10'/>
                    <h2 className='text-2xl font-bold'>CourseUp</h2>
                </Link>
                <div className='flex gap-2 items-center'>
                    <ul className={`md:flex bg-violet-500 px-10 py-2 gap-4 font-semibold absolute md:static duration-500 ease-in-out ${expand ? 'top-14 right-0' : 'top-[-200px] right-0'}`}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/offer'>Offer</Link></li>
                        <span>
                            {
                                user?.uid && <Link>{user.email}</Link>
                            }
                        </span>
                        <span>
                            {
                                user?.uid ? 
                                <li><Link onClick={handleLogOut}>LogOut</Link></li> :
                                <li><Link to='/login'>Login</Link></li>
                            }
                        </span>
                    </ul>
                    <div className='h-8 w-8 md:hidden' onClick={()=> setExpand(!expand)}>
                        {
                           expand ? <XMarkIcon></XMarkIcon> :<Bars3Icon></Bars3Icon>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;