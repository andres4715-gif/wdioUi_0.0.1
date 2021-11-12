import {getValueAndCompareContent} from "../helpers/utils";

const SELECTORS = {
    CUSTOMER_SERVICES_LABEL: '[class="page-heading bottom-indent"]',
    SEND_A_MESSAGE_LABEL: '[class="page-subheading"]'
}

class ContactUsPage {
    get customerServicesLabel() {
        return $(SELECTORS.CUSTOMER_SERVICES_LABEL);
    }

    get sentMessageLabel() {
        return $(SELECTORS.SEND_A_MESSAGE_LABEL);
    }

    getTitleAndCompare() {
        getValueAndCompareContent(this.customerServicesLabel, 'CUSTOMER SERVICE - CONTACT US', 'CUSTOMER SERVICE - CONTACT US');
    }

    getSendMessageAndCompare() {
        getValueAndCompareContent(this.sentMessageLabel, 'SEND A MESSAGE', 'SEND A MESSAGE');
    }
}

export default new ContactUsPage();
