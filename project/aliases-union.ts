// type alias
type Uid = number | string | undefined; // juntamos os tipos  e assim podemos atribuir o tipo

// function logDetails(uid: number | string, item: string) { union (une os tipos com o pipe)
function logDetails(uid: Uid, item: string) {
	console.log(`Este id, ${uid} pertence a ${item}`);
}

function logInfo(uid: Uid, user: string) {
	console.log(`Usuário com ${uid} tem o nome de ${user}`)
}

logDetails(23, 'Bicicleta');
logDetails('12', 'fone de ouvido');

logInfo(23, 'Logan');
logInfo('12', 'Maggie');


// Podemos definir de antemão, quais são os tipos também. Segue o exemplo:
type Platform = 'Mozilla' | 'Chrome' | 'Opera' | 'Edge';

function renderPlatform (platform: Platform) {
	return platform;
}

renderPlatform('Mozilla');
