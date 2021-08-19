import Tree from "./Tree"
import CardGroup from 'react-bootstrap/CardGroup'
//import {connect} from "react-redux"

const Trees = (props) => {

    return (
        <>
        <CardGroup>
            {props.trees.map(tree => <Tree key={tree.attributes.id} tree={tree}/>)}
        </CardGroup>
        </>
    )
}

export default Trees