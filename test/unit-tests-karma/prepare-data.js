// @ts-check
const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const testDir = '';

// Set up generated test data
fs.mkdirSync(path.join(testDir, 'test-data'), { recursive: true });

// Set up a series list for each product
const productModules = [
    'map',
    'stock',
    'gantt',
    'highcharts'
];

productModules.forEach(product => {
    const modulePath = product === 'highcharts' ? `../../code/es-modules/masters/${product}.src.js` :
        `../../code/es-modules/masters/modules/${product}.src.js`;

    if (fs.existsSync(modulePath)) {
        const series = fs.readFileSync(modulePath, 'utf-8')
            .match(/(?<=\/Series\/).*(?=Series\.js)/g)
            .map(s => s.toLowerCase());

        fs.writeFileSync(`./test-data/${product}-series.ts`, `export default ${JSON.stringify(series)}`);
    }
});

// Indicators
const indicatorPath = '../../code/es-modules/masters/indicators/indicators-all.src.js';
if (fs.existsSync(indicatorPath)) {
    const indicators = fs.readFileSync(indicatorPath, 'utf-8')
        .match(/(?<=\/Indicators\/).*(?=\.js)/g)
        .map(indicator => indicator.toLowerCase());

    fs.writeFileSync('./test-data/indicators.ts', `export default ${JSON.stringify(indicators)}`);
}

// Compile the typescript tests
try {
    execSync('npx tsc');
} catch (error) {
    console.error('Typescript error');
}
