import { Link } from 'react-router-dom';
import { BsWallet } from 'react-icons/bs';
import { AiOutlineLogout } from 'react-icons/ai';
import { useWallet } from '../providers/WalletProvider';
import Button from './Button';
import Switch from './Switch';
import { useMemo } from 'react';
import cn from 'classnames';
import { useColorMode } from '../providers/ColormodeProvider';
import { ReactComponent as Logo } from '../assets/logo.svg';

function Navbar() {
  // USE HOOK: "Functions that has states"
  const { wallet, connect, disconnect } = useWallet();
  const { toggleTheme } = useColorMode();

  const shortenAddress = (address: String) => {
    const shortAddress = `${address.slice(0, 4)}...${address.slice(-3)}`;
    return shortAddress;
  };

  const walletAddress = useMemo(() => {
    if (wallet) {
      return shortenAddress(wallet.defaultAccount.base16);
    }
  }, [wallet]);

  return (
    <nav>
      <div className="container">
        <Link to="/" className="nav-logo">
          Zilsbt
          <Logo />
        </Link>
        <ul>
          <li>
            <Link className="nav-link hover:text-blue-600" to="profiles">
              Profiles
            </Link>
          </li>
          <li>
            <Link className="nav-link hover:text-blue-600" to="educational">
              Educate
            </Link>
          </li>
          {/* {wallet ? (
          <div className={cn('flex', 'items-center', 'gap-4')}>
            <h1 className={cn('lowercase', 'text-white text-lg')}>
              {walletAddress}
            </h1>

            <Button className="button-primary" onClick={() => disconnect()}>
              <AiOutlineLogout />
            </Button>
          </div>
        ) : (
          <Button onClick={() => connect()}>
            Connect <BsWallet className="inline-block" />
          </Button>
        )} */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
