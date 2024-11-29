import {  NavLink, Outlet } from 'react-router-dom'

const TechPages = () => {
    return (
        <div className='container flex items-start justify-between'>

            <div className='w-56 flex flex-col bg-[#f2f2f2] '>
                <NavLink to={`/techpages/help`} className={({ isActive }) => ` py-[6px] pl-[10px] hover:text-[#ff4f08]  ${isActive ? 'bg-[#ff4f08] text-white' : 'text-[#454545]'}`}>
                Top 10 sual
                </NavLink>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default TechPages