// 6月5号开始学习

var vm = new Vue({
    el: '#app',
    data: {
        title: '靳小健',
        productList: [],
        totalMoney: 0
    },
    filters: {
        formatMoney: function(val) {
            return '￥' + val;
        }
    },
    mounted: function() {
        this.cartView();
    },
    methods: {
        cartView: function() {

            this.title += '的购物车';
            this.$http.get('data/cartData.json', { 'id': 123 }).then(
                res => {
                    this.productList = res.body.result.list;
                    this.totalMoney = res.body.result.totalMoney;
                }
            )

        },
        changeMoney:function(obj,val){
          console.log('1');
          obj.productQuantity+val;
        }
    }
});
Vue.filter('money', function(val, type) {
    return '共' + val + type;
})
