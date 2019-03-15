/**
 * @file Classes para implementar a gestao de competicao de futebol.
 * @author Izilda Kossy & Engracia Jungo
 * @copyright Projeto PI - 2016/2017
 * @version 1.0.0
 */

/**
* Linha para tabela
*/

/**
* @global 
* @type {number} 
* @const
* @description Representa a linha para Tabela.
*/
var LINHA = 1;

/**
 * Coluna para Tabela
 */

/**
* @global 
* @type {number}
* @const
* @description Representa a Coluna para Tabela.
*/
var COLUNA = 1;

/**
* @global 
* @type {number} 
* @const
* @description Representa a quantidade maxima de 11 jogadores na equipa.
*/
var maxJogadorNaEquipa = 11;

/**
 * Enumerado Tipos de Posicao do Jogador
 */

/**
 * @enum {string} TipoPosicao - Tipos de Posicao do Jogador.
 * @readonly
 */
var TipoPosicao = {
  /** Tipo de prato ser um <b>G</b>uarda <b>R</b>edes*/
  GR: "Guarda-Redes",
  /** Tipo de prato ser um <b>D</b>e<b>F</b>esa*/
  DF: "Defesa",
  /** Tipo de prato ser um <b>M</b>edio <b>C</b>entro*/
  MC: "Medio",
  /** Tipo de posicao ser um <b>AV</b>ancado*/
  AV: "Avancado"
};

/**
 * Função Calcular Idade
 */

/**
* @function calcularIdade
* @param {string} dataNascimento - a data de nascimento.
* @returns {number} O resultado obtido sera igual a idade.
* @description Funcao para calcular a idade da pessoa pela data de nascimento.
*/
function calcularIdade(dataNascimento) {
  var dataIntroduzida = dataNascimento.split("/");
  var dataObtida = new Date(parseInt(dataIntroduzida[2], 10),
    parseInt(dataIntroduzida[1], 10) - 1,
    parseInt(dataIntroduzida[0], 10));

  var diferenca = Date.now() - dataObtida.getTime();
  var idade = new Date(diferenca);
  return Math.abs(idade.getUTCFullYear() - 1970);
};

/**
 * Classe Pessoa
 */

/**
 * @class Representa um Objecto Pessoa.
 * @constructs Pessoa
 * @param {string} nome - o nome da pessoa.
 * @param {string} dataNascimento - a dataNascimento da pessoa.
 * @param {string} pais - o pais da pessoa.
 * @param {number} altura - a altura da pessoa.
 * @description Representa a Classe Pessoa. 
 */
function Pessoa(nome, dataNascimento, pais, altura) {
  this.nome = nome;
  this.dataNascimento = dataNascimento;
  this.pais = pais;
  this.altura = parseFloat(altura);
  this.idade = calcularIdade(dataNascimento);
}

/**
 * Classe Jogador
 */

/**
 * @class Representa um Objecto Jogador.
 * @constructs Jogador
 * @extends Pessoa
 * @param {string} nome - o nome do jogador.
 * @param {string} dataNascimento - a dataNascimento do jogador.
 * @param {string} pais - o pais do jogador.
 * @param {number} altura - a altura do jogador.
 * @param {string} posicao - a posicao do jogador.
 * @property {string} temEquipa - se o jogador ja tem equipa.
 * @description Representa a Classe Jogador.
 */
function Jogador(nome, dataNascimento, pais, altura, posicao) {
  Pessoa.call(this, nome, dataNascimento, pais, altura);
  this.posicao = (posicao && TipoPosicao[posicao.toUpperCase()]) ? posicao.toUpperCase() : "";
  this.temEquipa = "N/A";
}
/**
 * Construtor Jogador
 */
Jogador.prototype = Object.create(Pessoa.prototype);
Jogador.prototype.constructor = Jogador;

/**
* @description Altera os dados do jogadores.
* @param {string} nome - o nome do jogador.
* @param {string} dataNascimento - a dataNascimento do jogador.
* @param {string} pais - o pais da pessoa.
* @param {number} altura - a altura do jogador.
* @param {string} posicao - a posicao do jogador.
*/
Jogador.prototype.alterarDados = function (nome, dataNascimento, pais, altura, posicao) {
  //se nome não for indefinido
  if (nome !== void 0) {
    this.nome = nome;
  } //se dataNascimento não for indefinido
  if (dataNascimento !== void 0) {
    this.dataNascimento = dataNascimento;
    this.idade = calcularIdade(dataNascimento);
  } //se pais não for indefinido
  if (pais !== void 0) {
    this.pais = pais;
  } //se altura não for indefinido
  if (altura !== void 0) {
    this.altura = altura;
  } //se posicao não for indefinido
  if (posicao !== void 0) {
    this.posicao = posicao;
  }
};

/****************************** Equipa ****************************************************/

/**
 * Classe Equipa
 */

/**
 * @class Representa um Objecto Equipa.
 * @constructs Equipa
 * @param {string} nome - o nome do jogador.
 * @param {string} acronimo - o acronimo da equipa.
 * @param {string} pais -  opais da equipa.
 * @param {string} urlSite - a urlSite da equipa.
 * @param {string} descricao - a descricao da equipa.
 * @description Representa a Classe Equipa. 
 */
function Equipa(nome, acronimo, pais, urlSite, descricao) {
  this.nome = nome;
  this.acronimo = acronimo;
  this.pais = pais;
  this.urlSite = urlSite;
  this.descricao = descricao;
  this.jogadores = []; //11 jogador
  this.valido = "Não"; //1 GR, 4 DF, 4 MC, 2 AV
  this.pontos = 0;
  this.golosMarcados = 0;
  this.golosSofridos = 0;
  this.competicao = "Não"; //não repetir na eliminatoria
  this.existeEquipa = "Não";
}

/**
 * @description Acrescenta diversos jogadores na equipa.
 * @param {Jogador} jogador - o jogador a ser inserido na equipa. 
 * @returns {Equipa} o proprio objeto Equipa: permite a realizacao de "Method Chaining".
 */
Equipa.prototype.adicionarJogadorNaEquipa = function (jogador) {
  if (jogador.temEquipa !== "N/A") {
    alert("Este jogador já tem equipa");
    return;
  } else if (this.jogadores.length == maxJogadorNaEquipa) {
    alert("Não é possível inserir mais jogador na equipa do " + this.acronimo);
    return;
  } else {
    jogador.temEquipa = this.acronimo; //atribui equipa ao jogador
    this.jogadores.push(jogador); //adiciona jogador na equipa
    //alert(jogador.nome + " foi adicionado na equipa do " + this.acronimo);
    if (this.jogadores.length == maxJogadorNaEquipa) {
      //alert("Não é possível inserir mais jogador na equipa do " + this.acronimo);
      this.validarEquipa(); //validar equipa
    }
    return this;
  }
};

/**
 * @description Validar Equipa - (1 GR, 4 DF, 4 MC, 2 AV)
 * @returns {Equipa} o proprio objeto Equipa: permite a realizacao de "Method Chaining".
 */
Equipa.prototype.validarEquipa = function () {
  var contarGR = 0;
  var contarDF = 0;
  var contarMC = 0;
  var contarAV = 0;

  if (this.jogadores.length == maxJogadorNaEquipa) { //se tiver 11 jogadores
    for (var i = 0; i < this.jogadores.length; i++) {
      switch (this.jogadores[i].posicao) {
        case "GR":
          contarGR += 1;
          break;
        case "DF":
          contarDF += 1;
          break;
        case "MC":
          contarMC += 1;
          break;
        case "AV":
          contarAV += 1;
          break;
      }
    } //( 1 GR, 4 DF, 4 MC, 2 AV) 
    if ((contarGR == 1) && (contarDF == 4) && (contarMC == 4) && (contarAV == 2)) {
      this.valido = "Sim"; //equipa fica valida para competicao
    }
  }
  return this;
};

/**
 * @description Altera os dados da competicao "Liga ou Taca".
 * @param {string} nome - o nome do jogador.
 * @param {string} acronimo - o acronimo da equipa.
 * @param {string} pais -  opais da equipa.
 * @param {string} urlSite - a urlSite da equipa.
 * @param {string} descricao - a descricao da equipa.
 */
Equipa.prototype.alterarDados = function (nome, acronimo, pais, urlSite, descricao) {
  //se nome não for indefinido
  if (nome !== void 0) {
    this.nome = nome;
  } //se acronimo não for indefinido
  if (acronimo !== void 0) {
    this.acronimo = acronimo;
  } //se pais não for indefinido
  if (pais !== void 0) {
    this.pais = pais;
  } //se urlSite não for indefinido
  if (urlSite !== void 0) {
    this.urlSite = urlSite;
  } //se descricao não for indefinido
  if (descricao !== void 0) {
    this.descricao = descricao;
  }
};

/**
 * Classe Competicao
 */

/**
 * @class Representa um Objecto Competicao.
 * @constructs Competicao
 * @param {string} nome - o nome da competicao.
 * @param {string} edicao - a edicao da competicao.
 * @param {number} totalEquipas - o total de equipas na competicao.
 * @param {string} tipo - o tipo de competicao.
 * @property {Equipa[]} equipas - as equipas na competicao.
 * @description Representa a Classe Competicao. 
 */
function Competicao(nome, edicao, totalEquipas, tipo) {
  this.nome = nome;
  this.edicao = edicao;
  this.totalEquipas = totalEquipas;
  this.vencedor = "N/A";
  this.tipo = tipo;
  this.equipas = [];
}

/**
 * @description Altera os dados da competicao "Liga ou Taca".
 * @param {string} nome - o nome da competicao.
 * @param {string} edicao - a edicao da competicao.
 * @param {number} totalEquipas - o total de equipas na competicao.
 */
Competicao.prototype.alterarDados = function (nome, edicao, totalEquipa) {
  //se nome não for indefinido
  if (nome !== void 0) {
    this.nome = nome;
  } //se edicao não for indefinido
  if (edicao !== void 0) {
    this.edicao = edicao;
  } //se totalEquipa não for indefinido
  if (totalEquipa !== void 0) {
    this.totalEquipa = totalEquipa;
  }
};

/**
 * @description Acrescenta diversas equipas na competicao.
 * @param {Equipa} equipa - a equipa a ser inserido na competicao. 
 * @returns {Competicao} o proprio objeto Competicao: permite a realizacao de "Method Chaining".
 */
Competicao.prototype.adicionarEquipaNaCompeticao = function (equipa) {

  var equipaNaLiga = this.obterEquipaNaCompeticaoPeloNome(equipa.nome);

  //se não existir
  if (equipaNaLiga === void 0) {
    if (equipa.valido !== "Sim") {
      alert("Esta equipa não pode ser adicionada porque está inválida para Competição");
      return;
    } else if (this.equipas.length == this.totalEquipas) {
      alert("Não é possível inserir mais equipa na " + this.nome);
      return;
    } else {
      equipa.competicao = this.nome;
      this.equipas.push(equipa); //adiciona equipa na liga
      alert(equipa.nome + " foi adicionado na " + this.nome);
      if (this.equipas.length == this.totalEquipas) {
        alert("Não é possível inserir mais equipa na " + this.nome);
        this.vencedor = "Competição em curso";
      }
      return this;
    }
    //e se existir
  } else {
    if (equipaNaLiga.nome === equipa.nome) {
      alert("Esta equipa já existe, adiciona uma nova");
      return;
    }
  }
};

