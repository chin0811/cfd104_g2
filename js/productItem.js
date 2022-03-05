let data = {
    index: 0,
    src: 'https://picsum.photos/300/200/?random=10',
    tem:0,
    n:0,
    x:1,
    y:2,
    z:3,
    imgs:[
    'https://picsum.photos/300/200/?random=10',
    'https://picsum.photos/300/200/?random=8',
    'https://picsum.photos/300/200/?random=1',
    'https://picsum.photos/300/200/?random=2',
    ]
}
let img01 = document.querySelector("#img01");
console.log(img01);
console.log(img01.src)

let vm = new Vue({
    el:'#app',
    data: data,
    methods:{
        changeIndex:function(change){
            this.n= this.n+change;
            if(this.n<0){
                this.n=3
            }else if (this.n>3){
                this.n=0
            }
        },
        smallToBig:function(index,change){
            console.log("change:"+change)
            console.log("n:"+this.n)
            if(change==this.x){
                this.tem = this.n
                this.n = this.x
                this.x = this.tem
            }else if(change==this.y){
                this.tem = this.n
                this.n = this.y
                this.y = this.tem
            }else if(change==this.z){
                this.tem = this.n
                this.n = this.z
                this.z = this.tem
            }
        }
    }
})
$(document).ready(function(){
    // 加入收藏
    $('.like .pic img').click(function(e){
        $(this).toggleClass('active');
    });
});