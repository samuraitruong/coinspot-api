import qs from "qs";
import { BaseClient } from "./base-client";
import { HistoryRequest } from "./types";
export class ChartClient extends BaseClient {
  constructor() {
    super("", "", "https://www.coinspot.com.au/charts");
  }

  public async getHistory(request: HistoryRequest) {
    const url = "history_basic?" + qs.stringify(request);
    return this.getRequest<ArrayLike<ArrayLike<number>>>(url);
  }
}
