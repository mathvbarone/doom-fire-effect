const init = () => {
    const firePixelArray = [];
    const fireWidth = 10;
    const fireHeight = 10;
    
    
    const start = () => {
        createFireDataStructure();
        renderFire();
    }
    
    const createFireDataStructure = () => {
        const numberOfPixels = fireWidth * fireHeight;
        for (let i = 0; i < numberOfPixels; i++) {
            firePixelArray[i] = 0;
        }
    }
    
    const calculateFirePropagation = () => {
        
    }
    
    const renderFire = () => {
        let html = '<table class="fireTable" cellpadding=0 callspacing=0>'
            for(let row = 0; row < fireHeight; row++) {
                html += '<tr>';

                for (let column = 0; column < fireWidth; column++) {
                    const pixelIndex = column + (fireWidth * row)
                    const fireIntensity = firePixelArray[pixelIndex]
                    html += '<td>';
                    html += `<div class="pixel-index">${pixelIndex}</div>`;
                    html += fireIntensity;
                    html += '</td>';
                }

                html += '</tr>';

            }
    
        html += '</table>'
    
        document.querySelector('#fireCanvas').innerHTML = html;
    
    }
    
    start();
}

init();


