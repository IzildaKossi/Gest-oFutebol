
/**
 * Lista de 11 Jogadores para Equipa de Sporting Clube de Portugal
 */
var j1 = new Jogador("Rui Patricio", "06/03/1982", "Portugal", 1.82, "GR");
var j2 = new Jogador("Ezequiel Schelotto", "17/12/1990", "Itália", 1.70, "DF");
var j3 = new Jogador("Paulo Oliveira", "22/07/1992", "Portugal", 1.82, "DF");
var j4 = new Jogador("Sebastian Coates", "06/03/1982", "Uruguai", 1.82, "DF");
var j5 = new Jogador("Jefferson", "17/12/1990", "Brazil", 1.70, "DF");
var j6 = new Jogador("Bruno Cesar", "22/07/1992", "Brazil", 1.82, "MC");
var j7 = new Jogador("William Carvalho", "06/03/1982", "Portugal", 1.82, "MC");
var j8 = new Jogador("Gelson Martins", "17/12/1990", "Portugal", 1.70, "MC");
var j9 = new Jogador("Adrien Silva", "22/07/1992", "Portugal", 1.82, "MC");
var j10 = new Jogador("Bas Dost", "06/03/1982", "Holanda", 1.82, "AV");
var j11 = new Jogador("Alan Ruiz", "17/12/1990", "Argentina", 1.70, "AV");

/**
 * Equipa de Sporting Clube de Portugal válida com 11 jogadores - (1 GR, 4 DF, 4 MC, 2 AV)
 */
var scp = new Equipa("Sporting Clube de Portugal", "SCP", "Portugal", "http://www.sporting.pt", "Observações SCP");
scp.adicionarJogadorNaEquipa(j1);
scp.adicionarJogadorNaEquipa(j2);
scp.adicionarJogadorNaEquipa(j3);
scp.adicionarJogadorNaEquipa(j4);
scp.adicionarJogadorNaEquipa(j5);
scp.adicionarJogadorNaEquipa(j6);
scp.adicionarJogadorNaEquipa(j7);
scp.adicionarJogadorNaEquipa(j8);
scp.adicionarJogadorNaEquipa(j9);
scp.adicionarJogadorNaEquipa(j10);
scp.adicionarJogadorNaEquipa(j11);

/**
 * Lista de 11 Jogadores para Equipa de Futebol Clube do Porto
 */
var j12 = new Jogador("Iker Casilhas", "06/03/1982", "Espanha", 1.82, "GR");
var j13 = new Jogador("Maxi Pereira", "17/12/1990", "Uruguai", 1.70, "DF");
var j14 = new Jogador("Ivan Marcano", "22/07/1992", "Espanha", 1.82, "DF");
var j15 = new Jogador("Alex Teles", "06/03/1982", "Brazil", 1.82, "DF");
var j16 = new Jogador("Fernado Fonseca", "17/12/1990", "Portugal", 1.70, "DF");
var j17 = new Jogador("Andre Andre", "22/07/1992", "Portugal", 1.82, "MC");
var j18 = new Jogador("Danilo Pereira", "06/03/1982", "Portugal", 1.82, "MC");
var j19 = new Jogador("Oliver Torres", "17/12/1990", "Espanha", 1.70, "MC");
var j20 = new Jogador("Ruben Neves", "22/07/1992", "Portugal", 1.82, "MC");
var j21 = new Jogador("Andre Silva", "06/03/1982", "Portugal", 1.82, "AV");
var j22 = new Jogador("Soares dos Santos", "17/12/1990", "Brazil", 1.70, "AV");

/**
 * Equipa de Futebol Clube do Porto válida com 11 jogadores - (1 GR, 4 DF, 4 MC, 2 AV)
 */
var fcp = new Equipa("Futebol Clube do Porto", "FCP", "Portugal", "http://www.fcporto.pt", "Observações FCP");
fcp.adicionarJogadorNaEquipa(j12);
fcp.adicionarJogadorNaEquipa(j13);
fcp.adicionarJogadorNaEquipa(j14);
fcp.adicionarJogadorNaEquipa(j15);
fcp.adicionarJogadorNaEquipa(j16);
fcp.adicionarJogadorNaEquipa(j17);
fcp.adicionarJogadorNaEquipa(j18);
fcp.adicionarJogadorNaEquipa(j19);
fcp.adicionarJogadorNaEquipa(j20);
fcp.adicionarJogadorNaEquipa(j21);
fcp.adicionarJogadorNaEquipa(j22);

