export default {
  widgets: [
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
                  buildHookId: '5fea0bd653b9a36aeb00ee97',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-evnj2q81',
                  apiId: 'f9bb50cb-3ae4-4e9d-ad30-221e4e2d5ef8'
                },
                {
                  buildHookId: '5fea0bd7d3fff93034fec3d9',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-j4q4ca4z',
                  apiId: '8132c149-546a-4654-89ce-c9d6e76762f2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thehangang77/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-j4q4ca4z.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
