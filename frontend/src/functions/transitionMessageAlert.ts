import toast from "react-hot-toast";
import decodeMessage from "./decodeMessage";
import { decodeZilPayError } from "./decodeMessage";

/*
Creates a toast using react-hot-toast,
Uses ZilPay to subscribe to transactions,
Updates toast with status of transaction,
Shows message as per messages codes.
*/

const transitionMessageAlert = async (
  zilPay: any,
  transactionId: string,
  transitionName: string,
  loader: any
) => {
  const transition = new Promise<string>((success, error) => {
    console.log("Inside the promise");
    const subscription = zilPay.wallet
      .observableTransaction(transactionId)
      .subscribe(async (hash: any) => {
        loader(false);
        subscription.unsubscribe();
        try {
          const Tx = await zilPay.blockchain.getTransaction(hash);
          if (Tx.success) {
            const code = Tx.receipt.transitions[0].msg.params[0].value;
            const message = decodeMessage(code);
            //TODO Handle the success
            console.log(message);
            if (message.type === "success") {
              success(message.alert);
            }
            error(message.alert);
          } else {
            //TODO : HANDLE Error state
            console.log("error state");

            const error_message = Tx.exceptions[0].message;
            const code = error_message.slice(-5, -4); //Extract error code .
            const message = decodeMessage(code);
            console.log(message);
          }
        } catch (err: any) {
          error("Transaction error");
          toast.error(decodeZilPayError(err));
        }
      });
  });
  toast.promise(transition, {
    loading: `${transitionName}`,
    success: (message: string) => message,
    error: (message: string) => message,
  });
};

export default transitionMessageAlert;