/**
 * @description Obter a equipa na competicao pelo nome.
 * @param {string} nome - o nome da equipa. 
 * @returns {Equipa} a equipa
 */
Competicao.prototype.obterEquipaNaCompeticaoPeloNome = function (nome) {
  var quantos = this.equipas.length;
  for (var i = 0; i < quantos; i++) {
    if (nome === this.equipas[i].nome) {
      return this.equipas[i];
    }
  }
};
/**
 * @description Obter a equipa na competicao.
 * @param {string} posicao - posicao aleatoria. 
 * @returns {Equipa} a equipa
 */
Competicao.prototype.obterEquipaNaCompeticaoPelaPosicao = function (posicao) {
  var quantos = this.equipas.length;
  for (var i = 0; i < quantos; i++) {
    if (i === posicao) {
      return this.equipas[posicao];
    }
  }
};

/**
 * Classe Liga
 */

/**
* @class Representa um Objecto Liga.
* @constructs Liga
* @extends Competicao
* @param {string} nome - o nome da liga.
* @param {string} edicao - a edicao da liga.
* @param {number} totalEquipas - o total de equipas na liga.
* @description Representa a Classe Liga.
*/
function Liga(nome, edicao, totalEquipas) {
  Competicao.call(this, nome, edicao, totalEquipas, "LIGA");
}
/**
 * Construtor Liga
 */
Liga.prototype = Object.create(Competicao.prototype);
Liga.prototype.constructor = Liga;

/**
 * Classe Taca
 */

/**
* @class Representa um Objecto Taca
* @constructs Taca
* @extends Competicao
* @param {string} nome - o nome da taca.
* @param {string} edicao - aedicao da taca.
* @param {number} totalEquipas - o total de equipas na taca.
* @description Representa a Classe Taca 
*/
function Taca(nome, edicao, totalEquipas) {
  Competicao.call(this, nome, edicao, totalEquipas, "TAÇA");
}
/**
 * Construtor Taca
 */
Taca.prototype = Object.create(Competicao.prototype);
Taca.prototype.constructor = Taca;

/**
 * Classe Gestor de Sistema
 */

/**
 * @class Representa um Objecto Gestor
 * @constructs Gestor
 * @param {string} id - id do gestor de sistema.
 * @property {Jogador[]} jogadores - os jogadores no sistema.
 * @property {Equipa[]} equipas - as equipas no sistema.
 * @property {Liga[]} ligas - a competicao liga no sistema.
 * @property {Taca[]} tacas - a competicao taca no sistema.
 * @description Representa a Classe Gestor de Sistema.
 */
function Gestor(id) {
  this.id = id;
  this.jogadores = [];
  this.equipas = [];
  this.ligas = [];
  this.tacas = [];
  var esteGestor = this;

  this.paginaInicial = function () {
    criarPaginaInicial();
  }

  /**
   * @function criarPaginaInicial
   * @description Função para construir a pagina inicial.
   */
  function criarPaginaInicial() {

    var cabecalho = document.getElementById("cabecalho");
    criarCabecalho(cabecalho, esteGestor);

    var conteudoGeral = document.getElementById("conteudoGeral");
    criarConteudoGeral(conteudoGeral, esteGestor, "HOME");

    var rodape = document.getElementById("rodape");
    criarRodape(rodape);
  };
}

/**
 * Funcao auxiliar para o sort comparando 2 propName
 * @param  {propName} nome da prop usada para se fazer a comparacao
 * @param  {a} primeiro elemento a ser comparado
 * @param  {b} segundo elemento a ser comparado 
 */
function compare(propName) {
  return function (a, b) {
    if (a[propName] < b[propName])
      return -1;
    if (a[propName] > b[propName])
      return 1;
    return 0;
  };
}

/**
 * @description Acrescenta diversas jogadores no sistema.
 * @param {Jogador} jogador - o jogador a ser inserido no sistema. 
 * @returns {Gestor} o proprio objeto Gestor: permite a realizacao de "Method Chaining".
 */
Gestor.prototype.adicionarJogador = function (jogador) {
  var quantos = this.jogadores.length;
  for (var i = 0; i < quantos; i++) {
    if (jogador.nome === this.jogadores[i].nome) {
      alert("Já existe jogador com de " + jogador.nome);
      return;
    }
  }
  this.jogadores.push(jogador);
  return this;
};

/**
 * @description Obter a posicao do jogador no sistema.
 * @param {string} nome - o nome do jogador. 
 * @returns {number} a posicao do jogador no sistema.
 */
Gestor.prototype.obterIndexJogador = function (nome) {
  var quantos = this.jogadores.length;
  for (var i = 0; i < quantos; i++) {
    if (nome === this.jogadores[i].nome) {
      return i;
    }
  }
};

/**
 * @description Obter o jogador no sistema.
 * @param {string} nome - o nome do jogador. 
 * @returns {Jogador} o jogador no sistema.
 */
Gestor.prototype.obterJogadorPeloNome = function (nome) {
  var quantos = this.jogadores.length;
  for (var i = 0; i < quantos; i++) {
    if (nome === this.jogadores[i].nome) {
      return this.jogadores[i];
    }
  }
};

/**
 * @description Obter o jogador no sistema selecionado por checkbox.
 * @returns {Jogador} o jogador no sistema.
 */
Gestor.prototype.obterCheckBoxJogador = function () {
  var inputs = document.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type == 'checkbox') {
      if (inputs[i].checked == true) {
        return this.obterJogadorPeloNome(inputs[i].id);
      }
    }
  }
};

/**
 * @description Remover o jogador no sistema selecionado por checkbox.
 * @returns {Gestor} o proprio objeto Gestor: permite a realizacao de "Method Chaining".
 */
Gestor.prototype.removerJogador = function () {
  var inputs = document.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type == 'checkbox') {
      if (inputs[i].checked == true) {
        var jogador = this.obterJogadorPeloNome(inputs[i].id);
        if (jogador.temEquipa !== "N/A") {
          alert("Este jogador não pode ser removido porque já tem equipa");
          return;
        } else {
          var index = this.obterIndexJogador(jogador.nome);
          this.jogadores.splice(index, 1);
          alert("Jogador foi removido com sucesso");
          return this;
        }
      }
    }
  }
};

/** 
 * @description Receber dados e registar um novo jogador.
 * @param {string} nome - o nome do jogador.
 * @param {string} dataNascimento - a dataNascimento do jogador.
 * @param {string} pais - o pais do jogador.
 * @param {number} altura - a altura do jogador.
 * @param {string} posicao - a posicao do jogador.
 */
Gestor.prototype.gravarDadosDoJogador = function (nome, dataNascimento, pais, altura, posicao) {
  //se nome não for indefinido
  if ((nome !== void 0)
    //se dataNascimento não for indefinido
    && (dataNascimento !== void 0)
    //se pais não for indefinido
    && (pais !== void 0)
    //se altura não for indefinido
    && (altura !== void 0)
    //se posicao não for indefinido
    && (posicao !== void 0)) {
    //cria um novo jogador
    var jogador = new Jogador(nome, dataNascimento, pais, altura, posicao);
    //e adiciona na lista de jogadores
    this.adicionarJogador(jogador);
  }
};

/**
 * @description Acrescenta diversas equipas no sistema.
 * @param {Equipa} equipa - a equipa a ser inserido no sistema. 
 * @returns {Gestor} o proprio objeto Gestor: permite a realizacao de "Method Chaining".
 */
Gestor.prototype.adicionarEquipa = function (equipa) {
  var quantos = this.equipas.length;
  for (var i = 0; i < quantos; i++) {
    if (equipa.nome === this.equipas[i].nome) {
      alert("Já existe equipa com este nome");
      return;
    }
  }
  this.equipas.push(equipa);
  return this;
};

/**
 * @description Obter a posicao da equipa no sistema.
 * @param {string} nome - o nome da equipa. 
 * @returns {number} a posicao da equipa no sistema.
 */
Gestor.prototype.obterIndexEquipa = function (nome) {
  var quantos = this.equipas.length;
  for (var i = 0; i < quantos; i++) {
    if (nome === this.equipas[i].nome) {
      return i;
    }
  }
};
/**
 * @description Obter a equipa no sistema.
 * @param {number} posicao - a posicao da equipa. 
 * @returns {Equipa} a equipa no sistema.
 */
Gestor.prototype.obterEquipaPelaPosicao = function (posicao) {
  var quantos = this.equipas.length;
  for (var i = 0; i < quantos; i++) {
    if (i === posicao) {
      return this.equipas[posicao];
    }
  }
};

/**
 * @description Obter o equipa no sistema.
 * @param {string} nome - o nome da equipa. 
 * @returns {Equipa} a equipa no sistema.
 */
Gestor.prototype.obterEquipaPeloNome = function (nome) {
  var quantos = this.equipas.length;
  for (var i = 0; i < quantos; i++) {
    if (nome === this.equipas[i].nome) {
      return this.equipas[i];
    }
  }
};

/**
 * @description Obter a equipa no sistema selecionado por checkbox.
 * @returns {Equipa} a equipa no sistema.
 */
Gestor.prototype.obterCheckBoxEquipa = function () {
  var inputs = document.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type == 'checkbox') {
      if (inputs[i].checked == true) {
        return this.obterEquipaPeloNome(inputs[i].id);
      }
    }
  }
};

/**
 * @description Remover a equipa no sistema selecionado por checkbox.
 * @returns {Gestor} o proprio objeto Gestor: permite a realizacao de "Method Chaining".
 */
Gestor.prototype.removerEquipa = function () {
  var inputs = document.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type == 'checkbox') {
      if (inputs[i].checked == true) {
        var equipa = this.obterEquipaPeloNome(inputs[i].id);
        if (equipa.competicao !== "Não") {
          alert("Esta equipa não pode ser removida porque está em competição da " + equipa.competicao);
          return;
        } else {
          var index = this.obterIndexEquipa(equipa.nome);
          this.equipas.splice(index, 1);
          alert("Equipa foi removida com sucesso");
          return this;
        }
      }
    }
  }
};

/** 
 * @description Receber dados e registar uma nova equipa.
 * @param {string} nome - o nome do jogador.
 * @param {string} acronimo - a acronimo da equipa.
 * @param {string} pais - o pais da equipa.
 * @param {string} urlSite - a urlSite da equipa.
 * @param {string} descricao - a descricao da equipa.
 */
Gestor.prototype.gravarDadosDaEquipa = function (nome, acronimo, pais, urlSite, descricao) {
  //se nome não for indefinido
  if ((nome !== void 0)
    //se acronimo não for  indefinido
    && (acronimo !== void 0)
    //se pais não for indefinido
    && (pais !== void 0)
    //se urlSite não for indefinido
    && (urlSite !== void 0)
    //se descricao não for indefinido
    && (descricao !== void 0)) {
    //cria uma nova equipa
    var equipa = new Equipa(nome, acronimo, pais, urlSite, descricao);
    //e adiciona na lista de equipas
    this.adicionarEquipa(equipa);
  }
};

