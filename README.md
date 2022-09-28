# CDFG website

This is a static website using [Jekyll](https://jekyllrb.com/). 


### Folder Structure

- `_data`: contains a `navigation.yml` file for specifying the main website naviation
- `admin`: contains the configuration files for Netlify CMS
- `assets`: media folder for images and files
- `cdfg-theme`: see "Theme Files" below
- `collections`: contains markdown files for the website content divided by  content type
- `pages`: contains markdown files that define the layout and content for each of the main pages


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

