const path = require('path');

function getMessages(req,res) {
    res.render('messages',{
        title:'Messages, man',
        friend: 'Zé da Moita'
    });
    // res.sendFile(path.join(__dirname,'..','public','images', 'skimountain.jpeg'));
};


function postMessage(req,res){
    console.log('updating messages');
};

module.exports = {
    getMessages,
    postMessage
};