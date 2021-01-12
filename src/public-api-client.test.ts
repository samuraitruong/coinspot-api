import { PublicApiClient } from "./public-api-client";
import { CoinSymbols } from "./types";
describe("PublicApiClient tests", () => {
  const client = new PublicApiClient();
  it("getLatest test", async () => {
    const latest = await client.getLatest();
    // expect(latest).toMatchSnapshot();
    expect(latest.prices).not.toEqual(null);
    const btc = latest.prices[CoinSymbols.BTC];
    expect(btc).not.toEqual(null)
  });
});
