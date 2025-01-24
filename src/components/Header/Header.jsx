import React from 'react';
import styles from './Header.module.css';

function Header() {
  return <header className="hero">
    <div className={styles.inner}>
      <div className={styles.text}>
          <p className="lead">👋🏻 Hello! My name is
            <span className={styles.phil} itemProp="name">{' '}
              <span itemProp="givenName">Phil</span> <span itemProp="familyName">Hancox</span>
            </span><br />and I'm a <span itemProp="jobTitle">web developer</span> based in
            {' '}<span itemProp="homeLocation">Sheffield</span>, <span itemProp="nationality">England</span></p>
      </div>
    </div>
  </header>;
}

export default Header;
