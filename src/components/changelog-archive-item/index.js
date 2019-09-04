import React from "react";
import PropTypes from "prop-types";
import slugify from "slugify";
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import './style.css';

const ChangelogItem = props => {
  const { title, excerpt, path, date } = props;
  const slug = slugify(title);
  return (
    <div className="pb-4">
      <h2 id={slug}><a className="changelog-item__hash" href={`#${slug}`}>#</a>{title}</h2>
      <p className="changelog-item__date">{date}</p>
      <MDXProvider>
        <MDXRenderer>{excerpt}</MDXRenderer>
      </MDXProvider>
      <Link to={path}>Read more</Link>
      <hr/>
    </div>
  )
}

ChangelogItem.propTypes = {
  title: PropTypes.string,
  excerpt: PropTypes.string,
  path: PropTypes.string,
  date: PropTypes.string,
}

export default ChangelogItem
