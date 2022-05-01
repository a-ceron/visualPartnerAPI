const PartnerSerive= require('../../app/services/PartnerService');

describe("Test for PartnerService class", ()=>{
    test("(1) Test for filterByCredits method", ()=>{
        const partners= [
            {
                "name": "John",
                "credits": 100
            },
            {
                "name": "Jane",
                "credits": 500
            },
            {
                "name": "Jack",
                "credits": 840
            }
        ];
        const credits= 800;
        const expected= [
            {
                "name": "Jack",
                "credits": 840
            }
        ];
        const result= PartnerSerive.filterByCredits(partners, credits);
        expect(result).toEqual(expected);
    });
});