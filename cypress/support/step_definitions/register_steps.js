//  2 - Transformnar o Gherkin em método/ação

/// <reference types="cypress" />

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor"
import register_page from "../pages/register_page"
import home_page from '../pages/home_page'


const nome = 'Carlos da Silva'
const emailinvalido = 'dfsfdaklkl'
const email = 'ana.clara@gmail.com'
const senha = '123456'
const senhainvalida = '123'

Given("eu estou na tela de cadastro", () =>{
    home_page.acessCadastro()
})

Given("eu preencho nome", () =>{
    register_page.fillNome(nome)
})

Given("eu preencho email inválido", () =>{
    register_page.fillEmail(emailinvalido)
})

Given("eu preencho email", () =>{
    register_page.fillEmail(email)
})

Given("eu preencho senha inválida", () =>{
    register_page.fillSenha(senhainvalida)
})

Given("eu preencho senha válida", () =>{
    register_page.fillSenha(senha)
})

When("eu clico no botao Cadastrar", () =>{
    register_page.clicaCadastrar()
})

Then("eu vejo a mensagem no cadastro {string}", (mesage) =>{
   register_page.checkErrorMensage(mesage)
})


Then("eu vejo a mensagem no cadastro com sucesso {string}", () =>{
    register_page.checkSucessMenssage(nome)
 })
