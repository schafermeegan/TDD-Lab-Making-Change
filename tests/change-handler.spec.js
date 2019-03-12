describe("tests for change-handler", () => {

    it("inserts coin and increases cash tendered", () => {

        let changeHandler = new ChangeHandler(0,0); 
               
        expect(changeHandler.insertCoin('penny')).toBe(1);
        expect(changeHandler.insertCoin('nickel')).toBe(5);
        expect(changeHandler.insertCoin('dime')).toBe(10);
        expect(changeHandler.insertCoin('quarter')).toBe(25);
    });

    it("verifies the amount inserted is the amount needed or in excess of", () => {

        let changeHandler = new ChangeHandler(15,0);
        expect(changeHandler.isPaymentSufficient()).toBe(false);
    
        changeHandler = new ChangeHandler(15,15);
        expect(changeHandler.isPaymentSufficient()).toBe(true);

        changeHandler = new ChangeHandler(15,16);
        expect(changeHandler.isPaymentSufficient()).toBe(true); 
    });

    it("tests the amount returned in change", () => {
        
        let changeHandler = new ChangeHandler(50,200);
        expect(changeHandler.giveChange()).toEqual({quarters: 6, dimes: 0, nickels: 0,pennies: 0});

        changeHandler = new ChangeHandler(50,50);
        expect(changeHandler.giveChange()).toEqual({quarters: 0, dimes: 0, nickels: 0,pennies: 0});

        changeHandler = new ChangeHandler(50,40);
        expect(changeHandler.giveChange()).toEqual({quarters: 0, dimes: 0, nickels: 0,pennies: 0});
    });

});