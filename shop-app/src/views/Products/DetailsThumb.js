import React, { Component } from 'react'

export class DetailsThumb extends Component {
    render() {
        const {images, tab} = this.props;
        return (
            <div className="thumb">
                {
                images && images.map((img, index) => {
                    return (
                        <img src={img} alt="" key={index}  onClick={() => tab(index)}/>
                    )
                })
                }
            </div>
        )
    }
}

export default DetailsThumb;