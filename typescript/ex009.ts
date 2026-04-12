enum AcessLevel {
    ADMIN = 0,
    EDITOR = 1,
    VISITOR = 2,
};

function registerProfile(name: string, level: AcessLevel = AcessLevel.VISITOR, email?: string): string {
    if (email) {
        return `Perfil: ${name} | Nível: ${level} | Contato: ${email}`
    } else {
        return `Perfil: ${name} | Nível: ${level} | sem e-mail cadastrado.`
    }
};

const nameProfile = registerProfile("Carlos");
const nameAndLevel = registerProfile("Ana", AcessLevel.ADMIN, "ana@empresa.com");
const nameProfile2 = registerProfile("Bia", AcessLevel.EDITOR);

console.log(nameProfile);
console.log(nameAndLevel);
console.log(nameProfile2);