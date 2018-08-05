# ikinari
いきなりステーキ

## 変換コマンド

### mov ファイルを mp4 に変換する

```
for f in *.mov ; do ffmpeg -i "$f" "${f/.mov/.mp4}"; done
```

### HEIF (.heic) ファイルを png に変換する

```
for f in *.heic ; do sips --setProperty format png $f --out ${f/heic/png}; done  
```

### 回転(反時計回り)

```
ffmpeg -i input.mp4 -vf "transpose=2" output.mp4
```

- 1: 90°時計回り
- 2: 90°反時計回り
- 3: 90°時計回り → 上下反転
- 0: 90°反時計回り → 上下反転
