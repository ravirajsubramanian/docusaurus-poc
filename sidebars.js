// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */

const sidebars = {
  platformSidebar: [
    {
      type: 'category',
      label: 'Entities',
      items: [
        'entities/platform-docs',
        'entities/rest-api',
      ],
    },
    {
      type: 'category',
      label: 'Metrics',
      items: [
        'metrics/platform-docs',
        'metrics/rest-api',
      ],
    },
    {
      type: 'category',
      label: 'AI Platform',
      items: [
        'ai_platform/platform-docs',
        'ai_platform/rest-api',
      ],
    }
  ],
};

export default sidebars;
