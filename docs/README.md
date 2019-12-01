# Docs

This folder will contain the docs for the site. They will be generated using [Vuepress](https://vuepress.vuejs.org).

Note: I think it's important to have a README in each of the root folders for this project. However, I want to avoid inconsistencies between let's say `/server/README.md` and the "server" section of the docs. To deal with this, have Vuepress source that section from the `/server/README.md` file. Create a placeholder file in the docs folder to prevent duplication. For example:

```
/docs/server/README.md

*This is a placeholder file. Documentation for the [site directory](<URL for site docs>) can be found at `/server/README.md`. The remaining documentation can be found in this directory.

``` 