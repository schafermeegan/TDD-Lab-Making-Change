class ChangeHandler {

    constructor(amountDue, cashTendered) {
        this.amountDue = amountDue;
        this.cashTendered = cashTendered;
    }
 
    insertCoin(type) {
        if (type === "penny") {
            return this.cashTendered + 1;
        }
        if (type === "nickel") {
            return this.cashTendered + 5;
        }
        if (type === "dime") {
            return this.cashTendered + 10;
        }
        if (type === "quarter") {
            return this.cashTendered + 25;
        }
    }
   
    isPaymentSufficient() {
        if (this.amountDue === this.cashTendered || this.amountDue < this.cashTendered) {
            return true;
        }
        else {
            return false;
        }
    }

    giveChange() {

        let quarter = 0
        let dime = 0
        let nickel = 0
        let penny = 0
        let changeReturned = this.cashTendered - this.amountDue

       while (changeReturned > 0) {
           if (changeReturned >= 25) {
                changeReturned -= 25;
                quarter++; 
           } else if (changeReturned >= 10) {
               changeReturned -= 10;
               dime ++;
           } else if (changeReturned >= 5) {
               changeReturned -= 5;
               nickel++;
           } else if (changeReturned >= 1) {
               changeReturned -= 1;
               penny++;
           }  
       }
      
        return {
            quarters: quarter,
            dimes: dime,
            nickels: nickel,
            pennies: penny
        }
    }
}