/**
* @function criarListaDeJogadores
* @param {HTMLElement} divConteudoGeral - a div com id conteudoGeral.
* @param {string} menu - menu .
* @param {Gestor} gestor - o gestor do sistema.
* @param {string} nomeEquipa - o nome da equipa.
* @description Funcao para criar uma lista de jogadores a ser adicionada na equipa.
*/
function criarListaDeJogadores(divConteudoGeral, menu, gestor, nomeEquipa) {
  var equipa = gestor.obterEquipaPeloNome(nomeEquipa);

  criarTituloDoConteudo("INSERIR JOGADORES NA EQUIPA DO " + equipa.acronimo, divConteudoGeral);

  var labelJogador = document.createElement("label");
  labelJogador.appendChild(document.createTextNode("Lista de Jogadores:"));
  labelJogador.style.fontSize = "18px";
  labelJogador.style.fontFamily = "Arial Black";

  var selectJogador = document.createElement("select");
  selectJogador.id = "selectJogador";
  selectJogador.style.width = "22%";
  selectJogador.style.height = "40px";

  for (var i = 0; i < gestor.jogadores.length; i++) {
    var jogador = document.createElement("option");
    jogador.value = gestor.jogadores[i].nome;
    jogador.text = gestor.jogadores[i].nome + " | " + gestor.jogadores[i].posicao;
    selectJogador.appendChild(jogador);
  }

  var divLista = document.createElement("div");
  divLista.id = "divListaJogador";

  divLista.appendChild(document.createElement("br"));
  divLista.appendChild(document.createElement("br"));
  divLista.appendChild(labelJogador);
  divLista.appendChild(document.createElement("br"));
  divLista.appendChild(selectJogador);
  divLista.style.textAlign = "left";

  divConteudoGeral.appendChild(document.createElement("br"));
  divConteudoGeral.appendChild(divLista);

  var btnCancelar = document.createElement("button");
  btnCancelar.appendChild(document.createTextNode("Cancelar"));
  btnCancelar.onclick = function () {
    //limpa a div conteudo geral
    limparDivConteudoGeral(divConteudoGeral);
    //e mostra o menu
    criarConteudoGeral(divConteudoGeral, gestor, menu);
  }

  var btnGravar = document.createElement("button");
  btnGravar.appendChild(document.createTextNode("Gravar"));
  btnGravar.onclick = function () {
    //obter jogador 
    var jogador = gestor.obterJogadorPeloNome(selectJogador.value);
    //tentar inserir na equipa
    equipa.adicionarJogadorNaEquipa(jogador);
    //se equipa tiver 11 jogadores
    if (equipa.jogadores.length == maxJogadorNaEquipa) {
      //limpa a div conteudo geral
      limparDivConteudoGeral(divConteudoGeral);
      //e mostra o menu
      criarConteudoGeral(divConteudoGeral, gestor, menu);
    }
  }

  var divButton = document.createElement("div");
  divButton.id = "divButtonAdicionarJogadorEquipa";
  divButton.appendChild(btnCancelar);
  divButton.appendChild(btnGravar);
  divButton.style.textAlign = "left";

  divConteudoGeral.appendChild(document.createElement("br"));
  divConteudoGeral.appendChild(divButton);
}

/**
 * @description Acrescenta diversas da competicao do tipo liga no sistema.
 * @param {Liga} liga - a competicao liga a ser inserido no sistema. 
 * @returns {Gestor} o proprio objeto Gestor: permite a realizacao de "Method Chaining".
 */
Gestor.prototype.adicionarLiga = function (liga) {
  var quantos = this.ligas.length;
  for (var i = 0; i < quantos; i++) {
    if (liga.nome === this.ligas[i].nome) {
      alert("Já existe competição com este nome.");
      return;
    }
  }
  this.ligas.push(liga);
  return this;
};

/**
 * @description Obter a posicao da competicao liga no sistema.
 * @param {string} nome - o nome da competicao liga. 
 * @returns {number} a posicao da competicao liga no sistema.
 */
Gestor.prototype.obterIndexLiga = function (nome) {
  var quantos = this.ligas.length;
  for (var i = 0; i < quantos; i++) {
    if (nome === this.ligas[i].nome) {
      return i;
    }
  }
};

/**
 * @description Obter a competicao liga no sistema.
 * @param {string} nome - o nome da competicao liga. 
 * @returns {Liga} a competicao liga no sistema.
 */
Gestor.prototype.obterLigaPeloNome = function (nome) {
  var quantos = this.ligas.length;
  for (var i = 0; i < quantos; i++) {
    if (nome === this.ligas[i].nome) {
      return this.ligas[i];
    }
  }
};

/**
 * @description Obter a competicao liga no sistema selecionado por checkbox.
 * @returns {Liga} a competicao liga no sistema.
 */
Gestor.prototype.obterCheckBoxLiga = function () {
  var inputs = document.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type == 'checkbox') {
      if (inputs[i].checked == true) {
        return this.obterLigaPeloNome(inputs[i].id);
      }
    }
  }
};


/**
 * @description Remover a competicao liga no sistema selecionado por checkbox.
 * @returns {Gestor} o proprio objeto Gestor: permite a realizacao de "Method Chaining".
 */
Gestor.prototype.removerLiga = function () {
  var inputs = document.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type == 'checkbox') {
      if (inputs[i].checked == true) {
        var liga = this.obterLigaPeloNome(inputs[i].id);
        if (liga.vencedor === "Competição em curso") {
          alert("Esta liga não pode ser removida porque a competição está em curso");
          return;
        } else {
          var index = this.obterIndexLiga(liga.nome);
          this.ligas.splice(index, 1);
          alert("Liga foi removida com sucesso");
          return this;
        }
      }
    }
  }
};

/**
 * @description Receber dados e registar uma nova competicao liga.
 * @param {string} nome - o nome da competicao liga.
 * @param {string} edicao - a edicao da competicao liga.
 * @param {number} totalEquipa - o total da equipas na competicao liga.
 */
Gestor.prototype.gravarDadosDaLiga = function (nome, edicao, totalEquipa) {
  //se nome não for indefinido
  if ((nome !== void 0)
    //se edicao não for  indefinido
    && (edicao !== void 0)
    //se totalEquipa ão for indefinido
    && (totalEquipa !== void 0)) {
    //cria uma nova liga
    var liga = new Liga(nome, edicao, totalEquipa);
    //e adiciona na lista de Ligas
    this.adicionarLiga(liga);
  }
};

/**
* @function criarListaDeEquipas
* @param {HTMLElement} divConteudoGeral - a div com id conteudoGeral.
* @param {string} menu - menu.
* @param {Gestor} gestor - o gestor do sistema.
* @param {string} nomeLiga - o nome da liga.
* @description Funcao para criar uma lista de equipas a ser adicionada na liga.
*/
function criarListaDeEquipas(divConteudoGeral, menu, gestor, nomeLiga) {
  var liga = gestor.obterLigaPeloNome(nomeLiga);

  criarTituloDoConteudo("INSERIR EQUIPAS NA " + liga.nome, divConteudoGeral);

  var labelEquipa = document.createElement("label");
  labelEquipa.appendChild(document.createTextNode("Lista de Equipas:"));
  labelEquipa.style.fontSize = "18px";
  labelEquipa.style.fontFamily = "Arial Black";

  var selectEquipa = document.createElement("select");
  selectEquipa.id = "selectEquipa";
  selectEquipa.style.width = "22%";
  selectEquipa.style.height = "40px";

  for (var i = 0; i < gestor.equipas.length; i++) {
    var equipa = document.createElement("option");
    equipa.value = gestor.equipas[i].nome;
    equipa.text = gestor.equipas[i].nome + " | " + gestor.equipas[i].acronimo;
    selectEquipa.appendChild(equipa);
  }

  var divLista = document.createElement("div");
  divLista.id = "divListaEquipa";

  divLista.appendChild(document.createElement("br"));
  divLista.appendChild(document.createElement("br"));
  divLista.appendChild(labelEquipa);
  divLista.appendChild(document.createElement("br"));
  divLista.appendChild(selectEquipa);
  divLista.style.textAlign = "left";

  divConteudoGeral.appendChild(document.createElement("br"));
  divConteudoGeral.appendChild(divLista);

  var btnCancelar = document.createElement("button");
  btnCancelar.appendChild(document.createTextNode("Cancelar"));
  btnCancelar.onclick = function () {
    limparDivConteudoGeral(divConteudoGeral);
    criarConteudoGeral(divConteudoGeral, gestor, menu);
  }

  var btnGravar = document.createElement("button");
  btnGravar.appendChild(document.createTextNode("Gravar"));
  btnGravar.onclick = function () {
    //obter equipa 
    var equipa = gestor.obterEquipaPeloNome(selectEquipa.value);
    //tentar inserir na liga
    liga.adicionarEquipaNaCompeticao(equipa);
    //se equipa tiver o mesmo numero que equipa que o inserido
    if (liga.equipas.length == liga.totalEquipas) {
      //limpa a div conteudo geral
      limparDivConteudoGeral(divConteudoGeral);
      //e mostra o menu
      criarConteudoGeral(divConteudoGeral, gestor, menu);
    }
  }

  var divButton = document.createElement("div");
  divButton.id = "divButtonAdicionarEquipa";
  divButton.appendChild(btnCancelar);
  divButton.appendChild(btnGravar);
  divButton.style.textAlign = "left";

  divConteudoGeral.appendChild(document.createElement("br"));
  divConteudoGeral.appendChild(divButton);
}

/**
 * @description Acrescenta diversas da competicao do tipo taca no sistema.
 * @param {Taca} taca - a competicao taca a ser inserido no sistema. 
 * @returns {Gestor} o proprio objeto Gestor: permite a realizacao de "Method Chaining".
 */
Gestor.prototype.adicionarTaca = function (taca) {
  var quantos = this.tacas.length;
  for (var i = 0; i < quantos; i++) {
    if (taca.nome === this.tacas[i].nome) {
      alert("Já existe competição com este nome.");
      return;
    }
  }
  this.tacas.push(taca);
  return this;
};

/**
 * @description Obter a posicao da competicao taca no sistema.
 * @param {string} nome - o nome da competicao taca. 
 * @returns {number} a posicao da competicao taca no sistema.
 */
Gestor.prototype.obterIndexTaca = function (nome) {
  var quantos = this.tacas.length;
  for (var i = 0; i < quantos; i++) {
    if (nome === this.tacas[i].nome) {
      return i;
    }
  }
};

/**
 * @description Obter a competicao taca no sistema.
 * @param {string} nome - o nome da competicao taca. 
 * @returns {Taca} a competicao taca no sistema.
 */
Gestor.prototype.obterTacaPeloNome = function (nome) {
  var quantos = this.tacas.length;
  for (var i = 0; i < quantos; i++) {
    if (nome === this.tacas[i].nome) {
      return this.tacas[i];
    }
  }
};

/**
 * @description Obter a competicao taca no sistema selecionado por checkbox.
 * @returns {Liga} a competicao taca no sistema.
 */
Gestor.prototype.obterCheckBoxTaca = function () {
  var inputs = document.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type == 'checkbox') {
      if (inputs[i].checked == true) {
        return this.obterTacaPeloNome(inputs[i].id);
      }
    }
  }
};

/**
 * @description Remover a competicao taca no sistema selecionado por checkbox.
 * @returns {Gestor} o proprio objeto Gestor: permite a realizacao de "Method Chaining".
 */
