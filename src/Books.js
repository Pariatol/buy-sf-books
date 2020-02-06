import React, { Component } from 'react'


class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

 
    componentDidMount(){
        document.body.classList = "";
        document.body.classList.add("booksBg");
    }

    render(){
        return (
            <div class="container-fluid content-row books">

                <div class="row">
                    {this.props.items.map(item=>{
                        return(
                                
                                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                                    <div class="card mx-auto mb-5">
                                    <img class="card-img-top mx-auto mt-1" src={item.img} alt="Card image cap"/>
                                    <div class="card-body text-center">
                                        <h5 class="card-title">{item.title}</h5>
                                        <p class="card-text">{item.author}</p>
                                        <p class="card-text">{item.price}$00</p>
                                        <button class="btn btn-primary addToCart" onClick={()=>this.props.add(item.id)}><i class="fas fa-cart-plus"></i>&nbsp;Add To Cart</button>
                                    </div>
                                    </div>
                                </div>    
                        )
                    })}
                </div>    
            </div>
        )
    }
}

export default Books