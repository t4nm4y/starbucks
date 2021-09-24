import {React, Component} from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      day: "Monday",
      coffee: "Latte",
      size: "Tall",
      pref: [],
      hiddenpref: "hidden"
    }
  }
  render(){
    const days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const coffee = [ 'Latte', 'Cappuccino', 'Frappuccino'];
    const size = [ 'Tall', 'Grande', 'Venti'];
    var pref = this.state.pref;
    return (
      <div className="App">
        <header className="App-header">
          <div className="container bg-primary rounded-3">
            <h1>StarBucks</h1>
            <div className="container">
            <span>Select Day: </span> 
            <select name="Days" id="days" value={this.state.day} onChange={e => {
              this.setState({day: e.target.value})
              console.log(e.target.value)
            }}>
            {
              days.map((day, i) => {
                return <option value={day} key={i} >{day}</option>
              })
            }
            </select>
            </div>
          <div className="container">
          Select Coffee : 
            <select name="Coffee" id="coffee" value={this.state.coffee} onChange={e => {
              this.setState({coffee: e.target.value})
              console.log(e.target.value)
            }}>
            {
              coffee.map((coffee, i) => {
                return <option value={coffee} key={i} >{coffee}</option>
              })
            }
            </select>
          </div>
            <div className="container">
            Select Size : 
            <select name="Size" id="size" value={this.state.size} onChange={e => {
              this.setState({size: e.target.value})
              console.log(e.target.value)
            }}>
            {
              size.map((size, i) => {
                return <option value={size} key={i} >{size}</option>
              })
            }
            </select>
            </div>
            <button className="btn btn-danger" onClick={()=> {
              this.state.pref.push(`${this.state.day}: ${this.state.coffee} ${this.state.size}`)
              // pref.push(`${this.state.day}: ${this.state.coffee} ${this.state.size}`)
              console.log(this.state.pref)
            }}>Save</button>
            <br />
            <button className="btn btn-light" onClick={()=> {
              this.setState({hiddenpref: ""})
            }}>Print</button>
            <div style={{visibility: this.state.hiddenpref}}>
            <h3 >Your Preference:</h3>
            <p>
              {
                pref.map((i)=> {
                  return (<><span>{i}</span> <br /></>)
                })  
              }
            </p>
            </div>

            
          </div>
        </header>
      </div>
    );
  }
  
}

export default App;
