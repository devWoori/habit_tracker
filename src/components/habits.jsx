import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habbits extends Component {

    handleReset = () => {
        this.props.onReset(this.props.habits);
    }

    handleAdd = name => {
        this.props.onAdd(name);
    }

    render() {
        return (
        <div>
            <HabitAddForm onAdd={this.handleAdd} />
            <ul className="habit-list">
                {this.props.habits.map(habit => (
                    <Habit 
                        key={habit.id}
                        habit={habit}
                        onIncrement={this.props.onIncrement}
                        onDecrement={this.props.onDecrement}
                        onDelete={this.props.onDelete}
                    />
                ))}
            </ul>
            <button className="default-button resetAll-button" onClick={this.handleReset}>Reset All</button>
        </div>
        );
    }
}

export default Habbits;