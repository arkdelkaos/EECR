#!/bin/bash

# sips -Z 100 client/assets/images/cartas/*.png --out client/assets/images/cartas/*.100.png &&
# sips -Z 25 client/assets/images/cartas/*.png --out client/assets/images/cartas/ &&
# sips -Z 50 client/assets/images/cartas/*.png --out client/assets/images/cartas/ &&
# sips -Z 60 client/assets/images/cartas/*.png --out client/assets/images/cartas/ &&
# sips -Z 75 client/assets/images/cartas/*.png --out client/assets/images/cartas/ &&
# sips -Z 80 client/assets/images/cartas/*.png --out client/assets/images/cartas/ &&
# sips -Z 90 client/assets/images/cartas/*.png --out client/assets/images/cartas/ &&

find 'client/assets/images/cartas' -type f -name '*.png' |\
  while read FILENAME
  do
    MAX='100 90 80 75 60 50 25'
    for x in $MAX;
    do
      NEW_FILENAME="$(echo $FILENAME | sed 's/.png//g')"
      # echo $FILENAME, $NEW_FILENAME.$x.png
      sips -Z $x "$FILENAME" --out "$NEW_FILENAME.$x.png"
    done
  done

  # convert ../../Juegos/Elite\ España/eeavatar-512.png -resize 256x256 client/favicon-256.png
  #
  # convert ../../Juegos/Elite\ España/eeavatar-512.png -resize 128x128 client/favicon-128.png
  #
  # convert ../../Juegos/Elite\ España/eeavatar-512.png -resize 64x64 client/favicon-64.png
  #
  # convert ../../Juegos/Elite\ España/eeavatar-512.png -resize 32x32 client/favicon-32.png
  #
  # convert ../../Juegos/Elite\ España/eeavatar-512.png -resize 16x16 client/favicon-16.png
  #
  # convert favicon-16.png favicon-32.png favicon-64.png favicon-128.png favicon-256.png -colors 256 favicon.ico

# "${FILENAME%.*}"
