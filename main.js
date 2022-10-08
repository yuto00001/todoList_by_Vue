
/*
enterを押したらリストが追加される
ーリストを作成
ーリストをhtmlと紐づけて表示
ーinput要素のリセット

リストに関連した挙動のみを定数定義
ー呼び出す

×を押したらリストを削除
ー .remove();

チェックを入れたらスタイル変更
ー打ち消し線
ー文字色を薄く

ユーザーが文字入力を始めた時点でリストに移行する処理に変更
ー
*/
const input = document.getElementById('input_text');
const list_container = document.getElementById('list_container');
const delete_icon = document.getElementById('delete_icon');
const list = document.getElementById('list');
const checkbox = document.getElementById('checkbox');
const p = document.getElementById('p');

const lists = function() {
  const list = document.createElement('div');
  list.id = 'list';
  list_container.append(list);

  const span_input = document.createElement('span');
  span_input.id = 'span_input';
  list.append(span_input);

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'checkbox';
  span_input.append(checkbox);

  const p = document.createElement('p');
  p.id = 'p';
  p.textContent = input.value;
  p.className = 'none_text_deco', 'text_deco';
  list.append(p);
  checkbox.onclick = function() {
    p.classList.toggle('text_deco');
  }

  const delete_icon = document.createElement('span');
  delete_icon.id = 'delete_icon';
  delete_icon.textContent = '×';
  delete_icon.onclick = function() {
    list.remove();
  }
  list.append(delete_icon);
}

// document.onkeydown = function(event) {
// if(event.key === 'Enter') {
//   lists();
//   input.value = '';
// }
// }

/*
input.value が機能しなくなった。

{{ }}での表示と v-text= での表示は何が違う？

●list_text と textInput をうまく使ってフォームに入力された値を表示したい。※ 親要素が異なっている。
*/

var list_vue = new Vue({
  el: "#list",
  data:{
    listItem: "list item",
    list_text:"[]",
  },
})
var writing_area_vue = new Vue({
  el: "#writing_area",
  data:{
    textInput:"",
    add: "追加",
  },
  methods: {
    add_icon: function(){
      console.log('test')
      list_vue().list_text.push(this.textInput)
      lists();
    }
  }
})

/*
ーデータとDOMの結びつけはHTML上で行う
ーー紐付けはHTML、記述はVueが担うから、UIとデータがリンクする？
ーーVueの全ての記述は引数としてHTMLの該当箇所に紐づけられる。

まずVue.jsで書き直す
ーUIをVueで書く
ーイベントをVueで書く


FirebaseのWebAPI(dataBase)を取り入れる。
【https://www.ipride.co.jp/blog/3479】
【https://firebase.google.com/docs/auth/web/password-auth?hl=ja】
【https://cloud.google.com/endpoints/docs/openapi/authenticating-users-firebase?hl=ja】
ーFirebaseでプロジェクトを作成
ーAuthentication(認証) の欄から設定を行う
ー別ファイルに認証コードを添付
ーーいちおうユーザーからの閲覧不可にしたい
ーーーどうやるんだっけ？？
ーユーザーIDを受け取って端末?に返す情報を選別する
ーーFirebase がやってくれるのか自分でやるのか？？

データのやり取りができるように。
ーどうにかして紐づける
ーどうにかして記憶させる

DOM操作による表示

*/