/**
 * Lista de 11 Jogadores para Equipa de Sporting Lisboa e Benfica
 */
var j23 = new Jogador("Júlio Cesar", "06/03/1982", "Brazil", 1.82, "GR");
var j24 = new Jogador("Lisando Lopes", "17/12/1990", "Argentina", 1.70, "DF");
var j25 = new Jogador("Luisao Varela", "22/07/1992", "Brazil", 1.82, "DF");
var j26 = new Jogador("Nelson Semedo", "06/03/1982", "Portugal", 1.82, "DF");
var j27 = new Jogador("Andre Almeida", "17/12/1990", "Portugal", 1.70, "DF");
var j28 = new Jogador("Andre Horta", "22/07/1992", "Portugal", 1.82, "MC");
var j29 = new Jogador("Filipe Augusto", "06/03/1982", "Brazil", 1.82, "MC");
var j30 = new Jogador("Toto Salvio", "17/12/1990", "Argentina", 1.70, "MC");
var j31 = new Jogador("Pizzi Fonseca", "22/07/1992", "Portugal", 1.82, "MC");
var j32 = new Jogador("Rafa Silva", "06/03/1982", "Portugal", 1.82, "AV");
var j33 = new Jogador("Franco Cervi", "17/12/1990", "Argentina", 1.70, "AV");

/**
 * Equipa de Sporting Lisboa e Benfica válida com 11 jogadores - (1 GR, 4 DF, 4 MC, 2 AV)
 */
var slb = new Equipa("Sporting Lisboa e Benfica", "SLB", "Portugal", "http://www.slbenfica.pt", "Observações SLB");
slb.adicionarJogadorNaEquipa(j23);
slb.adicionarJogadorNaEquipa(j24);
slb.adicionarJogadorNaEquipa(j25);
slb.adicionarJogadorNaEquipa(j26);
slb.adicionarJogadorNaEquipa(j27);
slb.adicionarJogadorNaEquipa(j28);
slb.adicionarJogadorNaEquipa(j29);
slb.adicionarJogadorNaEquipa(j30);
slb.adicionarJogadorNaEquipa(j31);
slb.adicionarJogadorNaEquipa(j32);
slb.adicionarJogadorNaEquipa(j33);

/**
 * Lista de 11 Jogadores para Equipa de Real Madrid
 */
var j34 = new Jogador("Kiko Casilla", "06/03/1982", "Espanha", 1.82, "GR");
var j35 = new Jogador("Sergio Ramos", "17/12/1990", "Espanha", 1.70, "DF");
var j36 = new Jogador("Marcelo Ribeiro", "22/07/1992", "Brazil", 1.82, "DF");
var j37 = new Jogador("Fábio Coentrao", "06/03/1982", "Portugal", 1.82, "DF");
var j38 = new Jogador("Rafael Varane", "17/12/1990", "França", 1.70, "DF");
var j39 = new Jogador("Toni Kroos", "22/07/1992", "Alemanha", 1.82, "MC");
var j40 = new Jogador("Casemiro Pinto", "06/03/1982", "Brazil", 1.82, "MC");
var j41 = new Jogador("Enzo Zidane", "17/12/1990", "França", 1.70, "MC");
var j42 = new Jogador("Isco Suarez", "22/07/1992", "Espanha", 1.82, "MC");
var j43 = new Jogador("Karim Benzema", "06/03/1982", "França", 1.82, "AV");
var j44 = new Jogador("Cristiano Ronaldo", "17/12/1990", "Portugal", 1.70, "AV");

/**
 * Equipa de Real Madrid válida com 11 jogadores - (1 GR, 4 DF, 4 MC, 2 AV)
 */
var rm = new Equipa("Real Madrid", "RM", "Espanha", "http://www.realmadrid.com", "Observações RM");
rm.adicionarJogadorNaEquipa(j34);
rm.adicionarJogadorNaEquipa(j35);
rm.adicionarJogadorNaEquipa(j36);
rm.adicionarJogadorNaEquipa(j37);
rm.adicionarJogadorNaEquipa(j38);
rm.adicionarJogadorNaEquipa(j39);
rm.adicionarJogadorNaEquipa(j40);
rm.adicionarJogadorNaEquipa(j41);
rm.adicionarJogadorNaEquipa(j42);
rm.adicionarJogadorNaEquipa(j43);
rm.adicionarJogadorNaEquipa(j44);


