class PartnerSerive{
    static filterByCredits(partners, certification){
        /**
         * Return partners that have al least the given number of credits
         * @param {Array} partners - Array of partners
         * @param {Number} credits - Number of credits
         * @returns {Array} - Array of partners
         */
        return partners.filter(partner=> partner.credits>=certification);
    }

    static getAll(partners){
        /**
         * Return all partners given
         */
        return partners;
    }
    static getCertificationPartners(partners){
        /** 
         * Return partners that have certification
         * @param {Array} partners - Array of partners
         */
        return partners.filter(partner=> partner.haveCertification);
    }

}

module.exports = PartnerSerive;