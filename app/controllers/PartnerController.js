const PartnerService= require('../services/PartnerService');
const Reader= require('../utils/Reader');

class PartnerController{
    static all(){
        const partners= Reader.readFile('visualpartners.json');
        return PartnerService.getAll(partners);
    }
    static getCertificationPartners(){
        const partners= Reader.readFile('visualpartners.json');
        return PartnerService.getCertificationPartners(partners);
    }
    static getCreditsPartners( credits ){
        const partners= Reader.readFile('visualpartners.json');
        return PartnerService.filterByCredits(partners, credits);
    }
}

module.exports = PartnerController;