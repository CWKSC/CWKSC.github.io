import { github_username } from '../common';

export const navbar = {
    title: `${github_username}`,
    logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
    },
    items: [
        { label: 'Blog', to: '/blog/', position: 'left' },
        { label: 'Note', to: "/note/", position: 'left' },
    ],
};
