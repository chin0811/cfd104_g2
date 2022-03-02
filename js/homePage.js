// 滑鼠負片效果(待寫)
// var c= document.querySelector('.cursor');
// function pos(e){
// 	c.style.left=e.clientX+"px";
// 	c.style.top=e.clientY+'px';
// }
// window.addEventListener("mousemove",pos)
 gsap.registerPlugin(ScrollTrigger);
	// 介紹區
	let t2 =gsap.timeline({
		scrollTrigger:{
			trigger:".homeIntro .intro",
            start:"top top",
            end:"40% top",
            scrub:true,
			pin:".homeIntro",
			pinSpace:true,
            // markers:true,
			// id:"介紹區"
		},
	});
	t2.from(".homeIntro .intro .pic",{
		left:"100%",
	});
	t2.to(".homeIntro .intro .pic",{
		left:"50%",
	});


// 分類區
let sections = gsap.utils.toArray(".homeCatalog .card");
gsap.to(sections, {
	xPercent: -100 * (sections.length - 1),
	ease: "none",
	scrollTrigger: {
		trigger: ".homeCatalog",
		pin: ".homeCatalog",
		scrub: true,
		snap: 1 / (sections.length - 1),
		// endTrigger:".homeGallery",
		// end:"bottom top",
		// markers:true,
		// id:"分類區"
	}
});
// 分類圖片下移區
gsap.to(".homeCatalog .catalog .brame .pic img", {
	y:1000,
	ease: "none",
	scrollTrigger: {
		trigger: ".homeGallery",
		start:"top bottom",
		// pin: ".homeGallery",
		scrub: true,
		endTrigger:".homeGallery",
		end:"+=1200px",
		// markers:true,
		// id:"分類圖片下移區",
		// pinSpacing:false
	}
});

// 取得藝廊下移圖片輪播
// let GaPic =document.querySelector(".homeGallery .scrollPic img");
// let imgList = [
// 	"../assets/image/article_articleContent_coverFace.png",
// 	"../assets/image/article_articleContent_bag.png",
// 	"../assets/image/article_articleContent_jeffBollun.png",
// 	"../assets/image/article_articleContent_bighead.png",
// 	"../assets/image/article_articleContent_beBear.png",
// 	"../assets/image/home_homeCatalog_lavbag.png",
// ];
// let i=0; 
// setInterval("changeImg()",800); 
// function changeImg(){
// 	if(i == imgList.length-1){
// 		i=0
// 		GaPic.setAttribute("src",imgList[i]);
// 	}else if(i == i){
// 		i++;
// 		GaPic.setAttribute("src",imgList[i]);
// 	}
// }; 
// window.addEventListener("load",changeImg);


// 滑動區圖片下移
let t3 = gsap.timeline({
	scrollTrigger:{
		trigger: ".scrollDown",
		start:"-20% top",
		// pin: true,
		scrub: true,
		endTrigger: ".homeMember",
		end:"top top",
		// markers:true,
		// id:"滑-1"
	}
});
let windowWidth = window.innerWidth;
if(windowWidth>=768){
	t3.to(".scrollDown .scrollPic",{
		bottom:"10%"
	});
}else{
	t3.to(".scrollDown .scrollPic",{
		bottom:"10%"
	});
}

// 新聞裝飾圖片
gsap.to(".homeNews .decorate.Pictopleft", {
	xPercent:10,
	rotation:90,
	ease: "none",
	scrollTrigger: {
		trigger: ".homeNews",
		scrub: true,
		// markers:true,
		// id:"新聞裝飾",
	}
});
gsap.to(".homeNews .decorate.Pictopright", {
	xPercent:-30,
	rotation:-90,
	ease: "none",
	scrollTrigger: {
		trigger: ".homeNews",
		scrub: true,
	}
});
gsap.to(".homeNews .decorate.Picbottomleft", {
	xPercent:70,
	yPercent:-20,
	rotation:90,
	ease: "none",
	scrollTrigger: {
		trigger: ".homeNews .newsContain .item",
		start:"top top",
		scrub: true,
	}
});
gsap.to(".homeNews .decorate.Picbottomright", {
	xPercent:-30,
	ease: "none",
	scrollTrigger: {
		trigger: ".homeNews .newsContain .item",
		start:"top top",
		scrub: true,
	}
});

ScrollTrigger.refresh();




