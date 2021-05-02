const blockFist = document.getElementById('bl2017');
const blockSecond = document.getElementById('bl2016');
const blockThird = document.getElementById('bl2015');
const blockForth = document.getElementById('bl2009');
const blockFifth = document.getElementById('bl2005');
const blockSix = document.getElementById('bl2002');
const blockSevens = document.getElementById('bl2001');
const blockEightns = document.getElementById('bl1999');
const blockNines = document.getElementById('bl1997');
const blockTen = document.getElementById('bl1996');
const blockEleven = document.getElementById('bl1994');
const blockTwelve = document.getElementById('bl1992');
const blockThirteen = document.getElementById('bl1990');
const blockFortheen = document.getElementById('bl1988');
const blockFifteen = document.getElementById('bl1987');
const blockSixteen = document.getElementById('bl1985');
const blockSeventeen = document.getElementById('bl1983');
const blockEigtheen = document.getElementById('bl1980');
const blockNineteen = document.getElementById('bl1978');
const blockTwenty = document.getElementById('bl1971');
const blockTwentyOne = document.getElementById('bl1968');

const clickEventhandler = (blockText) => {
    
    if(blockText.style.display === 'none'){
     blockText.style.display = 'block';

    }else{
      blockText.style.display = 'none';
    }
}
