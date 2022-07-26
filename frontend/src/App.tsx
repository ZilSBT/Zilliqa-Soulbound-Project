import { Routes, Route } from 'react-router-dom';
import AppContainer from './components/AppContainer';
import Dummy from './pages/Dummy';
import Landing from './pages/Landing';
import Educational from './pages/Educational';
// import CreateProfile from "./pages/CreateProfile";
import CreateProfile from './pages/CreateProfile';

import ProfileDetail from './pages/ProfileDetail';
import Profiles from './pages/Profiles';
import WalletProvider from './providers/WalletProvider';
import ZilliqaProvider from './providers/ZilliqaProvider';
import PinataProvider from './providers/PinataProvider';

import WalletModal from './components/WalletModal';

import ColorModeProvider from './providers/ColormodeProvider';
import Web3StorageProvider from './providers/Web3StorageProvider';

const App = () => {
  return (
    <WalletProvider>
      <ZilliqaProvider>
        <Web3StorageProvider>
          <PinataProvider>
            <ColorModeProvider>
              <Routes>
                <Route element={<AppContainer />}>
                  <Route path="/" element={<Landing />} />
                  <Route path="/create-profile" element={<CreateProfile />} />
                  <Route path="/profiles" element={<Profiles />} />
                  <Route
                    path="/profiles/:address"
                    element={<ProfileDetail />}
                  />
                  <Route path="/dummy" element={<Dummy />} />
                  <Route path="/educational" element={<Educational />} />
                </Route>
              </Routes>
              {/* <WalletModal></WalletModal> */}
            </ColorModeProvider>
          </PinataProvider>
        </Web3StorageProvider>
      </ZilliqaProvider>
    </WalletProvider>
  );
};

export default App;
