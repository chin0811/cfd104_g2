let xPos = 0;

gsap.timeline()
    //set initial rotationY so the parallax jump happens off screen
    .set('.ring', { rotationY:180, cursor:'grab' }) 
    // apply transform rotations to each image
    .set('.door',  { 
        rotateY: (i)=> i*-72,
        transformOrigin: '50% 50% 500px',
        z: -500,
        backgroundPosition:(i)=>getBgPos(i),
        backfaceVisibility:'hidden'
    })    
    .from('.door', {
        duration:1.5,
        y:200,
        opacity:0,
        stagger:0.3,
        ease:'expo'
    })
    .add(()=>{
        $('.door').on('mouseenter', (e)=>{
            let current = e.currentTarget;
            gsap.to('.door', {opacity:(i,t)=>(t==current)? 1:0.5, ease:'power3'})
        })
        $('.door').on('mouseleave', (e)=>{
            gsap.to('.door', {opacity:1, ease:'power2.inOut'})
        })
    }, '-=0.5')

$(window).on('mousedown touchstart', dragStart);
$(window).on('mouseup touchend', dragEnd);

function dragStart(e){ 
    if (e.touches) e.clientX = e.touches[0].clientX;
    xPos = Math.round(e.clientX);
    gsap.set('.ring', {cursor:'grabbing'})
    $(window).on('mousemove touchmove', drag);
}

function drag(e){
    if (e.touches) e.clientX = e.touches[0].clientX;      

    gsap.to('.ring', {
        rotationY: '-=' +( (Math.round(e.clientX)-xPos)%360 ),
        onUpdate:()=>{ gsap.set('.door', { backgroundPosition:(i)=>getBgPos(i) }) }
    });
    xPos = Math.round(e.clientX);
}

function dragEnd(e){
    $(window).off('mousemove touchmove', drag);
    gsap.set('.ring', {cursor:'grab'});
}

function getBgPos(i){ //returns the background-position string to create parallax movement in each image
    return ( 100-gsap.utils.wrap(0,360,gsap.getProperty('.ring', 'rotationY')-180-i*72)/360*500 )+'px 0px';
}

// 點擊連結後播放完動畫才跳轉網頁
$("#toys").click(function(e){
    e.preventDefault();
    // console.log($(this).find('a').attr('href'));
    var url = $(this).find('a').attr('href');
    TweenMax.to("#toys",1, {
        // opacity:0,
        scale: 5,
        
        onComplete: function(){
                location.href = url;                           
        },
    }, 0.1);
});

// hover顯示字
$(".door").each(function(index, element){
    var anim  = TweenLite.to($(this).find(".text"),1,{scale:1,opacity:1,y:-10,paused:true});
    element.animation = anim ;
});

$(".door").hover(over, out);
function over(){ this.animation.play() };
function out(){ this.animation.reverse() };