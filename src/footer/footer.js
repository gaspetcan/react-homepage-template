import React from 'react';

class footer extends React.Component{
    render(){ 
        return (
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-12 f-poppins footer_links">
                        <a>Imprint</a>
                        <a>About us</a>
                        <a>Blog</a>
                        <a>Second Opinion</a>
                        <a>Business</a>
                        <a>Our Team</a>
                        <a>Careers</a>
                        <a>Press</a>
                        <a>Help</a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 f-poppins footer_desc">
                        <a>By using our site, you agree to our Terms and Conditions and Privacy Policy.
                            About this website description please follow the link to show my profile</a>
                        <br/><br/>
                        <a>Copyright 2019 © Yağız Aydın</a>
                    </div>
                </div>
            </div>
        </footer>
    )}
}

export default footer;