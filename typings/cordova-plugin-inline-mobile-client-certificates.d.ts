/**
 * Global object ClientCertificatesPlugin.
 */
interface Window {
  ClientCertificatesPlugin: ClientCertificatesPlugin;
}

interface ClientCertificatesPlugin {
  setPrivateKeyAlias(privateKeyAlias: string): void;
  registerHandler(onPrivateKeyAliasSet: (privateKeyAlias: string) => void, onError: (error: string) => void): void;
  choosePrivateKeyAlias(callback: (privateKeyAlias: string) => void, privateKeyAlias?: string): void;
}
