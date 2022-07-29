//******************* */
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
  useCallback,
} from 'react';
import { Web3Storage } from 'web3.storage';
import { v4 as uuidv4 } from 'uuid';

interface StorageProviderContextValue {
  web3storage: Web3Storage;
  storeFiles: (file: any) => Promise<String | undefined>;
  storeJson: (file: any) => Promise<String | undefined>;
}
const WEB3STORAGE_API_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDFCYjM0NzY5NDkxOTQ3M0ZGNTI5MzJENkY5OTM5MDk4ZTYzODY4OTkiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTYzMDAwODgwODgsIm5hbWUiOiJUaGVfT25lIn0.pxI5FbXru-zycL8YH-BHEE_zBqyUi9UKVM2JGGL6pYk';

const StorageContext = createContext<StorageProviderContextValue>(null as any);

const StorageProvider = ({ children }: { children: ReactNode }) => {
  const [web3storageClient, setweb3storageClient] =
    useState<Web3Storage | null>(null);

  useEffect(() => {
    if (!WEB3STORAGE_API_KEY) {
      throw new Error('WEB3STorage API keys not provided!');
    }
    const web3storageclient = new Web3Storage({
      token: WEB3STORAGE_API_KEY!,
      endpoint: new URL('https://api.web3.storage'),
    });
    setweb3storageClient(web3storageclient);
  }, []);

  const storeFiles = useCallback(
    async (file: any) => {
      if (web3storageClient) {
        const ext = file.name.split('.').pop();
        const fileName = `${uuidv4()}.${ext}`;
        const newFile = new File([file], fileName, { type: file.type });
        const cid = await web3storageClient.put([newFile], {
          name: fileName,
        });
        const imageURI = `https://${cid}.ipfs.dweb.link/${fileName}`;
        return imageURI;
      }
    },
    [web3storageClient],
  );

  const storeJson = useCallback(
    async (file: any) => {
      if (web3storageClient) {
        const ext = 'json';
        const fileName = `${uuidv4()}.${ext}`;
        const newFile = new File([file], fileName, { type: file.type });
        const cid = await web3storageClient.put([newFile], {
          name: fileName,
        });
        const imageURI = `https://${cid}.ipfs.dweb.link/${fileName}`;
        return imageURI;
      }
    },
    [web3storageClient],
  );

  const value = useMemo(() => {
    return {
      web3storage: web3storageClient!,
      storeFiles,
      storeJson,
    };
  }, [web3storageClient, storeFiles, storeJson]);

  return (
    <StorageContext.Provider value={value}>
      {web3storageClient != null && children}
    </StorageContext.Provider>
  );
};

export default StorageProvider;

export const useStorage = (): StorageProviderContextValue =>
  useContext(StorageContext);
