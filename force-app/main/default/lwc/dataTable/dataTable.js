import { LightningElement,api } from 'lwc';
const COLUMNS = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Industry', fieldName: 'Industry' },
    { label: 'Revenue', fieldName: 'AnnualRevenue', type: 'currency' }
];
export default class DataTable extends LightningElement {
    @api accounts = [];
    columns = COLUMNS;
}