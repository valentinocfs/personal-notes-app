import React from 'react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer--left">
                <p>Dicoding Submissions</p>
            </div>
            <div className="footer--right">
                <p>&copy; {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
}
