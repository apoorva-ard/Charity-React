import React from 'react';

function Footer(props) {
    return (
        <div className="footer footer-setup">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-instagram" href="http://instagram.com"><i className="fa fa-instagram"> </i></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"> </i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"> </i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"> </i></a>
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"> </i></a>
                        </div>
                    </div>
                </div>
                <hr className="line"/>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>&copy; Copyright 2021 Charity - Batch11</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;          