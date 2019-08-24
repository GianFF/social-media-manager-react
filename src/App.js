import React from 'react';
import './styles/App.scss';
import SMInput from "./components/SMInput";
import {SocialMediaManager} from "./app/SocialMediaManager";
import {TwitterManager} from "./app/account-managers/TwitterManager";
import {FacebookManager} from "./app/account-managers/FacebookManager";
import {InstagramManager} from "./app/account-managers/InstagramManager";

function App() {
  const viewModel = new SocialMediaManager();
  return (
    <div className="app-container">
      <header>
        <h1>Social Media Manager</h1>
      </header>

      <main>
        <section>
          <h2>Accounts data</h2>
          <SMInput viewModel={viewModel}
                   title={FacebookManager.title}
                   accountKey={FacebookManager.key}/>

          <SMInput viewModel={viewModel}
                   title={TwitterManager.title}
                   accountKey={TwitterManager.key}/>

          <SMInput viewModel={viewModel}
                   title={InstagramManager.title}
                   accountKey={InstagramManager.key}/>
        </section>

        <section>
          <h2>Publication</h2>
          <textarea onChange={(event) => viewModel.updatePublication(event.target.value)}/>
          <button title={"publish on associated accounts"} onClick={() => viewModel.publish()}>
            Publish
          </button>
        </section>
      </main>

      <footer>
        <p>made with ❤ by Edymberg</p>
      </footer>
    </div>
  );
}

export default App;
