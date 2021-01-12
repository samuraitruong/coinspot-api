import { BaseClient } from "./base-client";
import { LatestPrices } from "./types";

export class PublicApiClient extends BaseClient {
  constructor() {
    super("", "", "https://www.coinspot.com.au/pubapi");
  }
  async getLatest() {
    return this.getRequest<LatestPrices>("latest");
  }
}
