
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

document.onkeydown = function(event) {
if(event.key === 'Enter') {
  lists();
  input.value = '';
}
}


