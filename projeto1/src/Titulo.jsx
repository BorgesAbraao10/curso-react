function Titulo() {
  let nome = "Abraão Borges";
  const urlImg =
    "https://www.jsweet.org/wp-content/uploads/2016/04/react-logo.png";
  return (
    <div>
      <h1> Oi, eu sou o {nome} !</h1>
      <img width= {100} src={urlImg} alt="" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        quaerat delectus consectetur libero minima quis officiis quos. Impedit
        qui temporibus dicta dignissimos incidunt cumque atque asperiores illum,
        esse totam quaerat!
      </p>
    </div>
  );
}

export default Titulo;
