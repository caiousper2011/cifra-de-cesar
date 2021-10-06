import { useState } from 'react';
import { Controls } from './components/Controls';
import { Textarea } from './components/Textarea';
import { HeaderPage } from './components/HeaderPage';
import { NavBar } from './components/NavBar';
import ProvidersContainer from './context/index';
import { FooterControls } from './components/FooterControls';
import { Notification } from './components/Notification';
import useStyles from './styles';
import { theme } from './theme';

export const App = () => {
  const classes = useStyles({ theme });
  const [encodeText, setEncodeText] = useState('');
  const [decodeText, setDecodeText] = useState('');

  return (
    <ProvidersContainer>
      <NavBar />
      <div className={classes.backdrop}>
        <div className={classes.container}>
          <section className={classes.mainSection}>
            <HeaderPage />
            <main className={classes.content}>
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
      <Notification />
    </ProvidersContainer>
  );
};
