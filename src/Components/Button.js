import React  from 'react'
import {connect} from 'react-redux';


const Button = ({row, id, handleClick}) => {
        return (
        <div>
            <button onClick={() => handleClick(row,id) }>
                {row === 'mylist' ? 'Remove' : 'Add'}
            </button>
        </div>
        )
  }


const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (row,id) => {
        if(row === 'mylist'){
            dispatch({type:"REMOVE_ITEM" , id})
        } else {
             dispatch({type: "ADD_ITEM", id})
        }
      }
  }
}

export default connect(null, mapDispatchToProps )(Button);