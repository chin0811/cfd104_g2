
// vue的東西
let vm = new Vue({
    el:'#app',
    data:{
        index:0,
        products:[],
        prodImage:[],
        lightIndex:[],
        prodNo:[],
        key:[],
        sendNum:[],
    },
    mounted(){
        // 抓圖
        axios.get('php/frontImageSelect.php').then((res)=>{
            this.prodImage = res.data;
        }).catch((err)=>{
            console.log(err)
        });
        // 抓商品
        axios.get('php/frontProductSelectPicture.php').then((res)=>{
            this.products = res.data;
            // for(let i =0; i<this.products.length; i++){
            //     this.$set(this.products[i],"url", `assets/image/commodity/${this.prodImage[i].img}`);
            // }
            for(let i =0; i<this.products.length; i++){
                // console.log(this.products[i].prodNo);
                for(let j =0; j<this.prodImage.length; j++){
                    // console.log(this.prodImage[j].prodNo);
                    if(this.products[i].prodNo==this.prodImage[j].prodNo){
                        console.log("test",this.products[i].prodNo,this.prodImage[j].prodNo)
                        console.log(i,j);
                        this.$set(this.products[i],"url", `assets/image/commodity/${this.prodImage[j].img}`);
                        this.sendNum.push(this.products[i].prodNo);
                    }
                }
            }
        }).catch((err)=>{
            console.log(err)
        });
    },
    methods:{
        // 輪播
        changeIndex:function(change){
            let carouselItem = document.querySelectorAll(".carouselItem");
            console.log(this.index)
            if(change==-1 && this.index>-7){
                this.index = this.index-1;
            }else if(change==1 && this.index<0){
                this.index = this.index+1;
            }
            let x=this.index*100;
            y = x+"%";
            if(this.index<=0 && this.index>=-7){
                for(let i=0; i<carouselItem.length; i++){
                    carouselItem[i].style.transform = `translateX(${y})`;
                }
            }
        },
        // 傳送網址
        send:function(key){
            this.key = key;
            console.log("test",this.key)
            let thisVue = this;
            $.ajax({
                type: 'GET',
                url: 'php/productSearch.php',
                data: {
                    number:thisVue.key+1,
                },
                success: function(data) {
                    console.log(data.message);
                },
                error: function() {
                    console.log('ajax error');
                }
            });
        },
        createHref:function() {
            return `produtFromPhp.html?number=${this.sendNum[this.key]}`;
        }
    }
})
let vm2 = new Vue({
    el:"#app2",
    data:{
        products:[],
        prodImage:[],
        lightIndex:[],
        prodNo:[],
        key:[],
        sendNum:[],
    },
    methods:{
        // 控制篩選器
        selector(select){
            let productSelector = document.querySelector("#productSelector");
            productSelector.classList.toggle("displayNone");
        },
        // 傳送網址
        send:function(key){
            this.key = key;
            console.log("test",this.key)
            let thisVue = this;
            $.ajax({
                type: 'GET',
                url: 'php/productSearch.php',
                data: {
                    number:thisVue.key+1,
                },
                success: function(data) {
                    console.log(data.message);
                    console.log("成功了嗎?");
                },
                error: function() {
                    console.log('ajax error');
                }
            });
        },
        createHref:function() {
            return `produtFromPhp.html?number=${this.sendNum[this.key]}`;
        }
    },
    created(){
        // 抓圖
        axios.get('php/frontImageSelect.php').then((res)=>{
            this.prodImage = res.data;
        }).catch((err)=>{
            console.log(err)
        });
        // 抓商品
        axios.get('php/frontProductSelectPicture.php').then((res)=>{
            this.products = res.data;
            // for(let i =0; i<this.products.length; i++){
            //     this.$set(this.products[i],"url", `assets/image/commodity/${this.prodImage[i].img}`);
            // };
            console.log(this.products);
            console.log(this.prodImage);
            for(let i =0; i<this.products.length; i++){
                // console.log(this.products[i].prodNo);
                for(let j =0; j<this.prodImage.length; j++){
                    // console.log(this.prodImage[j].prodNo);
                    if(this.products[i].prodNo==this.prodImage[j].prodNo){
                        console.log("test",this.products[i].prodNo,this.prodImage[j].prodNo)
                        console.log(i,j);
                        this.$set(this.products[i],"url", `assets/image/commodity/${this.prodImage[j].img}`);
                        this.sendNum.push(this.products[i].prodNo);
                    }
                }
            };
            console.log(this.sendNum);
        }).catch((err)=>{
            console.log(err)
        });
        }
})
$(document).ready(function(){
    // 加入收藏
    $('.like .pic img').click(function(e){
        $(this).toggleClass('active');
    });
});