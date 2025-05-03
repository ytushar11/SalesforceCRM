import { LightningElement ,track,wire} from 'lwc';
import getTopAccounts from '@salesforce/apex/CRMDataController.fetchAccounts';
export default class CrmDashboard extends LightningElement {
    @track accounts = [];
    error;

    @wire(getTopAccounts)
    wiredAccounts({ data, error }) {
        if (data) {
            this.accounts = data;
        } else if (error) {
            this.error = error;
            console.error('Error fetching accounts:', error);
        }
    }
}