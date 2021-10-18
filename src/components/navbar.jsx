import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
    render() {
        return (
            <nav className="navbar">
                <span className="habit-icon">
                    <i className="fas fa-leaf"></i>
                </span>
                <span className="habit-text">Habit Tracker</span>
                <span className="habit-count">{this.props.totalCount}</span>
            </nav>
        );
    }
}

export default Navbar;