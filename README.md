# CDFG website

This is a static website using [Jekyll](https://jekyllrb.com/) and [Netlify CMS](https://www.netlifycms.org/). 


### Folder Structure

- `_data`: contains a `navigation.yml` file for specifying the main website naviation
- `admin`: contains the configuration files for Netlify CMS
- `assets`: media folder for images and files
- `cdfg-theme`: see "Theme Files" below
- `collections`: contains markdown files for the website content divided by  content type
- `pages`: contains markdown files that define the layout and content for each of the main pages


### Content Management

This site uses Netlify CMS as front-end for editing the site content, which can be accessed at [cdfg.netlify.app/admin](https://cdfg.netlify.app/admin).

You can also edit the markdown files in this repository directly instead of using the CMS. 

Note: if working on the website locally, any changes made via the content manager will be published to the git repository, rather than your local files. 

More information on Netlify CMS can be found in their [documentation](https://www.netlifycms.org/docs/intro/).  


### Local Development

To run the website on your local machine, do the following:

1. Clone this repository and `cd` into the `cdfg` folder. 
2. Install Jekyll by running `gem install bundler jekyll`. (This assumes you already have Ruby [installed](https://www.ruby-lang.org/en/documentation/installation/) on your machine)
3. Start Jekyll by running `bundle exec jekyll serve --livereload`
4. You should now have a local server running at `http://localhost:4000`


### Theme Files

The `cdfg-theme` folder contains the various HTML templates used in the site, along with CSS and Javascript files. 

This theme uses [Gulp](https://gulpjs.com/) to compile and concatenate [SCSS](https://sass-lang.com/) files to CSS, and to concatenate and minify JavaScript files. 

In order to modify the CSS and Javascript files, you'll need to run the following in a seperate terminal session:

1. Make sure you have Node and NPM [installed](https://www.npmjs.com/get-npm) on your machine
2. `cd cdfg-theme`
3. `npm install` 
4. `gulp`


### Deployment

The site is currently hosted on [Netlify](https://www.netlify.com/) and any changes to the `master` branch will be deployed automatically. 

If you want to make changes without deploying them immediately, you can create a new branch in this repository and it will automatically be deployed to `branchname--cdfg.netlify.app`. 