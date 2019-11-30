import React from 'react';
import Card from './Card';

class popularDestinations extends React.Component{
    constructor(props){
        super(props);
        this.state={
            card_title:['Location1', 'Location2', 'Location3', 'Location4'],
            list_elements:'',
            img: '',
        }
    }
    render(){
        return (
            <section class="section-d bg-s-gray">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 pb-5">
                            <h4 class="float-left c-purple"><span className="lnr lnr-map-marker pr-2"></span>Division 2</h4>
                        </div>
                    </div>
                    <div class="row">
                        <Card card_title={this.state.card_title[0]}/>
                        <Card card_title={this.state.card_title[1]}/>
                        <Card card_title={this.state.card_title[2]}/>
                        <Card card_title={this.state.card_title[3]}/>
                    </div>
                </div>
            </section>
        )
    }
}

export default popularDestinations;