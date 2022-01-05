'use strict';

const book = [
  { name: 'Marcus Aurelius', number: '+380445554433'},
  { name: 'Mao Zedong', numwber: '+380967351243'},
  { name: 'Jeremy Higgins', number: '+380688642428'},
  { name: 'Iosif Stalin', number: '+380976660099'},
];

const request = (name) => {
  for ( const info of book) {
    if (info.name === name) {
      return info.name + ' number is: ' + info.number;
    }
  }
};

console.log(request('Jeremy Higgins'));
