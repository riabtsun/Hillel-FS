import * as $ from 'jquery';
import Post from './post';
import json from '@assets/data.json';
import '@css/style.css';
import logo from '@assets/icon-square-big.png';
import xml from '@assets/data.xml';
import csv from '@assets/data.csv';

console.log(logo);

const post = new Post('Webpack Post Title', logo);

$('pre').html(post.toString());

console.log('Post to string:', post.toString());

console.log('JSON: ', json);
console.log('XML: ', xml);
console.log('CSV: ', csv);
