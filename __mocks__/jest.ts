export default {
  get: jest.fn().mockImplementation(() =>
    Promise.resolve([
      {
        coins_count: 2054,
        active_markets: 9889,
        total_mcap: 138716787187.58441162109375,
        total_volume: 22777304530.68553924560546875,
        btc_d: '50.35',
        eth_d: '10.30',
        mcap_change: '-0.51',
        volume_change: '5.10',
        avg_change_percent: 1.35,
        volume_ath: 67230319279,
        mcap_ath: 825416143014,
      },
    ]),
  ),
};
