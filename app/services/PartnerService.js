class PartnerSerive{
    static filterByCredits(partners, certification){
        return partners.filter(partner=> partner.credits>=certification);
    }

    static getAll(partners){
        return partners;
    }
    static getCertificationPartners(partners){
        return partners.filter(partner=> partner.haveCertification);
    }

}

module.exports = PartnerSerive;