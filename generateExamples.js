/*
 * Generate the examples.js file, using Node.js.
 * 
 * Usage: node generateExamples path
 *   path   path to the base examples directory
 */

var fs = require ("fs");

// Usage message if incorrect command invocation
if (process.argv.length !== 3) {
    console.log ("Usage: node generateExamples path");
    console.log ("  path   path to the base examples directory")
    process.exit (1);
}

// get path from command line argument
var path = process.argv[2];

// verify path is valid
if (fs.existsSync (path)) {
    var stats = fs.statSync (path);
    if (stats.isDirectory () === false) {
        console.log ("Path is not a directory");
        process.exit (1);
    }

    if (fs.existsSync (path + "/chapter2") === false) {
        console.log ("Path does not include example contents");
        process.exit (1);
    }
} else {
    console.log ("Path does not exist");
    process.exit (1);
}

// load template and break into fragments on ## delimiter
var template = fs.readFileSync ("examplesTemplate.json", {"encoding":"utf8"});
var fragments = template.split ("##");
var output = fragments[0];
var errors = 0;

// for each fragment, insert content from target file
for (var ctr = 1; ctr < fragments.length; ctr ++) {
    var index = fragments[ctr].indexOf ("\"");
    var file = fragments[ctr].substr (0, index);
    try {
        var text = fs.readFileSync (path + "/" + file, {"encoding":"utf8"});
        text = text.replace (/\n/g, "\\n");
        text = text.replace (/\"/g, "\\\"");
        output += text;
    } catch (e) {
        errors ++;
        output += "ERROR: " + file;
    }
    output += fragments[ctr].substring (index);
}

// write generated content to output file
fs.writeFileSync ("js/examples.js", output);

if (errors === 0) {
    console.log ("Completed with no errors");
} else {
    console.log (errors + " in processing, see js/examples.js for ERROR notices");
}
