export interface NavItem {
    label: string;
    page: PageType;
}

export interface FooterLink {
    label: string;
    page?: PageType;
    href?: string;
}

export interface FooterSection {
    title: string;
    links: FooterLink[];
}

import { PageType } from './product';
