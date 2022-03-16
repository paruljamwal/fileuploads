
const app = require("./index");

const connect = require("./config/db");

app.listen(5111, async () => {

    try {
        await connect()

        console.log("Listining port 5111");

    }

    catch (err) {

        console.error(err.message);

    }

});

