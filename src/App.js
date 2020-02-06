import React, { Component, useEffect } from 'react'
import axios from "axios"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Caddie from './Caddie'
import Books from './Books'



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        items:[],
        caddie:[],
        nbProducts:0
    }
}

  
  componentDidMount(){
    document.body.classList = "";
    document.body.classList.add("mainBg");

    let currentComponent = this;
    // axios.get('http://localhost:3001/posts')
    axios.get('https://my-json-server.typicode.com/Pariatol/buy-sf-books/posts')
        .then(function (response) {
          console.log(response.data);
          currentComponent.setState({
              items:response.data
          })
        })
        .catch(function (error) {
          console.log(error);
        })
  }

  add = (id) => {
    let itemsCopy = [...this.state.items]
    itemsCopy[id].nb++
    this.setState({
      caddie:this.state.caddie.concat(this.state.items[id]),
      items: itemsCopy,
      nbProducts:this.state.nbProducts+1
    })   
  }

  increase = (id) => {
    let itemsCopy = [...this.state.items]
    itemsCopy[id].nb++
    var count = 0;
    itemsCopy.map(elt=>{
      count += parseInt(elt.nb)
    })
    this.setState({
      caddie:this.state.caddie.concat(this.state.items[id]),
      items: itemsCopy,
      nbProducts:parseInt(count)
    }) 
  }

  decrease = (title,id) => {

    let itemsCopy = [...this.state.items]
    itemsCopy[id].nb--
    var count = 0;
    itemsCopy.map(elt=>{
      count += parseInt(elt.nb)
    })
    console.log(count)
    this.setState({
      caddie:this.state.caddie.splice(0,1),
      items: itemsCopy,
      nbProducts:parseInt(count)
    })

  }


  render() {
    return (
      <div className="myApp d-flex justify-content-center align-items-center">
        <NavBar items={this.state.items} add={this.add} increase={this.increase} decrease={this.decrease} nbProducts={this.state.nbProducts} itemsCaddie={this.state.items}/>
      </div>
    )
  }
}

export default App;

function NavBar(props) {
  return (
    <Router>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top text-white" id="main-nav">
        <div class="container">
            <Link to="/" class="navbar-brand display-1">Buy SF Books</Link>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item mr-1">
                      <Link to="/" class="nav-link">HOME</Link>
                    </li>
                    <li class="nav-item mr-1">
                      <Link to="/books" class="nav-link">BOOKS</Link>

                    </li>

                    <li class="nav-item mr-1">
                        <Link to="/caddie" class="nav-link"><i class="fas fa-cart-plus"></i>&nbsp;{props.nbProducts>0?<span>({props.nbProducts})</span>:null}</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <Switch>
          <Route path="/caddie">
            <Caddie itemsCaddie={props.itemsCaddie} increase={props.increase} decrease={props.decrease}/>
          </Route>

          <Route path="/books">
            <Books items={props.items} add={props.add}/>
          </Route>


          <Route path="/">
            <Header />
          </Route>


          
        </Switch>
    </Router>
  )
}

function Header() {

  useEffect(() => {
    document.body.classList = "";
    document.body.classList.add("mainBg");
  });

  return (
    <div class="header text-white text-center">
      <h2 class="px-2 mt-2">Hey, nice to meet you, dear reader...</h2>
      <p class="px-5 lead">If you love Isaac Asimov, Robert Heinlein, Arthur C. Clarke, Ray Bradbury, you'll find great books here !</p>
      <p class="px-5 lead">Just take a look at our SF Books collection !</p>
      <Link to="/books" class="btn btn-primary mb-2">Buy A Book</Link>
    </div>
  )
}



