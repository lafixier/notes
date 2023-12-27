---
tags:
  - CTF
  - CpawCTF
  - Writeup
date: 2023-12-27
---
## Q1.[Misc] Test Problem
問題文に書いてある。
シーザー暗号で3文字分アルファベットをずらす。
暗号文: `fsdz{Fdhvdu_flskhu_lv_fodvvlfdo_flskhu}`
```cpp:solve.cpp
#include <iostream>
```

```bash:terminal
$ ./solve fsdz{Fdhvdu_flskhu_lv_fodvvlfdo_flskhu}
cpaw{Caesar_cipher_is_classical_cipher}
```

FLAG: `cpaw{Caesar_cipher_is_classical_cipher}`
## Q7.[Reversing] Can you execute ?
ファイルの種類を調べるには `file` コマンドを使う。
```bash:terminal
$ file exec_me
exec_me: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, for GNU/Linux 2.6.24, BuildID[sha1]=663a3e0e5a079fddd0de92474688cd6812d3b550, not stripped
```
以上から ELF ファイルだとわかるので実行する。
```bash:terminal
$ ./exec_me
cpaw{Do_you_know_ELF_file?}
```
FLAG: `cpaw{Do_you_know_ELF_file?}`
## Q8.[Misc] Can you open this file ?
`file` コマンドを使ってファイルの種類を調べる。
```bash:terminal
$ file open_me
open_me: Composite Document File V2 Document, Little Endian, Os: Windows, Version 10.0, Code page: 932, Author: v, Template: Normal.dotm, Last Saved By: v, Revision Number: 1, Name of Creating Application: Microsoft Office Word, Total Editing Time: 28:00, Create Time/Date: Mon Oct 12 04:27:00 2015, Last Saved Time/Date: Mon Oct 12 04:55:00 2015, Number of Pages: 1, Number of Words: 3, Number of Characters: 23, Security: 0
```
`Name of Creating Application: Microsoft Office Word` と書いてあるので、Word で開く。
FLAG: `cpaw{Th1s_f1le_c0uld_be_0p3n3d}`
## Q9.[Web] HTML Page
問題文に書いてあるリンクにアクセスして、`Ctrl+U` でページのソースコードを表示する。
```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->

    <meta name="keyword" content="ctf,flag">
    <meta name="description" content="flag is cpaw{9216ddf84851f15a46662eb04759d2bebacac666}">
    <meta name="author" content="takahoyo">

    <title>Capture The Flag</title>
	以下略...
```

`<meta name="description"...以下略` の `content="flag is` 以降にフラグが書かれている。
FLAG: `cpaw{9216ddf84851f15a46662eb04759d2bebacac666}`
## Q10.[Forensics] River
 river.jpg を `exiftool` で exif 情報を調べる。
 ```bash:terminal
$ exiftool river.jpg
...省略
Create Date                     : 2015:09:14 12:50:38.190234
Date/Time Original              : 2015:09:14 12:50:38.190234
Modify Date                     : 2015:09:14 12:50:38.190234
GPS Latitude                    : 31 deg 35' 2.76" N
GPS Longitude                   : 130 deg 32' 51.73" E
Date/Time Created               : 2015:09:14 12:50:38
Digital Creation Date/Time      : 2015:09:14 12:50:38
Focal Length                    : 4.6 mm
GPS Position                    : 31 deg 35' 2.76" N, 130 deg 32' 51.73" E
Light Value                     : 14.0
```
GPS Latitude と GPS Longitude はそれぞれ緯度と経度を示すので
緯度: `31 deg 35' 2.76" N`
経度: `130 deg 32' 51.73" E`
Google マップヘルプの 緯度と経度を確認、入力する(https://support.google.com/maps/answer/18539?hl=ja) によると
```text:Google マップヘルプの 緯度と経度を確認、入力する
2. 検索ボックスに座標を入力します。使用できる形式は次のとおりです。
・度分秒（DMS）: 41°24'12.2"N 2°10'26.5"E
・度分（DMM）: 41 24.2028, 2 10.4418
・度（DD）: 41.40338, 2.17403
```
とのことなので、度分秒にするために `deg` を `°` に置き換える。

置き換えた緯度:  `31°35' 2.76" N`
置き換えた経度:  `130°32' 51.73" E`

これらをスペースで繋げて `31°35' 2.76" N 130°32' 51.73" E` と Google マップの検索欄に入力し検索すると、甲突川だということがわかる。

なお問題文に
```
FLAGの形式は、"cpaw{river_name}"
例：隅田川 → cpaw{sumidagawa}
```
と書いてあるので、 FLAG: `cpaw{koutsukigawa}`

## Q11.[Network]pcap

Wireshark で pcap ファイルを開いて調べる。

一番下のブロックにフラグが書かれている。

FLAG: `cpaw{gochi_usa_kami}`
## Q12.[Crypto]HashHashHash!
問題文に書いてある通り Google で検索してみる。
検索結果に出てきた Best SHA1 Hash Password Decrypt (https://hashtoolkit.com/decrypt-sha1-hash/e4c6bced9edff99746401bd077afa92860f83de3) を開くとハッシュを戻した値が Decrypted の下に書いてある。 

FLAG: `cpaw{Shal}`
## Q14.[PPC]並べ替えろ!
以下のコードで求める。
```cpp:solve.cpp
solve_14.cpp
````
