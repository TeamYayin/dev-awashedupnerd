module.exports = {
  siteMetadata: {
    siteTitle: 'A Washed-up Nerd',
    siteDescription: 'Learning resources for Programmers',
    siteImage: '/banner.png', // main image of the site for metadata
    siteUrl: 'https://dev.awashedupnerd.in/',
    pathPrefix: '/',
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'dev @ A Washed-up Nerd',
    authorDescription:
      'Fellow full stack developers and information security researchers.',
    avatar: '/logo_t.png',
    twitterSite: 'https://twitter.com/yayinlabs', // website account on twitter
    twitterCreator: 'https://twitter.com/yayinlabs', // creator account on twitter
    social: [
      {
        icon: 'at',
        url: 'mailto:blogs@yayinailab.tech'
      },
      {
        icon: 'twitter',
        url: 'https://twitter.com/yayinlabs'
      },
      {
        icon: 'github',
        url: 'https://github.com/TeamYayin/dev-awashedupnerd'
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'show more',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags'
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: true,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '🔗 '
            }
          }
        },
        feedSearch: {
          symbol: '🔍'
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dev @ A Washed-up Nerd`,
        short_name: `A Washedup Nerd`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // remove tracking some time after release
        trackingId: 'UA-162845368-1'
      }
    }
  ]
};
