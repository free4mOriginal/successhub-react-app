import React, { Component } from 'react'

export class Like extends Component {
    render() {
        const { title, image_url } = this.props;

        return (
            <div className="modal-card">
                {console.log(title, image_url)}
            </div>
        )
    }
}

export default Like