/**
 * Lista de 11 Jogadores para Equipa de Barcelona 
 */
var j45 = new Jogador("Ter Stegen", "06/03/1982", "Alemanha", 1.82, "GR");
var j46 = new Jogador("Gerard Pique", "17/12/1990", "Espanha", 1.70, "DF");
var j47 = new Jogador("Jordi Alba", "22/07/1992", "Espanha", 1.82, "DF");
var j48 = new Jogador("Sergi Roberto", "06/03/1982", "Espanha", 1.82, "DF");
var j49 = new Jogador("Samuel Umtiti", "17/12/1990", "França", 1.70, "DF");
var j50 = new Jogador("Andre Gomes", "22/07/1992", "Portugal", 1.82, "MC");
var j51 = new Jogador("Andres Iniesta", "06/03/1982", "Espanha", 1.82, "MC");
var j52 = new Jogador("Sergio Busquets", "17/12/1990", "Espanha", 1.70, "MC");
var j53 = new Jogador("Rafinha Alcantara", "22/07/1992", "Brazil", 1.82, "MC");
var j54 = new Jogador("Neymar Jr", "06/03/1982", "Brazil", 1.82, "AV");
var j55 = new Jogador("Lionel Messi", "17/12/1990", "Argentina", 1.70, "AV");

/**
 * Equipa de Barcelona válida com 11 jogadores - (1 GR, 4 DF, 4 MC, 2 AV)
 */
var fcb = new Equipa("Barcelona", "FCB", "Espanha", "http://www.fcbarcelona.com", "Observações FCB");
fcb.adicionarJogadorNaEquipa(j45);
fcb.adicionarJogadorNaEquipa(j46);
fcb.adicionarJogadorNaEquipa(j47);
fcb.adicionarJogadorNaEquipa(j48);
fcb.adicionarJogadorNaEquipa(j49);
fcb.adicionarJogadorNaEquipa(j50);
fcb.adicionarJogadorNaEquipa(j51);
fcb.adicionarJogadorNaEquipa(j52);
fcb.adicionarJogadorNaEquipa(j53);
fcb.adicionarJogadorNaEquipa(j54);
fcb.adicionarJogadorNaEquipa(j55);

/**
 * Lista de 11 Jogadores para Equipa de Atletico de Madrid
 */
var j56 = new Jogador("Miguel Angel Moya", "06/03/1982", "Espanha", 1.82, "GR");
var j57 = new Jogador("Diego Godin", "17/12/1990", "Uruguai", 1.70, "DF");
var j58 = new Jogador("Filipe Luis", "22/07/1992", "Brazil", 1.82, "DF");
var j59 = new Jogador("Jose Gimenez", "06/03/1982", "Uruguai", 1.82, "DF");
var j60 = new Jogador("Juan Francisco", "17/12/1990", "Espanha", 1.70, "DF");
var j61 = new Jogador("Gabi Fernandez", "22/07/1992", "Espanha", 1.82, "MC");
var j62 = new Jogador("Jorge Koke", "06/03/1982", "Espanha", 1.82, "MC");
var j63 = new Jogador("Tiago Cardoso", "17/12/1990", "Portugal", 1.70, "MC");
var j64 = new Jogador("Alberto Rodriguez", "22/07/1992", "Espanha", 1.82, "MC");
var j65 = new Jogador("Antoine Griezmann", "06/03/1982", "França", 1.82, "AV");
var j66 = new Jogador("Fernando Torres", "17/12/1990", "Espanha", 1.70, "AV");

/**
 * Equipa de Atletico de Madrid válida com 11 jogadores - (1 GR, 4 DF, 4 MC, 2 AV)
 */
