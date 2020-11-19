const estados = [
    {sigla: 'AC', nome: 'Acre'},
    {sigla: 'AL', nome: ' Alagoas'},
    {sigla: 'AP', nome: ' Amapá'},
    {sigla: 'AM', nome: ' Amazonas'},
    {sigla: 'BA', nome: ' Bahia'},
    {sigla: 'CE', nome: ' Ceará'},
    {sigla: 'DF', nome: ' Distrito Federal'},
    {sigla: 'ES', nome: ' Espírito Santo'},
    {sigla: 'GO', nome: ' Goiás'},
    {sigla: 'MA', nome: ' Maranhão'},
    {sigla: 'MT', nome: ' Mato Grosso'},
    {sigla: 'MS', nome: ' Mato Grosso do Sul'},
    {sigla: 'MG', nome: ' Minas Gerais'},
    {sigla: 'PA', nome: ' Pará'},
    {sigla: 'PB', nome: ' Paraíba '},
    {sigla: 'PR', nome: ' Paraná'},
    {sigla: 'PE', nome: ' Pernambuco'},
    {sigla: 'PI', nome: ' Piauí'},
    {sigla: 'RJ', nome: ' Rio de Janeiro'},
    {sigla: 'RN', nome: ' Rio Grande do Norte'},
    {sigla: 'RS', nome: ' Rio Grande do Sul '},
    {sigla: 'RO', nome: ' Rondônia'},
    {sigla: 'RR', nome: ' Roraima'},
    {sigla: 'SC', nome: ' Santa Catarina '},
    {sigla: 'SP', nome: ' São Paulo '},
    {sigla: 'SE', nome: ' Sergipe'},
    {sigla: 'TO', nome: ' Tocantins'},
];

const racas = [
    'Preta',  
    'Parda',
    'Amarela',
    'Branca',
    'Indigine',
];

const generos = [
    'Feminino',
    'Masculino',
    'Outro',
    'Prefiro não definir'
];

const faixaEtarias = [
    {faixa: 'menos de 18 anos', min: 0, max: 18 },
    {faixa: 'de 18 a 25 anos', min: 18, max: 26 },
    {faixa: 'de 26 a 35 anos', min: 26, max: 36 },
    {faixa: 'de 36 a 45 anos', min: 36, max: 46 },
    {faixa: 'de 45 a 60 anos', min: 46, max: 61 },
    {faixa: 'acima de 60 anos', min: 61, max: 200 },
]


