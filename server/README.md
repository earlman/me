# Server

This folder will contain the server for [api.earlman.me](http://docs.earlman.me). The server will be responsible for responding to all micropub requests for the site. All other requests will be handled by Netlify.

## Hosting

While the majority of visible content for [earlman.me](https://earlman.me) is served from [Netlify](https://netlify.com), this server will be hosted on [Digital Ocean](https://digitalocean.com), since this portion of the blog is dynamic. 

I decided to keep the static content on Netlify for a couple reasons. First, Netlify is just so damn easy to use. Second, the web API is not a critical feature of my blog, and I prefer keep the most important aspect (the website itself) hosted by people much more qualified than me.