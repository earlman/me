# earlman.me

> A JAMstack blog with carefully considered architecture.

2019/12/05: This repo will hold the contents of my blog&mdash;possibly the longest running project I have. With over 300,000 words written over the course of 6 years... well, it's a pity that I don't currently have a presence online. I'm rebuilding my wordpress blog from scratch using some of the beautiful technologies that have matured recently 

## Architecture

### Overview

<img src="/docs/assets/site-architecture-github.png" />

Admittedly, this may seem like overkill for a simple blog, but there were a lot of a lot of requirements that I find necessary to build something that I can use comfortably for the rest of my life. (yes, yes, I understand how technical debt works)

This architecture was designed with the following ideas in mind, listed by priority.

1) **Flexibility** - I want to be able to switch out technologies and add new features as I please, without it screwing up other portions of my blog. 
2) **Clarity** - If I stopped this project for a year, I should easily be able to find where everything is once I came back. 
3) **Simplicity** - 

#### The Content and the Site

Startng off simply, the most important components to any blog is the Content and the Site. By 'Site', I'm specifically referring to what the user sees and interacts with. 'Content' is all the posts. The Content has pretty much always been stored in its own database and managed separately. Some Sites, like Wordpress, access this data on-the-fly. The method that's gotten the most buzz recently is building the site with a static site generator (Gridsome, eleventy, Jekyll, Hugo), and serving that. This creates loads of improvements on the client's end, since they don't need hit your database twice.

However, this new architecture has led to the Content being stored directly in the git repository holding the Site files, and I'm not a huge fan of that. (In the case of docmentation, this makes more sense sense since they're much closer to code than blog posts.) One reason is that changes and updates to the content show up in your commit history. There's a ton of power behind that&emdash;after all, your front-end design is closely related to the content it serves&emdash;but it doesn't change the fact that writing a blog post is done in a much different mental context than debugging your navbar.

Fortunately, an elegant solution exists called [git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules). From the docs: "Submodules allow you to keep a Git repository as a subdirectory of another Git repository. This lets you clone another repository into your project and keep your commits separate." Perfect. 

*edit: maybe most of this should go in a blog post somewhere*

### Technology and Services




![Flowchart of Publishing Process](/docs/assets/publish-flow.png)
