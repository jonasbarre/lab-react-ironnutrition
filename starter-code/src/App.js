import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

class App extends Component {

  state = {
    name: 'a food',
    calories: '123',
    image: 'https://img.icons8.com/bubbles/2x/food.png',
    visibility: false
  }


  // handleInput = (e) => {
  //   let { name, value } = e.target
  //   this.setState({ [name]: value })
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   const newStories = [...this.state.stories]
  //   newStories.push({
  //     name: this.state.name,
  //     calories: this.state.calories
  //   })
  //   this.setState({ stories: newStories })
  //   console.log(this.state)
  // }
  
  showForm = ()=>{
    this.setState({
      ...this.state,
      visibility: !this.state.visibility
    })
    console.log(this.state.visibility)
   }
  
  render() {
    console.log(foods[0].image)
    return (
      <div className="App">
        <button onClick={this.showForm}>CLICK ME</button>
        <form onSubmit={(e) => this.handleSubmit(e)} className={(this.state.visibility === true)?'triggered':'hidden'}>
          <input type="text" name="name" value={this.state.name}  />
          <input type="number" name="calories" value={this.state.calories}  />
          <input type="text" name="image" value={this.state.image}  />
          <input type="submit" value="submit" />
        </form>

        {foods.map((food, index) => (
          <FoodBox
            key={index}
            name={food.name}
            image={food.image}
            calories={food.calories}
            quantity={food.quantity}
          />
        ))}

      </div>
    );
  }
}

export default App;
