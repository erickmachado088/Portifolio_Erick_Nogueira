function Header({usuario}){
   return(
    <header className="cabrcalho">
        <div className="conteiner cabecario_linha">
            <a className="logo" href="#topo">
                -/{usuario}
                <span>_</span>

            </a>
        </div>
    </header>


   )
}
export default Header