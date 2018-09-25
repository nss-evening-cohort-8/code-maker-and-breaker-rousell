const printToDom = (stringToPrint, divId) => {
  document.getElementById(divId).innerHTML = stringToPrint;
}

const convertToCode = () => {
    const words = document.getElementById('inputWords').value;
    let converted = '';
    words.split('').forEach((character, i) => {
      converted += (words.length === i + 1) ? `${character.charCodeAt(0)}` : `${character.charCodeAt(0)},`;
    })
    printToDom(converted, 'outputCode');
};

const convertToWords = () => {
  const codeList = document.getElementById('inputCode').value;
  let text = '';
  codeList.split(',').forEach((code) => {
    text += String.fromCharCode(code);
  });
  printToDom(text, 'outputWords');
}

const registerEvents = () => {
  document.getElementById('inputWordsBtn').addEventListener('click', convertToCode);
  document.getElementById('inputCodeBtn').addEventListener('click', convertToWords);
}

registerEvents();


// terniary operator
// (conditional statement) ? true condition : false condition