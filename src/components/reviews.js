import React from 'react';

class reviews extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <section class="section-d">
                <div class="container">
                    <div className="row">
                        <div className="col-lg-12 pb-5">
                            <h4 className="float-left c-purple"><span className="lnr lnr-bubble pr-2"></span>
                                Reviews Divisions</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div className="col-1 commenter-img float-left"></div>
                        <div class="col-5">
                            <h2 class="f-Montserrat comment">
                                “We're very grateful to the React template for their professionalism,
                                superb support and constant helpfulness. All in all, a fantastic partnership!”
                            </h2>
                            <h2 class="commenter">
                                — User 1
                            </h2>
                        </div>
                        <div className="col-1 commenter-img float-left"></div>
                        <div class="col-5">
                            <h2 className="f-Montserrat comment">
                                "The helpful guidance provided by the
                                React template from start to finish exceeded all my expectations.
                                I would not hesitate to recommend this to anyone.”
                            </h2>
                            <h2 className="commenter">
                                — User 2
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default reviews;