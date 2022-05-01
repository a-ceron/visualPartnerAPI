const PartnerService= require('../services/PartnerService');
const Reader= require('../utils/Reader');

class PartnerController{
    static all(){
        const partners= Reader.readFile('visualpartners.json');
        return PartnerService.getAll(partners);
    }
}

module.exports = PartnerController;