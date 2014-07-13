/*
 * JSON Validate
 * Copyright (c) 2014, Joe McIntyre
 * MIT license
 * github.com/usingjsonschema/jsonvalidate/LICENSE.txt
 */

// Entry point, set up elements, populate example list
$(function () {
    // set intercepter for parser errors in jsonlint
    jsonlint.parseError = jsonlint.lexer.parseError = parserError;
        
    $('button').button ();
    $('#helpTabs').tabs ();

    // set initial states and store in document variable
    $(document).data ('currentTab', 0);

    setTextSync ($('#schemaDataText'), $('#schemaDataShell'), $('#schemaDataLines'));
    setTextSync ($('#contentDataText'), $('#contentDataShell'), $('#contentDataLines'));
    for (var ctr = 0; ctr < 8; ctr ++) {
        var element = '#ref' + (ctr + 1);
        setTextSync ($(element + 'Text'), $(element + 'Shell'), $(element + 'Lines'));
    }
    
    // initialize examples and display elements
    loadDefaultExamples ();
    resetAll ();
});

// error for parser exceptions
function ParseError (text, info) {
    this.text = text;
    this.info = info;
}

// store parser error info
function parserError (text, info) {
    throw new ParseError (text, info);
}

// Load default examples, populating items list (import window)
function loadDefaultExamples () {
    // get examples
    loadExamples (null);
    var names = getItemNames ();
    
    // create list and populate select element
    var options = [];
    $.each (names, function (index, name) {
        options.push ('<option value="' + index + '">' + name + '</option>');
    });
    $('#items').html (options.join (''));

    if ($('#items')[0].selectedIndex === -1) {
        $('#items')[0].selectedIndex = 0;
    }
}

// clear all text areas
function resetAll () {
    // reset to initial content
    var initialSchema =
        '{\n' +
        '  "$schema":"http://json-schema.org/draft-04/schema#",\n' +
        '  "title":"",\n' +
        '  "description":"",\n\n' +
        '}';
    $('#schemaDataText').val (initialSchema);
    $('#contentDataText').val ('');
    for (var ctr = 0; ctr < 8; ctr ++) {
        $('#ref' + (ctr + 1) + 'Text').val ('');
    }
    $('#results').val ('');
    initializeView ();
}

//populate the text areas with the example data content
function load () {
    var index = $('#items')[0].selectedIndex;
    if (index !== undefined) {
        var item = getItem (index);
        $('#schemaDataText').val (item.schema);
        $('#contentDataText').val (item.data);
        for (var ctr = 0; ctr < 8; ctr ++) {
            $('#ref' + (ctr + 1) + 'Text').val (item.ref[ctr]);
        }
    }
    $('#results').val ('');
    initializeView ();
}

// set view to initial state
function initializeView () {
    // reset state for schema, content and refs (8)
    $('#schemaDataText').data ('state', 0);
    $('#schemaDataText').data ('errorLine', 0);
    textSync ($('#schemaDataText'), $('#schemaDataShell'), $('#schemaDataLines'));
    $('#contentDataText').data ('state', 0);
    $('#contentDataText').data ('errorLine', 0);
    textSync ($('#contentDataText'), $('#contentDataShell'), $('#contentDataLines'));

    for (var ctr = 0; ctr < 8; ctr ++) {
        var element = '#ref' + (ctr + 1);
        $(element + 'Text').data ('state', 0);
        $(element + 'Text').data ('errorLine', 0);
        textSync ($(element + 'Text'), $(element + 'Shell'), $(element + 'Lines'));
    }
    // change ref page to first page 
    showRefPage (0);
    // set initial focus to schema
    $('#schemaDataText').focus ();
}

// Show ref page (initial or when tab selected)
function showRefPage (page) {
    $(document).data ('currentTab', page);
    updateState ();
}

