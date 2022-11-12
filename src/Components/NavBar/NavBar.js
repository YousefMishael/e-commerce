import React, { useState } from 'react'
import { navStruct } from './utils'

function NavBar() {
    const [navStructState, setNavStructState] = useState(navStruct);

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         navStructState : navStruct
    //     }
    // }

    function toggleTabs(tabIdx){
        let _navStructState = JSON.parse(JSON.stringify(navStructState))

        _navStructState.forEach((tab, idx) => {
            tab.isActive = idx === tabIdx
        });

        setNavStructState(_navStructState);
    }

    return (
      <div className='navbar navbar-expand-md bg-primary navbar-dark ps-5'>
        <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#mainNavBar'>
            <span className='navbar-toggler-icon'/>
        </button>
        <div className='collapse navbar-collapse' id='mainNavBar'>
            <ul className='navbar-nav'>
                {
                    navStructState.map((tab, idx) => {
                        return<li className='nav-item ms-3' key={idx}>
                        <button className={`btn nav-link ${tab.isActive ? 'active' : ''}`} onClick={toggleTabs.bind(this,idx)}>
                            {tab.name}
                        </button>
                    </li>
                    })
                }
                
            </ul>
        </div>
      </div>
    )
}

export default NavBar;