Gestor.prototype.removerTaca = function () {
  var inputs = document.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type == 'checkbox') {
      if (inputs[i].checked == true) {
        var taca = this.obterTacaPeloNome(inputs[i].id);
        if (taca.vencedor === "Taça em curso") {
          alert("Esta taça não pode ser removida porque a competição está em curso");
          return;
        } else {
          var index = this.obterIndexTaca(taca.nome);
          this.tacas.splice(index, 1);
          alert("Taça foi removida com sucesso");
          return this;
        }
      }
    }
  }
};

/**
 * @description Receber dados e registar uma nova competicao taca.
 * @param {string} nome - o nome da competicao taca.
 * @param {string} edicao - a edicao da competicao taca.
 * @param {number} totalEquipa - o total da equipas na competicao taca.
 */
Gestor.prototype.gravarDadosDaTaca = function (nome, edicao, totalEquipa) {
  //se nome não for indefinido
  if ((nome !== void 0)
    //se edicao não for  indefinido
    && (edicao !== void 0)
    //se totalEquipa ão for indefinido
    && (totalEquipa !== void 0)) {
    //cria uma nova liga
    var taca = new Taca(nome, edicao, totalEquipa);
    //e adiciona na lista de Ligas
    this.adicionarTaca(taca);
  }
};

/**
 * @function limparDivConteudoGeral
 * @param {HTMLElement} parent - a div com id conteudoGeral.
 * @description Funcao remover filhos de um conteudo
 */
