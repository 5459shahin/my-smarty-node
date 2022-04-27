const express = require('express');
const  cors = require('cors');
const { Rectangle } = require('@react-google-maps/api');
/* const { response } = require('express'); */
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello from my personal  Over own Smarty pant!! with auto restart')
});

const users = [
    {id: 1, name: 'Saban', email: 'sabana@gmail.com', phone: '019789888'},
    {id: 2, name: 'Shabnoor', email: 'shabnoor@gmail.com', phone: '019789888'},
    {id: 3, name: 'Suchorita', email: 'suchorit@gmail.com', phone: '019789888'},
    {id: 4, name: 'suchunda', email: 'suchunda@hmail.com', phone: '019789888'},
    {id: 5, name: 'Srabonti', email: 'srabonti@gmail.com', phone: '019789888'},
    {id: 6, name: 'Sabila', email: 'sabila@gmail.com', phone: '019789888'},
    {id: 7, name: 'Sohana', email: 'sohana@gmail.com', phone: '019789888'}
]

app.get('/users', (req, res) => {
    // filter by search query parameters
    if(req.query.name){
     const search = req.query.name.toLocaleLowerCase();
     const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search))
     res.send(matched);
    }
    else{
        Rectangle.send(users);
    }
   
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user) 
});

app.post('/user', (req, res) =>{
    
   const user = req.body;
   console.log('request', req.body);
   user.id = users.length + 1;
   users.push(user);
   
   res.send(user);

})

app.get('/fruits',(req, res) =>{
    res.send(['mango', 'apple', 'oranges']);
});

app.get('/fruits/mango/fazle',(req, res) =>{
    res.send('sour sound fazle flavor')
})

app.listen(port, () => {
    console.log('Listening to port', port)
})