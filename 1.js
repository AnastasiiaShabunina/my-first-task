window.addEventListener('DOMContentLoaded', () => {

let xhr = new XMLHttpRequest(),
                url = 'https://jsonplaceholder.typicode.com/photos';
            xhr.open("GET", url), xhr.send();
            xhr.onload = function () {
                let cardObj = JSON.parse(xhr.response);
                let littleArray = cardObj.slice(0,6);
                littleArray.forEach(imgAndTitle => {

                let mimg = document.createElement('img');
                mimg.setAttribute('src',`'${imgAndTitle.url}'`);
mimg.setAttribute('alt', '');
mimg.setAttribute('height', '100px');
mimg.setAttribute('width', '100px');
                 
                let text = document.createElement('div');
                text.innerHTML = `${imgAndTitle.title}`;
                document.body.appendChild(text); 
                document.body.appendChild(mimg);
                }
                )};



       window.addEventListener("scroll", function(){
        let block = document.getElementById('infinite-scroll'),
        contentHeight = block.offsetHeight,
        yOffset       = window.pageYOffset,
        windowHeight = window.innerHeight,
        y = yOffset + windowHeight,
        body = document.getElementsByTagName('body');
          
           if(y >= contentHeight) {
            let xhr = new XMLHttpRequest(),
                url = 'https://jsonplaceholder.typicode.com/photos';
            xhr.open("GET", url), xhr.send();
            xhr.onload = function () {
                let cardObj = JSON.parse(xhr.response);
                let bigArray = cardObj.slice(7,cardObj.length);
                bigArray.forEach(imgAndTitle => {

                let mimg = document.createElement('img');
                
                mimg.setAttribute('src',`'${imgAndTitle.url}'`);
mimg.setAttribute('alt', '');
mimg.setAttribute('height', '100px');
mimg.setAttribute('width', '100px');
                 
                let text = document.createElement('div');
                text.innerHTML = `${imgAndTitle.title}`;
                document.body.appendChild(text); 
                document.body.appendChild(mimg);
                // mimg.classList.add('forImages');
                }
                )};
           }
                });
            });
          
        


