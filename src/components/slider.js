import React from 'react';
import SearchBox from './searchBox';
import ListBox from './listBox';

class slider extends React.Component {
    render(){
        return (
        <section class="home_banner_area">
		<div class="banner_inner d-flex align-items-center">
			<div class="container">
				<div class="banner_content row">
					<div class="col-lg-12">
						<h1 class="slider-title Explore-healthcare-s f-Montserrat">React Template for HomePage</h1>
                        <ul class="slider-list f-poppins Internationally-accr ">
                            <li>Slider list elements</li>
                            <li>Slider list elements</li>
                            <li>Slider list elements</li>
                            <li>Slider list elements</li>
                        </ul>
                        <div class="row">
                            <div className="col-lg-6">
                                <h2 className="search-title">I am looking for</h2>
                            </div>
                            <div className="col-lg-3">
                                <h2 className="search-title">Location</h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <SearchBox/>
                            </div>
                            <div class="col-lg-3">
                                <ListBox/>
                            </div>    
                            <div class="col-lg-3">
                                <button class="btn bg-purple button-y">Search</button>
                            </div>
                        </div>
                        <h2 class="lastest-searches f-Montserrat"><b>Latest searches:</b></h2>
					</div>
				</div>
			</div>
		</div>
	</section>
            )
        }
}
export default slider;