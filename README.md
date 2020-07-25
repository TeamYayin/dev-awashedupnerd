# A Washed-up Nerd Dev Blog

[![A washedup nerd is released under the MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/TeamYayin/dev-awashedupnerd/blob/master/LICENSE) ![Twitter Follow](https://img.shields.io/twitter/follow/yayinlabs?label=A%20Washed-up%20Nerd&style=) ![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

![Gatsby Publish gh-pages](https://github.com/TeamYayin/dev-awashedupnerd/workflows/Gatsby%20Publish%20GH-Pages/badge.svg)

**_Table of Contents_**

- [🚀 Getting Started](#---getting-started)
  - [Push changes using CodeSandbox](#push-changes-using-codesandbox)
  - [Local Developement](#local-developement)
  - [Open the code and start customizing](#open-the-code-and-start-customizing)
  - [Writing posts](#writing-posts)
  - [Projects](#projects)
  - [What goes into the `static` folder](#what-goes-into-the--static--folder)
- [🎓 Learning Gatsby](#---learning-gatsby)
  - [General](#general)
  - [🌟 Supporting the author behind this great theme](#---supporting-the-author-behind-this-great-theme)
- [Deploying to Netlify](#deploying-to-netlify)

[![GatsbyJS](https://www.gatsbyjs.org/Gatsby-Logo.svg)](https://www.gatsbyjs.org)
Theme based on [`@Chronoblog`](https://github.com/Chronoblog/gatsby-theme-chronoblog).

## 🚀 Getting Started

[![Fork A Washedup Nerd into CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/TeamYayin/dev-awashedupnerd/tree/master/)

### Push changes using CodeSandbox

After opening the above CodeSandbox link on the new browser window fork it to your Github profile and make the necessary changes and commit. Then make a pull request by comparing only the `master` branch and your repository. For now, [@Prajwal](https://github.com/py563) will handle all PRs.

### Local Developement

> Development tools used were `VSCode`, `WSL`, or `WSL2-Alpine` on `Windows10`. A detailed wiki for tool structure for all blogs would be [here](https://github.com/TeamYayin/awashedupnerd/wiki).

**Requires `Node.js` before proceeding any further install it.**

- Install Gatsby-CLI globally with node package manager `npm install -g gatsby-cli` and to learn more about Gatsby skip to [learning section below](#-learning-gatsby).

- Clone this repository using SSH or HTTPS

  ```sh
  # ssh - based cloning
  git clone git@github.com:TeamYayin/dev-awashedupnerd.git
  # https - cloning
  git clone https://github.com/TeamYayin/dev-awashedupnerd.git

  ```

- Navigate into your new site's directory `cd dev-awashedupnerd`.

- Install dependencies `npm install`.

- Start developing, run the project using `gatsby develop`.

### Open the code and start customizing

Your site is now running at `http://localhost:8000`!

If you want to learn more about how you can use a Gatsby starter that is configured with a Gatsby theme, you can check out this [shorter](https://www.gatsbyjs.org/docs/themes/using-a-gatsby-theme/) or [longer](https://www.gatsbyjs.org/tutorial/using-a-theme/) tutorial.

### Writing posts

The posts are categorized into these sections mainly viz: notes, links, full blog posts, embedded videos. A quick tutorial and demo of each category can be viewed on these [demo full post file](\content\posts\demo-full-blog-post\index.md) and [note demo file](\content\notes\demo-note-help.md)

To learn in detail about how posts are differenent or how to write a post in a particular category please view [chronoblog's readme file](https://github.com/Chronoblog/gatsby-theme-chronoblog/blob/master/packages/gatsby-theme-chronoblog/README.md)

### Projects

Posts tagged as projects are displayed on this page and can be accessable through main navigation.

### What goes into the `static` folder

The `static` folder contains the icons, social media images, any custom js or CSS files (for better-caching use CDN or npm package for public files) and robots.txt.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation of Gatsby lives [on Gatsby's website](https://www.gatsbyjs.org/).

- To learn more about Gatsby's themes specifically, we recommend checking out the [theme docs](https://www.gatsbyjs.org/docs/themes/).

### General

- **For most developers, I recommend starting with the [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to Gatsby's documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Reference Guides_ and _Gatsby API_ sections in the sidebar.

### 🌟 Supporting the author behind this great theme

Please do visit Ivan Ganev's [website](https://www.ganevdev.com/) and star the [gatsby-theme-chronoblog](https://github.com/Chronoblog/gatsby-theme-chronoblog) project, share it on Social Media !

🤔 Questions or problems? with the theme, please open up an issue on the main repository: [gatsby-theme-chronoblog](https://github.com/Chronoblog/gatsby-theme-chronoblog) and also do contribute.

## Deploying to Netlify

Gatsby Docs: [www.gatsbyjs.org/docs/deploying-to-netlify](https://www.gatsbyjs.org/docs/deploying-to-netlify/)

Quick Deployment:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/TeamYayin/dev-awashedupnerd.git)
