export const NavContents = [
    {
        name: 'feed',
        href: '/',
        icon : "/icons/home.svg",
        ifSignIn: false
    },
    {
        name: 'College',
        href: '/college',
        icon : "/icons/college.svg",
        ifSignIn: false
    },
    {
        name: 'People',
        href: '/explore',
        icon : "/icons/people.svg",
        ifSignIn: false,
        ifUserExist: true
    },
    {
        name: 'Connections',
        href: '/connect',
        icon : "/icons/people.svg",
        ifSignIn: true
    },
    
    {
        name: 'Jobs',
        href: '/jobs',
        icon : "/icons/job.svg",
        ifSignIn: false
    },
    {
        name: 'Notifications',
        href: '/notifications',
        icon : "/icons/notification.svg",
        ifSignIn: true
    },
    {
        name: 'Events',
        href: '/events',
        icon : "/icons/insights.svg",
        ifSignIn: false
    },

]