import React from 'react'

const Header = () => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="https://cdn.pixabay.com/photo/2021/09/17/01/07/man-6631394_1280.png" alt="Logo" width={45} height={35} className="d-inline-block align-text-top me-2" />
                    Sharp Todos
                </a>
            </div>
        </nav>

    )
}

export default Header