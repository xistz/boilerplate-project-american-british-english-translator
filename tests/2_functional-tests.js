/*
 *
 *
 *       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]----
 *       (if additional are added, keep them at the very end!)
 */

const chai = require('chai');
const assert = chai.assert;

let Translator;

suite('Functional Tests', () => {
  suiteSetup(() => {
    // DOM already mocked -- load translator then run tests
    Translator = require('../public/translator.js');
  });

  suite('Function GetTranslation()', () => {
    /* 
      The translated sentence is appended to the `translated-sentence` `div`
      and the translated words or terms are wrapped in 
      `<span class="highlight">...</span>` tags when the "Translate" button is pressed.
    */
    test('Translation appended to the `translated-sentence` `div`', (done) => {
      // done();
    });

    /* 
      If there are no words or terms that need to be translated,
      the message 'Everything looks good to me!' is appended to the
      `translated-sentence` `div` when the "Translate" button is pressed.
    */
    test("'Everything looks good to me!' message appended to the `translated-sentence` `div`", (done) => {
      // done();
    });

    /* 
      If the text area is empty when the "Translation" button is
      pressed, append the message 'Error: No text to translate.' to 
      the `error-msg` `div`.
    */
    test("'Error: No text to translate.' message appended to the `error-msg` `div`", (done) => {
      const translateButton = document.getElementById('translate-btn');
      translateButton.addEventListener('click', Translator.GetTranslation);

      const event = new window.Event('click');
      translateButton.dispatchEvent(event);

      const errorMessage = document.getElementById('error-msg');
      assert.equal(errorMessage.innerHTML, 'Error: No text to translate.');
      done();
    });
  });

  suite('Function ClearInput()', () => {
    /* 
      The text area and both the `translated-sentence` and `error-msg`
      `divs` are cleared when the "Clear" button is pressed.
    */
    test('Text area, `translated-sentence`, and `error-msg` are cleared', (done) => {
      const clearButton = document.getElementById('clear-btn');
      clearButton.addEventListener('click', Translator.ClearInput);

      const event = new window.Event('click');
      clearButton.dispatchEvent(event);

      const textArea = document.getElementById('text-input');
      const translatedSentence = document.getElementById('translated-sentence');
      const errorMessage = document.getElementById('error-msg');

      assert.equal(textArea.value, '');
      assert.equal(translatedSentence.innerHTML, '');
      assert.equal(errorMessage.innerHTML, '');

      done();
    });
  });
});
