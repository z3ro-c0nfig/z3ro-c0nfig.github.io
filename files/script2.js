$.ajax({
  credentials: 'include',
  url: 'https://kids.typeworld.nl/v2/ajax.return.php',
  crossDomain: true,
  method: 'post',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:126.0) Gecko/20100101 Firefox/126.0',
    'Accept': '*/*',
    'Accept-Language': 'nl,en-US;q=0.7,en;q=0.3',
    'Accept-Encoding': 'gzip, deflate, br, zstd',
    'X-Requested-With': 'XMLHttpRequest',
    'Origin': 'https://kids.typeworld.nl',
    'Connection': 'keep-alive',
    'Referer': 'https://kids.typeworld.nl/v2/eiland5.php',
    'Cookie': 'update_content=0; gadgetsSeen_203902_210=3; bonusGadgetsSeen_203902_210=1; PHPSESSID=6d7c34d511ce8b4d2c90fab7578f007b; island=5',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'TE': 'trailers'
  },
  contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
  data: 'verzenden=true&name=Oefening&exerciseID=9101&duration=0.5&normApm=41&normError=96&apm=14&incorrectAmount=0&score=73&numBackspaces=0&numShifts^%^5Brequired^%^5D=0&numShifts^%^5Btyped^%^5D=0&switchedLetters=&incorrectLetters=&typedLetters^%^5B^%^5D=r&typedLetters^%^5B^%^5D=r&typedLetters^%^5B^%^5D=f&typedLetters^%^5B^%^5D=f&typedLetters^%^5B^%^5D=r&typedLetters^%^5B^%^5D=l&typedLetters^%^5B^%^5D=o&typedResults^%^5B^%^5D=1&typedResults^%^5B^%^5D=1&typedResults^%^5B^%^5D=1&typedResults^%^5B^%^5D=1&typedResults^%^5B^%^5D=1&typedResults^%^5B^%^5D=1&typedResults^%^5B^%^5D=1'
}).done(function(response) {
  console.log(response);
});
