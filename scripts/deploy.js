var ghpages = require('gh-pages');

// TODO: improve output https://github.com/tschaub/gh-pages
ghpages.publish('_site', {
    branch: 'master',
    repo: 'git@github.com:hugomn/hugomn.github.io.git',
    user: {
        name: 'Hugo Nogueira',
        email: 'hugomn@gmail.com'
    }
  });