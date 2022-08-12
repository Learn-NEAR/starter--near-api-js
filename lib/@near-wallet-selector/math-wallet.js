/**
 * Minified by jsDelivr using Terser v5.14.1.
 * Original file: /npm/@near-wallet-selector/math-wallet@5.0.3/index.umd.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
 !function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("is-mobile"),require("@near-wallet-selector/core"),require("@near-wallet-selector/wallet-utils")):"function"==typeof define&&define.amd?define(["exports","is-mobile","@near-wallet-selector/core","@near-wallet-selector/wallet-utils"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).MathWallet={},e.isMobile,e.core,e.walletUtils)}(this,(function(e,n,t,i){"use strict";
 /*! *****************************************************************************
		 Copyright (c) Microsoft Corporation.
 
		 Permission to use, copy, modify, and/or distribute this software for any
		 purpose with or without fee is hereby granted.
 
		 THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
		 REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
		 AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
		 INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
		 LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
		 OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
		 PERFORMANCE OF THIS SOFTWARE.
		 ***************************************************************************** */function o(e,n,t,i){return new(t||(t=Promise))((function(o,r){function a(e){try{l(i.next(e))}catch(e){r(e)}}function c(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}l((i=i.apply(e,n||[])).next())}))}const r=({options:e,store:n,provider:r,logger:a})=>o(void 0,void 0,void 0,(function*(){const c={wallet:window.nearWalletApi},l=()=>{const e=c.wallet.signer.account;return e?[{accountId:e.accountId}]:[]},s=e=>{const{contract:i}=n.getState();if(!i)throw new Error("Wallet not signed in");const o=t.getActiveAccount(n.getState());if(!o)throw new Error("No active account");return e.map((e=>({signerId:e.signerId||o.accountId,receiverId:e.receiverId||i.contractId,actions:e.actions})))};return{signIn({contractId:e}){return o(this,void 0,void 0,(function*(){const n=l();return n.length?n:(yield c.wallet.login({contractId:e}),l())}))},signOut(){return o(this,void 0,void 0,(function*(){yield c.wallet.logout()}))},getAccounts(){return o(this,void 0,void 0,(function*(){return l()}))},signAndSendTransaction({signerId:n,receiverId:t,actions:l}){return o(this,void 0,void 0,(function*(){a.log("signAndSendTransaction",{signerId:n,receiverId:t,actions:l});const o=yield i.signTransactions(s([{signerId:n,receiverId:t,actions:l}]),c.wallet.signer,e.network);return r.sendTransaction(o[0])}))},signAndSendTransactions({transactions:n}){return o(this,void 0,void 0,(function*(){a.log("signAndSendTransactions",{transactions:n});const t=yield i.signTransactions(s(n),c.wallet.signer,e.network);a.log("signAndSendTransactions:signedTransactions",t);const o=[];for(let e=0;e<t.length;e++)o.push(yield r.sendTransaction(t[e]));return o}))}}}));e.setupMathWallet=({iconUrl:e="./assets/math-wallet-icon.png"}={})=>()=>o(void 0,void 0,void 0,(function*(){const i=n.isMobile(),o=yield t.waitFor((()=>!!window.nearWalletApi)).catch((()=>!1));return i?null:{id:"math-wallet",type:"injected",metadata:{name:"Math Wallet",description:null,iconUrl:e,downloadUrl:"https://chrome.google.com/webstore/detail/math-wallet/afbcbjpbpfadlkmhmclhkeeodmamcflc",deprecated:!1,available:o},init:r}})),Object.defineProperty(e,"__esModule",{value:!0})}));