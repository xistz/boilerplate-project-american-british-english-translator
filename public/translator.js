import { americanOnly } from './american-only.js';
import { britishOnly } from './british-only.js';
import { americanToBritishSpelling } from './american-to-british-spelling.js';
import { americanToBritishTitles } from './american-to-british-titles.js';

/* 
  Export your functions for testing in Node.
  Note: The `try` block is to prevent errors on
  the client side
*/

// html elements
const textArea = document.getElementById('text-input');
const localeSelect = document.getElementById('locale-select');
const translatedSentence = document.getElementById('translated-sentence');
const errorMessage = document.getElementById('error-msg');
const translateButton = document.getElementById('translate-btn');
const clearButton = document.getElementById('clear-btn');

const Translate = (input, target) => {
  const dictionary = loadDictionary(target);
};

const invertDictionary = (dict) => {
  const inverted = Object.entries(dict).reduce((result, entry) => {
    const [from, to] = entry;

    if (!(to in result)) {
      result[to] = from;
    }

    return result;
  }, {});
};

const loadDictionary = (target) => {
  switch (target) {
    case 'american-to-british':
      return {
        ...americanOnly,
        ...americanToBritishSpelling,
        ...americanToBritishTitles,
      };

    case 'british-to-american':
      return {
        ...britishOnly,
        ...invertDictionary(americanToBritishSpelling),
        ...invertDictionary(americanToBritishTitles),
      };
  }
};

const GetTranslation = () => {
  const input = textArea.value;
  const target = localeSelect.options[localeSelect.selectedIndex].value;

  if (!input) {
    errorMessage.innerHTML = 'Error: No text to translate.';
    return;
  }
};

const ClearInput = () => {
  textArea.value = '';
  translatedSentence.innerHTML = '';
  errorMessage.innerHTML = '';
  localeSelect.selectedIndex = '0';
};

translateButton.addEventListener('click', GetTranslation);
clearButton.addEventListener('click', ClearInput);

try {
  module.exports = {
    Translate,
    ClearInput,
  };
} catch (e) {}
