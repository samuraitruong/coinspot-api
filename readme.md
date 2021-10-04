# NodeJS  Coinspot.com.au API 
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


## Full API

```js
import {ReadOnlyClient} from '@samuraitruong/coinspot-api';
const client = new ReadOnlyClient(
    process.env.COINSPOT_KEY_READ_ONLY,
    process.env.COINSPOT_SECRET_READ_ONLY,
  );

  const adaTransactions = await client.myTransactions('ada');
  console.log(adaTransactions)

```

## Documents
Auto generated document can be found here - 

(https://samuraitruong.github.io/coinspot-api/)
