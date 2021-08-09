import React, { Component } from 'react';
import TreeForm from '../components/trees/TreeForm'
import Trees from '../components/trees/Trees'
import { connect } from 'react-redux'

class TreesContainer extends Component {
    render() {
        return(
            <div>
                <TreeForm tree={this.props.tree} />
                <Trees trees={this.props.trees} />
            </div>
        )
    }
}

export default connect()(TreesContainer)
