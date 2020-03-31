import React, { Component } from 'react';
import './Work.css';

class Work extends Component {
        constructor(props) {
                super(props)
        }
        render() {
                //this image paramater is required endpoint for the iiif image distribution.
                let imgPar = '/full/600,/0/default.jpg';

                const getData = this.props.collection.map(item => (
                        <div key={item.id}>
                                <img src={item.thumbnail.url + imgPar} />
                                {/* <p>{item.title}</p> */}
                        </div>
                ));
                return (
                        <div className="image-gallery">
                                {getData}

                        </div>
                )
        }
}
export default Work;
