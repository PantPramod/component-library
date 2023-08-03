import React, { ReactNode } from 'react'
import SideBar from './SideBar'

type propType = {
    children: ReactNode
}

const Layout = ({ children }: propType) => {
    return (
        <div className='flex'>
            <div className='flex-1 w-[20%] max-w-[220px]'>
                <SideBar />
            </div>
            <div className='w-[80%] flex-1'>
                {children}
            </div>

        </div>
    )
}

export default Layout
