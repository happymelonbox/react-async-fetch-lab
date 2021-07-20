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
                <li>
                    {this.state.people.map(person=>person.name)}
                </li>
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