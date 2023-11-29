import "./App.css";
import RecursosHumanos from "./Components/RecursosHumanos";
function App() {
  const users = [
    { id: 1, nome: "Ricardo", valorHora: 4.5, diasTrabalhados: 20 },
    { id: 2, nome: "Roberto Silva", valorHora: 5.5, diasTrabalhados: 26 },
    { id: 3, nome: "Antônio", valorHora: 5.2, diasTrabalhados: 18 },
    { id: 4, nome: "Rodolpho", valorHora: 8.4, diasTrabalhados: 23 },
    { id: 5, nome: "Rafael", valorHora: 5.9, diasTrabalhados: 28 },
  ];

  const ordenado = users.map((u) => {
    const total = 8 * u.valorHora * u.diasTrabalhados;
    return total;
  });

  return (
    <div>
      {users.map((user) => (
        <RecursosHumanos
          key={user.id}
          id={user.id}
          nome={user.nome}
          valorHora={user.valorHora}
          diasTrabalhados={user.diasTrabalhados}
          salario={ordenado}
        />
      ))}
    </div>
  );
}

export default App;
