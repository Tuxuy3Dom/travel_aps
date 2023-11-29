/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import axios from 'axios';

async function fetchDataFromAPI() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com'); // Zastąp 'https://api.turystyka.gov.pl:443' adresem docelowego API 
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error('Błąd pobierania danych z API:', error);
    }
  }

fetchDataFromAPI();

AppRegistry.registerComponent(appName, () => App);