// update adornments based on validation states
function updateState ()
{
    var element = "";
    
    // add border color based on unused / valid / invalid state
    var stateColors = ['lightgray', 'red', 'lightgreen'];
    var page = $(document).data ('currentTab');
    var ctr;

    $('#schemaDataText').css ('border', '1px solid ' + stateColors[$('schemaDataText').data ('state')]);
    $('#contentDataText').css ('border', '1px solid ' + stateColors[$('contextDataText').data ('state')]);
    for (ctr = 0; ctr < 8; ctr ++) {
        element = $('#ref' + (ctr + 1) + 'Text');
        element.css ('border', '1px solid ' + stateColors[element.data ('state')]);
    }

    // highlight current tab
    var borderColor = '';
    for (ctr = 0; ctr < 8; ctr ++) {
        var pageElement = $('#refPage-' + (ctr + 1));
        element = $('#ref' + (ctr + 1) + 'Text');
        if (ctr === page) {
            borderColor = ['black', 'red', 'green'][element.data ('state')];
            $('#refTabs-' + (ctr + 1)).css ({
                fontWeight: 'bold',
                backgroundColor: '#f7f9fc',
                border: '2px solid ' + borderColor,
                borderBottom: '1px solid #f7f9fc'
            });
            pageElement.css ('display', 'block');
            element.focus ();
        } else {
            borderColor = ['gray', 'red', 'green'][element.data ('state')];
            $('#refTabs-' + (ctr + 1)).css ({
                fontWeight: 'normal',
                backgroundColor: '#f7f9fc',
                border: '1px solid ' + borderColor,
                borderBottom: '1px solid lightgray',
            });
            pageElement.css ('display', 'none');
        }
    }
}

// perform validation, gathering data from entry fields, running the schema 
// validation, and populating the result text area. 
function validate () {
    var ctr = 0;
    var schema = null;
    var content = null;
    var refs = [null, null, null, null, null, null, null, null];
    var results = [];
    var element = "";

    var output = "";
    var regex = new RegExp ("\n", "g");
    var schemaText = $('#schemaDataText').val ();
    if (schemaText.length === 0) {
        results.push ("JSON Schema: Missing content\n\n");
        $('#schemaDataText').data ('state', 1);
        $('#schemaDataText').data ('errorLine', 1);
    } else {
        try {
            schema = jsonlint.parse (schemaText);
            $('#schemaDataText').data ('state', 2);
            $('#schemaDataText').data ('errorLine', 0);
        } catch (e) {
            output = "JSON Schema: Invalid JSON ";
            if (e instanceof ParseError) {
                output += "at line " + e.info.loc.first_line;
                output += ", column " + e.info.loc.last_column;
                output += "\n  " + e.text.replace (regex, "\n  ") + "\n\n";
                $('#schemaDataText').data ('errorLine', e.info.loc.first_line);
            }
            else {
                output += ":" + e.replace (regex, "\n  ") + "\n\n";
                $('#schemaDataText').data ('errorLine', 1);
            }
            results.push (output);
            $('#schemaDataText').data ('state', 1);
        }
    }

    var contentText = $('#contentDataText').val ();
    if (contentText.length === 0) {
        results.push ("JSON Content: Missing content\n\n");
        $('#contentDataText').data ('state', 1);
        $('#contentDataText').data ('errorLine', 1);
    } else {
        try {
            content = jsonlint.parse (contentText);
            $('#contentDataText').data ('state', 2);
            $('#contentDataText').data ('errorLine', 0);
        } catch (e) {
            output = "JSON Content: Invalid JSON ";
            if (e instanceof ParseError) {
                output += "at line " + e.info.loc.first_line;
                output += ", column " + e.info.loc.last_column;
                output += "\n  " + e.text.replace (regex, "\n  ") + "\n\n";
                $('#contentDataText').data ('errorLine', e.info.loc.first_line);
            }
            else {
                output += ":" + e.replace (regex, "\n  ") + "\n\n";
                $('#contentDataText').data ('errorLine', 1);
            }
            results.push (output);
            $('#contentDataText').data ('state', 2);
        }
    }

    for (ctr = 0; ctr < 8; ctr ++) {
        element = $('#ref' + (ctr + 1) + 'Text');
        var refText = element.val ();
        if (refText.length === 0) {
            element.data ('state', 0);
            element.data ('errorLine', 0);
        } else {
            try {
                refs[ctr] = jsonlint.parse (refText);
                element.data ('state', 2);
                element.data ('errorLine', 0);
            } catch (e) {
                output = "JSON Schema References (" + (ctr + 1) + "): Invalid JSON ";
                if (e instanceof ParseError) {
                    output += "at line " + e.info.loc.first_line;
                    output += ", column " + e.info.loc.last_column;
                    output += "\n  " + e.text.replace (regex, "\n  ") + "\n\n";
                    element.data ('errorLine', e.info.loc.first_line);
                }
                else {
                    output += ":" + e.replace (regex, "\n  ") + "\n\n";
                    element.data ('errorLine', 1);
                }
                results.push (output);
                element.data ('state', 1);
            }
        }
    }

    if (results.length === 0) {
        tv4.dropSchemas ();
        for (ctr = 0; ctr < 8; ctr ++) {
            if (refs[ctr] !== null) {
                tv4.addSchema (refs[ctr]);
            }
        }

        tv4.validate (content, schema, validationResult);
    }
    else {
        $('#results').val (results.join (""));
        syncContent ();
    }
}

