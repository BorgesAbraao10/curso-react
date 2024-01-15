function Titulo() {
  let nome = "Abraão Borges";
  const urlImg =
    "https://th.bing.com/th/id/OIP.p5899Oes9ZG0GWXPkJ8vOQHaHa?w=1080&h=1080&rs=1&pid=ImgDetMain";
  return (
    <div>
      <h1> Oi, eu sou o {nome}, estou aprendendo React!</h1>
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
