#Vue.jsの基本
[Vue.js公式HP](https://jp.vuejs.org/index.html)
## Vue.jsの読み込み
Vue.jsの読み込みには3つの方法があります。
[Vue.js公式HPインストールのページ](https://jp.vuejs.org/v2/guide/installation.html)

1. CDN
2. ファイルをダウンロードして配置
3. NPMを利用

学習するには1のCDNを使います。
Vue.jsインストールページの＃CDNの項目にアドレスが書かれています。

```
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
```

`</body>`直前にCDNのコードを貼り付けます。

### Vue.jsの開発バージョンと本番バージョン
Vue.jsには開発バージョンと本番バージョンがあります。
開発バージョンには警告出力やデバッグモードがあります。
[Vue.js公式HPインストールのページ](https://jp.vuejs.org/v2/guide/installation.html)に別れてダウンロードできますので、それぞれ必要なバージョンをダウンロードします。

vue.jsファイルは開発バージョン、vue.min.jsが本番バージョンと考えれば良いです。

CDNの場合は最後のvue.jsをvue.min.jsに変更すれば良いです。

ここまでがVue.jsを使う準備になります。

## Vueインスタンス作成
まず第一歩。
Vue インスタンスを生成するには、オプションオブジェクトを渡します。
new演算子でインスタンス化します。
オプションには`el`と`data`と`methods`があります。

主な働きは次の様になります。
* el:JavaScriptとHTMLを紐付ける記述
* data:データの登録
* methodes:関数を記述

インスタンス作成コード
```
var app = new Vue({
 //この中にオプションを記述 
})
```

## ルートテンプレート作成
JavaScriptとHTMLを紐付ける方法です。

1. HTML側にdivタグを用意してid名をつけます。
2. JavaScript側でVueをインスタンス化します。
その際にJavaScriptとHTMLを紐付けるために次の記述をします。
```
var app = new Vue({
  el:'#app'
})
```
Vue.jsでの紐付けは`el:'id名'`とする決まりです。
Reactではrender関数を使って紐付けを行いましたがVue.jsではこのようにします。

## データのバインディング
Vue.jsはデータをリアクティブな状態にしてくれます。
* リアクティブとは値を変更すると表示されている値もリアルタイムに変更される仕組みのことです。

具体的にはマスタッシュ構文`{{}}`がポイントです。

HTML側でマスタッシュ構文`{{}}`を使います。
マスタッシュ構文を使ってデータバインディングを行います。
そしてこの方法はデータと描画を同期する事ができます。

App.js
```
var app = new Vue({
  el:'#app',
  data:{
    message:'Hello world!'
  }
})
```

マスタッシュ構文は紐付けを行なったid名appの中で行う必要があります。
index.html
```
<div id="app">
<p>{{message}}</p>
</div>
```
さらに表示内容を増やす

App.js
```
var app = new Vue({
  el:'#app',
  data:{
    message:'Hello world!',
    count:10,
    user:{
      lastname:'Tahara',
      firstname:'Masaharu',
      sex:'Man'
    },
    langs: ['javascript','php','python']
  }
})
```

index.html
```
<div id="app">
<p>{{message}}</p>
<p>{{count}}</p>
<p>{{user.lastname}}</p>
<p>{{langs[0]}}</p>
</div>
```

## ディレクティブについて
v-***で始まる特別な属性
なんらかの支持をする仕組み

### 属性のデータバインド
マスタッシュ構文を属性に使用することはできません。
属性に使用する場合は`v-bind:value="message"`のようにv-bindディレクティブを使用します。

```
<input type="text" v-bind:value="message">
```

## 条件分岐　v-if
`v-if`を使うと要素の表示と非表示を切り替えることができます。
表示、非表示の切り替えはDOM自体を書き出したり、書き出さなかったりしています。

```
<p v-if="toggle">{{message}}</p>
```

```
var app = new Vue({
  el:'#app',
  data:{
    toggle:false,
    message:'Hello world!',
  }
})

```

## v-show
v-showを使うと要素の表示と非表示を切り替えることができます。
こちらはCSSのdisplayプロパティをnoneにするかどうかで行なっています。

```
<p v-show="toggle">{{message}}</p>
```

## v-for
オブジェクトの繰り返し

```
<ol>
  <li v-for="lang in langs">{{lang}}</li>
</ol>
```

```
var app = new Vue({
  el:'#app',
  data:{
    toggle:false,
    message:'Hello world!',
    count:10,
    user:{
      lastname:'Tahara',
      firstname:'Masaharu',
      sex:'Man'
    },
    langs: ['javascript','php','python']
  }
})
```
v-forはオブジェクトを書き出すのにも使えます。keyは第2引数なので注意

```
<ul>
<li v-for="(value,key) in user">{{key}}:{{value}}</li>  
</ul>
```

## イベント
v-onディレクティブ

index.html
```
<p><button v-on:click="onclick">click</button></p>
<p>{{now}}</p>
```

App.js
```
var app = new Vue({
  el:'#app',
  data:{
    now:''
  },
  methods:{
    onclick:function(){
      this.now = new Date().toLocaleString()
    }
  }
})
```

## 双方向データバイディング
v-modelを使います。双方向データバインディングですから入力内容が元データにも反映されます。そのため、結果として`v-bind:value="message"`にも影響が出ます。

```
<input type="text" v-bind:value="message">
<input type="text" v-model="message">
<input type="text" v-model="message">
```

## コンポーネント

基本的な書き方
App.js
```
Vue.component('hello-component',{
  template:'<p>Hello component!</p>'
})
```

index.html
```
<hello-component></hello-component>
```







