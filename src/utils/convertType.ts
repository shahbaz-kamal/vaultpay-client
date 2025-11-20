import { TRANSACTION_TYPE } from "@/types/transaction.type"

export const convertType=(type:string)=>{
    if(type===TRANSACTION_TYPE.CASH_IN) return "Cash In"
    if(type===TRANSACTION_TYPE.CASH_OUT) return "Cash Out"
    if(type===TRANSACTION_TYPE.ADD_MONEY) return "Add Money"
    if(type===TRANSACTION_TYPE.SEND_MONEY) return "Send Money"
  
  }