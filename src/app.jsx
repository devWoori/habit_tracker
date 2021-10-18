import React, { Component } from 'react';
import './app.css';
import Navbar from './components/navbar';
import Habits from './components/habits';

class App extends Component {
  state = {
    habits: [
      {id: 1, name: 'Reading', count: 0},
      {id: 2, name: 'Running', count: 0},
      {id: 3, name: 'Coding', count: 0},
    ]
  }

  handleIncrement = habit => {
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id) {
        return {...habit, count: habit.count + 1};
      }
      return item;
    });
    // key와 value가 동일한 이름을 가지고 있는 경우라면,
    // 아래와 같이 출약해서 사용할 수 있다!
    //this.setState({ habits: habits });
    this.setState({ habits });
  }

  handleDecrement = habit => {
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id) {
        const count = habit.count - 1;
        return {...habit, count: count < 0 ? 0 : count};
      }
      return item;
    });
    this.setState({ habits });
  }

  handleDelete = habit => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits });
  }

  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      if(habit.count !== 0) {
        return {...habit, count: 0};
      }
      return habit;
    });
    this.setState({ habits });
  }

  handleAdd = name => {
    const habits =[...this.state.habits, {id: Date.now(), name, count: 0}];
    this.setState({ habits });
  }

  render() {
    return (
      <div className="content-wrap">
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length}/>
        <section className="content-section">
          <Habits
            habits={this.state.habits} 
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}  
            onReset={this.handleReset}
            onAdd={this.handleAdd}
          />
        </section>
      </div>
    );
  }
}

export default App;
