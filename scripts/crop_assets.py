from PIL import Image
import os

SCREENS = "public/images/reference/legacy"
OUT = "public/images/reference"

def load(name):
    return Image.open(os.path.join(SCREENS, f"{name}.jpg")).convert("RGB")

def save(im, box, subdir, name, pad=0):
    x0, y0, x1, y1 = box
    x0 -= pad; y0 -= pad; x1 += pad; y1 += pad
    crop = im.crop((max(0,x0), max(0,y0), x1, y1))
    d = os.path.join(OUT, subdir)
    os.makedirs(d, exist_ok=True)
    path = os.path.join(d, f"{name}.jpg")
    crop.save(path, quality=93)
    return path

count = 0

# ---------- HOME ----------
home = load("home-hero-en")
save(home, (280, 262, 905, 525), "home", "hero-mice-trio")
count += 1

# ---------- AGING: MOUSE ----------
mouse = load("aging-mouse-chart-en")
mouse_cols4 = [45, 205, 345, 505]  # x start for 4-col rows
COLW4, ROWH = 160, 90
mouse_days = {}
# Day 1-2 (larger, top row)
mouse_days[1] = (345, 178, 460, 270)
mouse_days[2] = (505, 178, 620, 270)
# Day 3-6
row_y = 283
for i, d in enumerate([3,4,5,6]):
    x0 = mouse_cols4[i]
    mouse_days[d] = (x0, row_y, x0+145, row_y+ROWH)
# Day 7-10
row_y = 388
for i, d in enumerate([7,8,9,10]):
    x0 = mouse_cols4[i]
    mouse_days[d] = (x0, row_y, x0+145, row_y+ROWH)
# Day 11-14
row_y = 493
for i, d in enumerate([11,12,13,14]):
    x0 = mouse_cols4[i]
    mouse_days[d] = (x0, row_y, x0+145, row_y+95)

for d, box in mouse_days.items():
    save(mouse, box, "aging/mouse", f"day-{d:02d}", pad=3)
    count += 1

# ---------- AGING: RAT ----------
rat = load("aging-rat-chart-en")
rat_cols5 = [283, 418, 551, 685, 818]
COLW5 = 127
rat_days = {}
row_y = 150
for i, d in enumerate([1,2,3,4,5]):
    x0 = rat_cols5[i]
    rat_days[d] = (x0, row_y, x0+COLW5, row_y+132)
row_y = 315
for i, d in enumerate([6,7,8,9,10]):
    x0 = rat_cols5[i]
    rat_days[d] = (x0, row_y, x0+COLW5, row_y+132)
row_y = 478
for i, d in enumerate([11,12,13,14]):
    x0 = rat_cols5[i]
    rat_days[d] = (x0, row_y, x0+COLW5, row_y+132)

for d, box in rat_days.items():
    save(rat, box, "aging/rat", f"day-{d:02d}", pad=2)
    count += 1

# ---------- COAT COLORS ----------
coat = load("coat-colors-grid-en")
coat_boxes = {
    "black":   (113, 205, 300, 293),
    "agouti":  (365, 205, 555, 265),
    "nude":    (637, 205, 838, 310),
    "chimera": (905, 205, 1108, 310),
    "grey":    (113, 340, 300, 425),
    "albino":  (365, 340, 555, 415),
    "hooded":  (637, 340, 838, 440),
    "white":   (905, 340, 1108, 440),
    "fawn":    (113, 476, 300, 535),
    "brown":   (365, 476, 555, 550),
}
for name, box in coat_boxes.items():
    save(coat, box, "coat-colors", name, pad=3)
    count += 1

# ---------- EAR ID ----------
ear = load("ear-id-system-en")
save(ear, (10, 185, 575, 512), "ear-id", "chart-1-16", pad=2)
count += 1

ear_cols = [(608,726), (730,818), (822,908), (912,998), (1002,1106)]
mark_labels = ["correct", "incorrect-angle-1", "incorrect-angle-2", "incorrect-amount-1", "incorrect-amount-2"]
for (x0, x1), lab in zip(ear_cols, mark_labels):
    save(ear, (x0, 220, x1, 295), "ear-id", f"mark-{lab}", pad=2)
    count += 1

