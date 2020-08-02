const chalk = require('chalk')
const Notes=require('./notes.js');
const yargs = require('yargs');
const { describe, demandOption, string } = require('yargs');


yargs.version('1.1.0')


// adding add command
yargs.command({
    command:'add',
    describe : 'Add a new note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Title Body',
            demandOption:true,
            type:'string'
        }
    },
    handler : function(argv){
       Notes.addNotes(argv.title,argv.body)
    }
})

//Create remove command
yargs.command({
    command:'remove',
    describe:'Remove a new note',
    builder:{
        title:{
        describe:'Remove node title',
        demandOption:true,
        type:'string'
        }
    },
    handler : function(argv){
        Notes.removeNotes(argv.title)
    }
})

yargs.command({
    command: 'list'  ,
    describe: 'List of all notes' ,
    handler: function(){
        Notes.listNotes();
    }
})
yargs.command({
    command: 'read',
    describe: 'To read the note',
    builder:{
        title:{
            describe:"Read the notes",
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        Notes.readNote(argv.title);
    }
})
yargs.parse()
// console.log(yargs.argv);

//add,remove ,list,read

