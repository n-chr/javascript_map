// JavaScript

//const map = L.map('map').setView([33.59002728111397, 130.35308545478912], 20);
const map = L.map('map').setView([33.59002728111397, 130.35308545478912], 14);


// Open Street Map
//L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(map);

// Open Street Map hot
//L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
//  }).addTo(map);

// 国土地理院
L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
    attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>',}).addTo(map);

//複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
    options: {
        shadowUrl: 'images/ico_shadow.png',
        iconSize: [40, 40],
        shadowSize: [40, 40],
        iconAnchor: [20, 40],
        shadowAnchor: [20, 40],
        popupAnchor: [0, -42]
    }
});
const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
    pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' });

// openPopupの追加で最初から吹き出し表示
L.marker([33.59002728111397, 130.35308545478912], { icon: whiteIcon }).addTo(map)
.bindPopup('福岡市博物館');
// .openPopup();吹き出しに表示したいテキストは、bindPopup(‘ ‘)の中に記述
//画像を入れる場合　<br><img src="images/img01.png" alt="img"></img>

//円を描く場合
const circle = L.circle([33.59002728111397, 130.35308545478912], {
    color: '#fff', //円の輪郭線の色
    fillColor: 'red', //円の塗りつぶしの色
    fillOpacity: 0.3, //塗りつぶしの不透明度
    radius: 100 //半径、メートルで指定
}).addTo(map);
circle.bindPopup("半径100mの範囲");



L.marker([35.18367656004302, 136.93326139042304], { icon: pinkIcon }).addTo(map)
    .bindPopup('徳川美術館');

// 多角形の表示
const polygon = L.polygon([
    [35.18293678700117, 136.93408940271848],
    [35.185421789487194, 136.93447071793614],
    [35.18571703225704, 136.9319520305773],
    [35.1839865662978, 136.93158074997064],
    [35.183281247327585, 136.9317212345245]
], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.3
}).addTo(map);

// クリック位置の緯度経度表示
//const popup = L.popup();
//function onMapClick(e) {
//    popup
//        .setLatLng(e.latlng)
//        .setContent("ここは" + e.latlng.toString() + "です")
//        .openOn(map);
//}
//map.on('click', onMapClick);


L.marker([35.036233817588496, 135.73529435332148], { icon: whiteIcon }).addTo(map)
    .bindPopup('北野天満宮');

