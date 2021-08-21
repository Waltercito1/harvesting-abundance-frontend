import React, { Component } from 'react'
//import TreeForm from '../components/trees/TreeForm'
import Trees from '../components/trees/Trees'
import { connect } from 'react-redux'

class TreesContainer extends Component {
    
    render() {
        return(
            <div>
                {/* <TreeForm /> */}
                <Trees trees={this.props.trees} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        trees: state.trees.trees
    }
}

export default connect(mapStateToProps)(TreesContainer)
