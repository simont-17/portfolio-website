import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';

export default function Chart() {
    HighchartsMore(Highcharts);

    const options = {
        chart: {
            type: 'packedbubble',
            height: '100%',
        },
        tooltip: {
            useHTML: true,
            pointFormat: '<b>{point.name}</b>'
        },
        series: [{
            name: 'Languages',
            data: [
                {name: 'Javascript', value:100},
                {name: 'CSS', value:80},
                {name: 'HTML', value:70}
                
            ]
        }, {
            name: 'Frontend',
            data: [
                {name:'Python', value:90},
                {name:'SQL', value:90},
                {name:'MongoDB', value:90}
            ]
        }, {
            name: 'Tools',
            data: [
                {name:'Git', value:10}
            ]
        }],
    };

    return(
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    )
}