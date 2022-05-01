const PartnerController= require("../../app/controllers/PartnerController");

describe("Test for PartnerController class", ()=>{
    test("(1) Test for all method",()=>{
        const result= PartnerController.all();
        expect( result.length ).toBe(51);
    });
    test("(2) Test for getCertificationPartners method",()=>{
        const result= PartnerController.getCertificationPartners();
        expect( result.length ).toBe(29);
    });
});