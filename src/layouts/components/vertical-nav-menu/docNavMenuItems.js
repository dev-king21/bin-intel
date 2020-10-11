/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pagos LLC
==========================================================================================*/


export default [
  {
    url: '/doc',
    name: 'OverView',
    slug: 'doc-overview'
  },
  {
    url: '/doc/bin-intel-api',
    name: 'Bin-Intel API',
    slug: 'doc-bin-intel-api'
  },
  {
    url: '/doc/node-sdk',
    name: 'Node SDK',
    slug: 'doc-node-sdk'
  },
  {
    url: '/doc/java-sdk',
    name: 'Java SDK',
    slug: 'doc-java-sdk'
  },
  {
    url: '/doc/csharp-sdk',
    name: 'C-Sharp SDK',
    slug: 'doc-csharp-sdk'
  },
  {
    url: '/doc/php-sdk',
    name: 'PHP SDK',
    slug: 'doc-php-sdk'
  },
  {
    url: '/doc/python-sdk',
    name: 'Python SDK',
    slug: 'doc-python-sdk'
  },
  {
    url: null,
    name: 'Collections',
    i18n: 'Collections',
    submenu: [
      {
        url: '/doc/collections/model',
        name: 'Model',
        slug: 'doc-col-model',
        i18n: 'Collections'
      },
      {
        url: '/doc/collections/list',
        name: 'List Collections',
        slug: 'doc-col-list',
        i18n: 'Collections'
      },
      {
        url: '/doc/collections/get',
        name: 'Get Collections',
        slug: 'doc-col-get',
        i18n: 'Collections'
      }
    ]
  },
  {
    url: '/doc/fields',
    name: 'Fields',
    slug: 'doc-fields'
  },
  {
    url: '/doc/items',
    name: 'Items',
    slug: 'doc-items'
  },
  {
    url: '/doc/images',
    name: 'Images',
    slug: 'doc-images'
  },
  {
    url: '/doc/webhooks',
    name: 'Webhooks',
    slug: 'doc-webhooks'
  },
  {
    url: '/doc/errors',
    name: 'Errors',
    slug: 'doc-errors'
  },
  {
    url: '/doc/rate-limits',
    name: 'Rate Limits',
    slug: 'doc-rate-limits'
  },
  {
    url: '/doc/api-versions',
    name: 'API Versions',
    slug: 'doc-api-versions'
  },
  {
    url: '/doc/changelog',
    name: 'Change Log',
    slug: 'doc-changelog'
  }
]
