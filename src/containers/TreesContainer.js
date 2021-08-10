import React, { Component } from 'react';
import TreeForm from '../components/trees/TreeForm'
import Trees from '../components/trees/Trees'
import { connect } from 'react-redux'

class TreesContainer extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        //debugger
        console.log(this.props)
        return(
            <div>
                <TreeForm />
                <Trees trees={this.props.trees} />
            </div>
        )
    }
}

export default connect()(TreesContainer)
