// module 21.2
const names = 'Rana Babul riYa';
const searchName = 'Riya';//string er moddhe kono kichu search korte hole .includes use korte hoy.tobe shei khetre ki search korbo and kon jaigai search korbo tar jonno 2 tar e lower case or uper case kore nite hobe.
const namesToLowerCase = names.toLowerCase();//ai line a name string const ta k lower case a convert kora hoyce
const searchNameLower = searchName.toLowerCase();//ai line a sring theke ja search dibo oi lekha ta lower case a convert kora hoyce
const doesExist = namesToLowerCase.includes(searchNameLower);//ai line a .includes( ) kore search kora hoyce
console.log(doesExist);

// ---------one line a korar jonno---------//
const lyrics = 'Amar shonar Bangla ami tomai ValoBashi';
const searchlyrics = 'Valobashi';
const doesExistOneLine = lyrics.toLowerCase().includes(searchlyrics.toLowerCase());
console.log(doesExistOneLine);

// ------------Search String indexof-------------//
console.log(names.indexOf('Babul'))
// names.startsWith dia start a ki ase ta search kora jai
// names.endsWith dia end a ki ase ta search kora jai