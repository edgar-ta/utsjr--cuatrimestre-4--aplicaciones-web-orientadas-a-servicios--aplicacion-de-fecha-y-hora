function printDateAndTime(request, response, next) {
    const now = new Date(Date.now());
    console.log(`Fecha y hora actuales: `);
    console.log(now.toLocaleString());
    next();
}

function printMessage(request, response, next) {
    console.log("Imprimiendo un mensaje al azar:");
    console.log("Hola xd");
    next();
}

module.exports = {
    printDateAndTime,
    printMessage,
};

