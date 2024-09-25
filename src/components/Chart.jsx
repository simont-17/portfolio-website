import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import pokeball from '../assets/pokeball.png'
import blueball from '../assets/blueball.png'
import yellowball from '../assets/yellowball.png'

export default function Chart() {
    HighchartsMore(Highcharts);

    const options = {
        chart: {
            type: 'packedbubble',
            height: '100%',
        },
        title: {
            text: ''
            
        },
        legend: {
            enabled:false
        },
        tooltip: {
            useHTML: true,
            pointFormat: '<b>{point.name}</b>'
        },
        series: [{
            name: 'Languages',
            data: [
                {name: 'Javascript', value:100, marker: {symbol: `url(${pokeball})`}},
                {name: 'CSS', value:80, marker: {symbol: `url(${pokeball})`}},
                {name: 'HTML', value:70, marker: {symbol: `url(${pokeball})`}}
                
            ]
        }, {
            name: 'Frontend',
            data: [
                {name:'Python', value:90, marker: {symbol: `url(${blueball})`}},
                {name:'SQL', value:90, marker: {symbol: `url(${blueball})`}},
                {name:'MongoDB', value:90, marker: {symbol: `url(${blueball})`}}
            ]
        }, {
            name: 'Tools',
            data: [
                {name:'Git', value:90, marker: {symbol: `url(${yellowball})`}}
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