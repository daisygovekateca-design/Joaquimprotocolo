// Base de Dados dos Convidados e Mesas para o Protocolo
const dadosMesasIniciais = [
  {
    mesa: "Mesa 1",
    convidados: [
      { id: 101, nome: "Luisa Nhanala", acompanhantes: "-", acomodado: false },
      { id: 102, nome: "Bento Machava", acompanhantes: "-", acomodado: false },
      { id: 103, nome: "Simião Machava", acompanhantes: "-", acomodado: false },
      { id: 104, nome: "Rosita Nhanala", acompanhantes: "-", acomodado: false },
      { id: 105, nome: "Albertina Nhanala", acompanhantes: "-", acomodado: false },
      { id: 106, nome: "Helena Machava", acompanhantes: "-", acomodado: false },
      { id: 107, nome: "Maezinha Machava", acompanhantes: "-", acomodado: false },
      { id: 108, nome: "Esposo", acompanhantes: "-", acomodado: false },
      { id: 109, nome: "Luis Nhanala", acompanhantes: "-", acomodado: false },
      { id: 110, nome: "Esposa", acompanhantes: "-", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 2",
    convidados: [
      { id: 201, nome: "Horácio Sengo", acompanhantes: "-", acomodado: false },
      { id: 202, nome: "Ac. de Horácio Sengo", acompanhantes: "-", acomodado: false },
      { id: 203, nome: "Zecas Sengo", acompanhantes: "-", acomodado: false },
      { id: 204, nome: "Esposa", acompanhantes: "-", acomodado: false },
      { id: 205, nome: "Joaquim Benete", acompanhantes: "-", acomodado: false },
      { id: 206, nome: "Esposa", acompanhantes: "-", acomodado: false },
      { id: 207, nome: "Delário Sengo", acompanhantes: "-", acomodado: false },
      { id: 208, nome: "Esposa", acompanhantes: "-", acomodado: false },
      { id: 209, nome: "Armênio", acompanhantes: "-", acomodado: false },
      { id: 210, nome: "Esposa", acompanhantes: "-", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 3",
    convidados: [
      { id: 301, nome: "Pastor Chabisso", acompanhantes: "-", acomodado: false },
      { id: 302, nome: "Esposa", acompanhantes: "-", acomodado: false },
      { id: 303, nome: "Mãe Janina", acompanhantes: "-", acomodado: false },
      { id: 304, nome: "Mãe Ester", acompanhantes: "-", acomodado: false },
      { id: 305, nome: "Mãe Firda", acompanhantes: "-", acomodado: false },
      { id: 306, nome: "Ac. da Mãe Firda", acompanhantes: "-", acomodado: false },
      { id: 307, nome: "António Maposse", acompanhantes: "-", acomodado: false },
      { id: 308, nome: "Esposa", acompanhantes: "-", acomodado: false },
      { id: 309, nome: "Mãe Carla", acompanhantes: "-", acomodado: false },
      { id: 310, nome: "Esposo", acompanhantes: "-", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 4",
    convidados: [
      { id: 401, nome: "Francisco Sequene", acompanhantes: "-", acomodado: false },
      { id: 402, nome: "Cidália Chipanga", acompanhantes: "-", acomodado: false },
      { id: 403, nome: "Padrinho Guila", acompanhantes: "-", acomodado: false },
      { id: 404, nome: "Esposa", acompanhantes: "-", acomodado: false },
      { id: 405, nome: "Massinga", acompanhantes: "-", acomodado: false },
      { id: 406, nome: "Esposa", acompanhantes: "-", acomodado: false },
      { id: 407, nome: "Novunga", acompanhantes: "-", acomodado: false },
      { id: 408, nome: "Esposa", acompanhantes: "-", acomodado: false },
      { id: 409, nome: "Ester", acompanhantes: "-", acomodado: false },
      { id: 410, nome: "Esposo", acompanhantes: "-", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 5",
    convidados: [
      { id: 501, nome: "Avó Amélia", acompanhantes: "-", acomodado: false },
      { id: 502, nome: "Avó Tsala", acompanhantes: "-", acomodado: false },
      { id: 503, nome: "Avó Celeste", acompanhantes: "-", acomodado: false },
      { id: 504, nome: "Avó Machel", acompanhantes: "-", acomodado: false },
      { id: 505, nome: "Avó Perestelo", acompanhantes: "-", acomodado: false },
      { id: 506, nome: "Esposa", acompanhantes: "-", acomodado: false },
      { id: 507, nome: "Tio Genito", acompanhantes: "-", acomodado: false },
      { id: 508, nome: "Esposa", acompanhantes: "-", acomodado: false },
      { id: 509, nome: "Avó Nhambir", acompanhantes: "-", acomodado: false },
      { id: 510, nome: "Tio Nado", acompanhantes: "-", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 6",
    convidados: [
      { id: 601, nome: "Amélia Nhanala", acompanhantes: "-", acomodado: false },
      { id: 602, nome: "Tia Marisina Nhanala", acompanhantes: "-", acomodado: false },
      { id: 603, nome: "Tio Lucas Nhanala", acompanhantes: "-", acomodado: false },
      { id: 604, nome: "Tia Avelina", acompanhantes: "-", acomodado: false },
      { id: 605, nome: "Tia Elisabete", acompanhantes: "-", acomodado: false },
      { id: 606, nome: "Tia Luisa Mousse", acompanhantes: "-", acomodado: false },
      { id: 607, nome: "Tânia Nhanala", acompanhantes: "-", acomodado: false },
      { id: 608, nome: "Penina", acompanhantes: "-", acomodado: false },
      { id: 609, nome: "Sandra Nhanala", acompanhantes: "-", acomodado: false },
      { id: 610, nome: "Cheila Nhanala", acompanhantes: "-", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 7",
    convidados: [
      { id: 701, nome: "Tia Amélia", acompanhantes: "-", acomodado: false },
      { id: 702, nome: "Ac. da Tia Amélia", acompanhantes: "-", acomodado: false },
      { id: 703, nome: "Tia Ivone", acompanhantes: "-", acomodado: false },
      { id: 704, nome: "Pedro Muianga", acompanhantes: "-", acomodado: false },
      { id: 705, nome: "Tia Miranda", acompanhantes: "-", acomodado: false },
      { id: 706, nome: "Tio Zarito", acompanhantes: "-", acomodado: false },
      { id: 707, nome: "Tia Olivia", acompanhantes: "-", acomodado: false },
      { id: 708, nome: "Fernando Nguila", acompanhantes: "-", acomodado: false },
      { id: 709, nome: "Esposa", acompanhantes: "-", acomodado: false },
      { id: 710, nome: "Carolina", acompanhantes: "-", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 8",
    convidados: [
      { id: 801, nome: "Geusia", acompanhantes: "-", acomodado: false },
      { id: 802, nome: "Leonardo", acompanhantes: "-", acomodado: false },
      { id: 803, nome: "Borges", acompanhantes: "-", acomodado: false },
      { id: 804, nome: "Esposa", acompanhantes: "-", acomodado: false },
      { id: 805, nome: "Shalom", acompanhantes: "-", acomodado: false },
      { id: 806, nome: "Damaris", acompanhantes: "-", acomodado: false },
      { id: 807, nome: "Seima", acompanhantes: "-", acomodado: false },
      { id: 808, nome: "Gelcia", acompanhantes: "-", acomodado: false },
      { id: 809, nome: "Clelyde", acompanhantes: "-", acomodado: false },
      { id: 810, nome: "Ivancy", acompanhantes: "-", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 9",
    convidados: [
      { id: 901, nome: "Mana Inês", acompanhantes: "-", acomodado: false },
      { id: 902, nome: "Esposo", acompanhantes: "-", acomodado: false },
      { id: 903, nome: "Ângelo Chipanga", acompanhantes: "-", acomodado: false },
      { id: 904, nome: "Esposa", acompanhantes: "-", acomodado: false },
      { id: 905, nome: "Vicente Chipanga", acompanhantes: "-", acomodado: false },
      { id: 906, nome: "Esposa", acompanhantes: "-", acomodado: false },
      { id: 907, nome: "Nelinha", acompanhantes: "-", acomodado: false },
      { id: 908, nome: "Esposo", acompanhantes: "-", acomodado: false },
      { id: 909, nome: "Cinia", acompanhantes: "-", acomodado: false },
      { id: 910, nome: "Mamy", acompanhantes: "-", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 10",
    convidados: [
      { id: 1001, nome: "Mano Stélio", acompanhantes: "-", acomodado: false },
      { id: 1002, nome: "Winelda", acompanhantes: "-", acomodado: false },
      { id: 1003, nome: "Mano Narciso", acompanhantes: "-", acomodado: false },
      { id: 1004, nome: "Domitila", acompanhantes: "-", acomodado: false },
      { id: 1005, nome: "Emílio", acompanhantes: "-", acomodado: false },
      { id: 1006, nome: "Mana Cacilda", acompanhantes: "-", acomodado: false },
      { id: 1007, nome: "Mana Vânia", acompanhantes: "-", acomodado: false },
      { id: 1008, nome: "Acompanhante", acompanhantes: "-", acomodado: false },
      { id: 1009, nome: "Mana Lindinha", acompanhantes: "-", acomodado: false },
      { id: 1010, nome: "Heitor Tchambul", acompanhantes: "-", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 11",
    convidados: [
      { id: 1101, nome: "Naldo", acompanhantes: "-", acomodado: false },
      { id: 1102, nome: "Natânia", acompanhantes: "-", acomodado: false },
      { id: 1103, nome: "Dário", acompanhantes: "-", acomodado: false },
      { id: 1104, nome: "Esposa", acompanhantes: "-", acomodado: false },
      { id: 1105, nome: "Mana Tânia", acompanhantes: "-", acomodado: false },
      { id: 1106, nome: "Esposo", acompanhantes: "-", acomodado: false },
      { id: 1107, nome: "Sónia", acompanhantes: "-", acomodado: false },
      { id: 1108, nome: "Esposo", acompanhantes: "-", acomodado: false },
      { id: 1109, nome: "Mariza", acompanhantes: "-", acomodado: false },
      { id: 1110, nome: "Gessica", acompanhantes: "-", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 12",
    convidados: [
      { id: 1201, nome: "Jorge Machava", acompanhantes: "-", acomodado: false },
      { id: 1202, nome: "Esposa", acompanhantes: "-", acomodado: false },
      { id: 1203, nome: "Natividade", acompanhantes: "-", acomodado: false },
      { id: 1204, nome: "Esposo", acompanhantes: "-", acomodado: false },
      { id: 1205, nome: "Dorca Machava", acompanhantes: "-", acomodado: false },
      { id: 1206, nome: "Esposo", acompanhantes: "-", acomodado: false },
      { id: 1207, nome: "Judite Machava", acompanhantes: "-", acomodado: false },
      { id: 1208, nome: "Júlio Machava", acompanhantes: "-", acomodado: false },
      { id: 1209, nome: "Esposa", acompanhantes: "-", acomodado: false },
      { id: 1210, nome: "Fatiminha Machava", acompanhantes: "-", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 13",
    convidados: [
      { id: 1301, nome: "Edito Machava", acompanhantes: "-", acomodado: false },
      { id: 1302, nome: "Esposa", acompanhantes: "-", acomodado: false },
      { id: 1303, nome: "Simião Simião", acompanhantes: "-", acomodado: false },
      { id: 1304, nome: "Esposa", acompanhantes: "-", acomodado: false },
      { id: 1305, nome: "Maria Alice", acompanhantes: "-", acomodado: false },
      { id: 1306, nome: "Esposo", acompanhantes: "-", acomodado: false },
      { id: 1307, nome: "Carlos", acompanhantes: "-", acomodado: false },
      { id: 1308, nome: "Esposa", acompanhantes: "-", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 14",
    convidados: [
      { id: 1401, nome: "Tio Alberto", acompanhantes: "-", acomodado: false },
      { id: 1402, nome: "Esposa", acompanhantes: "-", acomodado: false },
      { id: 1403, nome: "Tia Madalena", acompanhantes: "-", acomodado: false },
      { id: 1404, nome: "Esposo", acompanhantes: "-", acomodado: false },
      { id: 1405, nome: "Tia Maria de Fatima", acompanhantes: "-", acomodado: false },
      { id: 1406, nome: "Avó Rita", acompanhantes: "-", acomodado: false },
      { id: 1407, nome: "Tio Andre", acompanhantes: "-", acomodado: false },
      { id: 1408, nome: "Esposa", acompanhantes: "-", acomodado: false },
      { id: 1409, nome: "Tia Crimilda", acompanhantes: "-", acomodado: false },
      { id: 1410, nome: "Tia Amandia", acompanhantes: "-", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 15",
    convidados: [
      { id: 1501, nome: "Jorge", acompanhantes: "-", acomodado: false },
      { id: 1502, nome: "Tircia", acompanhantes: "-", acomodado: false },
      { id: 1503, nome: "Fernando", acompanhantes: "-", acomodado: false },
      { id: 1504, nome: "Esposa", acompanhantes: "-", acomodado: false },
      { id: 1505, nome: "Rui", acompanhantes: "-", acomodado: false },
      { id: 1506, nome: "Esposa", acompanhantes: "-", acomodado: false },
      { id: 1507, nome: "Ivan", acompanhantes: "-", acomodado: false },
      { id: 1508, nome: "Maria", acompanhantes: "-", acomodado: false },
      { id: 1509, nome: "Zenalda", acompanhantes: "-", acomodado: false },
      { id: 1510, nome: "Esposo", acompanhantes: "-", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 16",
    convidados: [
      { id: 1601, nome: "Sra. Francelina", acompanhantes: "-", acomodado: false },
      { id: 1602, nome: "Ac. da Francelina", acompanhantes: "-", acomodado: false },
      { id: 1603, nome: "Daisy Gove", acompanhantes: "-", acomodado: false },
      { id: 1604, nome: "Esposo", acompanhantes: "-", acomodado: false },
      { id: 1605, nome: "Cecilia", acompanhantes: "-", acomodado: false },
      { id: 1606, nome: "Albertina", acompanhantes: "-", acomodado: false },
      { id: 1607, nome: "Angelina", acompanhantes: "-", acomodado: false },
      { id: 1608, nome: "Judson", acompanhantes: "-", acomodado: false },
      { id: 1609, nome: "Africano", acompanhantes: "-", acomodado: false },
      { id: 1610, nome: "Lázio", acompanhantes: "-", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 17",
    convidados: [
      { id: 1701, nome: "Agnes", acompanhantes: "-", acomodado: false },
      { id: 1702, nome: "Michel", acompanhantes: "-", acomodado: false },
      { id: 1703, nome: "Maya", acompanhantes: "-", acomodado: false },
      { id: 1704, nome: "Joicenia", acompanhantes: "-", acomodado: false },
      { id: 1705, nome: "Aline", acompanhantes: "-", acomodado: false },
      { id: 1706, nome: "Zamira", acompanhantes: "-", acomodado: false },
      { id: 1707, nome: "Olson", acompanhantes: "-", acomodado: false },
      { id: 1708, nome: "Sheila Leonardo", acompanhantes: "-", acomodado: false },
      { id: 1709, nome: "Pai", acompanhantes: "-", acomodado: false },
      { id: 1710, nome: "Manu", acompanhantes: "-", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 18",
    convidados: [
      { id: 1801, nome: "Elidio", acompanhantes: "-", acomodado: false },
      { id: 1802, nome: "Esposa", acompanhantes: "-", acomodado: false },
      { id: 1803, nome: "Gito Nhoco", acompanhantes: "-", acomodado: false },
      { id: 1804, nome: "Esposa", acompanhantes: "-", acomodado: false },
      { id: 1805, nome: "Antoninho", acompanhantes: "-", acomodado: false },
      { id: 1806, nome: "Esposa", acompanhantes: "-", acomodado: false },
      { id: 1807, nome: "Fabião", acompanhantes: "-", acomodado: false },
      { id: 1808, nome: "Esposa", acompanhantes: "-", acomodado: false },
      { id: 1809, nome: "Tia Race", acompanhantes: "-", acomodado: false },
      { id: 1810, nome: "Tia Elisa", acompanhantes: "-", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 19",
    convidados: [
      { id: 1901, nome: "Alfredo", acompanhantes: "-", acomodado: false },
      { id: 1902, nome: "Esposa", acompanhantes: "-", acomodado: false },
      { id: 1903, nome: "Stélio", acompanhantes: "-", acomodado: false },
      { id: 1904, nome: "Esposa", acompanhantes: "-", acomodado: false },
      { id: 1905, nome: "Laura Manhice", acompanhantes: "-", acomodado: false },
      { id: 1906, nome: "Lúcia", acompanhantes: "-", acomodado: false },
      { id: 1907, nome: "Deltinha", acompanhantes: "-", acomodado: false },
      { id: 1908, nome: "Esposo", acompanhantes: "-", acomodado: false },
      { id: 1909, nome: "Almeida", acompanhantes: "-", acomodado: false },
      { id: 1910, nome: "Esposa", acompanhantes: "-", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 20",
    convidados: [
      { id: 2001, nome: "Tia Dinoca", acompanhantes: "-", acomodado: false },
      { id: 2002, nome: "Esposo", acompanhantes: "-", acomodado: false },
      { id: 2003, nome: "Laila", acompanhantes: "-", acomodado: false },
      { id: 2004, nome: "Mano Acácio", acompanhantes: "-", acomodado: false },
      { id: 2005, nome: "Esposa", acompanhantes: "-", acomodado: false },
      { id: 2006, nome: "Avó Vicente", acompanhantes: "-", acomodado: false },
      { id: 2007, nome: "Esposa", acompanhantes: "-", acomodado: false },
      { id: 2008, nome: "Tio Abrão", acompanhantes: "-", acomodado: false },
      { id: 2009, nome: "Esposa", acompanhantes: "-", acomodado: false },
      { id: 2010, nome: "Mana Dulce", acompanhantes: "-", acomodado: false }
    ]
  }
];

// Torna os dados acessíveis globalmente para o index.html
if (typeof window !== 'undefined') {
  window.dadosMesasIniciais = dadosMesasIniciais;
}