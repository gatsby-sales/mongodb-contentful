<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Starter Landing Page
</h1>

This is a tweak of the Gatsby+Contentful Landing Page Starter. It utilizes the 'Landing Page' content type to allow you to build reusable blocks for landing pages, while also having about 2,000 blog posts to show what its like to make changes on a site at scale.

## Quick start

### Prerequisites
1. Access to the [test Contentful space](https://app.contentful.com/spaces/opl7rysqwz01/home)
2. [`.env` files.](https://drive.google.com/drive/folders/1ZexomVa-UJTDfUEYCUCXxRmosap891ac?usp=sharing)

### Installation

1. **Use node v14 && npm install**

   In the root directory of the site

   ```sh
   nvm use 14 && npm install
   ```

2. **Add `.env` files to root**
   
   Download the .env files from the Google drive link above and add them to the root of your repo

3. **Start developing**

   ```sh
   gatsby develop
   ```

4. **Open the source code and start editing!**

   Your site should now be running at <http://localhost:8000>

## Content editing
Once added to the Contentful space for this site you should see a purple 'Open Preview' button in your editor which will bring you to the page you're editing. Webhooks for publishing should be in place so you can Publish in Contentful and a build will automatically trigger in the background.
