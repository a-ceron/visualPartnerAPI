class PartnerSerive{
    static filterByCredits(partners, certification){
        return partners.filter(partner=> partner.credits>=certification);
    }
}

module.exports = PartnerSerive;