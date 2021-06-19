import React from 'react';
import '../../scss/components/footer.scss';

const Footer = ({darkmode}) => {
    return(
        <div className={darkmode ? 'footer darkmode': 'footer'}>
            <div className="footer_social_title">Find us on social media:</div>
                <div className="footer_social_icons">
                    <a href={'https://github.com/ssmirnovacode/ToDo-App'} target="blank" ><i className="sm-icon fa fa-facebook-square"></i></a>
                    <a href={'https://github.com/ssmirnovacode/ToDo-App'} target="blank" ><i className="sm-icon fa fa-linkedin-square"></i></a>
                    <a href={'https://github.com/ssmirnovacode/ToDo-App'} target="blank" ><i className="sm-icon fa fa-github-square"></i></a>
                </div>
        </div>
    )
}

export default Footer;