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

export const navigationData = {
    alumniResources: [
      {
        title: "Alumni Resources",
        items: ["Alumni Association", "Awards and Recognition", "Benefits and Services"],
      },
      {
        title: "Career Services",
        items: ["Job Board", "Career Counseling", "Professional Development"],
      },
      {
        title: "Get Involved",
        items: ["Volunteer", "Clubs and Regions", "Shared Interest Groups"],
      },
      
    ],
    events: [
      {
        title: "Upcoming Events",
        items: ["Annual Reunion", "Networking Mixers", "Career Fairs"],
      },
      {
        title: "Event Calendar",
        items: ["Monthly Events", "Academic Calendar", "Sports Events"],
      },
      {
        title: "Special Programs",
        items: ["Leadership Summit", "Alumni Weekend", "Homecoming"],
      },
    ],
    news: [
      {
        title: "Latest News",
        items: ["Campus Updates", "Research Highlights", "Faculty News"],
      },
      {
        title: "Publications",
        items: ["Alumni Magazine", "Newsletter", "Annual Report"],
      },
      {
        title: "Media",
        items: ["Press Releases", "In the News", "Media Resources"],
      },
    ],
    stories: [
      {
        title: "Alumni Stories",
        items: ["Success Stories", "Alumni Profiles", "Class Notes"],
      },
      {
        title: "Featured Content",
        items: ["Interviews", "Blog Posts", "Video Stories"],
      },
      {
        title: "Submit",
        items: ["Share Your Story", "Update Your Profile", "Submit Class Note"],
      },
    ],
    givingAndImpact: [
      {
        title: "Ways to Give",
        items: ["Annual Giving", "Planned Giving", "Corporate Matching"],
      },
      {
        title: "Impact",
        items: ["Donor Impact", "Scholarship Stories", "Campaign Updates"],
      },
      {
        title: "Recognition",
        items: ["Donor Honor Roll", "Leadership Circle", "Legacy Society"],
      },
    ],
  }