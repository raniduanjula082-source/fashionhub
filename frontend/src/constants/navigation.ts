import { NavItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
    { label: 'Men', page: 'men' },
    { label: 'Women', page: 'women' },
    { label: 'Kids', page: 'kids' },
    { label: 'Shoes', page: 'shoes' },
    { label: 'Accessories', page: 'accessories' },
    { label: 'Sale', page: 'sale' },
];

export const FOOTER_SECTIONS = [
    {
        title: 'RESOURCES',
        links: [
            { label: 'About Us', page: 'about' as const },
            { label: 'Careers', page: 'careers' as const },
            { label: 'Contact', page: 'contact' as const },
        ],
    },
    {
        title: 'COMPANY',
        links: [
            { label: 'Privacy Policy', href: '#' },
            { label: 'Terms of Service', href: '#' },
            { label: 'Shipping Policy', href: '#' },
        ],
    },
    {
        title: 'SUPPORT',
        links: [
            { label: 'Help Center', href: '#' },
            { label: 'Track Order', href: '#' },
            { label: 'Returns', href: '#' },
        ],
    },
];

export const SOCIAL_LINKS = [
    { name: 'Facebook', icon: 'facebook', url: '#' },
    { name: 'Twitter', icon: 'twitter', url: '#' },
    { name: 'Instagram', icon: 'instagram', url: '#' },
    { name: 'LinkedIn', icon: 'linkedin', url: '#' },
];
