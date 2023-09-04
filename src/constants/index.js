import {
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    ensomerge,
    merkle,
    pfs,
    jQuery,
    sfcc,
    git,
    spring,
    demandware
} from '../assets';

export const navLinks = [
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'work',
        title: 'Work',
    },
    {
        id: 'contact',
        title: 'Contact',
    },
];

const services = [
    {
        title: 'SFCC Developer',
        icon: web,
    },

    {
        title: 'Backend Developer',
        icon: backend,
    }
];

const technologies = [
    {
        name: 'SFCC',
        icon: sfcc,
    },
    {
        name: 'HTML 5',
        icon: html,
    },
    {
        name: 'CSS 3',
        icon: css,
    },
    {
        name: 'JavaScript',
        icon: javascript,
    },

    {
        name: 'JQuery',
        icon: jQuery,
    },
    {
        name: 'Demandware',
        icon: demandware,
    },
    {
        name: 'git',
        icon: git,
    },
];

const experiences = [
    {
        title: 'SFCC Developer',
        company_name: 'Merkle Inc.',
        icon: merkle,
        iconBg: '#383E56',
        date: 'Oct 2020 - Present',
        points: [
            'Enhanced Tracking Capabilities: Collaborated with DHL and FedEx to implement real-time order tracking, providing users with up-to-date information on their orders. This enhancement greatly improved the customer experience and order transparency.',
            'Elevated Gifting Experience: Successfully integrated gift card functionality into the e-commerce platform, enhancing the gifting options for Ralph Lauren customers. This addition contributed to a more versatile and customer-centric shopping experience',
            'Improved Site Navigation: Introduced the QuickShop feature to streamline site navigation and improve user efficiency. This feature allows customers to quickly explore and purchase products, contributing to higher user satisfaction and conversion rates.',
            'Payment Processing Integration: Integrated multiple payment methods into the platform, making it easier for customers to complete transactions. This improvement not only increased convenience for users but also positively impacted the conversion rate and revenue.',
            'Mentorship and Training: Provided mentorship and training to junior team members, helping them advance their technical skills and capabilities. This demonstrates your leadership and commitment to the growth of the team.',
            'Development Team Contribution: Played a pivotal role in the development team responsible for building the e-commerce website for Ralph Lauren using Salesforce Commerce Cloud (SFCC).',
            'Customer Issue Resolution: Effectively addressed customer grievances through proactive communication and solution-focused problem-solving, ensuring a positive shopping experience and customer satisfaction.',
            'Results-Oriented Approach: Demonstrated a strong commitment to delivering results and optimizing operational processes. Your ability to prioritize tasks and maintain a diligent work ethic contributed to the successful project outcomes.',
        ],
    },
    {
        title: 'Student Intern',
        company_name: 'PFS Web',
        icon: pfs,
        iconBg: '#383E56',
        date: 'Jan 2020 - May 2020',
        points: [
            'Enhanced the SFCC platform and gained valuable insights through conceptual development.',
            'Engaged in diverse SFCC tasks to deepen comprehension of the underlying concept.',
        ],
    },
    {
        title: 'Student Intern',
        company_name: 'Ensomerge Services Private Limited',
        icon: ensomerge,
        iconBg: '#383E56',
        date: 'Jun 2019 - Aug 2019',
        points: [
            'Collaborating with a dynamic team to design and develop the CRM platform.',
            'Implementing Bootstrap for responsive and intuitive user interfaces.',
            'Leveraging JavaScript for interactive features and enhanced user experience.',
            'Utilizing PHP to build the core functionalities and backend logic of the CRM',
            'Incorporating essential features such as a notepad, calendar, and other productivity tools to streamline daily operations for the BPO team.',
        ],
    },
];

export { services, technologies, experiences };
