var projetoGulliver = "<html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>"

function extrairDados(projetoGulliver) {

    let codigoCidades = projetoGulliver.split("*");
    let cidades = codigoCidades[1] + ", " + codigoCidades[3] + ", " + codigoCidades[5];
    alert(cidades);

    let codigoRoteiros = projetoGulliver.split("<br>");
    let roteiros = "São Paulo: " + codigoRoteiros[4] + ", " + "Las Vegas: " + codigoRoteiros[13] + "Moscou: " + codigoRoteiros[22];
    alert(roteiros);

    let roteiroSP = codigoRoteiros[4].split(";")
    let roteiroLA = codigoRoteiros[13].split(";")
    let roteiroMW = codigoRoteiros[22].split(";")
    let locaisQtd = "Quantidades de locais citados no roteiro A: São Paulo - " + roteiroSP.length + " | Las Vegas - " + roteiroLA.length + " | Moscou - " + roteiroMW.length + ".";
    alert(locaisQtd)

    let codigoPontos = projetoGulliver.split("<br>");
    let pontosTuristicos = "Centro: " + codigoPontos[6];
    alert(pontosTuristicos);

    let downtown = "DownTown: " + codigoPontos[15];
    alert(downtown);
}

extrairDados(projetoGulliver)
