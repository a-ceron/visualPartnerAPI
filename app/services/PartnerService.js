class PartnerSerive{
    static filterByCredits(partners, certification){
        return partners.filter(partner=> partner.credits>=certification);
    }

    static getAll(partners){
        return partners;
    }
}

module.exports = PartnerSerive;