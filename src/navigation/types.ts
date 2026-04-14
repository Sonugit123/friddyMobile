// export type RootStackParamList = {
//     SellCryptoTokens: {
//     token?: {
//       id: number;
//       tokenIcon: any;
//       tokenName: string;
//       type: string;
//       typeValue: string;
//       value: string;
//     };
//     priceValue?: string;
//   } | undefined;
//   SellCryptoAtWhatPrice: {
//     token: {
//       id: number;
//       tokenIcon: any;
//       tokenName: string;
//       type: string;
//       typeValue: string;
//       value: string;
//     };
//     value: string;
//   };
// };
export type RootStackParamList = {
  // SellCryptoTokens: undefined;

  SellCryptoAtWhatPrice: {
    token: {
      id: number;
      tokenIcon: any;
      tokenName: string;
      type: string;
      typeValue: string;
      value: string;
    };
  };
};