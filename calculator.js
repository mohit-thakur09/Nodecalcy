const express = require("express");
const app = express();
const path = require("path");
app.use(express.urlencoded({ extended: false }));

app.get("/", (request, responce) => {
    const landing_page = path.join(__dirname, "public/index.html");
    responce.sendFile(landing_page);
})

app.post("/", (request, responce) => {
    const fno = Number(request.body.fno);
    const sno = Number(request.body.sno);
    responce.send(`<p>The Sum of ${fno} and  ${sno}</p> <p> The Sum is :<b> ${fno + sno} </b> </p> `);


})

app.get("/conversion", (request, responce) => {
    const landing_page = path.join(__dirname, "public/conversion.html");
    responce.sendFile(landing_page);
})

app.post("/convert", (request, responce) => {
    const amount = Number(request.body.rupees);
    const type = request.body.type;
    console.log(request.body);
    let ans = 0;
    switch (type) {
        case "d":
            ans = `${amount * 82.6}$ Doller`;
            break;
        case "e":
            ans = `${amount * 89.6}&euro; Euro`;
            break;
        case "p":
            ans = `${amount * 89.6}&pound; Pound`;
            break;
    }
    responce.send(`${amount}&#8377 Rupees = ${ans}`);
})

const server = app.listen(8000, () => {
    console.log(`Server started at http://localhost:${server.address().port}`);
})