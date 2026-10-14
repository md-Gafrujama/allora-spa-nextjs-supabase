from PIL import Image
import numpy as np
import os

base = r"d:\Desktop\sangli\hanif\allora-spa-nextjs-supabase\public\images\home"
target = np.array([150.0, 24.0, 42.0])

for src, dst in [("treat-couple-b.jpg", "treat-couple-c.jpg"), ("treat-deep-b.jpg", "treat-deep-c.jpg")]:
    a = np.array(Image.open(os.path.join(base, src)).convert("RGB")).astype(np.float32)
    r, g, b = a[:, :, 0], a[:, :, 1], a[:, :, 2]
    mask = (r > g + 70) & (r > b + 40) & (g < 70) & (b < 110) & (r > 70)
    print(src, "n", int(mask.sum()), "mean", tuple(int(x) for x in np.round(a[mask].mean(0))))
    lum = 0.299 * r + 0.587 * g + 0.114 * b
    rel = lum / float(lum[mask].mean())
    out = a.copy()
    for i in range(3):
        out[:, :, i][mask] = np.clip(target[i] * rel[mask], 0, 255)
    Image.fromarray(np.clip(out, 0, 255).astype(np.uint8)).save(os.path.join(base, dst), quality=92, optimize=True)
    saved = np.array(Image.open(os.path.join(base, dst)))
    print(" saved", tuple(int(x) for x in np.round(saved[mask].mean(0))))
