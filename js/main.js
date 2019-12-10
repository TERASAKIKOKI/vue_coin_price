var app = new Vue({
  el: '#app',
  data: {
    bpi: null,
    hasError: false,
    loading: true
  },
  mounted: function(){ // インスタンスがマウントされた後、データをAPIから取得する
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json') //データの取得先
    .then(function(response) { //responseにAPIからの戻り値が入る
      // console.log(response.data.bpi)
      // console.log(response.data.bpi.USD.rate_float)
      this.bpi = response.data.bpi
    }.bind(this))
    .catch(function(error){
      console.log(error)
      this.hasError = true
    }.bind(this))
    .finally(function(){ //通信に関する処理がすべて終わった時に読み込まれる
      this.loading = false 
    }.bind(this))
  },
  filters: {　　//小数点以下の数を扱うフィルター
    currencyDecimal(value) {
      return value.toFixed(2) //少数点以下を2桁に指定する
    }
  }
})