import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBluesky, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import '@fortawesome/fontawesome-svg-core/styles'

function Footer() {
    return <footer>
        <div style={{padding: '20px 0'}}>
            <a href="https://bsky.app/profile/phlhn.cx" target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon size="lg" icon={faBluesky}/></a>
            <a href="https://github.com/philhancox" target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon size="lg" icon={faGithub}/></a>
            <a href="hhttps://www.linkedin.com/in/philhancox/" target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon size="lg" icon={faLinkedin}/></a>
        </div>
        <p className="text-center">Copyright &copy; Phil Hancox {new Date().getFullYear()}</p>
        <small>Last updated {new Date().toLocaleString('en-gb')}</small>
    </footer>;
}

export default Footer;
