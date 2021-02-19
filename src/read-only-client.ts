import { BaseClient } from "./base-client";
export class ReadOnlyClient extends BaseClient {
  constructor(apiKey: string, apiSecret: string) {
    super(apiKey, apiSecret, "https://www.coinspot.com.au/api/ro");
  }

  public async myBalances() {
    return this.postRequest("my/balances");
  }

  public async myBalance(cointype: string) {
    return this.postRequest("my/balances/" + cointype, { cointype });
  }

  public async myDeposits(startdate: string, enddate: string) {
    return this.postRequest("my/deposits", { enddate, startdate });
  }

  public async myWithDrawals(startdate: string, enddate: string) {
    return this.postRequest("my/withdrawals", { enddate, startdate });
  }

  public async myTransactions(startdate: string, enddate: string) {
    return this.postRequest("my/transactions", { enddate, startdate });
  }

  public async myTransaction(
    cointype: string,
    startdate: string,
    enddate: string
  ) {
    return this.postRequest("my/transactions/" + cointype, {
      cointype,
      enddate,
      startdate,
    });
  }

  public async myOpenTransactions() {
    return this.postRequest("my/transactions/open");
  }

  public async myOpenTransaction(cointype: string) {
    return this.postRequest("my/transactions/" + cointype + "/open", {
      cointype,
    });
  }

  public async mySendReceive() {
    return this.postRequest("my/sendreceive");
  }

  public async myAffiliatePayments() {
    return this.postRequest("my/affiliatepayments");
  }

  public async myReferralPayments() {
    return this.postRequest("my/referralpayments");
  }
}
