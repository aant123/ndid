import React, { Component } from 'react';
import {connect} from 'react-redux'
class ListIdpContrainer extends Component {
    componentWillMount(){
        this.props.getdata()
    }
    render() {
        const {getdata} = this.props
        return(
            <div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    idpList : state.number
})

const mapDispatchToProps = dispatch => ({
    getdata : () => dispatch({type:'FETCH_IDP_REQUESTED'})
})

export default connect (mapStateToProps,mapDispatchToProps)(ListIdpContrainer)