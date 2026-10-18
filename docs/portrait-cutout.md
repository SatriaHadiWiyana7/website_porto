# Potret hero transparan

- Sumber: `src/assets/Casual.webp` (foto asli tetap disimpan).
- Hasil: `src/assets/satria-cutout.png`, 1086 × 1448 px, PNG dengan alpha.
- Dibuat menggunakan tool imagegen bawaan, mode edit dengan `transparent_background: true`.
- Fokus edit adalah menghilangkan latar. Hasil tidak disebut sebagai upscale karena resolusi foto sumber lebih besar.
- Latar, kedalaman, dan gerak parallax dibuat terpisah dengan CSS dan Framer Motion.

## Prompt yang digunakan

Use case: background-extraction. Asset type: transparent photographic portrait for the foreground layer of a professional portfolio hero. Edit target: the supplied original portrait of Satria Hadi Wiyana. Remove only the white studio background, making it genuinely transparent with a clean alpha channel including fine hair edges and the spaces around his arms. Preserve the man's exact identity, facial features, expression, hair, skin texture, body proportions, crossed-arm pose, navy blazer, gray shirt, original colors and natural lighting. Preserve the full visible original torso and head; retain the original lower crop and do not invent lower body. Center the cutout on a portrait canvas with a small transparent margin around the hair and sides. Keep photographic detail sharp and natural; do not beautify, stylize, redraw the face, change clothes, add objects, shadows, outlines, text, watermarks or a new background. Output a high-resolution transparent PNG, ideally at least 2048 pixels tall. This must be a faithful cutout of the actual supplied person.
