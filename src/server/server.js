// const express = require('express'); 
// const app = express(); 

// // handling CORS 
// app.use((req, res, next) => { 
// 	res.header("Access-Control-Allow-Origin", 
// 			"http://localhost:63435"); 
// 	res.header("Access-Control-Allow-Headers", 
// 			"Origin, X-Requested-With, Content-Type, Accept"); 
// 	next(); 
// }); 


// // route for handling requests from the Angular client 
// app.get('/api/message', (req, res) => { 
// 	res.json({ message: 
// 			'Hello GEEKS FOR GEEKS Folks from the Express server!' }); 
// }); 

// app.listen(3000, () => { 
// 	console.log('Server listening on port 3000'); 
// });

// app.post('/api/form', (req, res)=>{



// console.log("api hit")
// fileSave(req.body);

// res.json({message:'file created successfully'})

// })
var fs = require('fs');
const path = require('path');

function fileSave(rowData){
    var fs = require('fs');
    const path = require('path');
    const url ="src/app/sim"
    const date = new Date();
    
    const fileName = "form1" +"-" + date.getDate()+"-" + Number(date.getMonth())+1 +"-"+ date.getFullYear()+"-" +date.getHours()+"-" +date.getMinutes()+"-"+date.getSeconds()+".txt" ;
    
    path.join(__dirname,"server/file/sim",fileName, "UTF"), 
    
    rowData= JSON.stringify(rowData,null, 2);
    
    // fs.writeFile('newfile.txt', 'Learn Node FS module', function (err) {
    //     if (err) throw err;
    //     console.log('File is created successfully.');
    //   });
    
    
    
      fs.writeFileSync(path.join(__dirname,"file/sim",fileName), rowData);
}

 async function readFile(url){
    var fs = require('fs');
    const path = require('path');
 const res= await  fs.readFile(url, 'utf-8');
 return res;


}



const express = require('express');
const cors = require('cors'); // Import cors middleware
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Use cors middleware to handle CORS
// app.use(cors());

app.use((req, res, next) => { 
	res.header("Access-Control-Allow-Origin", 
			"http://localhost:4200"); 
	res.header("Access-Control-Allow-Headers", 
			"Origin, X-Requested-With, Content-Type, Accept"); 
	next(); 
}); 

app.use(express.json());

// app.get('/api/message', asynch (req, res) => {

   
//         try {
//           const fileContent = await fs.readFile('./file/sim/form1-30-101-2023-23-36-.txt', 'utf-8');
//           res.send(fileContent);
//         } catch (error) {
//           console.error('Error reading text file:', error);
//           res.status(500).send('Internal Server Error');
//         }
      


//   res.json({ message: 'Hello GEEKS FOR GEEKS Folks from the Express server!' });
// });





  app.get('/api/message',  (req, res) => {
    try {
        const url='./file/sim/form1-30-101-2023-23-36-.txt';
      const fileContent = fs.readFileSync(url, 'utf-8');
      console.log(fileContent)
      res.send(fileContent);
    } catch (error) {
      if (error.code === 'ENOENT') {
        console.error('File not found:', error);
        res.status(404).json({ error: 'File not found' });
      } else {
        console.error('Error reading text file:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  });
  



  async function myReadfile (path) {
    try {
      const file = await fs.readFile(path, 'utf-8');
    }
    catch (err) { console.error( err ) }
  };






app.post('/api/form', (req, res) => {
  const formData = req.body;
  console.log("data",formData);
  console.log(typeof req.body)
  fileSave(formData);
  res.json({ message: 'File created successfully' });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
