import React from 'react';

class featuredDestination extends React.Component {
    render(){
        return (
            <section className="section-d bg-s-gray">
                <div className="container ">
                    <div className="row">
                        <div class="col-lg-5">
                            <div class="fea-img"></div>
                        </div>
                        <div class="col-1"></div>
                        <div className="col-lg-6">
                            <h3 className="c-purple fea_title f-Montserrat">
                                Div Title</h3>
                            <h3 class=" fea_desc f-Montserrat">
                                Featured Themes
                            </h3>
                            <h3 class="f-poppins fea_in">
                                Div description about this page templates and more details.
                                <br/><br/>
                                For the more customize please follow me on github and my website. Also
                                You can check my portfolio on my website.
                                </h3>
                            <button class="btn btn-white button-y mt-3">See all themes</button>
                        </div>
                    </div>
                </div>
            </section>
            )
        }
}
export default featuredDestination;