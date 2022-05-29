import Link from 'next/link'

export default function MarketDiff() {
  return (
    <>
      <div style={{ marginLeft: 50 }}>
        <li>
          <Link href="/MarketDiff">
            <a>Market Diff</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Chart</a>
          </Link>
        </li>
        <li>
          <Link href="/Trade">
            <a>Trade</a>
          </Link>
        </li>
      </div>

      <div style={{ marginLeft: 50 }}>
        <h1>Chart</h1>
        <h3>Token 1</h3>
        <input style={{ height: 25 }}></input>
        <h3>Token 2</h3>
        <input style={{ height: 25 }}></input>
      </div>

      <div style={{ marginLeft: 50, marginTop: 30 }}>
        <button>Fetch</button>
      </div>
    </>
  );
}