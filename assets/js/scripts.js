(function() {

    // --------------------------------------------------------------
    //  Chargement du DOM
    //---------------------------------------------------------------   
    document.addEventListener('DOMContentLoaded', function() {
        // Instructions
        console.log('DOM load');
        genererFondsH2s();
        genererFondsPs();

    }); // Fin de DOMContentLoaded
    // --------------------------------------------------------------
    //  fin de Chargement du DOM
    //--------------------------------------------------------------- 









    // --------------------------------------------------------------
    //  Chargement de la page
    //--------------------------------------------------------------- 
    window.addEventListener('load', function() {
        // Instructions
        console.log('WIN load');

    }); // Fin de window load
    // --------------------------------------------------------------
    //  fin de Chargement de la page
    //--------------------------------------------------------------- 









    // --------------------------------------------------------------
    //  Fonctions
    //--------------------------------------------------------------- 

    // Génération de divs de fond oranges
    function genererFondsH2s() {
        if (document.querySelector('h2')) {
            const h2s = document.querySelectorAll('h2');
            for (let i = 0, lg = h2s.length; i < lg; i++) {
                const el = h2s[i];
                el.style.position = 'relative';
                const div = document.createElement('div');
                const dim = 10 + Math.floor(Math.random() * 10);
                //const couleur = 'rgba(255,0,0,.5)';
                div.style.width = dim + 'rem';
                div.style.height = dim + 'rem';
                // div.style.backgroundColor = couleur;
                div.style.position = 'absolute';
                div.style.zIndex = -1;
                div.style.top = (-2 + Math.floor(Math.random() * 4)) + 'rem';
                const posLeft = Math.floor(Math.random() * 100) + '%';
                div.style.left = 'calc(' + posLeft + ' - ' + dim + 'rem)';
                div.classList.add('div-fond-orange');
                el.appendChild(div);
            }
        }
    }

    // Génération de divs de fond vertes
    function genererFondsPs() {
        if (document.querySelector('p')) {
            const ps = document.querySelectorAll('p');
            for (let i = 0, lg = ps.length; i < lg; i++) {
                const el = ps[i];
                el.style.position = 'relative';
                const div = document.createElement('div');
                const dim = 5 + Math.floor(Math.random() * 5);
                //const couleur = 'rgba(255,0,0,.5)';
                div.style.width = dim + 'rem';
                div.style.height = dim + 'rem';
                // div.style.backgroundColor = couleur;
                div.style.position = 'absolute';
                div.style.zIndex = -1;
                div.style.top = (-2 + Math.floor(Math.random() * 4)) + 'rem';
                const posLeft = Math.floor(Math.random() * 100) + '%';
                div.style.left = 'calc(' + posLeft + ' - ' + dim + 'rem)';
                div.classList.add('div-fond-vert');
                el.appendChild(div);
            }
        }
    }
    // --------------------------------------------------------------
    //  fin deFonctions
    //--------------------------------------------------------------- 






})(); // fin de fonction anonyme à invocation directe