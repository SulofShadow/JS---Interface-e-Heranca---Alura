export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        if (SistemaAutenticacao.ehAuteticavel(autenticavel)) {
            // ele verifica se o objeto que a gente passa tem o método senha
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAuteticavel(autenticavel) {
        // Verifica se tem tem uma chave em 'autenticavel' e se isso é uma função;
        return (
        "autenticar" in autenticavel &&
        autenticavel.autenticar instanceof Function
        );
    }
}
