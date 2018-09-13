import React, { Component } from 'react'
import Button from './Button';

class UnitDetail extends Component {

    state = {
        showButton: false
    }

    MouseEnterHandler = () => {
        this.setState({showButton:true})
    }

    MouseLeaveHandler = () => {
        this.setState({showButton:false})
    }


  render() {
    const {id, img, title, row}  = this.props;
    return (
      <div className="container"
            onMouseEnter={this.MouseEnterHandler}
            onMouseLeave={this.MouseLeaveHandler}>
        
        <div className='img_but'>
            <img 
                src={img}   
                alt="movieImage"
            />
            {this.state.showButton ? <Button id={id} row={row} /> : null }   
        </div>

        <p className="moive_title">{title}</p> 
      </div>
    )
  }
}

export default UnitDetail;