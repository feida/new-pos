/**
 * @author wxh on 2019/5/22
 * @copyright
 * @desc
 */
var readline = require('readline');
var fs = require('fs');

var fRead = fs.createReadStream('./main.sql');

var objReadline = readline.createInterface({input: fRead});

var index = 1;
objReadline.on('line', (line)=>{

    console.log(index, line);
    index ++;

});

objReadline.on('close', ()=>{
    console.log('readline close...');
});