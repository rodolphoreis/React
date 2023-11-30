/* eslint-disable react/prop-types */
const RecursosHumanos = ({ id, nome, valorHora, diasTrabalhados, salario }) => {
  return (
    <>
      <ul className="ListUsers">
        <li>Matrícula: 0{id}</li>
        <li>Nome: {nome}</li>
        <li>Valor por hora: € {valorHora}0</li>
        <li>Dias trabalhados: {diasTrabalhados}</li>
        <li>Salário: € {salario}</li>
      </ul>
      {diasTrabalhados > 25 && "Prémio de 100 euros."}
    </>
  );
};
export default RecursosHumanos;
