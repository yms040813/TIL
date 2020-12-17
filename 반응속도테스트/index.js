const screen = document.querySelector('#screen');
let start;
let end;

let timeout;
const state = {};
screen.addEventListener('click',function(){
  if(screen.classList.contains('waiting')){ 
    screen.classList.remove('waiting');
    screen.classList.add('ready');
    screen.textContent = '초록색이 되면 클릭하세요';
    timeout = setTimeout(function(){
      start = new Date();
     screen.click();
    }, Math.floor(Math.random() * 1000+2000));
  } else if(screen.classList.contains('ready')){
    if(!start){
      clearTimeout(timeout);
      screen.classList.remove('ready');
      screen.classList.add('waiting');
      alert('초록색이 되면 클릭하세요');
      screen.textContent = '다시 클릭해서 시작하세요';

    } else{
    screen.classList.remove('ready');
    screen.classList.add('now');
    screen.textContent = '클릭하세요!';

    } 
    
 } else if(screen.classList.contains('now')){ 
  end = new Date();
  let a = end - start;
  console.log('반응속도', a, 'ms');
  alert('당신의 반응속도는 ' + a +'ms입니다.');

  
  
  start = null;
  end = null;
  screen.classList.remove('now');
  screen.classList.add('waiting');
  screen.textContent = '클릭해서 시작하세요';
}
  
});

