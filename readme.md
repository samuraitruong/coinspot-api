# Coinspot API for nodejs
- public api
- read only api
- full api

# Usage
## Full API

```js
import {CoinSpotClient} from '@samuraitruong/coinspot-api';
const client = new CoinSpotClient(
    process.env.COINSPOT_KEY,
    process.env.COINSPOT_SECRET,
  );

  const balance = await client.myBalance();
  console.log(balance)

```
