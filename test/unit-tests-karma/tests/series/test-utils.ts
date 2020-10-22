const CONTAINER_ID = 'container';

export function beforeAll () {
    const div = document.createElement('div');
    div.id = CONTAINER_ID;
    document.body.appendChild(div);
}

export function beforeEach () {
    // Reset the div
    const div = document.getElementById(CONTAINER_ID);
    if(div) div.innerHTML = '';
}

export function testTemplate(
    hc: any,
    constructor: ('mapChart' | 'ganttChart' | 'stockChart' | 'chart'),
    seriesType: string
) {
    beforeEach();

    hc[constructor](CONTAINER_ID, {
        series: [{
            type: seriesType
        }]
    })
}
