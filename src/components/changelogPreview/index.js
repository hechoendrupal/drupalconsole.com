import React from 'react';
import PropTypes from 'prop-types';

const changelogPreview = props => {
  return (
    <div className="my-4">
      <h2>Changelog</h2>
      <div className="row">
        <div className="last-entry col-8">
          <h4 id="v2-0-1">Version 2.0.1<a class="anchor" href="#v2-0-1"></a></h4>
          <p class="text-light"><small>Released on August 01, 2018</small></p>
          <pre>{`- Add    : Layout general-3
- Add    : Dark styled code (See /docs/uikit.html)
- Update : Plugins (Bootstrap)
- Update : NPM packages`}</pre>
        </div>
        <aside class=" col-4" >
          <h6 class="sidebar-title">Releases</h6>
          <ul class="nav nav-sidebar nav-sidebar-pill">
            <li class="nav-item">
              <a class="nav-link" href="#v1-2-0">1.2.0</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#v1-1-0">1.1.0</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#v1-0-0">1.0.0</a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

changelogPreview.propTypes = {
  
};

export default changelogPreview;