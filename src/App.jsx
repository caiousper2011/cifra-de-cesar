import { useState } from 'react';
import { Controls } from './components/Controls';
import { Textarea } from './components/Textarea';
import { HeaderPage } from './components/HeaderPage';
import { NavBar } from './components/NavBar';
import ProvidersContainer from './context/index';
import { FooterControls } from './components/FooterControls';
import { Notification } from './components/Notification';

export const App = () => {
  const [encodeText, setEncodeText] = useState('');
  const [decodeText, setDecodeText] = useState('');

  return (
    <ProvidersContainer>
      <NavBar />
      <main>
        <div className="backdrop">
          <div className="container">
            <section className="main-section">
              <HeaderPage />
              <main className="content">
                <Textarea text={encodeText} handleText={setEncodeText} />
                <Controls
                  encodeText={encodeText}
                  setEncodeText={setEncodeText}
                  decodeText={decodeText}
                  setDecodeText={setDecodeText}
                />
                <Textarea text={decodeText} handleText={setDecodeText} />
              </main>
            </section>
          </div>
        </div>
        <FooterControls
          setEncodeText={setEncodeText}
          setDecodeText={setDecodeText}
        />
      </main>
      <Notification />
    </ProvidersContainer>
  );
};
