# Windows
windowsのあれこれ

1. [commands](#commands)

## commands
1. [仮想ドライブの追加](#仮想ドライブの追加)
1. [疎通チェック](#疎通チェック)


[戻る](#commands)<br>

### 仮想ドライブの追加
永続させたいならレジストリに追加が必要<br>
パスはどこだっけ?<br>
```
# win11, win10
subst <DriveLetter>: "<targetPath>"
```


### 疎通チェック
```
# win11, win10
ping <hostName or IpAddress> 
```
オプションは
回数指定、テストデータサイズ、タイムアウト、とか<br>
<br>後で書き足す
<br>
