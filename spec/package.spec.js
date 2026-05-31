// dna-dom
// Mocha Specification Suite

// Imports
import { assertDeepStrictEqual } from 'assert-deep-strict-equal';
import { cliArgvUtil } from 'cli-argv-util';

////////////////////////////////////////////////////////////////////////////////
describe('The "docs" folder', () => {

   it('contains the correct web files', () => {
      const actual = cliArgvUtil.readFolder('docs');
      const expected = [
         'app.min.js',
         'assets',
         'assets/icon-npmscan.png',
         'assets/icon-snyk.png',
         'assets/icon-socket.png',
         'index.html',
         'style.min.css'
         ];
      assertDeepStrictEqual(actual, expected);
      });

   });
