const PartnerController= require("../../app/controllers/PartnerController");

describe("Test for PartnerController class", ()=>{
    test("(1) Test for all method",()=>{
        const result= PartnerController.all();
        expect( result.length ).toBe(51);
    });
});