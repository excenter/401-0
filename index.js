var readlineSync = require('readline-sync');
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

var linez = parseInt(readlineSync.question(''));
for (var i = 0; i < linez; i++) {
    console.log(parseLine(formatLine(readlineSync.question(''))));
}
