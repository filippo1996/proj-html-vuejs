export default function(){
    //Inizializziamo le varibili
    let element, ariaExpand;
    document.addEventListener('click', function(event){
        //Verifichiamo se l'evento ha catturato un elemento dal Dom
        if(!element){
            element = event.target.closest('[aria-expand]');
        }

        //Risaliamo al valore contenuto dell'attributo di aria-expand
        if(element){
            ariaExpand = element.getAttribute('aria-expand');
        }

        if(ariaExpand === 'false'){
            //Apriamo il dropdown
            dropdown(element);
        } else if(ariaExpand === 'true' && !event.target.closest('[aria-expand]') || !!event.target.closest('[data-menu="pointer"]')){
            //Chiudiamo il dropdown
            closeDropdown(element);
            //Settiamo a default i valori delle variabili
            element = null, ariaExpand = undefined;
        }
    });
}
/**
 * Apertura dropdown
 * @param {object} element 
 */
function dropdown(element){
    let toggle = element.getAttribute('data-toggle');
    if(toggle === 'dropdown'){
        changeStyleValue(element, '.dropdown-menu', 'display', 'flex');
        changeStyleValue('document', '.header-top', 'background-color', '#FBFBFB');
        //Cambiamo il valore dell'attributo aria-expand in true
        element.setAttribute('aria-expand', 'true');
    }
}


/**
 * Chiusura dropdown
 * @param {object} element 
 */
function closeDropdown(element){
    let toggle = element.getAttribute('data-toggle');
    if(toggle === 'dropdown'){
        changeStyleValue(element, '.dropdown-menu', 'display', 'none');
        changeStyleValue('document', '.header-top', 'background-color', '#fff');
        //Cambiamo il valore dell'attributo aria-expand in false
        element.setAttribute('aria-expand', 'false');
    }
}

/**
 * Cambiare il valore in line (style) di un elemento
 * @param {*} ele 
 * @param {string} search 
 * @param {string} style
 * @param {string} value 
 */
function changeStyleValue(ele, search, style, value){
    let dom;
    if(ele === 'document'){
        dom = document.querySelector(search);
    } else{
        dom = ele.querySelector(search);
    }
    dom.style[style] = value;
}