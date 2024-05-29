//  2 - Transformnar o Gherkin em método/ação

/// <reference types="cypress" />

import { Dado, Quando, Então, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor"
import home_page from '../pages/home_page'
import login_page from "../pages/login_page."

const email = 'carlos@gmail.com'
//const senha = '123456'

Given("eu estou na tela de Login", () =>{
    home_page.acessLogin()
})

Given("eu preencho e-mail", () =>{
    login_page.fillEmail(email)
})

Given("eu preencho senha", () =>{
    login_page.fillSenha('123456')
})

When("eu clico no botao Login", () =>{
    login_page.clicaLogin()
})

Then("eu vejo a mensagem {string}", (mesage) =>{
    login_page.checkErrorMessage(mesage)
})

Then("loga com sucesso", () =>{
   login_page.checkSucessMessage(email)
})
