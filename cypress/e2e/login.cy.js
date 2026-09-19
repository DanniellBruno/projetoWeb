import homePage from '../support/pages/home_page'
import login from '../support/pages/login_page'

describe('Login', ()=> {

    beforeEach('Acessar Home', ()=> {
        homePage.acessarHomePage()
    })

    it('Campo email vazio', ()=> {
        login.clicarEmLogin()
        login.validaMsgErro('E-mail inválido.')
    })

    it('Campo email inválido', ()=> {
        login.digitarEmail('daniel')
        login.clicarEmLogin()
        login.validaMsgErro('E-mail inválido.')
    })

    it('Campo senha vazio', ()=> {
        login.digitarEmail('daniel@gmail.com')
        login.clicarEmLogin()
        login.validaMsgErro('Senha inválida.')
    })

    it('Campo senha inválido', ()=> {
        login.digitarEmail('daniel@gmail.com')
        login.digitarSenha('1234')
        login.clicarEmLogin()
        login.validaMsgErro('Senha inválida.')
    })

    it('Login com sucesso', ()=> {
        login.digitarEmail('daniel@gmail.com')
        login.digitarSenha('123456')
        login.clicarEmLogin()
        login.validaMsgSucesso('daniel@gmail.com')

    })

})