# wicked-edge-6587

createing backend server: <br>
1.we need to install <b>npm init -y<b> =>it will create package of json file<br>
2.we need to install backend server to locally <b> npm i json-server <b> it will create whole package json file <br>
3.create one db.json file <br>
example : { <br>
    "login" :[ <br>
        "email" :"", <br>
        "pass" : "" <br>
    ] <br>
} <br>
4.in package.json file create one command called as "start" : "json-server --watch ./db.json --port=5555" <br>
5.run backend server -> npm start <br>


