import { beforeAll, testTemplate } from './test-utils.js';

import seriesToTest from '../../test-data/map-series.js';
import Highcharts from '/base/code/es-modules/masters/highmaps.src.js';

beforeAll();

seriesToTest.forEach(series => {
    QUnit.test(series, function (assert) {
        testTemplate(Highcharts, 'mapChart', series)
        assert.ok(true)
    })
})