//import { faker } from '@faker-js/faker'; 
import commum_page from '../support/pages/commum_page'
import cadastro_page from '../support/pages/cadastro_usuario_page'


describe('Cadastro de Usuário', ()=> {

    beforeEach('Acessar cadastro de usuário', ()=> {
        commum_page.acessarCadastroUsuario()
    })

    it('Campo nome vazio', ()=> {
        cadastro_page.clicarCadastra()
        cadastro_page.validaMensagemErro('O campo nome deve ser prenchido')
    })

    it('Campo email vazio', ()=> {
        cadastro_page.preencheNome('Daniel')
        cadastro_page.clicarCadastra()
        cadastro_page.validaMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo email inválido', ()=> {
        cadastro_page.preencheNome('Daniel')
        cadastro_page.preencheEmail('emailinvalido')
        cadastro_page.clicarCadastra()
        cadastro_page.validaMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo senha vazio', ()=> {
        cadastro_page.preencheNome('Daniel')
        cadastro_page.preencheEmail('danielbruno@gmail.com')
        cadastro_page.clicarCadastra()
        cadastro_page.validaMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Campo senha inválido', ()=> {
        cadastro_page.preencheNome('Daniel')
        cadastro_page.preencheEmail('danielbruno@gmail.com')
        cadastro_page.preencheSenha('123')
        cadastro_page.clicarCadastra()
        cadastro_page.validaMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro com sucesso', ()=> {
        cadastro_page.preencheNome('Daniel')
        cadastro_page.preencheEmail('danielbruno@gmail.com')
        cadastro_page.preencheSenha('123456')
        cadastro_page.clicarCadastra()
        cadastro_page.validaMensagemSucesso('Daniel')
    })

})