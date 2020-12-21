import { BaseClient } from './base-client';

export class PublicApiClient extends BaseClient {
  constructor() {
    super("","", "https://www.coinspot.com.au/pubapi")
  }
  async getLatest() {
    return this.getRequest("latest");
  }
}
