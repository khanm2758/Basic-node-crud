const express = require('express');
const app = express();
const layout = require('express-ejs-layouts');
const path = require('node:path');

const {connect, getDb} = require('./data/dbConnection');

connect()
.then(()=>{
    app.listen('3000', ()=>{
    console.log('server running on port 3000');
});
})
.catch(()=>{
    console.log('Server running in error')
})

const notes = require('./data/data');
const { ObjectId } = require('mongodb');


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); 
app.set('view engine', 'ejs');
app.use(layout);
//app.set('views', './views')

app.get('/', (req, res)=>{
    res.render('index');
});


app.get('/login', function(req, res){

    res.render('user/login')
})

app.get('/notes/create', (req, res)=>{
    res.render('notes/create');
});

app.get('/notes/:id', async (req, res)=>{
    
    let collection = getDb().collection('todoItems');
    let note  = await collection.findOne({"_id": new ObjectId(req.params.id)})

    if(!note)
        res.status(404).send('Note not found');
    res.render('notes/view', {note: note});
});

app.get('/notes', async (req, res)=>{

    let collection = getDb().collection('todoItems');
    const notes = await collection.find().toArray();

    res.render('notes/index', {notes: notes})
});



app.get('/notes/:id/edit', async(req, res)=>{
    
    const collection = getDb().collection('todoItems');
    var note = await collection.findOne({"_id": new ObjectId(req.params.id)});

    res.render('notes/edit', {note: note});
});

// set the login route and redirect in the main interface of app
app.post('/users/login', function(req, res){

        res.redirect('/notes')
})


app.post('/notes/create', async (req, res)=>{
    
    let note = {};
    note.title = req.body.title;
    note.body = req.body.body;
    note.isCompleted = false;

    let collection = getDb().collection('todoItems');

    await collection.insertOne(note);
    res.redirect('/notes');
});


app.post('/notes/:id/delete', async (req, res)=>{
    const collection = getDb().collection('todoItems');
    var noteToDelete = await collection.findOne({"_id": new ObjectId(req.params.id)});
    const deletedNote = await collection.deleteOne(noteToDelete);
    console.log(deletedNote);
    res.redirect('/notes');
});

app.post('/notes/:id/edit', async (req, res)=>{
    const collection = getDb().collection('todoItems');
    var note = await collection.findOne({"_id": new ObjectId(req.params.id)});
    note.title = req.body.title? req.body.title: note.title;
    note.body = req.body.body? req.body.body: note.body;
    note.isCompleted = req.body.isCompleted? req.body.isCompleted : note.isCompleted;
    await collection.replaceOne({_id: note._id}, note);
    res.redirect(`/notes/${note._id}`);
});





