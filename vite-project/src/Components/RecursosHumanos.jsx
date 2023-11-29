const RecursosHumanos = ({ id, nome, valorHora, diasTrabalhados, salario }) => {
  return (
    <>
      <ul>
        <li>Matrícula: {id}</li>
        <li>Nome: {nome}</li>
        <li>Valor por hora: {valorHora}</li>
        <li>Dias trabalhados: {diasTrabalhados}</li>
        <li>Salário:{salario}</li>
      </ul>
    </>
  );
};
export default RecursosHumanos;
