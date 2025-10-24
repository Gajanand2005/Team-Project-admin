import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Dashboard from './pages/Dashboard/Index'
import Header from './Components/Header/Index'
import Sidebar from './Components/Sidebar/Index'
const App = () => {
    const router = createBrowserRouter([
        {
            path: "/", 
            exact: true,
            element: (<>
            
            <section className='main '>
                <Header/>
               <div className='contentMain flex'> 
              <div className='sidebarWrapper w-[18%]'>
                 <Sidebar/>
              </div>
              <div className='contentRight px-4 py-5 w-[82%]'>
                <Dashboard/>
              </div>
               </div>
            </section>
            
            </>)
        }
    ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
