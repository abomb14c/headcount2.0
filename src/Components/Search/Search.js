import React, { Component } from 'react'
import './search.css'

class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: ''
        }
    }

    handleSearch = (event) => {
        const searchValue = event.target.value;
        this.setState({
            search: searchValue
        })
    }

    render(){
        return (
            <div className="search-container">
                <h3>Find A School</h3>
                <form>
                    <input
                    className="search-input"
                    type="text"
                    name="school"
                    placeholder="Search"
                    value={this.state.search}
                    onChange={this.handleSearch}
                    />
                    <button className="search-button">Submit</button>
                </form>
            </div>
        )
    }
}

export default Search