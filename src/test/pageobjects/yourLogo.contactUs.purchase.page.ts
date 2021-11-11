import {getValueAndCompareContent} from "../helpers/utils";

const SELECTORS = {
    CUSTOMER_SERVICES_LABEL: '[class="page-heading bottom-indent"]'
}

class ContactUsPage {
    get customerServicesLabel() {
        return $(SELECTORS.CUSTOMER_SERVICES_LABEL);
    }

    getTitleAndCompare() {
        getValueAndCompareContent(this.customerServicesLabel, 'CUSTOMER SERVICE - CONTACT US', 'CUSTOMER SERVICE - CONTACT US');
    }
}

export default new ContactUsPage();
