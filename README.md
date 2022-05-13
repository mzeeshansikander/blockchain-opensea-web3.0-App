# Opensea Blockchain Web3.0 App.

# Preview 
## Home Page 
![1](https://user-images.githubusercontent.com/66882702/168290989-3326226f-a4f1-4680-b62a-5cf576972273.PNG)
## Collections Page 
![2](https://user-images.githubusercontent.com/66882702/168291306-bcde59b8-4a02-49cb-b778-ed0f1b84aaa4.PNG)
## NFT Selected Detail Page 
![3](https://user-images.githubusercontent.com/66882702/168291324-7fd44f8e-b873-49a9-aabd-9d7642722f59.PNG)

## 1-Create next js project 
    npx create-next-app with-tailwindcss 
    
## 2- Add Sanity to your project: 
    CLI: npm i -g @sanity/cli
            goto: cd studio 
                sanity init 

## 3- Setup Meta mask
    goto Settings
        Advanced Settings 
            Show Test Networks ( ON )
    goto extension main screen
        select Rinkeby Test Netwrok

## 4- Before setting up thirdweb add some funds to yout etthirium wallet:
    goto https://faucet.chain.link/rinkeby
        copy your wallet address and paste it in the wallet address of faucets
        req type should be only 0.1 test ETH
        after that you metawask would have 0.1ETH from 0ETH.

## 5- Setup thirdweb
    goto https://thirdweb.com/dashboard
        - deploy a new connect, select marketplace and deploy and set marketplace/platform fee (3%).
        - After that doto dashboard you'll see your Module Marketplace.
        - Create another Module,NFT Collection, name it "Bored Apy Tacht Club",
        or anything your want symbol would be BATC related to your module name.
        - After that create your NFT's collection new Mint, set the name unique, for e.g. #0001.
        
## 6- After setting up thirdweb
    goto studio using cd studio in your code.
        Run: sanity start. It will run on another port once it is compiled. 
        Open: the localhost sanity port and login,here you'll see your schema.
        Create: create a dummy user

## 7- Metamask Authentication From Code
    goto: pages 
            collections
                _app.js
    install 3rdWeb/hooks, npm add @3rdweb/hooks    
    Import: import { ThirdwebWeb3Provider } from '@3rdweb/hooks'
    goto: index.js 
    Add: import { useWeb3 } from '@3rdweb/hooks', after that you can use useWeb3() and get your address,connectWallet or what everyou want from web3().
## 8-Sanity Client
    Create: A new folder lib in root directory
    Install: npm i @sanity/client
    Add: in lib 
        sanityClient.js (new file)
    ```
        import sanityClient from '@sanity/client'

        const client = sanityClient({
        projectId: 'your-project-id', // sanity.io your projects in your project get your projectId
        dataset: 'bikeshop',
        apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
        token: 'sanity-auth-token',
             // goto API Tab, CORS origins
                Add: new CORS origin
                    URL : the port on which the App is working for e.g. http://localhost:3000
                Add : Api token
                    give the name 
                    select Editor Access.
        useCdn: true, // `false` if you want to ensure fresh data
        })
    ```
## 9- Alchemy Web3 
    What is alchemy Web3?
      Alchemy Web3 is a drop-in replacement for web3. js, built and configured to work seamlessly with Alchemy and provide multiple advantages such as automatic retries and robust WebSocket support.
    Create: a new alchemy account
    goto: your project, click "view key" and copy the :
    ```diff
        HTTP KEY
    ```
    paste the Key in [CollectionID] file.

## 10- Sanity Database
    goto : sanity running port.
        Hit arket items ( NFT Collection ) and,
            Add : title NFT Collection name 
                  contract address: goto NFT collection and copy the address 
    After that publish the market Item.
    ```
    Now goto vision, there you can write quries
    ```
## 11- Deploy on vercel.
    Open: vercel.com
    Create: new project on vercel.com
    Code: root directory -> type: vercel
        Link to exsisting project -> No.
        want to override the settings? -> No .
# Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
yarn create next-app --example with-tailwindcss with-tailwindcss-app
# or
pnpm create next-app -- --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
