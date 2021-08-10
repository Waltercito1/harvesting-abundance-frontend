//import PropTypes from 'prop-types'
import Tree from "./Tree"
import CardGroup from 'react-bootstrap/CardGroup'
//import {useHistory} from "react-router"
//import {connect} from "react-redux"

const Trees = (props) => {

    const createTreesFromList = () => {
        return props.trees.map(tree => {
            return <Tree tree={tree} />
        })
    }

    return (
        <>
        <CardGroup>
            {props.trees.map(tree => <Tree tree={tree}/>)}
        </CardGroup>
        </>
    )
}

export default Trees