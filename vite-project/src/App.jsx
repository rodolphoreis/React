import "./App.css";
import RecursosHumanos from "./Components/RecursosHumanos";
function App() {
  const novoFunc = () => {
    const matric = prompt("Digite o número de matrícula:");
    const func = prompt("Digite o nome:");
    const valorPorHora = prompt("Digite o valor por hora:");
    const DiasQueTabalhou = prompt("Digite os dias trabalhados:");
    const confirmado = confirm("Você confirma suas informações?");
    console.log(confirmado);
    if (confirmado) {
      const novoUser = [
        {
          id: matric,
          nome: func,
          valorHora: valorPorHora,
          diasTrabalhados: DiasQueTabalhou,
        },
      ];
      users.push(novoUser);
      console.log("depois do user.push");
    }
  };

  const users = [
    { id: 1, nome: "Ricardo", valorHora: 4.5, diasTrabalhados: 20 },
    { id: 2, nome: "Roberto Silva", valorHora: 5.5, diasTrabalhados: 26 },
    { id: 3, nome: "Antônio", valorHora: 5.2, diasTrabalhados: 18 },
    { id: 4, nome: "Rodolpho", valorHora: 8.4, diasTrabalhados: 23 },
    { id: 5, nome: "Rafael", valorHora: 5.9, diasTrabalhados: 28 },
  ];

  return (
    <>
      {users.map((user) => {
        const calc = 8 * user.valorHora * user.diasTrabalhados;
        const total = calc.toFixed(2);
        return (
          <RecursosHumanos
            key={user.id}
            id={user.id}
            nome={user.nome}
            valorHora={user.valorHora}
            diasTrabalhados={user.diasTrabalhados}
            salario={total}
          />
        );
      })}
      <button onClick={novoFunc}>Adicionar</button>
    </>
  );
}
export default App;
