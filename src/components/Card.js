import React from 'react';

class Card extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
                    <div className="col-lg-3 col-xs-12">
                        <div className="card">
                            <img
                                className="card-img-top"
                                src="https://picsum.photos/seed/picsum/200"
                                alt=""
                            />
                            <div className="card-img-overlay">
                                <h4 className="card-title f-Montserrat">{this.props.card_title}</h4>
                            </div>
                            <div className="card-body ">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Cras justo odio</li>
                                    <li className="list-group-item">Dapibus ac facilisis in</li>
                                    <li className="list-group-item">Vestibulum at eros</li>
                                    <li className="list-group-item">See All</li>
                                </ul>
                            </div>
                        </div>
                    </div>
        )
    }
}
export default Card;

