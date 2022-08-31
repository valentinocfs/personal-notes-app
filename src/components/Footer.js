import React from 'react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer--left">
                <p>Dicoding Submissions &copy; {new Date().getFullYear()}</p>
            </div>
            <div className="footer--right">
                <p>github.com/valentinocfs</p>
            </div>
        </footer>
    );
}
