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
