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
    test("(3) Test for getCreditsPartners method",()=>{
        const credits= 800;
        const result= PartnerController.getCreditsPartners( credits );
        expect( result.length ).toBe(9);
    });
});