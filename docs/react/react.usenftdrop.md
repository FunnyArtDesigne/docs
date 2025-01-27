---
slug: /react.usenftdrop
title: useNFTDrop() function
hide_title: true
displayed_sidebar: react
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## useNFTDrop() function

> Warning: This API is now obsolete.
>
> This hook is deprecated and will be removed in a future major version. You should use instead.
>
> ```diff
> - const nftDrop = useNFTDrop("0x1234...");
> + const nftDrop = useContract("0x1234...", "nft-drop").contract;
> ```

Hook for getting an instance of an `NFTDrop` contract. This contract is meant to interface with ERC721 compliant NFTs that can be lazily minted.

## Example

```javascript
import { useContract } from '@thirdweb-dev/react'

export default function Component() {
  const { contract } = useContract("<YOUR-CONTRACT-ADDRESS>", "nft-drop")

  // Now you can use the nft drop contract in the rest of the component

  // For example, this function will let the connected wallet claim a new NFT
  async function claim(quantity) {
    await contract.claim(quantity)
  }

  ...
}
```

**Signature:**

```typescript
export declare function useNFTDrop(
  contractAddress: RequiredParam<string>,
): import("@thirdweb-dev/sdk").NFTDrop | undefined;
```

## Parameters

| Parameter       | Type                                                    | Description                                                            |
| --------------- | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| contractAddress | [RequiredParam](./react.requiredparam.md)&lt;string&gt; | the address of the NFT Drop contract, found in your thirdweb dashboard |

**Returns:**

import("@thirdweb-dev/sdk").NFTDrop \| undefined
