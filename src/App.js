import React from 'react'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            people: []
        }
    }

    
    render(){
        return (
            <ul>
                {this.state.people.map(person=>(<li key={person.name}>{person.name} {person.craft}</li>))}
            </ul>
        )
    }
    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp=>resp.json())
        .then(data=> {
            this.setState({
                people: data.people
            })
        })
    }
}


export default App