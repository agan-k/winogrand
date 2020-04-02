import React, { Component } from 'react';
import './Work.css';
import Modal from './Modal'


class Work extends Component {
        constructor(props) {
                super(props)
                this.state = {
                        isShowing: false,
                        workSelect: null
                }
        }
        handleSelect = (item) => {
                this.setState({
                        isShowing: true,
                        workSelect: item
                })

        }

        closeModal = () => {
                this.setState({
                        isShowing: false
                })
                
        }


        render() {

                //this image paramater is required endpoint for the iiif image distribution.
                let imgPar = '/full/600,/0/default.jpg';

                const getData = this.props.collection.map(item => (
                        <div onClick={() => this.handleSelect(item)} className="image-container" key={item.id}>
                                <img src={item.thumbnail.url + imgPar} />

                        </div>
                ));
                return (
                        <div className="work">
                                <div className="modal-container">
                                        {/* guard operator */}
                                        {this.state.isShowing && <Modal closeModal={this.closeModal} workDetail={this.state.workSelect} />}
                                        
                                </div>


                                <div className={`${this.state.isShowing ? "fade-out" : ""} image-gallery`}>
                                        {getData}
                                </div>

                        </div>
                )
        }
}
export default Work;
