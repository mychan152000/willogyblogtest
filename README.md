# Netlify CMS template for Gridsome

> A simple, hackable & minimalistic starter for Gridsome that uses Netlify CMS for content.

## Features
- Beautiful and simple design.
- Markdown for content.
- Tags support.
- Dark / Light toggle.
- CSS variables, SCSS & BEM for styling.
- 100, 100, 100, 100 score on Google Lighthouse.
- Uses same front-matter fields as Dev.to.

## Demo URL

https://netlifycms-gridsome.suits.at/

## Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/suits-at/netlifycms-gridsome)

### Enable Identity

Enable the netlify identity service at https://app.netlify.com/sites/YOUR-SITE/settings/identity. For exact instructions see https://www.netlify.com/docs/identity/. You might want to enable Git Gateway as well https://www.netlify.com/docs/git-gateway/. 

### Edit content

Access `yourwebsite.com/admin`, e.g. `netfliycms-gridsome.netlify.com/admin` or locally this might be  `localhost:3000/admin`.

## Install locally

### 1. Install Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`

### 2. Install this starter

1. `gridsome create my-gridsome-site https://github.com/suits-at/netlifycms-gridsome`
2. `cd my-gridsome-site` to open folder
3. `gridsome develop` to start local dev server at `http://localhost:8080`
4. Happy coding 🎉🙌

## About this app (For onboarding)
 
### UI 

Bootstrap

### Plugins

1. To Generate sitemap: .https://gridsome.org/plugins/@gridsome/plugin-sitemap
2. To generate robot.txt: https://gridsome.org/plugins/gridsome-plugin-robots-txt
3. Comment section: https://utteranc.es/ 
4. Contact Form: Netlify
5. Subscription Form: Mailchimp 

### Notes
1. For contact Form to work you must enable Form function in Netlify and remember to make forms redirect to willogy's email (all in Form function in Netlify)
2. Utterances' code is already in Post.vue, but haven't edited to the right path of willogy, repo haven't install Utterance like instructions
3. To get Mailchimp api's key in details, this is the video to watch: https://www.youtube.com/watch?v=Gjk25N7WFkI&t=1790s
But in short, just sign up, go to audience => Sign Up Form => Embedded Forms, just choose any, and you can find our own api's key 
in their auto-generated codes, copy and paste it into our template form, which I placed it in Default.vue.