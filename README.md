# @instadapp/avocado

## Usage
Install package:

```sh
# npm
npm install @instadapp/avocado

# yarn
yarn add @instadapp/avocado

# pnpm
pnpm install @instadapp/avocado
```

Import:

```js
// ESM
import {} from "@instadapp/avocado";

// CommonJS
const {} = require("@instadapp/avocado");
```


## Examples

```ts
import { createSafe } from '@instadapp/avocado'
import { ethers } from 'ethers'

// Should be connected to chainId 634 (https://rpc.avocado.instadapp.io), before doing any transaction
const provider = new ethers.providers.Web3Provider(window.ethereum, "any")

const safe = createSafe( provider.getSigner() )

await safe.getOwnerAddress()

await safe.getSafeAddress()

await safe.sendTransaction({
    to: "0x910E413DBF3F6276Fe8213fF656726bDc142E08E",
    value: 42,
    chainId: 137
})

await safe.sendTransaction({
    to: "0x910E413DBF3F6276Fe8213fF656726bDc142E08E",
    value: 42,
}, 137)

await safe.sendTransactions([
    { to: "0x910E413DBF3F6276Fe8213fF656726bDc142E08E", value: 42 }
    { to: "0x910E413DBF3F6276Fe8213fF656726bDc142E08E", value: 69 }
], 137)

await safe.estimateFee([
    { to: "0x910E413DBF3F6276Fe8213fF656726bDc142E08E", value: 0 }
], 137)

await safe.getSigner().sendTransaction({
    to: "0x69420",
    chainId: 137
})

const signer = safe.getSignerForChainId(137);

await signer.sendTransaction({
    to: "0x69420"
})

const erc20 = new ethers.Contract(
    "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
    ["function transfer(address to, uint amount) returns (bool)",],
    signer,
)

await erc20.transfer("0x910E413DBF3F6276Fe8213fF656726bDc142E08E", 69420)
```

```ts
import { AvocadoSafeProvider } from '@instadapp/avocado'
import { ethers } from 'ethers'
import Web3 from 'web3'

const ethereum = new AvocadoSafeProvider({ chainId: 137 }) // window.etherem
await ethereum.enable()

const provider = new ethers.providers.Web3Provider(ethereum, "any")
const web3 = new Web3(ethereum)

console.log(await provider.listAccounts())
console.log(await provider.getBalance("0x910E413DBF3F6276Fe8213fF656726bDc142E08E"))
console.log(await web3.eth.getBalance("0x910E413DBF3F6276Fe8213fF656726bDc142E08E"))
```

```ts
import { AvocadoInjectedConnector } from '@instadapp/avocado'

const avocado = new AvocadoInjectedConnector({ chainId: 137 })

const { activate } = useWeb3() // web3-react v6 or @instadapp/vue-web3
await activate(avocado)
```

```ts
import { AvocadoSafeProvider } from '@instadapp/avocado'

const providerOptions = {
    'custom-avocado': {
      display: {
        logo: SVGavocado,
        name: 'Avocado',
        description: '',
      },
      package: AvocadoSafeProvider,

      options: {
        chainId: 137,
      },

      connector: async (ProviderPackage, options) => {
        const provider = new ProviderPackage(options)

        await provider.enable()

        return provider
      },
    }
}
```