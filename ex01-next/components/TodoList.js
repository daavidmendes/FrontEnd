const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'America/Recife'}
  ).format(date);
}

export function TodoList() {
    const name = ""
    return (
        <>
        <img
        src="" 
        alt=""
        className="photo"npm 
        />
        <ul>
            <h1>DAVID VINICIUS MENDES DA SILVA</h1>
            <br></br>
            <p>Sou estudante de Sistemas para Internet na Universidade Católica de Pernambuco, com foco em análise de dados e integração de sistemas corporativos. Tenho experiência prática com o ERP TOTVS, atuando nos módulos de backoffice, educacional e folha de pagamento, o que me proporciona uma base sólida em estrutura de dados, automação de processos e geração de relatórios gerenciais. Estou sempre em busca de aprimorar minhas habilidades técnicas e aplicá-las em soluções eficientes, com ênfase em dados, performance e inovação.</p>
        </ul>
        </>
    );
}