var am = new Equipa("Atletico de Madrid", "AM", "Espanha", "http://www.en.atleticodemadrid.com", "Observações AM");
am.adicionarJogadorNaEquipa(j56);
am.adicionarJogadorNaEquipa(j57);
am.adicionarJogadorNaEquipa(j58);
am.adicionarJogadorNaEquipa(j59);
am.adicionarJogadorNaEquipa(j60);
am.adicionarJogadorNaEquipa(j61);
am.adicionarJogadorNaEquipa(j62);
am.adicionarJogadorNaEquipa(j63);
am.adicionarJogadorNaEquipa(j64);
am.adicionarJogadorNaEquipa(j65);
am.adicionarJogadorNaEquipa(j66);


/**
 * Lista de 11 Jogadores para Equipa de Chelsea Futebol Club
 */
var j67 = new Jogador("Eduardo Costa", "06/03/1982", "Portugal", 1.82, "GR");
var j68 = new Jogador("Marcos Alonso", "17/12/1990", "Espanha", 1.70, "DF");
var j69 = new Jogador("David Luis", "22/07/1992", "Brazil", 1.82, "DF");
var j70 = new Jogador("Gary Cahill", "06/03/1982", "Inglaterra", 1.82, "DF");
var j71 = new Jogador("Kurt Zouma", "17/12/1990", "França", 1.70, "DF");
var j72 = new Jogador("Cesc Frabegas", "22/07/1992", "Espanha", 1.82, "MC");
var j73 = new Jogador("NGolo Kante", "06/03/1982", "França", 1.82, "MC");
var j74 = new Jogador("Nataniel Chalobah", "17/12/1990", "Inglaterra", 1.70, "MC");
var j75 = new Jogador("Pedro Rodriguez", "22/07/1992", "Espanha", 1.82, "MC");
var j76 = new Jogador("Diego Costa", "06/03/1982", "Espanha", 1.82, "AV");
var j77 = new Jogador("Willian Borges", "17/12/1990", "Brazil", 1.70, "AV");

/**
 * Equipa de Chelsea Futebol Club válida com 11 jogadores - (1 GR, 4 DF, 4 MC, 2 AV)
 */
var cfc = new Equipa("Chelsea Futebol Club", "CFC", "Inglaterra", "http://www.chelseafc.com", "Observações CFC");
cfc.adicionarJogadorNaEquipa(j67);
cfc.adicionarJogadorNaEquipa(j68);
cfc.adicionarJogadorNaEquipa(j69);
cfc.adicionarJogadorNaEquipa(j70);
cfc.adicionarJogadorNaEquipa(j71);
cfc.adicionarJogadorNaEquipa(j72);
cfc.adicionarJogadorNaEquipa(j73);
cfc.adicionarJogadorNaEquipa(j74);
cfc.adicionarJogadorNaEquipa(j75);
cfc.adicionarJogadorNaEquipa(j76);
cfc.adicionarJogadorNaEquipa(j77);

/**
 * Lista de 11 Jogadores para Equipa de Mancheste City Football
 */
var j78 = new Jogador("Wily Cabalero", "06/03/1982", "Argentina", 1.82, "GR");
var j79 = new Jogador("Bacary Sagna", "17/12/1990", "França", 1.70, "DF");
var j80 = new Jogador("Pablo Zabaleta", "22/07/1992", "Argentina", 1.82, "DF");
var j81 = new Jogador("Nicolas Otamendi", "06/03/1982", "Argentina", 1.82, "DF");
var j82 = new Jogador("John Stones", "17/12/1990", "Inglaterra", 1.70, "DF");
var j83 = new Jogador("David Silva", "22/07/1992", "Espanha", 1.82, "MC");
var j84 = new Jogador("Brahim Diaz", "06/03/1982", "Espanha", 1.82, "MC");
var j85 = new Jogador("Ilkay Gundogan", "17/12/1990", "Alemanha", 1.70, "MC");
var j86 = new Jogador("Fabian Delph", "22/07/1992", "Inglaterra", 1.82, "MC");
var j87 = new Jogador("Kun Aguero", "06/03/1982", "Argentina", 1.82, "AV");
var j88 = new Jogador("Raheen Sterling", "17/12/1990", "Inglaterra", 1.70, "AV");

/**
 * Equipa de Mancheste City Football Club válida com 11 jogadores - (1 GR, 4 DF, 4 MC, 2 AV)
 */
