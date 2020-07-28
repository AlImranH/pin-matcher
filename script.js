document.addEventListener('contextmenu', event => event.preventDefault());
var pinDisplay = document.getElementById('pinDisplay');
        function getRandomDigit(min, max){
            
            var randomDigit = Math.floor(Math.random() * (max - min)) + min;
            pinDisplay.value = randomDigit;
        }

        const calcBody = document.querySelector('#calcBody');
        const calcDisplay = document.querySelector('#calcDisplay');
        calcBody.addEventListener('click', function(event){
            if(event.target.matches('.num')){
                var numKey = event.target.textContent;
                calcDisplay.value = calcDisplay.value + numKey;
            }
            if(event.target.matches('.clear')){
                calcDisplay.value = '';
            }
            if(event.target.matches('.back-space')){
                var val = calcDisplay.value;
                calcDisplay.value = val.substring(0, val.length - 1);
            }
        })
        const submitBtn = document.getElementById('submitBtn');

        var i = 0;
        submitBtn.addEventListener('click', function(){
            i++;
            var tryLeftCounter = parseInt(document.getElementById('tryLeftCounter').innerText);
            document.getElementById('tryLeftCounter').innerText = tryLeftCounter - 1;
            if(i == 3){
                submitBtn.setAttribute('disabled', 'disabled');                
            }
            if(parseInt(pinDisplay.value) == parseInt(calcDisplay.value)){
                document.getElementById('wrong').style.display = 'none';
                document.getElementById('success').style.display = 'block';
                calcDisplay.style.backgroundColor = '#28A745';
            }else{
                document.getElementById('wrong').style.display = 'block';
                document.getElementById('success').style.display = 'none';
            }
        })