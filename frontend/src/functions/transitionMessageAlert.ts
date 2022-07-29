import toast from "react-hot-toast";
import decodeMessage from "./decodeMessage";

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
  console.log("Ivan wants to say log ");
  const transition = new Promise<string>((success, error) => {
    console.log("Inside the promise");
    const subscription = zilPay.wallet
      .observableTransaction(transactionId)
      .subscribe(async (hash: any) => {
        loader(false);
        console.log("Subscribe exe");
        subscription.unsubscribe();
        // // debugger;
        try {
          const Tx = await zilPay.blockchain.getTransaction(hash[0]);
          const code = Tx.receipt.transitions[0].msg.params[0].value;
          const message = decodeMessage(code);
          console.log(message);
          if (message.type === "success") {
            success(message.alert);
          }
          error(message.alert);
        } catch (err) {
          error("Transaction error");
        }
      });
  });
  // const variable = await transition;
  // return variable;

  toast.promise(transition, {
    loading: `${transitionName}`,
    success: (message: string) => message,
    error: (message: string) => message,
  });
};

export default transitionMessageAlert;
