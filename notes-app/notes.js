const fs= require('fs')
const chalk=require('chalk')
const getNotes=function(){
    return('Your notes')
}
const addNotes=function(title,body){
    const notes=loadNotes()
    // const duplicates=notes.filter(function(note){
    //     return note.title===title
    // })
    const duplicate=notes.find(function(note){
        return note.title===title
    })
    if(!duplicate){
        notes.push({
            title:title,
            body:body
        })
       saveNotes(notes)
       console.log('Note added successfully');
    }else{
        console.log('Try with different title already taken');
    }
   
}
const saveNotes=function(notes){
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes=function(){
    try{
        const databuffer=fs.readFileSync('notes.json')
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return [];
    }
    
}

//to remove the notes
const removeNotes=function(title){
    const notes=loadNotes()
    //store in notesTokeep when its not a match if its match we need to remove it
    const notesToKeep=notes.filter(function(note){
        return note.title!=title
    })
    if(notesToKeep.length===notes.length){
        console.log(chalk.inverse.red('No note found'));
    }
    else{
        saveNotes(notesToKeep);
        console.log(chalk.inverse.green('Removed Successfully'));
    }
    
    
}
const listNotes= function(){
    const notes=loadNotes();
    console.log(chalk.inverse("Your notes: "));
    notes.forEach(note => {
        console.log(note.title);
    });
   
}
const readNote= function(title){
    const notes=loadNotes();
    const ReadData=notes.find(function(note){
         return note.title===title
    })
    if(ReadData){
        console.log(chalk.inverse(ReadData.title));
        console.log(ReadData.body);
    }
    else{
        console.log(chalk.red.inverse("No Note exist"));
    }
    
}

module.exports={
    getNotes:getNotes,
    addNotes:addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNote:readNote
}