import React from 'react'

/*
 * Add global styles and scripts to ensure Bootstrap and jQuery JS is included
 */
export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([
    <link key="page-min" href="/css/page.min.css" rel="stylesheet" />,
    <link key="style" href="/css/style.css" rel="stylesheet" />,
  ])

  setPostBodyComponents([
    <script key="jquery" src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>,
    <script key="popper" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js">></script>,
    <script key="bootstrap" src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>,
    <script key="fontawesome" src="https://kit.fontawesome.com/dc33843c41.js"></script>
  ])
}
