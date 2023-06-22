 window.addEventListener('keydown',(e)=>{
            const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
            const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
            if(!audio) return;
            
            key.classList.add('playing');
            audio.currentTime = 0;
            audio.play();

            if(key.classList.contains('playing')){
                key.addEventListener('transitionend', ()=>{
                    key.classList.remove('playing')
                })
            }
            
        })
