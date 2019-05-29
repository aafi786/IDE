const express = require('express');
const { c, cpp, node, python, java } = require('compile-run');
const path = require("path");
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

//cors middleware
app.use(cors());

//bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//View Engine
app.engine("ejs", require("express-ejs-extend"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//static path
app.use(express.static(path.join(__dirname, "public")));


(function () {
    var childProcess = require("child_process");
    var oldSpawn = childProcess.spawn;
    function mySpawn() {
        console.log('spawn called');
        console.log(arguments);
        var result = oldSpawn.apply(this, arguments);
        return result;
    }
    childProcess.spawn = mySpawn;
})();
// let abc = `
// #include <iostream>
// using namespace std;
// int main() {
//     int a,b;
//     a=5;
//     b=9;
//     cout<<a+b;
// }
// `;
// fs.writeFile("./file/cplus.CPP",
//     abc,
//     function (err) {
//         if (err) {
//             return console.log(err);
//         }

//         console.log("The file was saved!");
//     });

app.get('/', (req, res) => {
    res.render('text');
})

app.get('/run', (req, res) => {
    cpp.runFile('./file/cplus.CPP', (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result.stdout);
        }
    });

})

app.post('/getdata', (req, res) => {
    console.log(req.body.msg);
    let dtx = req.body.msg;
    fs.writeFile("./file/cplus.CPP",
        dtx,
        function (err) {
            if (err) {
                return console.log(err);
            }

            console.log("The file was saved!");
        });
    cpp.runFile('./file/cplus.CPP', (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json({ rest: result.stdout }, 200);
            // console.log(result.stdout);
        }
    });

})

app.listen(3000, () => {
    console.log('Server is running on Port 3000');
})