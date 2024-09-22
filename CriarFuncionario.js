class Funcionario {
    constructor(nome, idade, cargo) {
      this.nome = nome;
      this.idade = idade;
      this.cargo = cargo;
    }
  
    seApresentar() {
      console.log(`Olá, meu nome é ${this.nome} e sou um(a) ${this.cargo}.`);
    }
  
    trabalhar() {
      console.log(`Estou trabalhando como ${this.cargo}.`);
    }
  }
  
  class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
      super(nome, idade, cargo);
      this.departamento = departamento;
    }
  
    gerenciar() {
      console.log(`Estou gerenciando o departamento de ${this.departamento}.`);
    }
  }
  
  class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
      super(nome, idade, cargo);
      this.linguagem = linguagem;
    }
  
    programar() {
      console.log(`Estou programando em ${this.linguagem}.`);
    }
  }
  
  function exibirErro(mensagem) {
    const erroElement = document.getElementById('erro');
    erroElement.textContent = mensagem;
  }
  
  function criarFuncionario() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const cargo = document.getElementById('cargo').value;
    const departamento = document.getElementById('departamento').value;
    const linguagem = document.getElementById('linguagem').value;
  
    try {
      if (!nome || !idade || !cargo) {
        throw new Error('Nome, idade e cargo são obrigatórios.');
      }
  
      let funcionario;
      if (cargo === 'Gerente') {
        funcionario = new Gerente(nome, idade, cargo, departamento);
      } else if (cargo === 'Desenvolvedor') {
        funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
      } else {
        throw new Error('Cargo inválido.');
      }
  
      funcionario.seApresentar();
      funcionario.trabalhar();
      if (funcionario instanceof Gerente) {
        funcionario.gerenciar();
      } else if (funcionario instanceof Desenvolvedor) {
        funcionario.programar();
      }
  
      // Exibir informações na página (adapte conforme sua estrutura HTML)
      const resultadoElement = document.getElementById('resultado');
      resultadoElement.innerHTML = `
        <p>${funcionario.nome} se apresentou e está trabalhando como ${funcionario.cargo}.</p>
        ${funcionario instanceof Gerente ? `<p>Ele está gerenciando o departamento de ${funcionario.departamento}.</p>` : ''}
        ${funcionario instanceof Desenvolvedor ? `<p>Ele está programando em ${funcionario.linguagem}.</p>` : ''}
      `;
    } catch (error) {
      exibirErro(error.message);
    }
  }
  
  // Associar o evento ao botão
  const criarBtn = document.getElementById('criar');
  criarBtn.addEventListener('click', criarFuncionario);