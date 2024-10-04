import React from 'react';
import classes from 'components/Nav/Nav.module.css';

import { ReactComponent as GitIcon } from 'assets/github_icon.svg';
import { ReactComponent as LinkedInIcon } from 'assets/linkedin_icon.svg';
export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://github.com/ChandraTheMerciless/js-algorithms-demo"
            rel="noreferrer"
            aria-label="Chandra Asar Project GitHub"
          >
            <div className={classes['icon-wrapper']}>
              <GitIcon aria-hidden="true" />
            </div>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/chandra-asar-b325938/"
            rel="noreferrer"
            aria-label="Chandra Asar LinkedIn"
          >
            <div className={classes['icon-wrapper']}>
              <LinkedInIcon
                className={classes['linkedin-icon']}
                aria-hidden="true"
              />
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
}
