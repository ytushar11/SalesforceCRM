import { LightningElement,api } from 'lwc';
import chartjs from '@salesforce/resourceUrl/chartjs';
import { loadScript } from 'lightning/platformResourceLoader';

export default class Graphs extends LightningElement {
    chart;
    @api chartData = [];

    renderedCallback() {
        if (this.chart) return;

        loadScript(this, chartjs).then(() => {
            const ctx = this.template.querySelector('canvas').getContext('2d');
            this.chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: this.chartData.map(a => a.Name),
                    datasets: [{
                        label: 'Revenue',
                        data: this.chartData.map(a => a.AnnualRevenue),
                        backgroundColor: '#0070d2'
                    }]
                }
            });
        });
    }
}
