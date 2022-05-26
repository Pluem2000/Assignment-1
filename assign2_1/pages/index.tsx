
import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
    <div style={{marginLeft:50}}>
      <h3>Market Diff</h3>
      <h3>Chart</h3>
      <h3>Trade</h3>
    </div>

    <div style={{marginLeft:50}}>
      <h1>Market Diff</h1>
      <h3>Token 1</h3>
      <input style={{height:25}}></input>
      <h3>Token 2</h3>
      <input style={{height:25}}></input>
    </div>
    <div style={{marginLeft:50 , marginTop:30}}>
    <button>Fetch</button>
    </div>
    </>
  );
}