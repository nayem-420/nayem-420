import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 max-w-6xl mx-auto'>
            <div className="navbar bg-base-100 border-b-2">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Knowledge Cafe</a>
                </div>
                <div className="flex-none gap-2">
                    {/* <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div> */}
                    <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src={profile} />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;