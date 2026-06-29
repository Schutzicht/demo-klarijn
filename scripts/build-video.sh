#!/usr/bin/env bash
# Bouwt de placeholder uitleg-video ("Eline legt uit") uit merk-foto's + ElevenLabs VO.
# Static ffmpeg via npm (geen Homebrew nodig).
set -euo pipefail
cd "$(dirname "$0")/.."

FF="node_modules/ffmpeg-static/ffmpeg"
SRC=".image-src"
WORK=".image-src/video"
FONT_B="$SRC/font-bold.ttf"
FONT_R="$SRC/font-reg.ttf"
mkdir -p "$WORK" public/video

AUB="0x5E1F5C"
MAG="0xE0277A"

# segment: <bron-png> <duur> <caption>
mkseg () {
  local src="$1" dur="$2" cap="$3" out="$4"
  local frames
  frames=$(python3 -c "print(int($dur*30))")
  # zoompan d=frames op de EERSTE inputframe; output begrensd met -frames:v.
  "$FF" -y -loop 1 -i "$src" -filter_complex \
"[0:v]scale=2560:-1,crop=2560:1440,zoompan=z='min(zoom+0.0012,1.12)':d=$frames:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1280x720:fps=30,format=yuv420p,\
drawbox=x=0:y=600:w=1280:h=120:color=${AUB}@0.86:t=fill,\
drawbox=x=64:y=624:w=8:h=72:color=${MAG}:t=fill,\
drawtext=fontfile=${FONT_B}:text='${cap}':fontcolor=white:fontsize=42:x=92:y=600+(120-th)/2" \
    -frames:v "$frames" -c:v libx264 -crf 24 -preset veryfast -pix_fmt yuv420p -r 30 "$out" -loglevel error
  echo "seg: $out"
}

mkseg "$SRC/scene-talking.png"    3.3 "Eline, jurist bij Klarijn"        "$WORK/s1.mp4"
mkseg "$SRC/scene-discussion.png" 3.0 "Vertel kort wat er speelt"        "$WORK/s2.mp4"
mkseg "$SRC/scene-coffee.png"     4.3 "Vaste prijs, vooraf bekend"       "$WORK/s3.mp4"
mkseg "$SRC/scene-handshake.png"  3.0 "Helder, snel, geen verrassingen"  "$WORK/s4.mp4"

# Eind-kaart (aubergine) met merk-claim
"$FF" -y -f lavfi -t 2.8 -i "color=c=${AUB}:s=1280x720:r=30" -filter_complex \
"drawbox=x=540:y=300:w=200:h=6:color=${MAG}:t=fill,\
drawtext=fontfile=${FONT_B}:text='Vraag het Klarijn':fontcolor=white:fontsize=70:x=(w-tw)/2:y=200,\
drawtext=fontfile=${FONT_R}:text='Helderheid in juridische oplossingen':fontcolor=0xF2A4C9:fontsize=32:x=(w-tw)/2:y=340" \
  -c:v libx264 -crf 24 -preset veryfast -pix_fmt yuv420p -r 30 "$WORK/s5.mp4" -loglevel error
echo "seg: $WORK/s5.mp4"

# Concat
printf "file 's1.mp4'\nfile 's2.mp4'\nfile 's3.mp4'\nfile 's4.mp4'\nfile 's5.mp4'\n" > "$WORK/list.txt"
"$FF" -y -f concat -safe 0 -i "$WORK/list.txt" -c copy "$WORK/silent.mp4" -loglevel error

# Audio eronder (VO), met korte fade-out
"$FF" -y -i "$WORK/silent.mp4" -i "$WORK/vo.mp3" \
  -filter:a "afade=t=out:st=15.8:d=0.6" \
  -c:v copy -c:a aac -b:a 160k -shortest public/video/eline-uitleg.mp4 -loglevel error
echo "video: public/video/eline-uitleg.mp4"

# Poster (frame uit segment 1)
"$FF" -y -ss 1.2 -i public/video/eline-uitleg.mp4 -frames:v 1 -q:v 3 public/video/eline-uitleg-poster.jpg -loglevel error
echo "poster: public/video/eline-uitleg-poster.jpg"
