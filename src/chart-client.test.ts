import { ChartClient } from "./chart-client";
describe("ChartClient tests", () => {
  const client = new ChartClient();
  it("getHistory test", async () => {
    const zil = await client.getHistory({ symbol: "ZIL" });
    expect(zil.length).toBeGreaterThan(0);
  });
});
