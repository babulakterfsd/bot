/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseAuth from '../../Hooks/UseAuth';

function ProfileDropdown() {
    const { user, logOut, setIsLoading, setUser } = UseAuth();
    const navigate = useNavigate();
    const [dropdownshow, setDropdownshow] = useState(true);

    console.log(user);

    const handleLogout = () => {
        logOut()
            // eslint-disable-next-line no-unused-vars
            .then((result) => {
                setUser({});
                Swal.fire('Good job!', 'Log Out SuccessFull!', 'success');
                return navigate('/');
            })
            .catch((error) => {
                Swal.fire('Something went wrong!', `${error.message}`, 'error');
            })
            .finally(() => setIsLoading(false));
    };

    console.log(handleLogout);

    return (
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        <div className="relative">
            <p onClick={() => setDropdownshow((prevState) => !prevState)}>Profile</p>
            {dropdownshow && (
                <div className="absolute right-0 -bottom-10 bg-slate-200 p-2 ">dropdown</div>
            )}
        </div>
    );
}

export default ProfileDropdown;
