import _ from 'lodash';
import './style.css';
import imageSineu from './hometown-221539_1280.jpg';
import sunSet from './sunset-over-the-golf-course-644477_1280.jpg';
import Data from './data.csv';
import xmlData from './data.xml';   


function component() {
    const element = document.createElement('div');
    
    // lodash now imported by the script itself
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = sunSet;
  
    element.appendChild(myIcon);

    console.log(Data);
    console.log(xmlData);

    return element;
}

function addPicture() {
    const element = document.createElement('img');
    element.src = imageSineu;
    element.innerHTML = "This is a picture form Sineu";

    return element;
}


document.body.appendChild(component());
document.body.appendChild(addPicture());