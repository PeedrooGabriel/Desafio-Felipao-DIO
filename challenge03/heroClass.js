class Hero{
    constructor(name, age, heroClass,attack){
        this.name = name;
        this.age = age;
        this.heroClass = heroClass; 
        this.attack = attack;
        switch(attack){
            case "espada":
                console.log(`O ${this.heroClass} atacou usando ${attack}`);
                break;
            case "magia":
                console.log(`O ${this.heroClass} atacou usando ${attack}`);
                break;
            case "marciais": 
                console.log(`O ${this.heroClass} atacou usando ${attack}`);
                break;
            case "shuriken":
                console.log(`O ${this.heroClass} atacou usando ${attack}`);
                break;
            default:
                console.log(`O ${this.heroClass} realizou um ataque desconhecido`);
                break;
        }
    }
}
let character = new Hero("Pedro, O Destruidor", 20, "guerreiro", "espada");

console.log(character);