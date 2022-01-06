// jogo online
// accountInfo => infos do usuário(nome real, email, id)
// chairInfo => infos do personagem dele
// playerInfo => o conj das duas infos

type AccountInfo = {
	id: number,
	name: string,															//   union (simbolo do pipe)
	email?: string // ? => seria a mesma coisa que eu escrevesse =>  email: string | undefined . A interrogação deixa como opcional o item.
}

const accountLaura: AccountInfo = {
	id: 1,
	name: 'Laura'
}

console.log('accountLaura', accountLaura);

type ChairInfo = {
	nickname: string,
	level: number
}

const chairLaura: ChairInfo = {
	nickname: 'srta Carlotta',
	level: 100
}

console.log('chairLaura', chairLaura);


// Intersection (simbolo do & ê comercial) - Interseção dos dois tipos:

type PlayerInfo = AccountInfo & ChairInfo;

const playerLaura: PlayerInfo = {
	id: 12,
	name: 'Laura',
	nickname: 'srta poney',
	level: 5
}

console.log('playerLaura', playerLaura);
