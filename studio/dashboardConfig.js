export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2cd989953e72e61dce5baf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-irsyujyp',
                  apiId: 'de53ab14-0526-49d2-bc50-756b114d6a79'
                },
                {
                  buildHookId: '5f2cd989953e72c333ce5f4e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-n3uguitq',
                  apiId: '09b25ef3-1504-4733-a7d1-1bc56f5a5de3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SoWeiHao/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-n3uguitq.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
