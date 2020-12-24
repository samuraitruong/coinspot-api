import { CoinSpotClient } from './client';
const client = new CoinSpotClient(process.env.API_TOKEN as string, process.env.API_SECRET as string);

describe("Client tests", () => {
  
  it("MyBalance test", async () => {
    const bl = await client.myBalance()
    expect(bl).toEqual({ balance: expect.any(Object), status: 'ok'});
  })

  it("quoteSell(BTC) test", async () => {
    const bl = await client.quoteSell('BTC', 1)
    expect(bl).toEqual({
      quote: expect.any(Number),
      status: 'ok',
      timeframe: 0
    })
  })

  it("quoteBuy(BTC) test", async () => {
    const bl = await client.quoteBuy('BTC', 1)
    expect(bl).toEqual({
      quote: expect.any(Number),
      status: 'ok',
      timeframe: 0
    });
  });


  it("orderHistory test", async () => {
    const bl = await client.ordersHistory('RDD')
    expect(bl).toEqual({orders: [], status: 'ok'});
  })


})
