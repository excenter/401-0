var fs = require('fs');
// Read the contents of the file into memory.
fs.readFile('data', 'utf8', function (err, fileOut) {
    if (err) throw err;

    console.log(fileOut);

    var splitFile = fileOut.split('\n');
    console.log(splitFile);

    var lines = parseInt(splitFile[0]);
    console.log(typeof lines);

    var l1 = splitFile[1].split(" ").map(x => parseInt(x));
    console.log(l1);
    console.log(parseLine(l1));



});

var parseLine = (line) =>{
    // check to see if rule 2 is followed, not needed
    if(line.length-1 != line[0]){
        return 'ERROR YO';
    }
    return line[line[line.length-1]]+line[line[line.length-2]];
};
