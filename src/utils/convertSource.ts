
import { TRANSACTION_SOURCE } from "@/types/transaction.type"

export const convertSource=(type:string)=>{
    if(type===TRANSACTION_SOURCE.AGENT) return "Agent"
    if(type===TRANSACTION_SOURCE.USER) return "User"
    if(type===TRANSACTION_SOURCE.SSLCOMMERZ) return "SSLCOMMERZ"
   
  
  }