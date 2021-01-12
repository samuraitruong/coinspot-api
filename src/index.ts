import { PublicApiClient } from "./public-api-client";

(async () => {
  const client = new PublicApiClient();
  console.log(await client.getLatest());
})();
