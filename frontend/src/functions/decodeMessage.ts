/*
Converts the message codes from the contract to a human-readable form.
*/

const messageCodes: any = {
   "1": {
    alert: "Contract is not paused",
    name: "not_paused_error",
    type: "error",
  },
  "2": {
    alert: "Contraft is paused",
    name: "paused_error",
    type: "error",
  }, 
  "3": {
    alert: "Not self",
    name: "self_error",
    type: "error",
  },
  "4": {
    alert: "Not Contract owner ",
    name: "not_contract_owner_error",
    type: "error",
  },
  "5": {
    alert: "Not minted error ",
    name: "not_minted_error",
    type: "error",
  },
  "6": {
    alert: "Not owner or operator ",
    name: "not_owner_or_operator_error",
    type: "error",
  }, 
  "7": {
    alert: "Zero address used as destination",
    name: "zero_address_destination_error",
    type: "error",
  },
  "8": {
    alert: "Not contract owner recipient ",
    name: "not_contract_ownership_recipient_error",
    type: "error",
  }, 
  "9": {
    alert: "This address already owns an SBT ",
    name: "more_than_one_token_error",
    type: "error",
  }, 
  "10": {
    alert: "This address doesnt have an SBT",
    name: "less_than_one_token_error",
    type: "error",
  },
  "11": {
    alert: "Empty URI was given  ",
    name: "empty_uri_error",
    type: "error",
  },
  "12": {
    alert: "Successfully SBT minting",
    name: "mint_success",
    type: "success",
  },
  "13": {
    alert: "Successfully SBT burning",
    name: "burn_success",
    type: "success",
  },
  "14": {
    alert: "Successfully profileURI change",
    name: "changeProfileURI_success",
    type: "success",
  },
  "15": {
    alert: "Successfully dataURI change",
    name: "changeDataURI_success",
    type: "success",
  },
  "16": {
    alert: "Successfully earned achievement",
    name: "earn_achievement_success",
    type: "success",
  },
};

const decodeMessage = (code: string) => {
  return messageCodes[code];
};

export const decodeZilPayError = (error: string) => {
  console.log(error);
  switch (error) {
    case "Insufficient funds in source account!":
      return "Insufficient funds for transaction";
    case "User rejected":
      return "Transaction rejected from ZilPay";
    default:
      return "ZilPay Error";
  }
};

export default decodeMessage;
