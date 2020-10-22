import { beforeAll, testTemplate } from './test-utils.js';

import indicatorList from '../../test-data/indicators.js';
import Highcharts from '/base/code/es-modules/masters/highstock.src.js';
import '/base/code/es-modules/masters/indicators/atr.src.js';
import '/base/code/es-modules/masters/indicators/ema.src.js';
import '/base/code/es-modules/masters/indicators/keltner-channels.src.js';

beforeAll();

//indicatorList.forEach(series => {
    QUnit.test('series', function (assert) {
        Highcharts.stockChart('container', {
            series: [{
                type: 'ohlc',
                id: 'aapl',
                data: []
            }, {
                type: 'keltnerchannels',
                linkedTo: 'aapl'
            }
            ]
        })
        assert.ok(true)
    })
//})