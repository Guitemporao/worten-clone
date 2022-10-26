export const Nav = {
    render: () => {
        return `
          <div class='header_nav'>
                <div class='header_nav_wrapper'>
                    <nav class='header_nav_list'>
                        <span><a href="/#/produtos">Produtos</a></span>
                        <span><a href="/#/promocoes">Promoções</a></span>
                        <span><a href="/#/novidades">Novidades</a></span>
                        <span><a href="/#/servicos">Serviços</a></span>
                        <span><a href="/#/zaask">Zaask</a></span>
                        <span><a href="/#/lojas">Lojas</a></span>
                        <span><a href="/#/outlet">Outlet</a></span>
                        <span><a href="/#/empresas">Empresas</a></span>
                    </nav>
                    <div>
                        <span><a href="/#/login">Iniciar Sessão</a></span>
                        <span><a href="/#/register">Criar Conta</a></span>
                    </div>
                </div>
            </div>
        
        `
    }
}