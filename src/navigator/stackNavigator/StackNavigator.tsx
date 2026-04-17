import React from 'react';
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
import DrawerNavigator from '../drawerNavigator/DrawerNavigator';
import SecurityVerification from '../../screens/accountSecurity/changeNumber/securityVerification/SecurityVerification';
import ChangePhoneNumber from '../../screens/accountSecurity/changeNumber/changePhoneNumber/ChangePhoneNumber';
import VerifyNewNumber from '../../screens/accountSecurity/changeNumber/verifyNewNumber/VerifyNewNumber';
import NumberChangedSuccess from '../../screens/accountSecurity/changeNumber/numberChangedSuccess/NumberChangedSuccess';
import ChangeEmail from '../../screens/accountSecurity/changeEmailModule/changeEmail/ChangeEmail';
import SureEmailChange from '../../screens/accountSecurity/changeEmailModule/sureEmailChange/SureEmailChange';
import SecurityVerificationEmail from '../../screens/accountSecurity/changeEmailModule/securityVerificationEmail/SecurityVerificationEmail';
import VerifyNewEmail from '../../screens/accountSecurity/changeEmailModule/verifyNewEmail/VerifyNewEmail';
import EmailChangedSuccess from '../../screens/accountSecurity/changeEmailModule/emailChangedSuccess/EmailChangedSuccess';
import ChangePassword from '../../screens/accountSecurity/changePasswordModule/changePassword/ChangePassword';
import SureChangePassword from '../../screens/accountSecurity/changePasswordModule/sureChangePassword/SureChangePassword';
import SecurityVerificationPassword from '../../screens/accountSecurity/changePasswordModule/securityVerificationPassword/SecurityVerificationPassword';
import ChangeOldPassword from '../../screens/accountSecurity/changePasswordModule/changeOldPassword/ChangeOldPassword';
import PasswordChangedSuccess from '../../screens/accountSecurity/changePasswordModule/passwordChangedSuccess/PasswordChangedSuccess';
import CheckGoogleAuth from '../../screens/accountSecurity/googleAuthModule/checkGoogleAuth/CheckGoogleAuth';
import SecurityVerificationGoogleAuth from '../../screens/accountSecurity/googleAuthModule/securityVerificationGoogleAuth/SecurityVerificationGoogleAuth';
import SureGoogleAuth from '../../screens/accountSecurity/googleAuthModule/sureGoogleAuth/SureGoogleAuth';
import EnableAuthenticator from '../../screens/accountSecurity/googleAuthModule/enableAuthenticator/EnableAuthenticator';
import VerifyAuthenticatorCode from '../../screens/accountSecurity/googleAuthModule/verifyAuthenticatorCode/VerifyAuthenticatorCode';
import AuthenticatorSuccess from '../../screens/accountSecurity/googleAuthModule/authenticatorSuccess/AuthenticatorSuccess';
import AddPaymentMethods from '../../screens/setting/paymentMethods/addPaymentMethods/AddPaymentMethods';
import ShowPaymentMethods from '../../screens/setting/paymentMethods/showPaymentMethods/ShowPaymentMethods';
import PaymentMethodForm from '../../screens/setting/paymentMethods/paymentMethodForm/PaymentMethodForm';
import ShowCommunicationMethods from '../../screens/setting/communicationMethods/showCommunicationMethods/ShowCommunicationMethods';
import AddCommunicationMethods from '../../screens/setting/communicationMethods/addCommunicationMethods/AddCommunicationMethods';
import CommunicationMethodForm from '../../screens/setting/communicationMethods/communicationMethodForm/CommunicationMethodForm';
import AccountSettings from '../../screens/setting/accountSettings/AccountSettings';
import AccountActivity from '../../screens/setting/accountActivity/AccountActivity';
import DisableAccountInfo from '../../screens/setting/accountActivity/disableAccount/disableAccountInfo/DisableAccountInfo';
import DisableAccountConfirm from '../../screens/setting/accountActivity/disableAccount/disableAccountConfirm/DisableAccountConfirm';
import ResolutionCenter from '../../screens/setting/helpDesk/resolutionCenter/ResolutionCenter';
import ChatScreen from '../../screens/setting/helpDesk/chatScreen/ChatScreen';
import QuickReport from '../../screens/setting/quickReport/QuickReport';
import FAQs from '../../screens/setting/FAQs/FAQs';
import SellCrypto from '../../screens/sellCrypto/SellCrypto';
import SellCryptoAddPaymentMethod from '../../screens/sellCrypto/sellCryptoAddPaymentMethod/SellCryptoAddPaymentMethod';
import SellCryptoPaymentMethodForm from '../../screens/sellCrypto/sellCryptoPaymentMethodForm/SellCryptoPaymentMethodForm';
import SellCryptoAddCommunicationMethod from '../../screens/sellCrypto/sellCryptoAddCommunicationMethod/SellCryptoAddCommunicationMethod';
import SellCryptoCommunicationMethodForm from '../../screens/sellCrypto/sellCryptoCommunicationMethodForm/SellCryptoCommunicationMethodForm';
import SellCryptoAddCommunicationVerifyDetails from '../../screens/sellCrypto/sellCryptoAddCommunicationVerifyDetails/SellCryptoAddCommunicationVerifyDetails';
import SellCryptoTokens from '../../screens/sellCrypto/sellCryptoTokens/SellCryptoTokens';
import SellCryptoAtWhatPrice from '../../screens/sellCrypto/sellCryptoAtWhatPrice/SellCryptoAtWhatPrice';
import IdentityVerification from '../../screens/kyc/identityVerification/IdentityVerification';
import ChooseIdTypeForKyc from '../../screens/kyc/chooseIdTypeForKyc/ChooseIdTypeForKyc';
import FrontIdCardReview from '../../screens/kyc/frontIdCardReview/FrontIdCardReview';
import BackIdCardReview from '../../screens/kyc/backIdCardReview/BackIdCardReview';
import QuickSelfieInfo from '../../screens/kyc/quickSelfieInfo/QuickSelfieInfo';
import KycSelfie from '../../screens/kyc/kycSelfie/KycSelfie';
import KycVerified from '../../screens/kyc/kycVerified/KycVerified';
import PresaleAllPaymentMethod from '../../screens/presale/presaleWithOtherMethods/presaleAllPaymentMethod/PresaleAllPaymentMethod';
import PresaleCheckout from '../../screens/presale/presaleCheckout/PresaleCheckout';
import PresaleProvideDetails from '../../screens/presale/presaleProvideDetails/PresaleProvideDetails';
import PresaleQueuingSellers from '../../screens/presale/presaleQueuingSellers/PresaleQueuingSellers';
import PresaleSellerInformation from '../../screens/presale/presaleWithOtherMethods/presaleSellerInformation/PresaleSellerInformation';
import PresaleMakePayment from '../../screens/presale/presaleMakePayment/PresaleMakePayment';
import PresaleProofOfPayment from '../../screens/presale/presaleProofOfPayment/PresaleProofOfPayment';
import PresaleConfirmingPayment from '../../screens/presale/presaleWithOtherMethods/presaleConfirmingPayment/PresaleConfirmingPayment';
import PresaleClaimFunds from '../../screens/presale/presaleWithOtherMethods/presaleClaimFunds/PresaleClaimFunds';
import PresalePaymentSuccessful from '../../screens/presale/presaleWithOtherMethods/presalePaymentSuccessful/PresalePaymentSuccessful';
import PresaleConnectWallet from '../../screens/presale/presaleWithCrypto/presaleConnectWallet/PresaleConnectWallet';
// import ChangePhoneNumber from '../../screens/accountSecurity/changeNumber/changePhoneNumber/ChangePhoneNumber';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
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
      {/* <Stack.Screen name='WaitingForSeller' component={WaitingForSeller}/> */}

      {/* <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} /> */}
      {/* <Stack.Screen name="ChangePhoneNumber" component={ChangePhoneNumber} /> */}
      {/* <Stack.Screen name="SecurityVerification" component={SecurityVerification} /> */}
      {/* <Stack.Screen name="VerifyNewNumber" component={VerifyNewNumber} /> */}
      {/* <Stack.Screen name="NumberChangedSuccess" component={NumberChangedSuccess} /> */}
      {/* <Stack.Screen name="ChangeEmail" component={ChangeEmail} /> */}
      {/* <Stack.Screen name="SureEmailChange" component={SureEmailChange} /> */}
      {/* <Stack.Screen name="SecurityVerificationEmail" component={SecurityVerificationEmail} /> */}
      {/* <Stack.Screen name="VerifyNewEmail" component={VerifyNewEmail}/> */}
      {/* <Stack.Screen name="EmailChangedSuccess" component={EmailChangedSuccess}/> */}
      {/* <Stack.Screen name="ChangePassword" component={ChangePassword}/> */}
      {/* <Stack.Screen name="SureChangePassword" component={SureChangePassword}/> */}
      {/* <Stack.Screen name="SecurityVerificationPassword" component={SecurityVerificationPassword}/> */}
      {/* <Stack.Screen name="ChangeOldPassword" component={ChangeOldPassword}/> */}
      {/* <Stack.Screen name="PasswordChangedSuccess" component={PasswordChangedSuccess}/> */}
      {/* <Stack.Screen name="CheckGoogleAuth" component={CheckGoogleAuth}/> */}
      {/* <Stack.Screen name="SecurityVerificationGoogleAuth" component={SecurityVerificationGoogleAuth}/> */}
      {/* <Stack.Screen name="SureGoogleAuth" component={SureGoogleAuth}/> */}
      {/* <Stack.Screen name="EnableAuthenticator" component={EnableAuthenticator}/> */}
      {/* <Stack.Screen name="VerifyAuthenticatorCode" component={VerifyAuthenticatorCode}/> */}
      {/* <Stack.Screen name='AuthenticatorSuccess' component={AuthenticatorSuccess}/> */}
      {/* <Stack.Screen name='ShowPaymentMethods' component={ShowPaymentMethods}/> */}
      {/* <Stack.Screen name='AddPaymentMethods' component={AddPaymentMethods}/> */}
      {/* <Stack.Screen name='PaymentMethodForm' component={PaymentMethodForm}/> */}
      {/* <Stack.Screen name='ShowCommunicationMethods' component={ShowCommunicationMethods}/> */}
      {/* <Stack.Screen name='AddCommunicationMethods' component={AddCommunicationMethods}/> */}
      {/* <Stack.Screen name='CommunicationMethodForm' component={CommunicationMethodForm}/> */}
      {/* <Stack.Screen name='AccountSettings' component={AccountSettings}/> */}
      {/* <Stack.Screen name='AccountActivity' component={AccountActivity}/> */}
      {/* <Stack.Screen name='DisableAccountInfo' component={DisableAccountInfo}/> */}
      {/* <Stack.Screen name='DisableAccountConfirm' component={DisableAccountConfirm}/> */}
      {/* <Stack.Screen name='ResolutionCenter' component={ResolutionCenter}/> */}
      {/* <Stack.Screen name='ChatScreen' component={ChatScreen}/> */}
      {/* <Stack.Screen name='QuickReport' component={QuickReport}/> */}
      {/* <Stack.Screen name='FAQs' component={FAQs}/> */}
      {/* <Stack.Screen name='SellCrypto' component={SellCrypto}/> */}
      {/* <Stack.Screen name='SellCryptoAddPaymentMethod' component={SellCryptoAddPaymentMethod}/> */}
      {/* <Stack.Screen name='SellCryptoPaymentMethodForm' component={SellCryptoPaymentMethodForm}/> */}
      {/* <Stack.Screen name='SellCryptoAddCommunicationMethod' component={SellCryptoAddCommunicationMethod}/> */}
      {/* <Stack.Screen name='SellCryptoCommunicationMethodForm' component={SellCryptoCommunicationMethodForm}/> */}
      {/* <Stack.Screen name='SellCryptoAddCommunicationVerifyDetails' component={SellCryptoAddCommunicationVerifyDetails}/> */}
      {/* <Stack.Screen name='SellCryptoTokens' component={SellCryptoTokens}/> */}
      {/* <Stack.Screen name='SellCryptoAtWhatPrice' component={SellCryptoAtWhatPrice}/> */}
      {/* <Stack.Screen name='IdentityVerification' component={IdentityVerification}/> */}
      {/* <Stack.Screen name='ChooseIdTypeForKyc' component={ChooseIdTypeForKyc}/> */}
      {/* <Stack.Screen name='FrontIdCardReview' component={FrontIdCardReview}/> */}
      {/* <Stack.Screen name='BackIdCardReview' component={BackIdCardReview}/> */}
      {/* <Stack.Screen name='QuickSelfieInfo' component={QuickSelfieInfo}/> */}
      {/* <Stack.Screen name='KycSelfie' component={KycSelfie}/> */}
      {/* <Stack.Screen name='KycVerified' component={KycVerified}/> */}
      {/* <Stack.Screen name='PresaleCheckout' component={PresaleCheckout}/> */}
      {/* <Stack.Screen name='PresaleAllPaymentMethod' component={PresaleAllPaymentMethod}/> */}
      {/* <Stack.Screen name='PresaleProvideDetails' component={PresaleProvideDetails}/> */}
      {/* <Stack.Screen name='PresaleQueuingSellers' component={PresaleQueuingSellers}/> */}
      {/* <Stack.Screen name='PresaleSellerInformation' component={PresaleSellerInformation}/> */}
      {/* <Stack.Screen name='PresaleMakePayment' component={PresaleMakePayment}/> */}
      {/* <Stack.Screen name='PresaleProofOfPayment' component={PresaleProofOfPayment}/> */}
      {/* <Stack.Screen name='PresaleConfirmingPayment' component={PresaleConfirmingPayment}/> */}
      {/* <Stack.Screen name='PresaleClaimFunds' component={PresaleClaimFunds}/> */}
      {/* <Stack.Screen name='PresalePaymentSuccessful' component={PresalePaymentSuccessful}/> */}
      <Stack.Screen
        name="PresaleConnectWallet"
        component={PresaleConnectWallet}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
