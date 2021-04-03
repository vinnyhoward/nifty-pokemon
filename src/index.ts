import { testUtil, logString } from './test.utils';
import './styles/global.scss';

logString(testUtil);

function component() {
    const element: HTMLDivElement = document.createElement('div');
  
    element.innerHTML = ['Testing', 'Configuration!!'].join(' ');
  
    return element;
  }
  
  document.body.appendChild(component());