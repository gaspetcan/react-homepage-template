import React from 'react';
import Card from './Card';

class popularDestinations extends React.Component{
    constructor(props){
        super(props);
        this.state={
            card_title:['CardTitle1', 'CardTitle2', 'CardTitle3', 'CardTitle4'],
            list_elements:'',
            img: '',
        }
    }
    render(){
        return (
            <section class="section-d">
                <div class="container">
                    <div class="row">
                         <div class="col-lg-12 pb-5">
                            <h4 class="float-left c-purple"><span class="lnr lnr-frame-contract pr-2"></span>Division 1</h4>
                        </div>
                    </div>
                    <div class="row">
                        <Card card_title={this.state.card_title[0]}/>
                        <Card card_title={this.state.card_title[1]}/>
                        <Card card_title={this.state.card_title[2]}/>
                        <Card card_title={this.state.card_title[3]}/>
                    </div>
                    <div class="row">
                        <h4 class="text-center f-Montserrat Clinic-Action-lists">
                            <a class="c-blue">React Website Template</a>Lorem İpsum
                        </h4>
                    </div>
                 </div>
            </section>
        )
    }
}

export default popularDestinations;