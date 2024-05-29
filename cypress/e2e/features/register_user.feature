Feature: Cadastro de usuario
    Eu como cliente
    Quero me cadastrar na aplicação
    Para fazer um pedido de compra

Scenario: Campo nome vazio
        Given eu estou na tela de cadastro
        When eu clico no botao Cadastrar
        Then eu vejo a mensagem no cadastro "O campo nome deve ser prenchido" 

    Scenario: Campo e-mail vazio
        Given eu estou na tela de cadastro
        And eu preencho nome
        When eu clico no botao Cadastrar
        Then eu vejo a mensagem no cadastro "O campo e-mail deve ser prenchido corretamente"
    
    Scenario: Campo e-mail inválido
        Given eu estou na tela de cadastro
        And eu preencho nome
        And eu preencho email inválido
        When eu clico no botao Cadastrar
        Then eu vejo a mensagem no cadastro "O campo e-mail deve ser prenchido corretamente"

    Scenario: Campo senha vazio
        Given eu estou na tela de cadastro
        And eu preencho nome
        And eu preencho email
        When eu clico no botao Cadastrar
        Then eu vejo a mensagem no cadastro "O campo senha deve ter pelo menos 6 dígitos"

    Scenario: Campo senha inválida
        Given eu estou na tela de cadastro
        And eu preencho nome
        And eu preencho email
        And eu preencho senha inválida
        When eu clico no botao Cadastrar
        Then eu vejo a mensagem no cadastro "O campo senha deve ter pelo menos 6 dígitos"

    Scenario: Cadastro com sucesso
        Given eu estou na tela de cadastro
        And eu preencho nome
        And eu preencho email
        And eu preencho senha válida
        When eu clico no botao Cadastrar
        Then eu vejo a mensagem no cadastro com sucesso "Cadastro realizado!"


