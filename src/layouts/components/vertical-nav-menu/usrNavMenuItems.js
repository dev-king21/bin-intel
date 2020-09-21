/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  {
    url: '/dashboard',
    name: 'DashBoard',
    slug: 'DashBoard',
    icon: 'HomeIcon'
  },
  {
    url: '/billing',
    name: 'Billing',
    slug: 'Billing',
    icon: 'CreditCardIcon'
  },
  {
    url: '/doc',
    name: 'Documentation',
    icon: 'BookOpenIcon',
    slug: 'external',
    i18n: 'Documentation',
    target: '_blank'
  },
  {
    url: '/profile',
    name: 'Profile',
    slug: 'Profile',
    icon: 'UserIcon'
  }
]
