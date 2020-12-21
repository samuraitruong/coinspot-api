import { CoinSpotClient } from './client';
const client = new CoinSpotClient(process.env.API_TOKEN as string, process.env.API_SECRET as string);

describe("Client tests", () => {
  
 
  it.only("MyBalance test", async () => {
    const bl = await client.myBalance()
    expect(bl).toMatchSnapshot();
  })

  it.only("quoteSell test", async () => {
    const bl = await client.quoteSell('LUNA', 6959.62845592)
    expect(bl).toMatchSnapshot();
  })

  it.only("orderHistory test", async () => {
    const bl = await client.ordersHistory('RDD')
    expect(bl).toMatchSnapshot();
  })


})
