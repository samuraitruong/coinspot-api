import { PublicApiClient } from './public-api-client';
describe("PublicApiClient tests", () => {
  const client = new PublicApiClient();
  it("getLatest test", async () => {
    const latest = await client.getLatest();
    expect(latest).toMatchSnapshot();
  })
})
