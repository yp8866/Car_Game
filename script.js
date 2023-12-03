document.getElementById("start").addEventListener("click",()=>{
    document.getElementById("start").style.display="none";

    // for moving the car
        var t=50;
        var l=45;

        document.addEventListener('keydown' ,(x)=>{
            let val=x.keyCode;
            if(val==87){
                t=t-3;
            }
            else if(val==83){
                t=t+3;
            }
            
            else if(val==65){
                l=l-1;
            }
            
            else if(val==68){
                l=l+1;
            }

            if(l<25) l=25;
            if(l>66) l=66;

            document.getElementById('mycar').style.top=t+"vh";
            document.getElementById('mycar').style.left=l+"vw";
            
            

        })

    // for animating the cars and road
        
        document.getElementById('car1').style.animation="carmove infinite 9s linear";
        document.getElementById('car2').style.animation="carmove infinite 5s linear";
        document.getElementById('car3').style.animation="carmove infinite 3s linear";
        document.getElementById('car4').style.animation="carmove infinite 4s linear";
        document.getElementById('road').style.animation="roadanimation infinite 20s linear";
    
    // for updating the score

        setInterval(() => {
            let ini=document.getElementById('scorecnt').innerHTML-'0';
            ini+=1;
            document.getElementById('scorecnt').innerHTML=ini;
        }, 100);


    // for changing the positions of car

        setInterval(()=>{
            let l=Math.floor(Math.random()*(425-300+1)+300);
            document.getElementById('car1').style.left=l+"px";
        },9000)
        setInterval(()=>{
            let l=Math.floor(Math.random()*(600-485+1)+485);
            document.getElementById('car2').style.left=l+"px";
        },5000)
        setInterval(()=>{
            let l=Math.floor(Math.random()*(850-790+1)+790);
            document.getElementById('car3').style.left=l+"px";
        },3000)
        setInterval(()=>{
            let l=Math.floor(Math.random()*(720-660+1)+660);
            document.getElementById('car4').style.left=l+"px";
        },4000)

    // for detecting the crash


        setInterval(()=>{
            var car1=document.getElementById('car1').getBoundingClientRect();
            var car2=document.getElementById('car2').getBoundingClientRect();
            var car3=document.getElementById('car3').getBoundingClientRect();
            var car4=document.getElementById('car4').getBoundingClientRect();
            var mycar=document.getElementById('mycar').getBoundingClientRect();

            var car1_left=Math.abs(car1.left)+27;
            var car1_right=Math.abs(car1.right)-27;
            var car1_top=Math.abs(car1.top);
            var car1_bottom=Math.abs(car1.bottom);

            var car2_left=Math.abs(car2.left)+27;
            var car2_right=Math.abs(car2.right)-27;
            var car2_top=Math.abs(car2.top);
            var car2_bottom=Math.abs(car2.bottom);

            var car3_left=Math.abs(car3.left)+27;
            var car3_right=Math.abs(car3.right)-27;
            var car3_top=Math.abs(car3.top);
            var car3_bottom=Math.abs(car3.bottom);

            var car4_left=Math.abs(car4.left)+27;
            var car4_right=Math.abs(car4.right)-27;
            var car4_top=Math.abs(car4.top);
            var car4_bottom=Math.abs(car4.bottom);
            
            var mycar_left=Math.abs(mycar.left)+27;
            var mycar_right=Math.abs(mycar.right)-27;
            var mycar_top=Math.abs(mycar.top);
            var mycar_bottom=Math.abs(mycar.bottom);

            if(mycar_top<20){
                setTimeout(()=>{
                    alert(`Crash! Your Score: ${document.getElementById('scorecnt').innerHTML}`);
                })
                location.reload();
            }

            if(((mycar_left>car1_left&&mycar_left<car1_right)||(mycar_right>car1_left&&mycar_right<car1_right))&&((mycar_top>car1_top&&mycar_top<car1_bottom)||(mycar_bottom>car1_top&&mycar_bottom<car1_bottom))){
                setTimeout(()=>{
                    alert(`Crash! Your Score: ${document.getElementById('scorecnt').innerHTML}`);
                })
                location.reload();
            }
            if(((mycar_left>car2_left&&mycar_left<car2_right)||(mycar_right>car2_left&&mycar_right<car2_right))&&((mycar_top>car2_top&&mycar_top<car2_bottom)||(mycar_bottom>car2_top&&mycar_bottom<car2_bottom))){
                setTimeout(()=>{
                    alert(`Crash! Your Score: ${document.getElementById('scorecnt').innerHTML}`);
                })
                location.reload();
            }
            if(((mycar_left>car3_left&&mycar_left<car3_right)||(mycar_right>car3_left&&mycar_right<car3_right))&&((mycar_top>car3_top&&mycar_top<car3_bottom)||(mycar_bottom>car3_top&&mycar_bottom<car3_bottom))){
                setTimeout(()=>{
                    alert(`Crash! Your Score: ${document.getElementById('scorecnt').innerHTML}`);
                })
                location.reload();
            }
            if(((mycar_left>car4_left&&mycar_left<car4_right)||(mycar_right>car4_left&&mycar_right<car4_right))&&((mycar_top>car4_top&&mycar_top<car4_bottom)||(mycar_bottom>car4_top&&mycar_bottom<car4_bottom))){
                setTimeout(()=>{
                    alert(`Crash! Your Score: ${document.getElementById('scorecnt').innerHTML}`);
                })
                location.reload();
            }



            
            

        },100)



})