# sunchoke Documentation

This documentation is based on [Gitbook](https://www.gitbook.com/)

Each widget has 2 parts
* a [codepen](http://codepen.io/) example
* a usage documentation  

### Initialisation
```
npm install
```
This documentation use npm to use gitbook-cli.

### Run your gitbook in dev mode
```
npm start
```
This will create your book and serve it with a watch. The book is available at [http://localhost:4000/](http://localhost:4000/).

### Build the book for Github pages
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

### CLI
To create a new widget documentation, please use the CLI to create the files and follow our file/naming/content conventions.
```
npm run add:widget
```
This will launch a CLI. You will have to answer 2 questions
* The Widget name in camelCase with a capital letter (ex: FancyButton)
* The codePen playground url

### Git
You can freely submit a pull request. [Github documentation](https://help.github.com/articles/using-pull-requests/)

Before that : 
* review your doc
* Please squash ! [Documentation](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History#Squashing-Commits)