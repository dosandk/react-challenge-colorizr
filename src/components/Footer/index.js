import React from 'react';
import './index.scss';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <img className="footer__logo" src="images/logo-light.svg" />
                <div className="footer__credits">
                    <p>
                        Build with React, Redux, React Router
                    </p>
                </div>
            </div>
        </footer>
    )
}