function limparDivConteudoGeral(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

/**
 * @function criarMenu
 * @param {HTMLElement} ul - ul.
 * @param {Gestor} gestor - o gestor do sistema.
 * @param {string} menu - o menu do tipo texto.
 * @description Funcao criar menu principal
 */
function criarMenu(ul, gestor, menu) {
  var li = document.createElement("li");
  var a = document.createElement("a");
  a.appendChild(document.createTextNode(menu));
  a.href = "#";
  a.onclick = function () {
    var divConteudoGeral = document.getElementById("conteudoGeral");
    limparDivConteudoGeral(divConteudoGeral);
    criarConteudoGeral(divConteudoGeral, gestor, menu);
  }
  li.appendChild(a);
  ul.appendChild(li);
}

/**
 * @function criarCabecalho
 * @param {HTMLElement} divCabecalho - a div com id cabecalho.
 * @param {Gestor} gestor - o gestor do sistema.
 * @description Funcao para criar o cabecalho
 */
function criarCabecalho(divCabecalho, gestor) {
  var nav = document.createElement("nav");
  var ul = document.createElement("ul");
  ul.id = "menu";
  criarMenu(ul, gestor, "HOME");
  criarMenu(ul, gestor, "JOGADORES");
  criarMenu(ul, gestor, "EQUIPAS");
  criarMenu(ul, gestor, "LIGAS");
  criarMenu(ul, gestor, "TAÇAS");
  nav.appendChild(ul, gestor);
  divCabecalho.appendChild(nav);
}

/**
 * @function criarTituloDoConteudo
 * @param {string} titulo - o titulo do conteudo.
 * @param {HTMLElement} divConteudoGeral - a div com id conteudoGeral.
 * @description Funcao para criar titulo em cada conteudo
 */
function criarTituloDoConteudo(titulo, divConteudoGeral) {
  var tituloConteudo = document.createElement("h1");
  tituloConteudo.id = "h1";
  tituloConteudo.appendChild(document.createTextNode(titulo));
  divConteudoGeral.appendChild(tituloConteudo);
}

/**
 * @function criarRodape
 * @param {HTMLElement} divRodape - a div com id rodape.
 * @description Funcao para criar o rodape
 */
function criarRodape(divRodape) {
  var tituloRodape = document.createElement("p");
  tituloRodape.style.fontSize = "18px";
  tituloRodape.style.color = "white";

  var tituloRodapeText = document.createTextNode("\u00a9"
    .concat("2016/2017 - Licenciatura em Engenharia Informatica: ")
    .concat("Programação para Internet"));
  tituloRodape.appendChild(tituloRodapeText);
  divRodape.appendChild(tituloRodape);
}

/**
 * @function criarConteudoGeral
 * @param {HTMLElement} divConteudoGeral - a div com id conteudoGeral.
 * @param {Gestor} gestor - o gestor do sistema.
 * @param {string} menu - o menu do tipo texto.
 * @description Funcao para criar conteudo geral.
 */
function criarConteudoGeral(divConteudoGeral, gestor, menu) {
  switch (menu) {
    case "HOME":
      criarConteudoHome(divConteudoGeral);
      break;
    case "JOGADORES":
      criarConteudoJogadores(divConteudoGeral, gestor, menu);
      break;
    case "EQUIPAS":
      criarConteudoEquipas(divConteudoGeral, gestor, menu);
      break;
    case "LIGAS":
      criarConteudoCompeticaoLiga(divConteudoGeral, gestor, menu);
      break;
    case "TAÇAS":
      criarConteudoCompeticaoTaca(divConteudoGeral, gestor, menu);
      break;
  }
}

/**
 * @function criarConteudoHome
 * @param {HTMLElement} divConteudoGeral - a div com id conteudoGeral.
 * @param {Gestor} gestor - o gestor do sistema.
 * @description Funcao para criar conteudo Home.
 */
function criarConteudoHome(divConteudoGeral) {

  criarTituloDoConteudo("GESTOR DE COMPETIÇÕES DE FUTEBOL", divConteudoGeral);

  var img1 = document.createElement("img");
  img1.src = "images/home.png"
  img1.id = "home";
  img1.style.height = "80%";
  divConteudoGeral.appendChild(img1);

  var img2 = document.createElement("img");
  img2.src = "images/logo.png"
  img2.id = "logo";
  img2.style.height = "80%";
  divConteudoGeral.appendChild(img2);
}

/**
 * @function criarConteudoJogadores
 * @param {HTMLElement} divConteudoGeral - a div com id conteudoGeral.
 * @param {Gestor} gestor - o gestor do sistema.
 * @param {string} menu - o menu do tipo texto.
 * @description Funcao para criar conteudo dos jogadores.
 */
function criarConteudoJogadores(divConteudoGeral, gestor, menu) {

  var section = document.createElement("section");
  section.id = "sectionJogador";

  var divContainer = document.createElement("div");
  divContainer.className = "container";

  var divTabela = document.createElement("div");
  divTabela.className = "divTabela";

  var table = document.createElement("table");
  table.className = "tabela";

  var thead = document.createElement("thead");
  //criar cabeçalho da tabela
  cabecalhoTabela(thead, menu, "Nome", "País", "Posição", "Altura", "Idade");

  var tbody = document.createElement("tbody");
  //criar corpo da tabela
  corpoTabela(tbody, gestor, menu);

  table.appendChild(thead);
  table.appendChild(tbody);
  divTabela.appendChild(table);
  divContainer.appendChild(divTabela);
  section.appendChild(divContainer);
  divConteudoGeral.appendChild(section);

  criarButtonGeral(divConteudoGeral, gestor, menu);
}

/**
 * @function cabecalhoTabela
 * @param {HTMLElement} thead - o cabecalho da tabela.
 * @param {string} menu - o menu do tipo texto.
 * @param {string} label1 - um texto.
 * @param {string} label2 - um texto.
 * @param {string} label3 - um texto.
 * @param {string} label4 - um texto.
 * @param {string} label5 - um texto.
 * @description Funcao para criar cabeçalho da tabela.
 */
function cabecalhoTabela(thead, menu, label1, label2, label3, label4, label5) {
  var tr, th1, th2, th3, th4, th5, th6, th7;
  var div1, div2, div3, div4, div5, div6, div7;

  for (var i = 0; i < LINHA; i++) { //LINHA
    tr = document.createElement("tr");
    for (var j = 0; j < COLUNA; j++) { //coluna
      switch (menu) {
        case "JOGADORES":
        case "EQUIPAS":

          div1 = document.createElement("div");
          th1 = document.createElement("th");
          th1.appendChild(div1);
          tr.appendChild(th1);

          div2 = document.createElement("div");
          div2.appendChild(document.createTextNode(label1));

          th2 = document.createElement("th");
          th2.appendChild(div2);
          tr.appendChild(th2);

          div3 = document.createElement("div");
          div3.appendChild(document.createTextNode(label2));

          th3 = document.createElement("th");
          th3.appendChild(div3);
          tr.appendChild(th3);

          div4 = document.createElement("div");
          div4.appendChild(document.createTextNode(label3));

          th4 = document.createElement("th");
          th4.appendChild(div4);
          tr.appendChild(th4);

          div5 = document.createElement("div");
          div5.appendChild(document.createTextNode(label4));

          th5 = document.createElement("th");
          th5.appendChild(div5);
          tr.appendChild(th5);

          div6 = document.createElement("div");
          div6.appendChild(document.createTextNode(label5));

          th6 = document.createElement("th");
          th6.appendChild(div6);
          tr.appendChild(th6);
          break;
        case "LIGAS":
        case "TAÇAS":
          div1 = document.createElement("div");
          th1 = document.createElement("th");
          th1.appendChild(div1);
          tr.appendChild(th1);

          div2 = document.createElement("div");
          div2.appendChild(document.createTextNode(label1));

          th2 = document.createElement("th");
          th2.appendChild(div2);
          tr.appendChild(th2);

          div3 = document.createElement("div");
          div3.appendChild(document.createTextNode(label2));

          th3 = document.createElement("th");
          th3.appendChild(div3);
          tr.appendChild(th3);

          div4 = document.createElement("div");
          div4.appendChild(document.createTextNode(label3));

          th4 = document.createElement("th");
          th4.appendChild(div4);
          tr.appendChild(th4);
          break;
      }
    }
    thead.appendChild(tr);
  }
}

/**
 * @function corpoTabela
 * @param {HTMLElement} tbody - o corpo da tabela.
 * @param {Gestor} gestor - o gestor do sistema.
 * @param {string} menu - o menu do tipo texto.
 * @description Funcao para criar corpo da tabela.
 */
function corpoTabela(tbody, gestor, menu) {
  var tr, td1, td2, td3, td4, td5, td6, checkbox, divCheckBox, textoCheckBox;
  //obter jogadores ordenados por nome
  var jogadores = gestor.jogadores.sort(compare("nome"));
  //obter equipas ordenados por nome
  var equipas = gestor.equipas.sort(compare("nome"));

  switch (menu) {
    case "JOGADORES":
      for (var i = 0; i < jogadores.length; i++) { //obter jogadores
        tr = document.createElement("tr"); //cria uma LINHA
        for (var j = 0; j < COLUNA; j++) { //coluna 
          divCheckBox = document.createElement("div");
          divCheckBox.id = "divCheckBoxJogador";
          divCheckBox.style.textAlign = "left";

          checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.name = jogadores[i].nome;
          checkbox.id = jogadores[i].nome;
          checkbox.value = ""; //duvida

          textoCheckBox = document.createTextNode(checkbox.value);

          divCheckBox.appendChild(checkbox);
          divCheckBox.appendChild(textoCheckBox);

          td1 = document.createElement("td");
          td1.appendChild(divCheckBox);
          tr.appendChild(td1);

          td2 = document.createElement("td");
          td2.appendChild(document.createTextNode(jogadores[i].nome));
          tr.appendChild(td2);

          td3 = document.createElement("td");
          td3.appendChild(document.createTextNode(jogadores[i].pais));
          tr.appendChild(td3);

          td4 = document.createElement("td");
          td4.appendChild(document.createTextNode(jogadores[i].posicao));
          tr.appendChild(td4);

          td5 = document.createElement("td");
          td5.appendChild(document.createTextNode(jogadores[i].altura));
          tr.appendChild(td5);

          td6 = document.createElement("td");
          td6.appendChild(document.createTextNode(jogadores[i].idade));
          tr.appendChild(td6);
        }
        tbody.appendChild(tr);
      }
      break;
    case "EQUIPAS":
      for (var i = 0; i < gestor.equipas.length; i++) { //obter equipas
        tr = document.createElement("tr"); //cria uma LINHA
        for (var j = 0; j < COLUNA; j++) { //coluna 

          divCheckBox = document.createElement("div");
          divCheckBox.id = "divCheckBoxEquipa";
          divCheckBox.style.textAlign = "left";

          checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.name = equipas[i].nome;
          checkbox.id = checkbox.name;
          checkbox.value = "";

          textoCheckBox = document.createTextNode(checkbox.value);

          divCheckBox.appendChild(checkbox);
          divCheckBox.appendChild(textoCheckBox);

          td1 = document.createElement("td");
          td1.style.className = "center";
          td1.appendChild(divCheckBox);
          tr.appendChild(td1);

          td2 = document.createElement("td");
          td2.appendChild(document.createTextNode(equipas[i].nome));
          tr.appendChild(td2);

          td3 = document.createElement("td");
          td3.appendChild(document.createTextNode(equipas[i].acronimo));
          tr.appendChild(td3);

          td4 = document.createElement("td");
          td4.appendChild(document.createTextNode(equipas[i].urlSite));
          tr.appendChild(td4);

          td5 = document.createElement("td");
          td5.appendChild(document.createTextNode(equipas[i].pais));
          tr.appendChild(td5);

          td6 = document.createElement("td");
          td6.appendChild(document.createTextNode(equipas[i].valido));
          tr.appendChild(td6);
        }
        tbody.appendChild(tr);
      }
      break;
    case "LIGAS":
      for (var i = 0; i < gestor.ligas.length; i++) { //obter equipas
        tr = document.createElement("tr"); //cria uma LINHA
        for (var j = 0; j < COLUNA; j++) { //coluna 

          divCheckBox = document.createElement("div");
          divCheckBox.id = "divCheckBoxLiga";
          divCheckBox.style.textAlign = "left";

          checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.name = gestor.ligas[i].nome;
          checkbox.id = checkbox.name;
          checkbox.value = "";

          textoCheckBox = document.createTextNode(checkbox.value);

          divCheckBox.appendChild(checkbox);
          divCheckBox.appendChild(textoCheckBox);

          td1 = document.createElement("td");
          td1.style.className = "center";
          td1.appendChild(divCheckBox);
          tr.appendChild(td1);

          td2 = document.createElement("td");
          td2.appendChild(document.createTextNode(gestor.ligas[i].nome));
          tr.appendChild(td2);

          td3 = document.createElement("td");
          td3.appendChild(document.createTextNode(gestor.ligas[i].edicao));
          tr.appendChild(td3);

          td4 = document.createElement("td");
          td4.appendChild(document.createTextNode(gestor.ligas[i].vencedor));
          tr.appendChild(td4);
        }
        tbody.appendChild(tr);
      }
      break;
    case "TAÇAS":
      for (var i = 0; i < gestor.tacas.length; i++) { //obter equipas
        tr = document.createElement("tr"); //cria uma LINHA
        for (var j = 0; j < COLUNA; j++) { //coluna 

          divCheckBox = document.createElement("div");
          divCheckBox.id = "divCheckBoxTaca";
          divCheckBox.style.textAlign = "left";

          checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.name = gestor.tacas[i].nome;
          checkbox.id = checkbox.name;
          checkbox.value = "";

          textoCheckBox = document.createTextNode(checkbox.value);

          divCheckBox.appendChild(checkbox);
          divCheckBox.appendChild(textoCheckBox);

          td1 = document.createElement("td");
          td1.style.className = "center";
          td1.appendChild(divCheckBox);
          tr.appendChild(td1);

          td2 = document.createElement("td");
          td2.appendChild(document.createTextNode(gestor.tacas[i].nome));
          tr.appendChild(td2);

          td3 = document.createElement("td");
          td3.appendChild(document.createTextNode(gestor.tacas[i].edicao));
          tr.appendChild(td3);

          td4 = document.createElement("td");
          td4.appendChild(document.createTextNode(gestor.tacas[i].vencedor));
          tr.appendChild(td4);
        }
        tbody.appendChild(tr);
      }
      break;
  }
}

/**
 * @function validarDadosJogador
 * @param {string} nome - o nome do jogador.
 * @param {string} dataNascimento - a dataNascimento do jogador.
 * @param {string} pais - o pais do jogador.
 * @param {number} altura - a altura do jogador.
 * @param {string} posicao - a posicao do jogador.
 * @returns {number} 1 - se for verdadeira
 * @description Funcao para validar dados do jogador.
 */
function validarDadosJogador(nome, dataNascimento, pais, altura, posicao) {
  //se nome for vazia
  if (!nome) {
    alert("ERRO: Falta preencher o nome");
    return;
    //se dataNascimento for vazia
  } else if (!dataNascimento) {
    alert("ERRO: Falta preencher a data de nascimento");
    return;
    //se país for vazia
  } else if (!pais) {
    alert("ERRO: Falta preencher o País");
    return;
    //se altura menor que 1 metro ou vazia
  } else if ((altura < 1.0) || (!altura)) {
    alert("ERRO: Altura Inválida");
    return;
    //se posicao não for vazia
  } else if (!posicao) {
    alert("ERRO: Falta escolher posição do jogador");
    return;
  } else {
    return 1;
  }
}

/**
 * @function criarJogador
 * @description Funcao receber os dados preenchidos, valida e insere no array jogador
 */
function criarJogador() {
  var nome = document.getElementById("nome").value;
  var dataNascimento = document.getElementById("dataNascimento").value;
  var pais = document.getElementById("pais").value;
  var altura = document.getElementById("altura").value;
  var posicao = document.getElementById("posicao").value;
  if (validarDadosJogador(nome, dataNascimento, pais, altura, posicao) == 1) {
    Gestor.omissao().gravarDadosDoJogador(nome, dataNascimento, pais, altura, posicao);
  }
  voltarMenuJogador();
}

/**
 * @function voltarMenuJogador
 * @description Funcao volta para o menu jogadores
 */
function voltarMenuJogador() {
  var divConteudoGeral = document.getElementById("conteudoGeral");
  limparDivConteudoGeral(divConteudoGeral);
  criarConteudoGeral(divConteudoGeral, Gestor.omissao(), "JOGADORES");
}

/**
 * @function buttonJogador
 * @param {HTMLElement} divConteudoGeral -  a div com id conteudoGeral.
 * @param {Gestor} gestor - o gestor do sistema.
 * @param {string} menu - o menu do tipo texto.
 * @param {HTMLElement} divButton -  a div com id divButton.
 * @description Funcao para criar button para menu jogador.
 */
function buttonJogador(divConteudoGeral, gestor, menu, divButton) {
  var btnAdicionar = document.createElement("button");
  btnAdicionar.appendChild(document.createTextNode("Adicionar"));
  btnAdicionar.onclick = function () {
    //obter a secção
    var seccao = document.getElementById("sectionJogador");
    alert("2 - " + seccao.id);
    //obter a div button geral
    alert("3 - " + divButton.id);
    //obter a div com formulario jogador da erro e não retorna nada
    var formularioJogador = document.getElementById("divFormularioJogador");
    alert("4 - " + formularioJogador.id);

    //se forem diferente de none
    if (seccao.style.display !== 'none' && divButton.style.display !== 'none') {
      alert("5");
      //altera a sua visibilidade para none
      seccao.style.display = 'none';
      alert("6");
      //altera a sua visibilidade para none
      divButton.style.display = 'none';
      alert("7");
      if (seccao.style.display === 'none' && divButton.style.display === 'none') {
        alert("8");
        //altera a sua visibilidade para block
        formularioJogador.style.display = 'block';
        alert("9");
      }
    }
  }
  var btnEditar = document.createElement("button");
  btnEditar.appendChild(document.createTextNode("Editar"));
  btnEditar.onclick = function () {
    var jogador = gestor.obterCheckBoxJogador();
    if (jogador !== void 0) {
      //obter a secção
      var seccao = document.getElementById("sectionJogador");
      //obter a div com formulario jogador 
      var formularioJogador = document.getElementById("divFormularioJogador");
      //se forem diferente de none
      if (seccao.style.display !== 'none' && divButton.style.display !== 'none') {
        //altera a sua visibilidade para none
        seccao.style.display = 'none';
        //altera a sua visibilidade para none
        divButton.style.display = 'none';
        if (seccao.style.display === 'none' && divButton.style.display === 'none' && formularioJogador.style.display === 'none') {
          //altera a sua visibilidade para block
          formularioJogador.style.display = 'block';
        }
      }
    } else {
      alert("Falta selecionar o jogador");
    }
  }
  var btnRemover = document.createElement("button");
  btnRemover.appendChild(document.createTextNode("Remover"));
  btnRemover.onclick = function () {
    gestor.removerJogador();
    limparDivConteudoGeral(divConteudoGeral);
    criarConteudoGeral(divConteudoGeral, gestor, menu);
  }

  divButton.appendChild(document.createElement("br"));
  divButton.appendChild(btnAdicionar);
  divButton.appendChild(btnEditar);
  divButton.appendChild(btnRemover);
}

/**
 * @function criarButtonGeral
 * @param {HTMLElement} divConteudoGeral -  a div com id conteudoGeral.
 * @param {Gestor} gestor - o gestor do sistema.
 * @param {string} menu - o menu do tipo texto.
 * @description Funcao para criar button adicionar, editar e remover
 */
function criarButtonGeral(divConteudoGeral, gestor, menu) {
  var divButton = document.createElement("div");
  divButton.id = "divButtonGeral";
  switch (menu) {
    case "JOGADORES":
      buttonJogador(divConteudoGeral, gestor, menu, divButton);
      break;
    case "EQUIPAS":
      buttonEquipa(divConteudoGeral, gestor, menu, divButton);
      break;
    case "LIGAS":
      buttonCompeticaoLiga(divConteudoGeral, gestor, menu, divButton);
      break;
    case "TAÇAS":
      buttonCompeticaoTaca(divConteudoGeral, gestor, menu, divButton);
      break;
  }
  divConteudoGeral.appendChild(divButton);
}

/**
 * @function buttonEquipa
 * @param {HTMLElement} divConteudoGeral -  a div com id conteudoGeral.
 * @param {Gestor} gestor - o gestor do sistema.
 * @param {string} menu - o menu do tipo texto.
 * @param {HTMLElement} divButton -  a div com id divButton.
 * @description Funcao para criar button para menu equipa.
 */
function buttonEquipa(divConteudoGeral, gestor, menu, divButton) {
  var btnAdicionar = document.createElement("button");
  btnAdicionar.appendChild(document.createTextNode("Adicionar"));
  btnAdicionar.onclick = function () {
    //obter a secção
    var seccao = document.getElementById("sectionEquipa");
    //obter a div com formulario equipa 
    var formularioEquipa = document.getElementById("divFormularioEquipa");
    //se forem diferente de none
    if (seccao.style.display !== 'none' && divButton.style.display !== 'none') {
      //altera a sua visibilidade para none
      seccao.style.display = 'none';
      //altera a sua visibilidade para none
      divButton.style.display = 'none';
      if (seccao.style.display === 'none' && divButton.style.display === 'none' && formularioEquipa.style.display === 'none') {
        //altera a sua visibilidade para block
        formularioEquipa.style.display = 'block';
      }
    }
  }
  var btnEditar = document.createElement("button");
  btnEditar.appendChild(document.createTextNode("Editar"));
  btnEditar.onclick = function () {
    var equipa = gestor.obterCheckBoxEquipa();
    if (equipa !== void 0) {
      //obter a secção
      var seccao = document.getElementById("sectionEquipa");
      //obter a div com formulario equipa 
      var formularioEquipa = document.getElementById("divFormularioEquipa");
      //se forem diferente de none
      if (seccao.style.display !== 'none' && divButton.style.display !== 'none') {
        //altera a sua visibilidade para none
        seccao.style.display = 'none';
        //altera a sua visibilidade para none
        divButton.style.display = 'none';
        if (seccao.style.display === 'none' && divButton.style.display === 'none' && formularioEquipa.style.display === 'none') {
          //altera a sua visibilidade para block
          formularioEquipa.style.display = 'block';
        }
      }
    }
    else {
      alert("Falta selecionar a equipa");
    }
  }
  var btnRemover = document.createElement("button");
  btnRemover.appendChild(document.createTextNode("Remover"));
  btnRemover.onclick = function () {
    gestor.removerEquipa();
    limparDivConteudoGeral(divConteudoGeral);
    criarConteudoGeral(divConteudoGeral, gestor, menu);
  }
  divButton.appendChild(document.createElement("br"));
  divButton.appendChild(btnAdicionar);
  divButton.appendChild(btnEditar);
  divButton.appendChild(btnRemover);
}

/**
 * @function criarConteudoEquipas
 * @param {HTMLElement} divConteudoGeral - a div com id conteudoGeral.
 * @param {Gestor} gestor - o gestor do sistema.
 * @param {string} menu - o menu do tipo texto.
 * @description Funcao para criar conteudo das equipas.
 */
function criarConteudoEquipas(divConteudoGeral, gestor, menu) {

  var section = document.createElement("section");
  section.id = "sectionEquipa";

  var divContainer = document.createElement("div");
  divContainer.className = "container";

  var divTabela = document.createElement("div");
  divTabela.className = "divTabela";

  var table = document.createElement("table");
  table.className = "tabela";

  var thead = document.createElement("thead");
  //criar cabeçalho da tabela
  cabecalhoTabela(thead, menu, "Nome", "Acronimo", "Url", "País", "Valido");

  var tbody = document.createElement("tbody");
  //criar corpo da tabela
  corpoTabela(tbody, gestor, menu);

  table.appendChild(thead);
  table.appendChild(tbody);
  divTabela.appendChild(table);
  divContainer.appendChild(divTabela);
  section.appendChild(divContainer);
  divConteudoGeral.appendChild(section);

  criarButtonGeral(divConteudoGeral, gestor, menu);
}

/**
 * @function obterPaisPorNome
 * @param {string} nome - o nome do pais.
 * @returns {number} O resultado obtido sera igual a posicao no array tipo de pais.
 * @description Funcao para obter a posicao do pais pelo nome opcional.
 */
function obterPaisPorNome(nome) {
  for (var i = 0; i < TipoPais.length; i++) {
    if (nome === TipoPais[i].value)
      return i;
  }
}

/**
 * @function validarDadosEquipa
 * @param {string} nome - o nome do jogador.
 * @param {string} acronimo - o acronimo da equipa.
 * @param {string} pais -  opais da equipa.
 * @param {number} urlSite - a urlSite da equipa.
 * @param {string} descricao - a descricao da equipa.
 * @returns {number} 1 - se for verdadeira
 * @description Funcao para validar dados da equipa.
 */
function validarDadosEquipa(nome, acronimo, pais, url, descricao) {
  //se nome for vazia
  if (!nome) {
    alert("ERRO: Falta preencher o nome");
    return;
    //se acoronimo for vazia
  } else if (!acronimo) {
    alert("ERRO: Falta preencher o acronimo");
    return;
    //se país for vazia
  } else if (!pais) {
    alert("ERRO: Falta preencher o País");
    return;
    //se url for vazia
  } else if (!url) {
    alert("ERRO: Falta preencher o Url");
    return;
    //se descricao não for vazia
  } else if (!descricao) {
    alert("ERRO: Falta preencher a descrição");
    return;
  } else {
    return 1;
  }
}

/**
 * @function criarEquipa
 * @description Funcao receber os dados preenchidos, valida e insere no array equipas
 */
function criarEquipa() {
  var nome = document.getElementById("nome").value;
  var acronimo = document.getElementById("acronimo").value;
  var pais = document.getElementById("pais").value;
  var url = document.getElementById("url").value;
  var descricao = document.getElementById("descricao").value;
  if (validarDadosEquipa(nome, acronimo, pais, url, descricao) == 1) {
    Gestor.omissao().gravarDadosDaEquipa(nome, acronimo, pais, url, descricao);
  }
  voltarMenuEquipa();
}

/**
 * @function voltarMenuEquipa
 * @description Funcao volta para o menu equipas
 */
function voltarMenuEquipa() {
  var divConteudoGeral = document.getElementById("conteudoGeral");
  limparDivConteudoGeral(divConteudoGeral);
  criarConteudoGeral(divConteudoGeral, Gestor.omissao(), "EQUIPAS");
}

/**
 * @function criarConteudoCompeticaoLiga
 * @param {HTMLElement} divConteudoGeral - a div com id conteudoGeral.
 * @param {Gestor} gestor - o gestor do sistema.
 * @param {string} menu - o menu do tipo texto.
 * @description Funcao para criar conteudo da competicao liga.
 */
function criarConteudoCompeticaoLiga(divConteudoGeral, gestor, menu) {

  var section = document.createElement("section");
  section.id = "sectionLiga";

  var divContainer = document.createElement("div");
  divContainer.className = "container";

  var divTabela = document.createElement("div");
  divTabela.className = "divTabela";

  var table = document.createElement("table");
  table.className = "tabela";

  var thead = document.createElement("thead");
  //criar cabeçalho da tabela
  cabecalhoTabela(thead, menu, "Nome", "Edição", "Vencedor", "", "", "");

  var tbody = document.createElement("tbody");
  //criar corpo da tabela
  corpoTabela(tbody, gestor, menu);

  table.appendChild(thead);
  table.appendChild(tbody);
  divTabela.appendChild(table);
  divContainer.appendChild(divTabela);
  section.appendChild(divContainer);
  divConteudoGeral.appendChild(section);

  criarButtonGeral(divConteudoGeral, gestor, menu);
}

/**
 * @function validarDadosCompeticao
 * @param {string} nome - o nome da competicao.
 * @param {string} edicao - a edicao da competicao.
 * @param {number} totalEquipas - o total de equipas na competicao.
 * @returns {number} 1 - se for verdadeira
 * @description Funcao para validar dados da competicao.
 */
function validarDadosCompeticao(nome, edicao, totalEquipas) {
  //se nome for vazia
  if (!nome) {
    alert("ERRO: Falta preencher o nome");
    return;
    //se edicao for vazia
  } else if (!edicao) {
    alert("ERRO: Falta preencher a edição");
    return;
    //se numero de equipa
  } else if (!totalEquipas) {
    alert("ERRO: Falta preencher o total de equipas");
    return;
    //ou se numero de equipa é menor que dois ou impar 
  } else if ((totalEquipas < 2) || (totalEquipas % 2 !== 0)) {
    alert("ERRO: Numero de equipas tem de ser par e maior que zero");
    return;
  } else {
    return 1;
  }
}

/**
 * @function criarLiga
 * @description Funcao receber os dados preenchidos, valida e insere no array ligas
 */
function criarLiga() {
  var nome = document.getElementById("nome").value;
  var edicao = document.getElementById("edicao").value;
  var totalEquipas = document.getElementById("totalEquipas").value;
  if (validarDadosCompeticao(nome, edicao, totalEquipas) == 1) {
    Gestor.omissao().gravarDadosDaLiga(nome, edicao, totalEquipas);
    formularioLiga.style.display = 'none';
  }
  voltarMenuLiga();
}
/**
 * @function voltarMenuLiga
 * @description Funcao volta para o menu liga
 */
function voltarMenuLiga() {
  var divConteudoGeral = document.getElementById("conteudoGeral");
  limparDivConteudoGeral(divConteudoGeral);
  criarConteudoGeral(divConteudoGeral, Gestor.omissao(), "LIGAS");
}

/**
* @function buttonCompeticaoLiga
* @param {HTMLElement} divConteudoGeral -  a div com id conteudoGeral.
* @param {Gestor} gestor - o gestor do sistema.
* @param {string} menu - o menu do tipo texto.
* @param {HTMLElement} divButton -  a div com id divButton.
* @description Funcao para criar button para menu liga.
*/
function buttonCompeticaoLiga(divConteudoGeral, gestor, menu, divButton) {

  var btnAdicionar = document.createElement("button");
  btnAdicionar.appendChild(document.createTextNode("Adicionar"));
  btnAdicionar.onclick = function () {
    //obter a secção
    var seccao = document.getElementById("sectionLiga");
    //obter a div com formulario liga 
    var formularioLiga = document.getElementById("divFormularioLiga");
    //se forem diferente de none
    if (seccao.style.display !== 'none' && divButton.style.display !== 'none') {
      //altera a sua visibilidade para none
      seccao.style.display = 'none';
      //altera a sua visibilidade para none
      divButton.style.display = 'none';
      if (seccao.style.display === 'none' && divButton.style.display === 'none' && formularioLiga.style.display === 'none') {
        //altera a sua visibilidade para block
        formularioLiga.style.display = 'block';
      }
    }
  }

  var btnEditar = document.createElement("button");
  btnEditar.appendChild(document.createTextNode("Editar"));
  btnEditar.onclick = function () {
    var liga = gestor.obterCheckBoxLiga();
    if (liga !== void 0) {
      //obter a secção
      var seccao = document.getElementById("sectionLiga");
      //obter a div com formulario liga 
      var formularioLiga = document.getElementById("divFormularioLiga");
      //se forem diferente de none
      if (seccao.style.display !== 'none' && divButton.style.display !== 'none') {
        //altera a sua visibilidade para none
        seccao.style.display = 'none';
        //altera a sua visibilidade para none
        divButton.style.display = 'none';
        if (seccao.style.display === 'none' && divButton.style.display === 'none' && formularioLiga.style.display === 'none') {
          //altera a sua visibilidade para block
          formularioLiga.style.display = 'block';
        }
      }
    } else {
      alert("Falta selecionar a liga");
    }
  }

  var btnRemover = document.createElement("button");
  btnRemover.appendChild(document.createTextNode("Remover"));
  btnRemover.onclick = function () {
    gestor.removerLiga();
    limparDivConteudoGeral(divConteudoGeral);
    criarConteudoGeral(divConteudoGeral, gestor, menu);
  }

  var btnDetalhes = document.createElement("button");
  btnDetalhes.appendChild(document.createTextNode("Detalhes"));
  btnDetalhes.onclick = function () {
    var liga = gestor.obterCheckBoxLiga();

    if (liga.vencedor !== "Competição em curso") {
      alert("Não é possível mostrar os detalhes porque a competição não está curso");
      limparDivConteudoGeral(divConteudoGeral);
      criarConteudoGeral(divConteudoGeral, gestor, menu);
    } else {
      limparDivConteudoGeral(divConteudoGeral);
      mostrarDetalhesLiga(divConteudoGeral, gestor, menu, liga);
    }

  }
  divButton.appendChild(document.createElement("br"));
  divButton.appendChild(btnAdicionar);
  divButton.appendChild(btnEditar);
  divButton.appendChild(btnRemover);
  divButton.appendChild(btnDetalhes);
}

/**
 * @function mostrarDetalhesLiga
 * @param {HTMLElement} divConteudoGeral -  a div com id conteudoGeral.
 * @param {Gestor} gestor - o gestor do sistema.
 * @param {string} menu - o menu do tipo texto.
 * @param {Liga} liga -  a competicao liga.
 * @description Funcao para criar mostrar detalhes da liga.
 */
function mostrarDetalhesLiga(divConteudoGeral, gestor, menu, liga) {

  var divTabela = document.createElement("div");
  divTabela.className = "divTabela";

  var table = document.createElement("table");
  table.className = "tabela";

  var thead = document.createElement("thead");
  //criar cabeçalho da tabela
  cabecalhoTabelaDetalhesLiga(thead, "Nome", "Pontos", "Golos marcados", "Golos Sofridos");

  var tbody = document.createElement("tbody");
  //criar corpo da tabela
  corpoTabelaDetalhesLiga(tbody, liga);

  table.appendChild(thead);
  table.appendChild(tbody);
  divTabela.appendChild(table);

  var detalhesJornadas = document.createElement("div");
  detalhesJornadas.appendChild(divTabela);

  mostrarJornadas(divConteudoGeral, gestor, menu, detalhesJornadas, liga);
  divConteudoGeral.appendChild(detalhesJornadas);
}

/**
 * @function cabecalhoTabelaDetalhesLiga
 * @param {HTMLElement} thead - o cabecalho da tabela.
 * @param {string} label1 - um texto.
 * @param {string} label2 - um texto.
 * @param {string} label3 - um texto.
 * @param {string} label4 - um texto.
 * @description Funcao para criar cabeçalho da tabela.
 */
function cabecalhoTabelaDetalhesLiga(thead, label1, label2, label3, label4) {
  for (var i = 0; i < LINHA; i++) { //linha
    var tr = document.createElement("tr");
    for (var j = 0; j < COLUNA; j++) { //coluna
      var th1 = document.createElement("th");
      th1.appendChild(document.createTextNode(label1));
      th1.style.color = "blue";
      tr.appendChild(th1);

      var th2 = document.createElement("th");
      th2.appendChild(document.createTextNode(label2));
      th2.style.color = "blue";
      tr.appendChild(th2);

      var th3 = document.createElement("th");
      th3.appendChild(document.createTextNode(label3));
      th3.style.color = "blue";
      tr.appendChild(th3);

      var th4 = document.createElement("th");
      th4.appendChild(document.createTextNode(label4));
      th4.style.color = "blue";
      tr.appendChild(th4);
    }
    thead.appendChild(tr);
  }
}

/**
 * @function corpoTabelaDetalhesLiga
 * @param {HTMLElement} tbody - o corpo da tabela.
 * @param {Liga} liga - a competicao liga.
 * @description Funcao para criar corpo da tabela.
 */
function corpoTabelaDetalhesLiga(tbody, liga) {
  for (var i = 0; i < liga.equipas.length; i++) { //obter jogadores
    var tr = document.createElement("tr"); //linha
    for (var j = 0; j < COLUNA; j++) { //coluna 
      var td1 = document.createElement("td");
      td1.appendChild(document.createTextNode(liga.equipas[i].nome));
      tr.appendChild(td1);

      var td2 = document.createElement("td");
      td2.appendChild(document.createTextNode(liga.equipas[i].pontos));
      tr.appendChild(td2);

      var td3 = document.createElement("td");
      td3.appendChild(document.createTextNode(liga.equipas[i].golosMarcados));
      tr.appendChild(td3);

      var td4 = document.createElement("td");
      td4.appendChild(document.createTextNode(liga.equipas[i].golosSofridos));
      tr.appendChild(td4);
    }
    tbody.appendChild(tr);
  }
}

/**
 * @function mostrarJornadas
 * @param {HTMLElement} divConteudoGeral -  a div com id conteudoGeral.
 * @param {Gestor} gestor - o gestor do sistema.
 * @param {string} menu - o menu do tipo texto.
 * @param {HTMLElement} detalhesJornadas -  a div com id detalhesJornadas.
 * @param {Liga} liga - a competicao liga.
 * @description Funcao para mostrar jornadas.
 */
function mostrarJornadas(divConteudoGeral, gestor, menu, detalhesJornadas, liga) {

  var btnSimular = document.createElement("button");
  btnSimular.appendChild(document.createTextNode("Simular"));
  btnSimular.onclick = function () {
    alert("Simular Resultados, não foi implementada");
    limparDivConteudoGeral(divConteudoGeral);
    criarConteudoGeral(divConteudoGeral, gestor, menu);
  }

  var divButton = document.createElement("div");
  divButton.id = "divButtonSimularLiga";
  divButton.style.textAlign = "right";
  divButton.appendChild(btnSimular);

  var divJornadas = document.createElement("div");
  divJornadas.id = "divJornadas";
  //cria jornada 1ª volta
  criarJornadaPrimeiraVolta(divJornadas, liga);
  //loop para passar para nova linha
  for (var i = 0; i < 6; i++) {
    divJornadas.appendChild(document.createElement("br"));
  }
  //cria jornada 2ª volta
  criarJornadaSegundaVolta(divJornadas, liga)

  //loop para passar para nova linha
  for (var i = 0; i < 11; i++) {
    //divJornadas.appendChild(document.createElement("br"));
  }
  divJornadas.appendChild(divButton);
  detalhesJornadas.appendChild(divJornadas);
}

/**
 * @function factorial
 * @param {number} num - o valor a ser calculado.
 * @param {string} nomeJogador - o nome do jogador.
 * @return {number} i - o valor calculado
 * @description Funcao para calcular factorial.
 */
function factorial(num) {
  var i = 1;
  while (num !== 1) {
    i *= num;
    num--;
  }
  return i;
}

/**
 * @function procuraEquipa
 * @param {Array} listaEquipa - a lista de equipas.
 * @returns {number} i ou -1
 * @description Funcao para procurar equipa numa lista.
 */
function procuraEquipa(listaEquipa) {
  for (var i = 0; i < listaEquipa.length; i++) {
    if (listaEquipa[i] === 0) {
      return i;
    }
  }
  return -1;
}

/**
 * @function criarJornadaPrimeiraVolta
 * @param {HTMLElement} divJornadas -  a div com id divJornadas.
 * @param {Liga} liga - a competicao liga.
 * @description Funcao para criar jornada da 1ª volta.
 */
function criarJornadaPrimeiraVolta(divJornadas, liga) {
  var arrayEquipa = [];
  var combinarEquipa = (factorial(liga.equipas.length)) / (2 * factorial(liga.equipas.length - 2));
  var totalJogos = combinarEquipa / (liga.equipas.length / 2);

  for (var i = 0; i < liga.equipas.length; i++) {
    arrayEquipa[i] = 0;
  }

  var divTabela = document.createElement("div");
  divTabela.className = "divTabela";
  divTabela.style.textAlign = "center";

  for (var j = 1; j <= totalJogos; j++) {

    var table = document.createElement("table");
    table.id = "tabela"
    table.style.backgroundColor = "white";
    table.style.cssFloat = "left";
    table.style.width = "13%";

    var caption = document.createElement("caption");
    caption.style.color = "darkgreen";
    caption.style.fontSize = "15px";
    caption.textContent = "Jornada nº" + j;
    table.appendChild(caption);

    var tbody = document.createElement("tbody");

    var equipaEmCasa1 = liga.equipas[0].acronimo
    var equipaFora1 = liga.equipas[j].acronimo;
    corpoTabelaJornada(tbody, equipaEmCasa1, equipaFora1);

    arrayEquipa[0] = 1;
    arrayEquipa[j] = 1;

    for (var k = 2; k <= liga.equipas.length / 2; k++) {

      var w = procuraEquipa(arrayEquipa);
      arrayEquipa[w] = 1;

      var z = procuraEquipa(arrayEquipa);
      arrayEquipa[z] = 1;

      var equipaEmCasa2 = liga.equipas[w].acronimo
      var equipaFora2 = liga.equipas[z].acronimo;
      corpoTabelaJornada(tbody, equipaEmCasa2, equipaFora2);

      for (var i = 0; i < liga.equipas.length; i++) { //limpar 
        arrayEquipa[i] = 0;
      }
    }
    table.appendChild(tbody);
    divTabela.appendChild(table);
  }
  divJornadas.appendChild(divTabela);
}

/**
 * @function criarJornadaPrimeiraVolta
 * @param {HTMLElement} divJornadas -  a div com id divJornadas.
 * @param {Liga} liga - a competicao liga.
 * @description Funcao para criar jornada da 2ª volta.
 */
function criarJornadaSegundaVolta(divJornadas, liga) {
  var arrayEquipa = [];
  var combinarEquipa = (factorial(liga.equipas.length)) / (2 * factorial(liga.equipas.length - 2));
  var totalJogos = combinarEquipa / (liga.equipas.length / 2);
  var numeroJornada = totalJogos;

  for (var i = 0; i < liga.equipas.length; i++) {
    arrayEquipa[i] = 0;
  }

  var divTabela = document.createElement("div");
  divTabela.className = "divTabela";
  divTabela.style.textAlign = "center";

  for (var j = 1; j <= totalJogos; j++) {

    var table = document.createElement("table");
    table.id = "tabela"
    table.style.backgroundColor = "white";
    table.style.cssFloat = "left";
    table.style.width = "13%";

    var caption = document.createElement("caption");
    caption.style.color = "darkgreen";
    caption.style.fontSize = "15px";
    caption.textContent = "Jornada nº" + (numeroJornada += 1);
    table.appendChild(caption);

    var tbody = document.createElement("tbody");

    var equipaEmCasa1 = liga.equipas[j].acronimo
    var equipaFora1 = liga.equipas[0].acronimo;
    corpoTabelaJornada(tbody, equipaEmCasa1, equipaFora1);

    arrayEquipa[0] = 1;
    arrayEquipa[j] = 1;

    for (var k = 2; k <= liga.equipas.length / 2; k++) {

      var w = procuraEquipa(arrayEquipa);
      arrayEquipa[w] = 1;

      var z = procuraEquipa(arrayEquipa);
      arrayEquipa[z] = 1;

      var equipaEmCasa2 = liga.equipas[z].acronimo
      var equipaFora2 = liga.equipas[w].acronimo;
      corpoTabelaJornada(tbody, equipaEmCasa2, equipaFora2);

      for (var i = 0; i < liga.equipas.length; i++) { //limpar 
        arrayEquipa[i] = 0;
      }
    }
    table.appendChild(tbody);
    divTabela.appendChild(table);
  }
  divJornadas.appendChild(divTabela);
}

/**
 * @function corpoTabelaJornada
 * @param {HTMLElement} tbody - o corpo da tabela.
 * @param {string} equipaEmCasa - o nome da equipa que joga em casa.
 * @param {string} equipaFora - o nome da equipa que joga fora.
 * @description Funcao para criar corpo da tabela.
 */
function corpoTabelaJornada(tbody, equipaEmCasa, equipaFora) {
  for (var i = 0; i < LINHA; i++) { //obter jogadores
    var tr = document.createElement("tr"); //cria uma linha
    for (var j = 0; j < COLUNA; j++) { //coluna 
      var td1 = document.createElement("td");
      td1.appendChild(document.createTextNode(equipaEmCasa));
      tr.appendChild(td1);

      var td2 = document.createElement("td");
      td2.style.backgroundColor = "gray";
      td2.style.width = "15%";
      td2.appendChild(document.createTextNode("-|-"));
      tr.appendChild(td2);

      var td3 = document.createElement("td");
      td3.appendChild(document.createTextNode(equipaFora));
      tr.appendChild(td3);
    }
    tbody.appendChild(tr);
  }
}

/**
 * @function criarConteudoCompeticaoTaca
 * @param {HTMLElement} divConteudoGeral - a div com id conteudoGeral.
 * @param {Gestor} gestor - o gestor do sistema.
 * @param {string} menu - o menu do tipo texto.
 * @description Funcao para criar conteudo da competicao taca.
 */
function criarConteudoCompeticaoTaca(divConteudoGeral, gestor, menu) {

  var section = document.createElement("section");
  section.id = "sectionTaca";

  var divContainer = document.createElement("div");
  divContainer.className = "container";

  var divTabela = document.createElement("div");
  divTabela.className = "divTabela";

  var table = document.createElement("table");
  table.className = "tabela";

  var thead = document.createElement("thead");
  //criar cabeçalho da tabela
  cabecalhoTabela(thead, menu, "Nome", "Edição", "Vencedor", "", "", "");

  var tbody = document.createElement("tbody");
  //criar corpo da tabela
  corpoTabela(tbody, gestor, menu);

  table.appendChild(thead);
  table.appendChild(tbody);
  divTabela.appendChild(table);
  divContainer.appendChild(divTabela);
  section.appendChild(divContainer);
  divConteudoGeral.appendChild(section);

  criarButtonGeral(divConteudoGeral, gestor, menu);
}

/**
 * @function inserirEquipaNaTaca
 * @param {Gestor} gestor - o gestor do sistema.
 * @param {Taca} taca - a competicao taca.
 * @description Funcao para inserir equipas validas.
 */
function inserirEquipaNaTaca(gestor, taca) {
  //loop para passar para nova linha
  for (var i = 0; i < gestor.equipas.length; i++) {
    //se for valida
    if (gestor.equipas[i].valido === "Sim") {
      //adiciona na taça
      taca.adicionarEquipaNaCompeticao(gestor.equipas[i]);
    }
  }
}

/**
* @function buttonCompeticaoTaca
* @param {HTMLElement} divConteudoGeral -  a div com id conteudoGeral.
* @param {Gestor} gestor - o gestor do sistema.
* @param {string} menu - o menu do tipo texto.
* @param {HTMLElement} divButton -  a div com id divButton.
* @description Funcao para criar button para menu tacas.
*/
function buttonCompeticaoTaca(divConteudoGeral, gestor, menu, divButton) {

  var btnAdicionar = document.createElement("button");
  btnAdicionar.appendChild(document.createTextNode("Adicionar"));
  btnAdicionar.onclick = function () {
    //obter a secção
    var seccao = document.getElementById("sectionTaca");
    //obter a div com formulario taça 
    var formularioTaca = document.getElementById("divFormularioTaca");
    //se forem diferente de none
    if (seccao.style.display !== 'none' && divButton.style.display !== 'none') {
      //altera a sua visibilidade para none
      seccao.style.display = 'none';
      //altera a sua visibilidade para none
      divButton.style.display = 'none';
      if (seccao.style.display === 'none' && divButton.style.display === 'none' && formularioTaca.style.display === 'none') {
        //altera a sua visibilidade para block
        formularioTaca.style.display = 'block';
      }
    }
  }

  var btnEditar = document.createElement("button");
  btnEditar.appendChild(document.createTextNode("Editar"));
  btnEditar.onclick = function () {
    var taca = gestor.obterCheckBoxTaca();
    if (taca !== void 0) {
      //obter a secção
      var seccao = document.getElementById("sectionTaca");
      //obter a div com formulario taça 
      var formularioTaca = document.getElementById("divFormularioTaca");
      //se forem diferente de none
      if (seccao.style.display !== 'none' && divButton.style.display !== 'none') {
        //altera a sua visibilidade para none
        seccao.style.display = 'none';
        //altera a sua visibilidade para none
        divButton.style.display = 'none';
        if (seccao.style.display === 'none' && divButton.style.display === 'none' && formularioTaca.style.display === 'none') {
          //altera a sua visibilidade para block
          formularioTaca.style.display = 'block';
        }
      }
    } else {
      alert("Falta selecionar a taça");
    }
  }

  var btnRemover = document.createElement("button");
  btnRemover.appendChild(document.createTextNode("Remover"));
  btnRemover.onclick = function () {
    gestor.removerTaca();
    limparDivConteudoGeral(divConteudoGeral);
    criarConteudoGeral(divConteudoGeral, gestor, menu);
  }

  var btnDetalhes = document.createElement("button");
  btnDetalhes.appendChild(document.createTextNode("Detalhes"));
  btnDetalhes.onclick = function () {
    var taca = gestor.obterCheckBoxTaca();
    if (taca.vencedor === "N/A") {
      alert("Não é possível mostrar os detalhes porque a competição não está curso");
      limparDivConteudoGeral(divConteudoGeral);
      criarConteudoGeral(divConteudoGeral, gestor, menu);
    } else {
      limparDivConteudoGeral(divConteudoGeral);
      mostrarDetalhesTaca(divConteudoGeral, gestor, menu, taca);
    }
  }

  divButton.appendChild(document.createElement("br"));
  divButton.appendChild(btnAdicionar);
  divButton.appendChild(btnEditar);
  divButton.appendChild(btnRemover);
  divButton.appendChild(btnDetalhes);
}


/**
 * @function criarTaca
 * @description Funcao receber os dados preenchidos, valida e insere no array taças
 */
function criarTaca() {
  var nome = document.getElementById("nome").value;
  var edicao = document.getElementById("edicao").value;
  var totalEquipas = document.getElementById("totalEquipas").value;
  if (validarDadosCompeticao(nome, edicao, totalEquipas) == 1) {
    Gestor.omissao().gravarDadosDaTaca(nome, edicao, totalEquipas);
    formularioTaca.style.display = 'none';
  }
  voltarMenuTaca();
}

/**
 * @function voltarMenuTaca
 * @description Funcao volta para o menu taças
 */
function voltarMenuTaca() {
  var divConteudoGeral = document.getElementById("conteudoGeral");
  limparDivConteudoGeral(divConteudoGeral);
  criarConteudoGeral(divConteudoGeral, Gestor.omissao(), "TACAS");
}

/**
 * @function mostrarDetalhesTaca
 * @param {HTMLElement} divConteudoGeral -  a div com id conteudoGeral.
 * @param {Gestor} gestor - o gestor do sistema.
 * @param {string} menu - o menu do tipo texto.
 * @param {Taca} taca - a competicao taca.
 * @description Funcao para mostrar detalhes da competicao taca.
 */
function mostrarDetalhesTaca(divConteudoGeral, gestor, menu, taca) {

  var btnSimular = document.createElement("button");
  btnSimular.appendChild(document.createTextNode("Simular"));
  btnSimular.onclick = function () {
    alert("Simular Resultados, não foi implementada");
    limparDivConteudoGeral(divConteudoGeral);
    criarConteudoGeral(divConteudoGeral, gestor, menu);
  }

  var divButton = document.createElement("div");
  divButton.id = "divButtonSimularTaca";
  divButton.style.textAlign = "left";
  divButton.appendChild(btnSimular);

  var divEliminatoria = document.createElement("div");
  divEliminatoria.id = "divEliminatoria";
  divEliminatoria.style.width = "300%";

  //cria eliminatoria
  criarEliminatoria(divEliminatoria, taca);

  divEliminatoria.appendChild(document.createElement("br"));
  divEliminatoria.appendChild(divButton);
  divConteudoGeral.appendChild(divEliminatoria);
}

/**
 * @function criarEliminatoria
 * @param {HTMLElement} divConteudoGeral -  a div com id conteudoGeral.
 * @param {Taca} taca - a competicao taca.
 * @description Funcao para criar eliminatoria.
 */
function criarEliminatoria(divEliminatoria, taca) {

  var totalJogos = 1
  var quantos = taca.equipas.length / 2;

  var divTabela = document.createElement("div");
  divTabela.className = "divTabela";
  divTabela.style.textAlign = "center";

  var table = document.createElement("table");
  table.id = "tabela"
  table.style.backgroundColor = "white";
  table.style.width = "13%";

  var tbody = document.createElement("tbody");

  for (var i = 1; i <= totalJogos; i++) {

    var caption = document.createElement("caption");
    caption.id = "textoCaption";
    caption.textContent = "ELIMINATÓRIA Nº" + i;
    table.appendChild(caption);
    table.appendChild(document.createElement("br"));

    for (var j = 0; j < quantos; j++) {
      do {
        //obter posição aleatoria das 2 equipas a defrontar
        var equipa1 = Math.floor(Math.random() * taca.equipas.length);
        var equipa2 = Math.floor(Math.random() * taca.equipas.length);
        //se for diferente
        if (equipa1 != equipa2) {
          //obter equipa em casa
          var equipaEmCasa = taca.obterEquipaNaCompeticaoPelaPosicao(equipa1);
          //obter equipa adversaria
          var equipaAdversaria = taca.obterEquipaNaCompeticaoPelaPosicao(equipa2);
          //se a equipa em casa não estiver na eliminatoria
          // if ((equipaEmCasa.existeEquipa === "Não")
          //se a equipa adversaria não estiver na eliminatoria
          //&& (equipaAdversaria.existeEquipa === "Não")) {
          //altera a eliminatoria para competicao da taça
          equipaEmCasa.existeEquipa = "Sim";
          equipaAdversaria.existeEquipa = "Sim";
          //coloca no corpo da tabela
          corpoTabelaJornada(tbody, equipaEmCasa.acronimo, equipaAdversaria.acronimo);
          //}
        }
      } while ((equipa1 == equipa2));// || (equipaEmCasa.existeEquipa !== "Não"));// || (equipaAdversaria.existeEquipa !== "Não"));
    }
    table.appendChild(tbody);
    divTabela.appendChild(table);
  }
  divEliminatoria.appendChild(divTabela);
}


/**
 * @memberof Gestor
 * @property {function} omissao - função que cria o gestor por omissão: contém os dados de teste.
 * @returns {Gestor} O gestor por omissão
 */
Gestor.omissao = function () {
  /**
   * @todo criar e devolver o gestor por omissão 
   */
};

/*--------------------- Window Onload ------------ */
/**
 * @memberof window
 * @property {function} onload - função que será executada quando a página estiver toda carregada.
 */


window.onload = function () {
  //cria o gestor de sistema e mostra a pagina inicial
  (Gestor.omissao()).paginaInicial();
};
