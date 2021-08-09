//import PropTypes from 'prop-types'
import Tree from "./Tree"
//import {useHistory} from "react-router"
//import {connect} from "react-redux"

const Trees = (props) => {

    const createTreesFromList = () => {
        return props.Trees.map(tree => {
            return <Tree tree={tree} />
        })
    }

    return (
        <>
            {createTreesFromList()}
        </>
    )
}

export default Trees