var mfc = new Equipa("Mancheste City Football Club", "MFC", "Inglaterra", "http://www.mancity.com", "Observações MFC");
mfc.adicionarJogadorNaEquipa(j78);
mfc.adicionarJogadorNaEquipa(j79);
mfc.adicionarJogadorNaEquipa(j80);
mfc.adicionarJogadorNaEquipa(j81);
mfc.adicionarJogadorNaEquipa(j82);
mfc.adicionarJogadorNaEquipa(j83);
mfc.adicionarJogadorNaEquipa(j84);
mfc.adicionarJogadorNaEquipa(j85);
mfc.adicionarJogadorNaEquipa(j86);
mfc.adicionarJogadorNaEquipa(j87);
mfc.adicionarJogadorNaEquipa(j88);

/**
 * @memberof Gestor
 * @property {function} omissao - função que cria o gestor por omissão: contém os dados de teste.
 * @returns {Gestor} O gestor por omissão
 */
Gestor.omissao = function () {
    return (new Gestor("sistema"))
        //adicionar jogadores no sistema
        .adicionarJogador(j1)
        .adicionarJogador(j2)
        .adicionarJogador(j3)
        .adicionarJogador(j4)
        .adicionarJogador(j5)
        .adicionarJogador(j7)
        .adicionarJogador(j8)
        .adicionarJogador(j9)
        .adicionarJogador(j10)
        .adicionarJogador(j11)
        .adicionarJogador(j12)
        .adicionarJogador(j13)
        .adicionarJogador(j14)
        .adicionarJogador(j15)
        .adicionarJogador(j16)
        .adicionarJogador(j17)
        .adicionarJogador(j18)
        .adicionarJogador(j19)
        .adicionarJogador(j20)
        .adicionarJogador(j21)
        .adicionarJogador(j22)
        .adicionarJogador(j23)
        .adicionarJogador(j24)
        .adicionarJogador(j25)
        .adicionarJogador(j26)
        .adicionarJogador(j27)
        .adicionarJogador(j28)
        .adicionarJogador(j29)
        .adicionarJogador(j30)
        .adicionarJogador(j31)
        .adicionarJogador(j32)
        .adicionarJogador(j33)
        .adicionarJogador(j34)
        .adicionarJogador(j35)
        .adicionarJogador(j36)
        .adicionarJogador(j37)
        .adicionarJogador(j38)
        .adicionarJogador(j39)
        .adicionarJogador(j40)
        .adicionarJogador(j41)
        .adicionarJogador(j42)
        .adicionarJogador(j43)
        .adicionarJogador(j44)
        .adicionarJogador(j45)
        .adicionarJogador(j46)
        .adicionarJogador(j47)
        .adicionarJogador(j48)
        .adicionarJogador(j49)
        .adicionarJogador(j50)
        .adicionarJogador(j51)
        .adicionarJogador(j52)
        .adicionarJogador(j53)
        .adicionarJogador(j54)
        .adicionarJogador(j55)
        .adicionarJogador(j56)
        .adicionarJogador(j57)
        .adicionarJogador(j58)
        .adicionarJogador(j59)
        .adicionarJogador(j60)
        .adicionarJogador(j61)
        .adicionarJogador(j62)
        .adicionarJogador(j63)
        .adicionarJogador(j64)
        .adicionarJogador(j65)
        .adicionarJogador(j66)
        .adicionarJogador(j67)
        .adicionarJogador(j68)
        .adicionarJogador(j69)
        .adicionarJogador(j70)
        .adicionarJogador(j71)
        .adicionarJogador(j72)
        .adicionarJogador(j73)
        .adicionarJogador(j74)
        .adicionarJogador(j75)
        .adicionarJogador(j76)
        .adicionarJogador(j77)
        .adicionarJogador(j78)
        .adicionarJogador(j79)
        .adicionarJogador(j80)
        .adicionarJogador(j81)
        .adicionarJogador(j82)
        .adicionarJogador(j83)
        .adicionarJogador(j84)
        .adicionarJogador(j85)
        .adicionarJogador(j86)
        .adicionarJogador(j87)
        .adicionarJogador(j88)
        //adicionar equipas válidas no sistema
        .adicionarEquipa(scp)
        .adicionarEquipa(fcp)
        .adicionarEquipa(slb)
        .adicionarEquipa(rm)
        .adicionarEquipa(am)
        .adicionarEquipa(fcb)
        .adicionarEquipa(cfc)
        .adicionarEquipa(mfc)
        ;
};