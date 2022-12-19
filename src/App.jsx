import { React } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Creador de imagenes</h1>
      <div className="card">
        <input className="inputSearch" type="text" />
        <button type="button" className="btnSearch">
          Generar
        </button>
        <p>
          Creador de imagenes a traves de
          {' '}
          <code>OpenIA</code>
        </p>
      </div>
      <div className="boxImages">
        <img className="imgGenered" src="https://play-lh.googleusercontent.com/J1edgzF2WiDMipbzea05rlmsn7WQxBX9APPoMYmE114ifAXZsP2pjBiwde6637jgBHU" alt="" />
        <img className="imgGenered" src="https://play-lh.googleusercontent.com/w0XdIeOEgQJxuldR61Y8Pr8vFuC_u-CVTRLStS2vnYeauap5sktn1hykpk2hp2t4BA" alt="" />
        <img className="imgGenered" src="https://i.pinimg.com/736x/b8/70/2f/b8702f30ceb79cf719cd41c8275211df.jpg" alt="" />
        <img className="imgGenered" src="https://play-lh.googleusercontent.com/bb_VXt7sHeSwmfYsWMGF1mMdw_XQ9Wo880h59tp2PNZjSCuzDjPfbsDS9m2OA3Oraso" alt="" />
        <img className="imgGenered" src="https://image.winudf.com/v2/image1/Y29tLml3YW5yZXdvay5DYXR3YWxscGFwZXJzX3NjcmVlbl8wXzE1NjcxNDE1MzJfMDY5/screen-0.jpg?fakeurl=1&type=.webp" alt="" />
      </div>
      <p className="read-the-docs">
        For Diegoo11
      </p>
    </div>
  );
}

export default App;
