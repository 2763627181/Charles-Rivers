from PIL import Image
import glob, numpy as np

for f in sorted(glob.glob('img/*.jpeg')):
    im = Image.open(f).convert('RGB')
    arr = np.array(im)
    h, w, _ = arr.shape
    row_mean = arr.mean(axis=(1,2))  # brightness per row
    # find dark rows (divider is near-black bar) in middle 30-70% region
    dark_rows = [y for y in range(int(h*0.2), int(h*0.8)) if row_mean[y] < 40]
    print(f, 'size', im.size, 'dark_rows_sample', dark_rows[:5], '...' if len(dark_rows)>5 else '', dark_rows[-5:] if len(dark_rows)>5 else '')
