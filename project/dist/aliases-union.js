"use strict";
// function logDetails(uid: number | string, item: string) { union (une os tipos com o pipe)
function logDetails(uid, item) {
    console.log("Este id, " + uid + " pertence a " + item);
}
function logInfo(uid, user) {
    console.log("Usu\u00E1rio com " + uid + " tem o nome de " + user);
}
logDetails(23, 'Bicicleta');
logDetails('12', 'fone de ouvido');
logInfo(23, 'Logan');
logInfo('12', 'Maggie');
function renderPlatform(platform) {
    return platform;
}
renderPlatform('Mozilla');
