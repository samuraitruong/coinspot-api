export interface HistoryRequest {
  symbol: string;
  from?: number;
  to?: number;
}
export interface SimplePrice {
  ask: string | number;
  bid: string | number;
  last: string | number;
}
export enum CoinSymbols {
  BTC = "btc",
}

export interface LatestPrices {
  prices: {
    [x: string]: SimplePrice;
  };
}
