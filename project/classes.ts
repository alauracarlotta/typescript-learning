class UserAccount { // modelo
	public name: string; // com a public, você tanto pode alterá-la quanto lê-la fora da classe
	protected age: number; // com a protected, eu consigo chamá-la/usá-la só dentro da classe pai e das classes extendidas, diferente do private que só podemos usá-la na classe pai.

	constructor (name: string, age: number) { // metodo
		this.name = name;
		this.age = age;
	}

	lodDetails(): void { // metodo console, retorna vazio
		console.log(`Novo jogador(a): ${this.name}`);
	}

	get getAge() {
		return this.age;
	}

	set setName(name: string) {
		this.name = name;
	}
}

class CharAccount extends UserAccount {
	private nickname: string; // com o private, esse valor não poderá ser alterado no futuro.
	readonly level: number; // só pode ser lido, mesmo se ele estiver setado dentro da classe

	constructor (name: string, age: number, nickname: string , level: number) { // precisa ter os parametros da classe que estamos extendendo
		super(name, age); // usamos o super e colocamos dentro os parametros da classe que extendemos

		this.nickname = nickname;
		this.level = level
	}

	logNicknameDetails(): void {
		console.log(`The player ${raul.name} has the char ${raul.nickname} at level ${raul.name}`);
	}

	// assessors

	// get -> funciona como propriedade mas ele é mas parecido com uma função que pode executar coisas ali dentro
	get getLevel() {
		console.log('------Get------');
		return this.level;
	}

	get getNickname() {
		return this.nickname;
	}

}

abstract class ContactTest {
	public phone: string;
	public socialmedia: string;

	constructor (phone: string, socialmedia: string) {
		this.phone = phone;
		this.socialmedia = socialmedia;
	}

} // classe abstrata => Eu não posso criar objetos a partir dela, mas nós podemos extender essa classe. Muito útil quando queremos ter um modelo de classe mas não queremos que nada seja criado a partir dela

class Contact extends ContactTest {
	constructor (phone: string, socialmedia: string) {
		super(phone, socialmedia)
	}
}

const laura = new UserAccount('Laura', 27);
console.log(laura);

console.log(`${laura.name} tem ${laura.getAge} anos de idade!`);
laura.lodDetails();

const raul = new CharAccount('Raul', 32, 'mister ru', 12);
// console.log(`The player ${raul.name} has the char ${raul.nickname} at level ${raul.name}`); // como o nickname está private, ele só pode ser acessado dentro da classe

console.log(raul);
console.log(raul.level);
// raul.level = 88; // dá erro
raul.lodDetails();
raul.logNicknameDetails();
raul.setName = 'ruiva';
console.log(raul);

const well = new Contact('98758-8455', '@carlotta.front');
