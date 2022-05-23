/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  // But you can create a sidebar manually

  contracts: [
    {
      type: "doc",
      label: "Getting Started",
      id: "index",
    },
    {
      type: "category",
      label: "Design Docs",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Design Docs",
        description:
          "In-depth breakdowns of thirdweb smart contract architecture.",
        keywords: ["design", "docs"],
      },
      items: [
        {
          type: "doc",
          label: "Drop",
          id: "design/Drop",
        },
        {
          type: "doc",
          label: "Marketplace",
          id: "design/Marketplace",
        },
        {
          type: "doc",
          label: "Signature Minting",
          id: "design/SignatureMint",
        },
        {
          type: "doc",
          label: "Multiwrap",
          id: "design/Multiwrap",
        },
      ],
    },
    {
      type: "category",
      label: "Contracts",
      collapsed: false,
      link: {
        type: "generated-index",
        title: "Contracts",
        description: "solidity on-chain smart contracts.",
        keywords: ["solidity", "contracts"],
      },
      items: [
        {
          type: "doc",
          label: "TokenERC20",
          id: "TokenERC20",
        },
        {
          type: "doc",
          label: "TokenERC721",
          id: "TokenERC721",
        },
        {
          type: "doc",
          label: "TokenERC1155",
          id: "TokenERC1155",
        },
        {
          type: "doc",
          label: "DropERC721",
          id: "DropERC721",
        },
        {
          type: "doc",
          label: "DropERC1155",
          id: "DropERC1155",
        },
        {
          type: "doc",
          label: "VoteERC20",
          id: "VoteERC20",
        },
        {
          type: "doc",
          label: "Marketplace",
          id: "Marketplace",
        },
        {
          type: "doc",
          label: "Split",
          id: "Split",
        },
      ],
    },
    {
      type: "category",
      label: "Interfaces",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Interfaces",
        description: "solidity on-chain smart contracts interfaces.",
        keywords: ["solidity", "interfaces"],
      },
      items: [
        {
          type: "doc",
          label: "ThirdwebContract",
          id: "ThirdwebContract",
        },
        {
          type: "doc",
          label: "Ownable",
          id: "Ownable",
        },
        {
          type: "doc",
          label: "PrimarySale",
          id: "PrimarySale",
        },
        {
          type: "doc",
          label: "PlatformFee",
          id: "PlatformFee",
        },
        {
          type: "doc",
          label: "Royalty",
          id: "Royalty",
        },
        {
          type: "doc",
          label: "ITokenERC20",
          id: "ITokenERC20",
        },
        {
          type: "doc",
          label: "ITokenERC721",
          id: "ITokenERC721",
        },
        {
          type: "doc",
          label: "ITokenERC1155",
          id: "ITokenERC1155",
        },
        {
          type: "doc",
          label: "IDropERC721",
          id: "IDropERC721",
        },
        {
          type: "doc",
          label: "IDropERC1155",
          id: "IDropERC1155",
        },
      ],
    },
    {
      type: "category",
      label: "Platform",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Platform",
        description: "solidity on-chain smart contracts for the platform.",
        keywords: ["solidity", "platform"],
      },
      items: [
        {
          type: "doc",
          label: "TWRegistry",
          id: "TWRegistry",
        },
        {
          type: "doc",
          label: "TWFactory",
          id: "TWFactory",
        },
      ],
    },
    {
      className: "hidden-category",
      type: "category",
      label: "Full Reference",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Full Reference",
        description: "Everything exported by the package",
      },
      items: [
        {
          type: "autogenerated",
          dirName: ".",
        },
      ],
    },
  ],
};

module.exports = sidebars;
