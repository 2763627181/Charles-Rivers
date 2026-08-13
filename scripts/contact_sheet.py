from PIL import Image, ImageDraw, ImageFont
import os, glob, sys

OUT = "public/images/reference"
TMP = "scripts/_qa"
os.makedirs(TMP, exist_ok=True)

def sheet(paths, out_name, cols=5, thumb=180, label_h=22):
    n = len(paths)
    rows = (n + cols - 1) // cols
    cell_w, cell_h = thumb, thumb + label_h
    sheet_im = Image.new("RGB", (cols*cell_w, rows*cell_h), "white")
    draw = ImageDraw.Draw(sheet_im)
    for i, p in enumerate(paths):
        im = Image.open(p).convert("RGB")
        im.thumbnail((thumb-6, thumb-6))
        r, c = divmod(i, cols)
        x = c*cell_w + (cell_w - im.width)//2
        y = r*cell_h + (thumb - im.height)//2
        sheet_im.paste(im, (x, y))
        label = os.path.splitext(os.path.basename(p))[0]
        draw.rectangle([c*cell_w, r*cell_h+thumb, (c+1)*cell_w, r*cell_h+thumb+label_h], fill=(20,30,50))
        draw.text((c*cell_w+3, r*cell_h+thumb+4), label[:22], fill="white")
        draw.rectangle([c*cell_w, r*cell_h, (c+1)*cell_w-1, r*cell_h+thumb-1], outline=(200,200,200))
    sheet_im.save(os.path.join(TMP, out_name), quality=90)
    print(out_name, sheet_im.size)

groups = {
    "qa_aging_mouse.jpg": sorted(glob.glob(f"{OUT}/aging/mouse/*.jpg")),
    "qa_aging_rat.jpg": sorted(glob.glob(f"{OUT}/aging/rat/*.jpg")),
    "qa_coat_colors.jpg": sorted(glob.glob(f"{OUT}/coat-colors/*.jpg")),
    "qa_ear_id.jpg": sorted(glob.glob(f"{OUT}/ear-id/*.jpg")),
    "qa_sexing_handbook_home.jpg": sorted(glob.glob(f"{OUT}/sexing/*.jpg")) + sorted(glob.glob(f"{OUT}/handbook/*.jpg")) + sorted(glob.glob(f"{OUT}/home/*.jpg")),
    "qa_health_head_body.jpg": sorted(glob.glob(f"{OUT}/health/head-body/*.jpg")),
    "qa_health_eyes.jpg": sorted(glob.glob(f"{OUT}/health/eyes/*.jpg")),
    "qa_health_repro_digest.jpg": sorted(glob.glob(f"{OUT}/health/repro-digest/*.jpg")),
    "qa_health_neuro_emergency.jpg": sorted(glob.glob(f"{OUT}/health/neurological/*.jpg")) + sorted(glob.glob(f"{OUT}/health/emergency/*.jpg")),
}

for out_name, paths in groups.items():
    if paths:
        sheet(paths, out_name, cols=5 if len(paths) > 8 else 4)
