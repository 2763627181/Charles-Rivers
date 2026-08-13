from PIL import Image
import os

# (filename, split_y or None, top_name, bottom_name)
splits = [
    ("IMG_8288.jpeg", 628, "home-hero-en", "guide-overview-en"),
    ("IMG_8289.jpeg", 638, "aging-mouse-chart-en", "coat-colors-grid-en"),
    ("IMG_8290.jpeg", 651, "ear-id-system-en", "health-head-body-en"),
    ("IMG_8291.jpeg", 646, "health-eyes-en", "health-repro-digest-en"),
    ("IMG_8292.jpeg", 648, "health-neurological-en", "health-emergency-en"),
    ("IMG_8293.jpeg", 646, "handbook-cover-en", "guide-overview-es"),
    ("IMG_8294.jpeg", 649, "aging-mouse-chart-es", "coat-colors-grid-es"),
    ("IMG_8295.jpeg", 647, "ear-id-system-es", "health-head-body-es"),
    ("IMG_8296.jpeg", 642, "sexing-selector-en", "sexing-selector-es"),
    ("IMG_8297.jpeg", 657, "aging-rat-chart-es", "aging-rat-chart-en"),
    ("IMG_8298.jpeg", 650, "health-eyes-es", "health-repro-digest-es"),
    ("IMG_8299.jpeg", 819, "health-neurological-es", "health-emergency-es"),
    ("IMG_8300.jpeg", 634, "handbook-cover-es", "sexing-mouse-detail-en"),
    ("IMG_8301.jpeg", None, "sexing-mouse-detail-es", None),
]

src_dir = "img"
out_dir = "public/images/reference/_screens"
os.makedirs(out_dir, exist_ok=True)

for fname, split_y, top_name, bottom_name in splits:
    im = Image.open(os.path.join(src_dir, fname)).convert("RGB")
    w, h = im.size
    if split_y is None:
        im.save(os.path.join(out_dir, f"{top_name}.jpg"), quality=92)
        print(top_name, im.size)
    else:
        top = im.crop((0, 0, w, split_y))
        bottom = im.crop((0, split_y + 12, w, h))
        top.save(os.path.join(out_dir, f"{top_name}.jpg"), quality=92)
        bottom.save(os.path.join(out_dir, f"{bottom_name}.jpg"), quality=92)
        print(top_name, top.size, '|', bottom_name, bottom.size)
