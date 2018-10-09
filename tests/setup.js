require('jsdom-global')()
const moxios = require('moxios');

const apiURL = 'http://localhost:3001/api/v1/month-form';
 
global.expect = require('expect')
global.apiURL = apiURL;
global.moxios = moxios;
window.Date = Date; 
