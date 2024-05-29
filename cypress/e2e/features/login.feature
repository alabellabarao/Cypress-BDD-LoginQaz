# 1 - Criar meu cenário

Feature: Login
    Eu como cliente
    Quero fazer login na aplicação
    Para fazer um pedido de compra

    Scenario: Login com campo e-mail vazio
    Given eu estou na tela de Login
    When eu clico no botao Login
    Then eu vejo a mensagem "E-mail inválido."

    Scenario: Login com campo senha vazio
    Given eu estou na tela de Login
    And eu preencho e-mail
    When eu clico no botao Login
    Then eu vejo a mensagem "Senha inválida."

    Scenario: Login com sucesso
    Given eu estou na tela de Login
    And eu preencho e-mail
    And eu preencho senha 
    When eu clico no botao Login
    Then loga com sucesso
    


