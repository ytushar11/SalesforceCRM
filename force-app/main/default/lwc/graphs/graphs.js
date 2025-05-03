import { LightningElement, api } from 'lwc';

export default class Graphs extends LightningElement {
    @api chartData = [];

    get chartBars() {
        // Normalize values to a percentage scale for display
        const max = Math.max(...this.chartData.map(a => a.AnnualRevenue), 1);
        return this.chartData.map(item => {
            return {
                name: item.Name,
                value: item.AnnualRevenue,
                height: (item.AnnualRevenue / max) * 100
            };
        });
    }
}
