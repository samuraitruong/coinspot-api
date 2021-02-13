import { BaseClient } from "./base-client";

export class CoinSpotClient extends BaseClient {
  constructor(apiKey: string, apiSecret: string) {
    super(apiKey, apiSecret, "https://www.coinspot.com.au/api");
  }

  public async orders(cointype: string) {
    return this.postRequest("orders", { cointype });
  }

  public async ordersHistory(cointype: string) {
    return this.postRequest("orders/history", { cointype });
  }

  public async coinDeposit(cointype: string) {
    return this.postRequest("my/coin/deposit", { cointype });
  }

  public async quoteSell(cointype: string, amount: number) {
    return this.postRequest("quote/sell", { cointype, amount });
  }

  public async quoteBuy(cointype: string, amount: number) {
    return this.postRequest("quote/buy", { cointype, amount });
  }

  public async myBalance() {
    return this.postRequest(`my/balances`, {});
  }

  public async myOrders() {
    return this.postRequest("my/orders");
  }

  public async myBuy(cointype: string, amount: number, rate: number) {
    return this.postRequest("my/buy", { cointype, amount, rate });
  }

  public async mySell(cointype: string, amount: number, rate: number) {
    return this.postRequest("my/sell", { cointype, amount, rate });
  }

  public async myBuyCancel(id: number) {
    return this.postRequest("my/buy/cancel", { id });
  }

  public async mySellCancel(id: number) {
    return this.postRequest("my/sell/cancel", { id });
  }
}