const anos = [
{ano: 2020, bissexto: true} 
, {ano: 2019, bissexto: false} 
, {ano: 2018, bissexto: false} 
, {ano: 2017, bissexto: false} 
, {ano: 2016, bissexto: true} 
, {ano: 2015, bissexto: false} 
, {ano: 2014, bissexto: false} 
, {ano: 2013, bissexto: false} 
, {ano: 2012, bissexto: true} 
, {ano: 2011, bissexto: false} 
, {ano: 2010, bissexto: false} 
, {ano: 2009, bissexto: false} 
, {ano: 2008, bissexto: true} 
, {ano: 2007, bissexto: false} 
, {ano: 2006, bissexto: false} 
, {ano: 2005, bissexto: false} 
, {ano: 2004, bissexto: true} 
, {ano: 2003, bissexto: false} 
, {ano: 2002, bissexto: false} 
, {ano: 2001, bissexto: false} 
, {ano: 2000, bissexto: true} 
, {ano: 1999, bissexto: false} 
, {ano: 1998, bissexto: false} 
, {ano: 1997, bissexto: false} 
, {ano: 1996, bissexto: true} 
, {ano: 1995, bissexto: false} 
, {ano: 1994, bissexto: false} 
, {ano: 1993, bissexto: false} 
, {ano: 1992, bissexto: true} 
, {ano: 1991, bissexto: false} 
, {ano: 1990, bissexto: false} 
, {ano: 1989, bissexto: false} 
, {ano: 1988, bissexto: true} 
, {ano: 1987, bissexto: false} 
, {ano: 1986, bissexto: false} 
, {ano: 1985, bissexto: false} 
, {ano: 1984, bissexto: true} 
, {ano: 1983, bissexto: false} 
, {ano: 1982, bissexto: false} 
, {ano: 1981, bissexto: false} 
, {ano: 1980, bissexto: true} 
, {ano: 1979, bissexto: false} 
, {ano: 1978, bissexto: false} 
, {ano: 1977, bissexto: false} 
, {ano: 1976, bissexto: true} 
, {ano: 1975, bissexto: false} 
, {ano: 1974, bissexto: false} 
, {ano: 1973, bissexto: false} 
, {ano: 1972, bissexto: true} 
, {ano: 1971, bissexto: false} 
, {ano: 1970, bissexto: false} 
, {ano: 1969, bissexto: false} 
, {ano: 1968, bissexto: true} 
, {ano: 1967, bissexto: false} 
, {ano: 1966, bissexto: false} 
, {ano: 1965, bissexto: false} 
, {ano: 1964, bissexto: true} 
, {ano: 1963, bissexto: false} 
, {ano: 1962, bissexto: false} 
, {ano: 1961, bissexto: false} 
, {ano: 1960, bissexto: true} 
, {ano: 1959, bissexto: false} 
, {ano: 1958, bissexto: false} 
, {ano: 1957, bissexto: false} 
, {ano: 1956, bissexto: true} 
, {ano: 1955, bissexto: false} 
, {ano: 1954, bissexto: false} 
, {ano: 1953, bissexto: false} 
, {ano: 1952, bissexto: true} 
, {ano: 1951, bissexto: false} 
, {ano: 1950, bissexto: false} 
, {ano: 1949, bissexto: false} 
, {ano: 1948, bissexto: true} 
, {ano: 1947, bissexto: false} 
, {ano: 1946, bissexto: false} 
, {ano: 1945, bissexto: false} 
, {ano: 1944, bissexto: true} 
, {ano: 1943, bissexto: false} 
, {ano: 1942, bissexto: false} 
, {ano: 1941, bissexto: false} 
, {ano: 1940, bissexto: true} 
, {ano: 1939, bissexto: false} 
, {ano: 1938, bissexto: false} 
, {ano: 1937, bissexto: false} 
, {ano: 1936, bissexto: true} 
, {ano: 1935, bissexto: false} 
, {ano: 1934, bissexto: false} 
, {ano: 1933, bissexto: false} 
, {ano: 1932, bissexto: true} 
, {ano: 1931, bissexto: false} 
, {ano: 1930, bissexto: false} 
, {ano: 1929, bissexto: false} 
, {ano: 1928, bissexto: true} 
, {ano: 1927, bissexto: false} 
, {ano: 1926, bissexto: false} 
, {ano: 1925, bissexto: false} 
, {ano: 1924, bissexto: true} 
, {ano: 1923, bissexto: false} 
, {ano: 1922, bissexto: false} 
, {ano: 1921, bissexto: false} 
, {ano: 1920, bissexto: true} 
, {ano: 1919, bissexto: false} 
, {ano: 1918, bissexto: false} 
, {ano: 1917, bissexto: false} 
, {ano: 1916, bissexto: true} 
, {ano: 1915, bissexto: false} 
, {ano: 1914, bissexto: false} 
, {ano: 1913, bissexto: false} 
, {ano: 1912, bissexto: true} 
, {ano: 1911, bissexto: false} 
, {ano: 1910, bissexto: false} 
, {ano: 1909, bissexto: false} 
, {ano: 1908, bissexto: true} 
, {ano: 1907, bissexto: false} 
, {ano: 1906, bissexto: false} 
, {ano: 1905, bissexto: false} 
, {ano: 1904, bissexto: true} 
, {ano: 1903, bissexto: false} 
, {ano: 1902, bissexto: false} 
, {ano: 1901, bissexto: false} 
, {ano: 1900, bissexto: true} 
];

const meses = [
    { mes: 'janeiro', maxDias: 31} , 
    { mes: 'fevereiro', maxDias: 28} , 
    { mes: 'março', maxDias: 31} , 
    { mes: 'abril', maxDias: 30} , 
    { mes: 'maio', maxDias: 31} , 
    { mes: 'junho', maxDias: 30} , 
    { mes: 'julho', maxDias: 31} , 
    { mes: 'agosto', maxDias: 31} , 
    { mes: 'setembro', maxDias: 30} , 
    { mes: 'outubro', maxDias: 31} , 
    { mes: 'novembro', maxDias: 30} , 
    { mes: 'dezembro', maxDias: 31} , 

]


export {racas, generos, estados, faixaEtarias, anos, meses};