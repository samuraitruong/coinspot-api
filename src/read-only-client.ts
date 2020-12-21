import { BaseClient } from './base-client';
export class ReadOnlyClient extends BaseClient {
  constructor(apiKey: string, apiSecret: string) {
    super(apiKey, apiSecret, "https://www.coinspot.com.au/api/ro");
  }

  async myBalances() {
    return this.postRequest("my/balances");
  }

  async myBalance(cointype: string) {
    return this.postRequest("my/balances/" + cointype, {cointype});
  }

  async myDeposits(startdate: string, enddate: string) {
    return this.postRequest("my/deposits", { enddate, startdate});
  }

  async myWithDrawals(startdate: string, enddate: string) {
    return this.postRequest("my/withdrawals", { enddate, startdate});
  }

  async myTransactions(startdate: string, enddate: string) {
    return this.postRequest("my/transactions", { enddate, startdate});
  }

  async myTransaction(cointype:string, startdate: string, enddate: string) {
    return this.postRequest("my/transaction/" + cointype, {cointype, enddate, startdate});
  }

  async myOpenTransactions() {
    return this.postRequest("my/transactions/open");
  }

  async myOpenTransaction(cointype: string) {
    return this.postRequest("my/transactions/" + cointype + "/open", { cointype });
  }

  async mySendReceive() {
    return this.postRequest("my/sendreceive");
  }

  async myAffiliatePayments() {
    return this.postRequest("my/affiliatepayments");
  }

  async myReferralPayments() {
    return this.postRequest("my/referralpayments");
  }



}