slice_labels = ["correct", "incorrect-angle-1", "incorrect-angle-2", "incorrect-depth-1", "incorrect-depth-2"]
for (x0, x1), lab in zip(ear_cols, slice_labels):
    save(ear, (x0, 398, x1, 463), "ear-id", f"slice-{lab}", pad=2)
    count += 1

# ---------- SEXING (mouse) ----------
sexing = load("sexing-mouse-detail-en")
save(sexing, (210, 128, 610, 340), "sexing", "mouse-diagram", pad=2)
save(sexing, (210, 350, 610, 605), "sexing", "mouse-pair-photo", pad=2)
save(sexing, (615, 128, 880, 605), "sexing", "mouse-male-closeup", pad=2)
save(sexing, (885, 128, 1145, 605), "sexing", "mouse-female-closeup", pad=2)
count += 4

# ---------- HANDBOOK ----------
handbook = load("handbook-cover-en")
save(handbook, (500, 122, 825, 612), "handbook", "cover", pad=2)
count += 1

# ---------- HEALTH: HEAD/BODY ----------
hb = load("health-head-body-en")
hb_boxes = {
    "emaciation":         (610, 218, 728, 295),
    "ruffled-fur":        (610, 296, 728, 368),
    "malocclusion":       (610, 370, 728, 442),
    "dermatitis":         (610, 444, 728, 545),
    "traumatic-wounds":   (1010, 218, 1155, 300),
    "auricular-dermatitis": (1010, 304, 1155, 372),
    "hyperkeratosis":     (1010, 376, 1155, 445),
    "alopecia":           (1010, 448, 1155, 545),
}
for name, box in hb_boxes.items():
    save(hb, box, "health/head-body", name, pad=3)
    count += 1

# ---------- HEALTH: EYES ----------
eyes = load("health-eyes-en")
eyes_boxes = {
    "microphthalmia-anophthalmia": (610, 218, 728, 290),
    "blepharitis":       (610, 298, 728, 372),
    "corneal-ulceration": (610, 378, 728, 452),
    "buphthalmos":        (610, 458, 728, 528),
    "exophthalmos":       (610, 532, 728, 612),
    "cataract":           (1010, 218, 1155, 292),
    "porphyrin-staining": (1010, 300, 1155, 380),
}
for name, box in eyes_boxes.items():
    save(eyes, box, "health/eyes", name, pad=3)
    count += 1

# ---------- HEALTH: REPRO/DIGEST ----------
rd = load("health-repro-digest-en")
rd_boxes = {
    "diarrhea":         (602, 188, 728, 270),
    "rectal-prolapse":  (610, 287, 728, 366),
    "vaginal-prolapse": (610, 371, 728, 442),
    "uterine-prolapse": (610, 447, 728, 508),
    "lameness":            (1010, 213, 1155, 292),
    "hydrocephalus":       (1010, 297, 1155, 372),
    "distended-abdomen":   (1010, 377, 1155, 452),
    "subcutaneous-edema":  (1010, 457, 1155, 538),
}
for name, box in rd_boxes.items():
    save(rd, box, "health/repro-digest", name, pad=3)
    count += 1

# ---------- HEALTH: NEUROLOGICAL ----------
neuro = load("health-neurological-en")
neuro_boxes = {
    "ataxia":    (795, 178, 1000, 285),
    "paresis":   (795, 290, 1000, 400),
    "paralysis": (795, 405, 1000, 520),
    "head-tilt": (795, 525, 1000, 645),
}
for name, box in neuro_boxes.items():
    save(neuro, box, "health/neurological", name, pad=3)
    count += 1

# ---------- HEALTH: EMERGENCY ----------
emer = load("health-emergency-en")
emer_boxes = {
    "moribund": (758, 176, 920, 288),
    "dyspnea":   (758, 300, 920, 380),
    "hyperpnea": (758, 400, 920, 485),
    "dystocia":  (758, 505, 920, 595),
}
for name, box in emer_boxes.items():
    save(emer, box, "health/emergency", name, pad=3)
    count += 1

print(f"Total crops: {count}")
