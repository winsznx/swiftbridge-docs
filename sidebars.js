/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/overview',
        'getting-started/for-users',
        'getting-started/for-developers',
      ],
    },
    {
      type: 'category',
      label: 'Smart Contracts',
      items: [
        'contracts/overview',
        'contracts/user-registry',
        'contracts/escrow-manager',
        'contracts/p2p-transfer',
        'contracts/swap-router',
        'contracts/deployment',
      ],
    },
    {
      type: 'category',
      label: 'Interfaces',
      items: [
        'bot/overview',
        'miniapp/overview',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'deployed-addresses',
      ],
    },
  ],
};

module.exports = sidebars;
