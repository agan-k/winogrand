import React, { Component } from "react";
import './Modal.css'

class Modal extends Component {
        constructor(props) {
                super(props)
        }


        render() {
                //this image paramater is required endpoint for the iiif image distribution.
                let imgPar = '/full/600,/0/default.jpg';
                return (
                        <>
                                <div className="modal" onClick={this.props.closeModal}>
                                        <img src={this.props.workDetail.thumbnail.url + imgPar}/>
                                </div>

                        </>
                )
        }
}
export default Modal;