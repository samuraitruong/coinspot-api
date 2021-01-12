import { BaseClient } from "./base-client";

export class CoinSpotClient extends BaseClient {
  constructor(apiKey: string, apiSecret: string) {
    super(apiKey, apiSecret, "https://www.coinspot.com.au/api");
  }

  async orders(cointype: string) {
    return this.postRequest("orders", { cointype });
  }

  async ordersHistory(cointype: string) {
    return this.postRequest("orders/history", { cointype });
  }

  async coinDeposit(cointype: string) {
    return this.postRequest("my/coin/deposit", { cointype });
  }

  async quoteSell(cointype: string, amount: number) {
    return this.postRequest("quote/sell", { cointype, amount });
  }

  async quoteBuy(cointype: string, amount: number) {
    return this.postRequest("quote/buy", { cointype, amount });
  }

  async myBalance() {
    return this.postRequest(`my/balances`, {});
  }

  async myOrders() {
    return this.postRequest("my/orders");
  }

  async myBuy(cointype: string, amount: number, rate: number) {
    return this.postRequest("my/buy", { cointype, amount, rate });
  }

  async mySell(cointype: string, amount: number, rate: number) {
    return this.postRequest("my/sell", { cointype, amount, rate });
  }

  async myBuyCancel(id: number) {
    return this.postRequest("my/buy/cancel", { id });
  }

  async mySellCancel(id: number) {
    return this.postRequest("my/sell/cancel", { id });
  }
}
