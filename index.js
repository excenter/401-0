// var fs = require('fs');
//
// // Read the contents of the file into memory.
// fs.readFile('data', 'utf8', function (err, fileOut) {
//     if (err) throw err;
//
//     console.log(fileOut);
//
//     var splitFile = fileOut.split('\n');
//     console.log(splitFile);
//
//     var lines = parseInt(splitFile[0]);
//     console.log(typeof lines);
//
//     var l1 = splitFile[1].split(" ").map(x => parseInt(x));
//     console.log(l1);
//     console.log(parseLine(l1));
//
//
//
// });


// high level input;
var prompt = require('prompt');

prompt.start();

prompt.get(['X'], function(err, result){
    var lines = parseInt(result.X);
    console.log(lines + typeof lines);

    for (var i = 0; i < lines; i++) {
        prompt.get(['Y'], function(err, result){
            console.log(parseLine(formatLine(result.Y)));
        })
    }


})

var formatLine = (string) =>{
    return string.split(" ").map(x => parseInt(x));
};

var parseLine = (line) =>{
    // check to see if rule 2 is followed, not needed
    if(line.length-1 != line[0]){
        return 'ERROR YO';
    }
    return line[line[line.length-1]]+line[line[line.length-2]];
};
