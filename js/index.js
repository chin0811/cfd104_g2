gsap.registerPlugin(ScrollTrigger);
	// 介紹區
    let t1 =gsap.timeline({
            scrollTrigger:{
                trigger:".homeIntro .intro",
                start:"top top",
                end:"40% top",
                scrub:true,
				pin:".homeIntro",
				pinSpace:true,
                markers:true,
				id:"介紹區"
            },
    });
	t1.from(".homeIntro .intro h1",{
		right:"100%",
	});
    t1.to(".homeIntro .intro h1",{
        right:"-10%",
    });
	let t2 =gsap.timeline({
		scrollTrigger:{
			trigger:".homeIntro .intro",
            start:"top top",
            end:"40% top",
            scrub:true,
			pin:".homeIntro",
			pinSpace:true,
            markers:true,
			id:"介紹區"
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
//分類圖片下移區
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
//藝廊圖片下移區
gsap.to(".homeGallery .scrollPic", {
	y: 1800,
	ease: "none",
	scrollTrigger: {
		trigger: ".homeGallery",
		start:"top top",
		pin: ".homeGallery .pic",
		scrub: true,
		// endTrigger: ".homeMember",
		// end:"bottom bottom",
		// markers:true,
		// id:"藝廊區",
		// pinSpacing:false
	}
});
//會員中心圖片下移區
gsap.to(".homeMember .scrollPic", {
	top:"45%",
	ease: "none",
	scrollTrigger: {
		trigger: ".homeMember",
		start:"top top",
		pin: ".homeMember .pic",
		scrub: true,
		endTrigger: ".homeMember",
		end:"center top",
		// markers:true,
		// id:"會員區",
		// pinSpacing:false
	}
});
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
