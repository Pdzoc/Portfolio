let div = document.querySelector('aside');
        let section = document.querySelector('#num-section');
        let h = document.querySelector('#num-ans');
        let button = document.querySelector('#rstbtn')
        
        let last = 0;
        let curr = null;
        let score = 0;

        function restart() {
            section.classList.add('hidden')
            last = 0;
            curr = null;
            score = 0;
            loadNum();
        }

        function loadNum() {
            if(typeof curr=='number') last = curr;
            curr = (~~(Math.random()* 9));
            div.innerText = curr;
            // div.style.animationPlayState = "running";
            div.classList.add('anim');
        }
        
        function handle(e) {
            if(e.keyCode==38 && curr > last) {
                ++score;
                // div.style.animationPlayState = "initial"; 
                div.classList.remove('anim');
                void div.offsetWidth;
                loadNum()
            }
            else if(e.keyCode==40 && curr < last) {
                ++score;
                // div.style.animationPlayState = "initial"; 
                div.classList.remove('anim');
                void div.offsetWidth;
                loadNum()
            }
            else if(e.keyCode==39 && curr == last) {
                ++score;
                // div.style.animationPlayState = "initial"; 
                div.classList.remove('anim');
                void div.offsetWidth;
                loadNum()
            }
            else {
                section.classList.remove('hidden');
                h.innerText = `Wrong! Your score: ${score}`;
            }
        }
        
        document.addEventListener('keydown', handle);
        button.addEventListener('click', restart);

        let art = document.querySelector('article');
        art.children[0].addEventListener('click', () => {
            if(curr > last) {
                ++score;
                div.classList.remove('anim');
                void div.offsetWidth;
                loadNum()
            }
            else {
                section.classList.remove('hidden');
                h.innerText = `Wrong! Your score: ${score}`;
            }
        })

        art.children[1].addEventListener('click', () => {
            if(curr == last) {
                ++score;
                div.classList.remove('anim');
                void div.offsetWidth;
                loadNum()
            }
            else {
                section.classList.remove('hidden');
                h.innerText = `Wrong! Your score: ${score}`;
            }
        })

        art.children[2].addEventListener('click', () => {
            if(curr < last) {
                ++score;
                div.classList.remove('anim');
                void div.offsetWidth;
                loadNum()
            }
            else {
                section.classList.remove('hidden');
                h.innerText = `Wrong! Your score: ${score}`;
            }
        })

        loadNum()