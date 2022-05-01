const PartnerSerive= require('../../app/services/PartnerService');
const Reader= require('../../app/utils/Reader');

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
    test("(2) Get all students", ()=>{
        const partners= Reader.readFile('testfile.json');
        const expected= [
            {
              "id": "6264d5d89f1df827eb84bb23",
              "name": "Warren",
              "email": "Todd@visualpartnership.xyz",
              "credits": 508,
              "enrollments": [
                "Visual Thinking Intermedio",
                "Visual Thinking Avanzado"
              ],
              "previousCourses": 1,
              "haveCertification": true
            }
        ];
        const result= PartnerSerive.getAll(partners);
        expect(result).toEqual(expected);
    });
});