import React from "react"
import { connect } from 'react-redux'
import { filterChange } from "../reducers/filterReducer";

const Filter = (props) => {
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={props.filterChange} />
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    filterChange: event => {
      dispatch(filterChange(event.target.value.toLowerCase()))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Filter)
