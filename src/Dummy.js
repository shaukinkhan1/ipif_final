import React from 'react';


class Dummy extends React.Component {

    constructor{
        super();
        this.state={
            data: false
        }
    }


    componentDidMount() {
        let url = "https://ipif01.herokuapp.com/api/Product/GetCategoryNearBy?latitude=28.7041&longitude=77.1025";
        fetch(url,{
            method: 'GET',
            headers: {
                'Accept': 'Applications/json',
                'Content-Type': 'Applications/json',
            }
        }).then((result) =>{
            result.json().then((respo) =>{
                console.log(respo)
            })
        })
    }

    render(){
        return(
            <h1>Hello From Dummy</h1>
        )
    }

}

export default Dummy;