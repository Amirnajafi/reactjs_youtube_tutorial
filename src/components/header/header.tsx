import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import IHeaderProps from './header.types'
import styles from './header.module.scss'
import { Context } from '../../contexts/mainContext'
const Header = (props : IHeaderProps) => {
    const { user , dispatch , isAuthenticated , settings } = useContext(Context)
    const {theme , language}= settings
    const handleLogout = () => {
        localStorage.clear()
        // window.location.reload()
        dispatch('user' , {})
    }
    const handleChangeLanguage = (lang : string) => {
        dispatch('settings' , {...settings , language : lang} , true)
    }
    return (
        <header className={styles.header}>
            <div className="container">
                <nav>
                    <div className={styles.nav_box}>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/products"}>Products</Link>
                    </div>
                    <div className={styles.nav_box}>
                        {isAuthenticated() ?
                        <>
                            <span> {user.name} {user.family}</span>
                            <button onClick={handleLogout}>logout</button>
                            {language === 'en' ?
                                <button onClick={()=>handleChangeLanguage("fa")}>FA</button>
                                :
                                <button onClick={()=>handleChangeLanguage("en")}>EN</button>
                            }

                        </>
                        :   
                            <Link to="/login">Login</Link>
                        }
                    
                    </div>
                </nav>
            </div>
            
        </header>
    )
}

export default Header