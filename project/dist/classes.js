"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    UserAccount.prototype.lodDetails = function () {
        console.log("Novo jogador(a): " + this.name);
    };
    Object.defineProperty(UserAccount.prototype, "getAge", {
        get: function () {
            return this.age;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserAccount.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: true,
        configurable: true
    });
    return UserAccount;
}());
var CharAccount = /** @class */ (function (_super) {
    __extends(CharAccount, _super);
    function CharAccount(name, age, nickname, level) {
        var _this = _super.call(this, name, age) || this;
        _this.nickname = nickname;
        _this.level = level;
        return _this;
    }
    CharAccount.prototype.logNicknameDetails = function () {
        console.log("The player " + raul.name + " has the char " + raul.nickname + " at level " + raul.name);
    };
    Object.defineProperty(CharAccount.prototype, "getLevel", {
        // assessors
        // get -> funciona como propriedade mas ele é mas parecido com uma função que pode executar coisas ali dentro
        get: function () {
            console.log('------Get------');
            return this.level;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CharAccount.prototype, "getNickname", {
        get: function () {
            return this.nickname;
        },
        enumerable: true,
        configurable: true
    });
    return CharAccount;
}(UserAccount));
var ContactTest = /** @class */ (function () {
    function ContactTest(phone, socialmedia) {
        this.phone = phone;
        this.socialmedia = socialmedia;
    }
    return ContactTest;
}()); // classe abstrata => Eu não posso criar objetos a partir dela, mas nós podemos extender essa classe. Muito útil quando queremos ter um modelo de classe mas não queremos que nada seja criado a partir dela
var Contact = /** @class */ (function (_super) {
    __extends(Contact, _super);
    function Contact(phone, socialmedia) {
        return _super.call(this, phone, socialmedia) || this;
    }
    return Contact;
}(ContactTest));
var laura = new UserAccount('Laura', 27);
console.log(laura);
console.log(laura.name + " tem " + laura.getAge + " anos de idade!");
laura.lodDetails();
var raul = new CharAccount('Raul', 32, 'mister ru', 12);
// console.log(`The player ${raul.name} has the char ${raul.nickname} at level ${raul.name}`); // como o nickname está private, ele só pode ser acessado dentro da classe
console.log(raul);
console.log(raul.level);
// raul.level = 88; // dá erro
raul.lodDetails();
raul.logNicknameDetails();
raul.setName = 'ruiva';
console.log(raul);
var well = new Contact('98758-8455', '@carlotta.front');
