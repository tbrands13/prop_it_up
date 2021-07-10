import React, {Component} from 'react';

class Card extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { firstName, lastName, age, hairColor } = this.props;
        return(
            <div className='card'>
                <h1>{firstName} {lastName}</h1>
                <h4>Age:{age}</h4>
                <h4>Hair Color:{hairColor}</h4>
            </div>
        )
    }
}

export default Card;