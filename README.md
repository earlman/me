# earlman.me

> A JAMstack blog with carefully considered architecture.

2019/12/19: There's been a lot of good progress in the last couple weeks. It's the type of progress that one can be confident in, without cut corners or compromises on the original specifications. All the initial design work has been complete and all the infrastructure has been meticulously implemented. There's been a strong focus on the documentation that will hopefully pay dividends as I start really building things out. I hope to have the pages developed by Jan 10, 2020.

2019/12/05: This repo will hold the contents of my blog&mdash;possibly the longest running project I have. With over 300,000 words written over the course of 6 years... well, it's a pity that I don't currently have a presence online. I did too much experimentation on the Wordpress blog I had and ended up taking it down, but I love fresh starts leggo.

## Architecture

### Overview

<img src="/docs/assets/site-architecture-github.png" />

Admittedly, this may seem like overkill for a simple blog, but there were a lot of a lot of requirements. In short, I wanted to build a structure that I could use comfortably for the rest of my life.

This architecture was designed with two main principles in mind:

- **Flexibility** - I want to be able to switch out technologies and add new features as I please, without it screwing up other portions of my blog.

- **Clarity** - If I stopped this project for a year, I should easily be able to find where everything is once I came back, (without relying on documentation)

### Main Directories

- `site/` - The source code for a statically generated site. Where most of the exciting stuff is.
- `server/` - One of the loftier ambitions of this project&mdash;a [micropub](https://indieweb.org/Micropub) endpoint that lets me manage my blog via API.
- `docs/` - Everything from the server endpoints to the required fields in the content frontmatter.
- `content/` - A git [**submodule**](https://git-scm.com/book/en/v2/Git-Tools-Submodules) that links to the [content repository](https://github.com/earlman/me-content/). This part of the setup was important to me. [Here's why](#why-im-using-a-submodule-for-the-content).

### Technology and Services

| Name                                                             | Area of Concern             | Description                                                                                                                                     |
| ---------------------------------------------------------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| [Netlify](https://www.netlify.com/)                              | `site`, `server`, `docs`    | Everybody's favorite static site host. See [below](#netlifys-responsibilities) for more details.                                                |
| [Gridsome](https://gridsome.org/)                                | `site`                      | A static site generator based on VueJS and Graphql.                                                                                             |
| [NetlifyCMS](https://www.netlifycms.org/)                        | `site`, `content`           | A content management system built for the git workflow.                                                                                         |
| [Vuepress](https://vuepress.vuejs.org/)                          | `docs`                      | An opinionated documentation (and static site) generator that comes with a lot of helpful functionality.                                        |
| [Github Actions](https://vuepress.vuejs.org/)                    | `site`, `server`, `content` | Instrumental for making sure the site gets updated regardless of how you change the content. See [below](#publishing-process) for more details. |
| [Netlify Functions](https://www.netlify.com/products/functions/) | `site`                      | Currently the leading option for hosting an API on this blog                                                                                    |

### Netlify's Responsibilities

Netlify will be used to host three separate subdomains. One for the blog, one for the docs, and one for the API.

![Netlify's Responsibilities](/docs/assets/site-architecture-netlify.png)

### Publishing Process

<img src="/docs/assets/publish-flow.png" width="400px"/>

Behind the scenes, this is as complicated as it looks. For the user, it should work like a charm. The architecture, and more specifically github, should allow me ultimate flexibility in how I want to add my content. Here's 4 possiblities.

- Adding a new file directly on the Github interface.
- Pushing new content with [Working Copy](https://workingcopyapp.com/) an iOS Git client
- Commiting with VSCode
- Sending a request to api.earlman.me. This functionality is far from critical, but the API will theoretically [give me all sorts of features for interacting with my data.](https://micropub.rocks/implementation-reports/servers/)

### Extras

#### Why I'm using a submodule for the Content

The most important components to any blog is the Content and the Site. By 'Site', I'm specifically referring to what the user sees and interacts with. 'Content' is all the posts. The Content has pretty much always been stored in its own database and managed separately. Some Sites, like Wordpress, access this data on-the-fly. The method that's gotten the most buzz recently is building the site with a static site generator (Gridsome, eleventy, Jekyll, Hugo), and serving that. This creates loads of improvements on the client's end, since they don't need hit your database twice.

However, this new architecture has led to the Content being stored directly in the git repository holding the Site files, and I'm not a huge fan of that. (In the case of docmentation, this makes more sense sense since they're much closer to code than blog posts.) One reason is that changes and updates to the content show up in your commit history. There's a ton of power behind that&mdash;after all, your front-end design is closely related to the content it serves&mdash;but it doesn't change the fact that writing a blog post is done in a much different mental context than debugging your navbar.

Fortunately, an elegant solution exists called [git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules). From the docs: "Submodules allow you to keep a Git repository as a subdirectory of another Git repository. This lets you clone another repository into your project and keep your commits separate." Perfect.

**Updating Submodules**

- `git submodule init`
- `cd submodule_dir`
- `git checkout master`
- `git pull`
