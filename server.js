const express = require('express');
const app = express();
const layout = require('express-ejs-layouts');
const path = require('node:path');

const {connect, getDb} = require('./data/dbConnection');

connect();

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

app.get('/notes/create', (req, res)=>{
    res.render('notes/create');
});

app.get('/notes/:id', async (req, res)=>{
    
    let collection = getDb().collection('notes');
    let note  = await collection.findOne({"_id": new ObjectId(req.params.id)})

    if(!note)
        res.status(404).send('Note not found');
    res.render('notes/view', {note: note});
});

app.get('/notes', async (req, res)=>{

    let collection = getDb().collection('notes');
    const notes = await collection.find().toArray();

    res.render('notes/index', {notes: notes})
});



app.get('/notes/:id/edit', (req, res)=>{


    res.render('notes/edit', {note: note});
});



app.post('/notes/create', async (req, res)=>{
    
    let note = {};
    note.title = req.body.title;
    note.body = req.body.body;
    note.isCompleted = false;

    let collection = getDb().collection('notes');

    await collection.insertOne(note);
    res.redirect('/notes');
});


app.post('/notes/:id/delete', (req, res)=>{
    const index = notes.findIndex(item => item.id == req.params.id);
    notes.splice(index, 1);
    res.redirect('/notes');
});

app.post('/notes/:id/edit', (req, res)=>{
    const note = notes.find(note => note.id == req.params.id);
    const {title, body} = req.body;
    note.title = title;
    note.body = body;
    res.redirect(`/notes/${note.id}`); 
});




app.listen('3000', ()=>{
    console.log('server running on port 3000');
});
