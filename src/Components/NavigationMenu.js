import React from 'react'
import {Link} from 'react-router-dom'

function NavigationMenu(props){
    return(
        <nav>
            <div className="font-bold py-3">
                App Menu
            </div>

            <ul>
                <li>
                    <Link
                        to="/" 
                        className="text-blue-500 py-3 border-t border-b block"
                        onClick={ props.closeMenu }
                    >
                        Home

                    </Link>
                </li>

                <li>
                    <Link 
                        to="/About" 
                        className="text-blue-500 py-3 border-t border-b block"
                        onClick={ props.closeMenu }
                    >
                        About
                        
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationMenu