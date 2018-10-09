require('jsdom-global')()

const apiURL = 'http://localhost:3001/api/v1/month-form';
 
global.expect = require('expect')
global.apiURL = apiURL;
window.Date = Date; 
