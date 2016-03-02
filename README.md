# sunchoke Documentation

This documentation is based on [Gitbook](https://www.gitbook.com/)

## Initialisation
```
npm install
```
This documentation use npm to use gitbook-cli.

## Run your gitbook in dev mode
```
npm start
```
This will create your book and serve it with a watch. The book is available at [http://localhost:4000/](http://localhost:4000/).

## Build the book for Github pages
```
npm run build
```
This will create your book in a doc/ directory. This directory is automatically referenced in Sunchoke Github Pages.
The generated doc should be pushed on Github on this branch to be available as Github Pages.
```
> git add doc
> git ci -m "Add MyWidget documentation"
> git push origin gh-pages
```
