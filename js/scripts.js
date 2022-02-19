(async () => {
  const { connect, keyStores, WalletConnection, Contract, utils, Signer } = nearApi;
  const buttonLogin = document.querySelector('button[id="btnLogin"]');
  const CONTRACT_ID = 'bootcamp-demo.jacobn.testnet';
  const near = await connect(config());
  const wallet = new WalletConnection(near, 'ncd-ii');

  if (wallet.isSignedIn()) {
    const accountId = wallet.getAccountId();
    buttonLogin.innerHTML = `Logout ${accountId}`;
    buttonLogin.addEventListener('click', signOut);
  } else {
    buttonLogin.addEventListener('click', signIn);
  }

  // ------------------------
  // ------------------------
  // Helper functions
  // ------------------------
  // ------------------------

  function signIn() {
    wallet.requestSignIn();
  }

  function signOut() {
    wallet.signOut();
    location.reload();
  }

  function config() {
    return {
      networkId: 'testnet',
      keyStore: new keyStores.BrowserLocalStorageKeyStore(),
      nodeUrl: 'https://rpc.testnet.near.org',
      walletUrl: 'https://wallet.testnet.near.org',
      helperUrl: 'https://helper.testnet.near.org',
      explorerUrl: 'https://explorer.testnet.near.org'
    };
  }
})();