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

# "${FILENAME%.*}"
