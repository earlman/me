# earlman.me

> A JAMstack blog with carefully considered architecture.

2019/12/05: This repo will hold the contents of my blog&mdash;possibly the longest running project I have. With over 300,000 words written over the course of 6 years... well, it's a pity that I don't currently have a presence online. I'm rebuilding my wordpress blog from scratch using some of the technologies that have matured recently 

## Architecture

### Overview

<img src="/docs/assets/site-architecture-github.png" />

Admittedly, this may seem like overkill for a simple blog, but there were a lot of a lot of requirements. In short, I wanted to build a structure that I could use comfortably for the rest of my life. 

This architecture was designed with two main principles in mind:

* **Flexibility** - I want to be able to switch out technologies and add new features as I please, without it screwing up other portions of my blog. 

* **Clarity** - If I stopped this project for a year, I should easily be able to find where everything is once I came back, (without relying on documentation)

### Main Directories

* `site/` - The source code for a statically generated site. Where most of the exciting stuff is.
* `server/` - One of the loftier ambitions of this project&emdash;a [micropub](https://indieweb.org/Micropub) endpoint that lets me manage my blog via API.
* `docs/` - Everything from the server endpoints to the required fields in the content frontmatter.
* `content/` - A git [**submodule**](https://git-scm.com/book/en/v2/Git-Tools-Submodules) that links to the [content repository](https://github.com/earlman/me-content/)

### Technology and Services

| Name  | Area of Concern | Purpose |
| ------------- | ------------- | ------------- |
| Netlify | `site`,  `server`, `docs` | Everybody's favorite static site host. See below for more details. |
| Content Cell  | Content Cell  |

### Netlify's Responsibilities

![Flowchart of Publishing Process](/docs/assets/site-architecture-netlify.png)




![Flowchart of Publishing Process](/docs/assets/publish-flow.png)

### Extra's

#### Why I'm using a submodule for the Content
The most important components to any blog is the Content and the Site. By 'Site', I'm specifically referring to what the user sees and interacts with. 'Content' is all the posts. The Content has pretty much always been stored in its own database and managed separately. Some Sites, like Wordpress, access this data on-the-fly. The method that's gotten the most buzz recently is building the site with a static site generator (Gridsome, eleventy, Jekyll, Hugo), and serving that. This creates loads of improvements on the client's end, since they don't need hit your database twice.

However, this new architecture has led to the Content being stored directly in the git repository holding the Site files, and I'm not a huge fan of that. (In the case of docmentation, this makes more sense sense since they're much closer to code than blog posts.) One reason is that changes and updates to the content show up in your commit history. There's a ton of power behind that&emdash;after all, your front-end design is closely related to the content it serves&emdash;but it doesn't change the fact that writing a blog post is done in a much different mental context than debugging your navbar.

Fortunately, an elegant solution exists called [git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules). From the docs: "Submodules allow you to keep a Git repository as a subdirectory of another Git repository. This lets you clone another repository into your project and keep your commits separate." Perfect. 
