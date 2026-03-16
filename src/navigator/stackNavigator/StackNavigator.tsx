import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/auth/login/Login';
import LoginGAuth from '../../screens/auth/loginGAuth/LoginGAuth';
import ForgotPassword from '../../screens/auth/forgotPasswordModule/forgotPassword/ForgotPassword';
import ForgotPasswordConfirm from '../../screens/auth/forgotPasswordModule/forgotPasswordConfirm/ForgotPasswordConfirm';
import CreateNewPassword from '../../screens/auth/forgotPasswordModule/createNewPassword/CreateNewPassword';
import SignUp from '../../screens/auth/signUpModule/signUp/SignUp';
import CreateAccount from '../../screens/auth/signUpModule/createAccount/CreateAccount';
import TwoStepVerification from '../../screens/auth/signUpModule/twoStepVerification/TwoStepVerification';
import Otp from '../../screens/auth/signUpModule/otp/Otp';
import QrCodeAuthenticator from '../../screens/auth/signUpModule/qrCodeAuthenticator/QrCodeAuthenticator';
import AccountCreated from '../../screens/auth/signUpModule/accountCreated/AccountCreated';
import BnbSmartWallet from '../../screens/auth/signUpModule/bnbSmartWallet/BnbSmartWallet';
import Dashboard from '../../screens/dashboard/Dashboard';
import Warning from '../../screens/deposit/warning/Warning';
import DepositInstruction from '../../screens/deposit/depositInstruction/DepositInstruction';
import ConnectWallet from '../../screens/deposit/connectWallet/ConnectWallet';
import DepositeMoney from '../../screens/deposit/depositeMoney/DepositeMoney';
import DepositeMoneyPreview from '../../screens/deposit/depositeMoneyPreview/DepositeMoneyPreview';
import DepositeProcessing from '../../screens/deposit/depositeProcessing/DepositeProcessing';
import DepositeSuccess from '../../screens/deposit/depositeSuccess/DepositeSuccess';
import UnusualLogin from '../../screens/auth/unusualLoginActivity/unusualLogin/UnusualLogin';
import UnusualLoginCode from '../../screens/auth/unusualLoginActivity/unusualLoginCode/UnusualLoginCode';
import GoogleAuthenticator from '../../screens/auth/unusualLoginActivity/googleAuthenticator/GoogleAuthenticator';
import GoogleAuthenticatorAdded from '../../screens/auth/unusualLoginActivity/googleAuthenticatorAdded/GoogleAuthenticatorAdded';
import SelectToken from '../../screens/deposit/selectToken/SelectToken';
import SelectTokenWithdraw from '../../screens/withdraw/selectToken/SelectTokenWithdraw';
import WarningWIthdraw from '../../screens/withdraw/warning/WarningWIthdraw';
import WithdrawMoney from '../../screens/withdraw/withdrawMoney/WithdrawMoney';
import WithdrawMoneyPreview from '../../screens/withdraw/withdrawMoneyPreview/WithdrawMoneyPreview';
import ConnectWalletWithdraw from '../../screens/withdraw/connectWalletWithdraw/ConnectWalletWithdraw';
import WIthdrawProcessing from '../../screens/withdraw/withdrawProcessing/WIthdrawProcessing';
import WithdrawSuccess from '../../screens/withdraw/withdrawSuccess/WithdrawSuccess';
import VerifyPhNumWarning from '../../screens/withdrawNotVerified/verifyPhNumWarning/VerifyPhNumWarning';
import verifyPhNum from '../../screens/withdrawNotVerified/verifyPhNum/verifyPhNum';
import VerificationComplete from '../../screens/withdrawNotVerified/verificationComplete/VerificationComplete';
import WalletOverview from '../../screens/wallet/walletOverview/WalletOverview';
import CryptoBalance from '../../screens/wallet/cryptoBalance/CryptoBalance';
import CashBalance from '../../screens/wallet/cashBalance/CashBalance';
import Convert from '../../screens/convert/Convert';
import ConvertEmpty from '../../screens/convert/convertEmpty/ConvertEmpty';
import ConvertSelectToken from '../../screens/convert/selectToken/ConvertSelectToken';
import ConvertConfirmation from '../../screens/convert/convertConfirmation/ConvertConfirmation';
import ConversionComplete from '../../screens/convert/conversionComplete/ConversionComplete';
import NewUserBuyCrypto from '../../screens/buyCrypto/newUserBuyCrypto/NewUserBuyCrypto';
import QueuingSellers from '../../screens/buyCrypto/queuingSellers/QueuingSellers';
import SellerInformation from '../../screens/buyCrypto/sellerInformation/SellerInformation';
import MakePayment from '../../screens/buyCrypto/makePayment/MakePayment';
import ProofOfPayment from '../../screens/buyCrypto/proofOfPayment/ProofOfPayment';
import WaitingForSeller from '../../screens/buyCrypto/waitingForSeller/WaitingForSeller';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (

    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      {/* <Stack.Screen name="Login" component={Login} /> */}
      {/* <Stack.Screen name="LoginGAuth" component={LoginGAuth} /> */}
      {/* <Stack.Screen name='ForgotPassword' component={ForgotPassword} /> */}
      {/* <Stack.Screen name='ForgotPasswordConfirm' component={ForgotPasswordConfirm} /> */}
      {/* <Stack.Screen name='CreateNewPassword' component={CreateNewPassword} /> */}
      {/* <Stack.Screen name='SignUp' component={SignUp} /> */}
      {/* <Stack.Screen name='CreateAccount' component={CreateAccount} /> */}
      {/* <Stack.Screen name='TwoStepVerification' component={TwoStepVerification} /> */}
      {/* <Stack.Screen name='Otp' component={Otp} /> */}
      {/* <Stack.Screen name='QrCodeAuthenticator' component={QrCodeAuthenticator} /> */}
      {/* <Stack.Screen name='AccountCreated' component={AccountCreated} /> */}
      {/* <Stack.Screen name='BnbSmartWallet' component={BnbSmartWallet} /> */}
      {/* <Stack.Screen name='UnusualLogin' component={UnusualLogin}/> */}
      {/* <Stack.Screen name='UnusualLoginCode' component={UnusualLoginCode}/> */}
      {/* <Stack.Screen name='GoogleAuthenticator' component={GoogleAuthenticator}/> */}
      {/* <Stack.Screen name='GoogleAuthenticatorAdded' component={GoogleAuthenticatorAdded}/> */}
      {/* <Stack.Screen name='Dashboard' component={Dashboard}/> */}
      {/* <Stack.Screen name='Warning' component={Warning}/> */}
      {/* <Stack.Screen name='SelectToken' component={SelectToken}/> */}
      {/* <Stack.Screen name='DepositInstruction' component={DepositInstruction}/> */}
      {/* <Stack.Screen name='ConnectWallet' component={ConnectWallet}/> */}
      {/* <Stack.Screen name='DepositeMoney' component={DepositeMoney}/> */}
      {/* <Stack.Screen name='DepositeMoneyPreview' component={DepositeMoneyPreview}/> */}
      {/* <Stack.Screen name='DepositeProcessing' component={DepositeProcessing}/> */}
      {/* <Stack.Screen name='DepositeSuccess' component={DepositeSuccess}/> */}
      {/* <Stack.Screen name='SelectTokenWithdraw' component={SelectTokenWithdraw}/> */}
      {/* <Stack.Screen name='WarningWIthdraw' component={WarningWIthdraw}/> */}
      {/* <Stack.Screen name='WithdrawMoney' component={WithdrawMoney}/> */}
      {/* <Stack.Screen name='WithdrawMoneyPreview' component={WithdrawMoneyPreview}/> */}
      {/* <Stack.Screen name='ConnectWalletWithdraw' component={ConnectWalletWithdraw}/> */}
      {/* <Stack.Screen name='WithdrawProcessing' component={WIthdrawProcessing}/> */}
      {/* <Stack.Screen name='WithdrawSuccess' component={WithdrawSuccess}/> */}
      {/* <Stack.Screen name='VerifyPhNumWarning' component={VerifyPhNumWarning}/> */}
      {/* <Stack.Screen name='VerifyPhNum' component={verifyPhNum}/> */}
      {/* <Stack.Screen name='VerificationComplete' component={VerificationComplete}/> */}
      {/* <Stack.Screen name='WalletOverview' component={WalletOverview}/> */}
      {/* <Stack.Screen name='CryptoBalance' component={CryptoBalance}/> */}
      {/* <Stack.Screen name='CashBalance' component={CashBalance}/> */}
      {/* <Stack.Screen name='Convert' component={Convert}/> */}
      {/* <Stack.Screen name='ConvertEmpty' component={ConvertEmpty}/>
      <Stack.Screen name='ConvertSelectToken' component={ConvertSelectToken}/> */}
      {/* <Stack.Screen name='ConvertConfirmation' component={ConvertConfirmation}/> */}
      {/* <Stack.Screen name='ConversionComplete' component={ConversionComplete}/> */}
      {/* <Stack.Screen name='NewUserBuyCrypto' component={NewUserBuyCrypto}/> */}
      {/* <Stack.Screen name='QueuingSellers' component={QueuingSellers}/> */}
      {/* <Stack.Screen name='SellerInformation' component={SellerInformation}/> */}
      {/* <Stack.Screen name='MakePayment' component={MakePayment}/> */}
      {/* <Stack.Screen name='ProofOfPayment' component={ProofOfPayment}/> */}
      <Stack.Screen name='WaitingForSeller' component={WaitingForSeller}/>
    </Stack.Navigator>
  )
}

export default StackNavigator