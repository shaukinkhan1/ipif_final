import React from 'react';

class Test extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json =>{
            this.setState({
                isLoaded: true,
                items: json
            });
        })
    }

    render(){

        var {isLoaded, items} = this.state;

        if(!isLoaded){
            return(

             <div>Loading...</div>
            )
        }
        else{

        return(
            <div>
                <p>Test Page Loaded</p>
            </div>
        )

      }
    }

}


export default Test;