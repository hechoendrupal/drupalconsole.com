import React from 'react'

/*
 * Add global styles and scripts to ensure Bootstrap and jQuery JS is included
 */
export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {

  setPostBodyComponents([
    <script key="jquery" src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>,
    <script key="popper" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js">></script>,
    <script key="bootstrap" src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>,
  ])
}