// receive validation results and update page
function validationResult (result, error) {
    if (result === true) {
        $('#results').val ("Valid");
    } else {
        var message = "Invalid: " + error.message;
        message += "\nJSON Schema element: " + error.schemaPath;
        message += "\nJSON Content path: " + error.dataPath;
        $('#results').val (message);
        $('#contentDataText').data ('state', 1);
        $('#contentDataText').data ('errorLine', 0);
    }
    syncContent ();
}

// sync lines/content and update page display
function syncContent () {
    textSync ($('#contentDataText'), $('#contentDataShell'), $('#contentDataLines'));
    textSync ($('#schemaDataText'), $('#schemaDataShell'), $('#schemaDataLines'));
    for (var ctr = 0; ctr < 8; ctr ++) {
        var element = '#ref' + (ctr + 1);
        textSync ($(element + 'Text'), $(element + 'Shell'), $(element + 'Lines'));
    }

    updateState ();
    $('#contentDataText').focus ();
}

// set up event monitor for syncing textarea / linearea
function setTextSync (textarea, lineshell, linearea) {
    // sync line number and text area scrolling
    textarea.scroll (function () {
        lineshell.scrollTop (textarea.scrollTop ());
    });

    // on newline, resync line numbers
    textarea.keyup (function (event) {
        if (event.which === 13) {
            textSync (textarea, lineshell, linearea);
        }
    });

    // on paste, resync line numbers
    textarea.bind ({ paste: function (event) {
        textSync (textarea, lineshell, linearea);
    }});
}

// sync linearea with textarea
function textSync (textarea, lineshell, linearea) {
    var text = textarea.val ();
    var lines = 1;
    var ctr = 0;
    for (ctr = 0; ctr < text.length; ctr ++) {
        if (text[ctr] === '\n') {
            lines ++;
        }
    }

    if (lines < 25) {
        lines = 25;
    }

    var errorLine = textarea.data ('errorLine');
    var output = [];
    for (ctr = 1; ctr <= lines; ctr ++) {
        if (ctr === errorLine) {
            output.push ("<span style='color:white; background-color:red;'><b>" + ctr + "</b></span>");
        } else {
            output.push (ctr);
        }
    }
    
    var html = output.join ("<br/>");
    linearea.html (html);
    lineshell.scrollTop (textarea.scrollTop ());
}

// Show import window
function showImportWindow () {
    $("#import").dialog ( { width:560, height:150,
        position: { my:"right top", at:"right bottom+10", of:$("#navImport") },
        open: function () { $(this).scrollTop (0); }
    });
    $('#items').focus ();
}

// Show about window
function showAboutWindow () {
    $("#about").dialog ( { width:600, height:350,
        open: function () { $(this).scrollTop (0); }
    });
}
// Show help window
function showHelpWindow () {
    $("#help").dialog ( { width:780, height:550,
        open: function () { $(this).scrollTop (0); }
    });
}

// Close window
function closeWindow (id) {
    $(id).dialog ('close');
}
