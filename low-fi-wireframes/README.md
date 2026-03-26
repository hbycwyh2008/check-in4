# Low-fi wireframes (A / B / C) for surveys & Google Form

## Source of the composite figure

`checkin1-p3-img1.png` is **embedded in your Check-In 1 PDF** (“Figure 1 — Low-fidelity wireframes for the three alternatives”). It was **extracted** with PyMuPDF from:

`Individual_Project_Check_In_1_v1-1 (1).pdf` → page 3.

Layout in the image:

- **Left column** = Design A (Rubric breakdown)  
- **Center column** = Design B (Anchored feedback)  
- **Right column** = Design C (Practice plan)  

This matches the placeholder in your paper survey (“insert A/B/C wireframe here”).

## Google Form script

`create_google_form_low_fi_ab_c.gs` loads this file by default from:

`https://raw.githubusercontent.com/hbycwyh2008/individual-project/main/low-fi-wireframes/checkin1-p3-img1.png`

**Before running the script:** commit and **push** `checkin1-p3-img1.png` to the `main` branch of `individual-project`. If the URL 404s, open the form editor and **manually add** the image (or fix `LOW_FI_COMPOSITE_URL` if your repo or branch name differs).

## Optional: three separate images

Crop the composite into three PNGs, host them, and set `LOW_FI_IMAGE_URL_A`, `_B`, `_C` in the script (leave `LOW_FI_COMPOSITE_URL` unused or empty when all three are set—the script uses split images when all three URLs are non-empty).

## Re-extract from PDF (if you update Check-In 1)

```bash
python3 -c "
import fitz, os
pdf_path = 'Individual_Project_Check_In_1_v1-1 (1).pdf'
out_dir = 'low-fi-wireframes'
os.makedirs(out_dir, exist_ok=True)
doc = fitz.open(pdf_path)
for i in range(len(doc)):
    for j, img in enumerate(doc[i].get_images(full=True)):
        b = doc.extract_image(img[0])
        open(os.path.join(out_dir, f'checkin1-p{i+1}-img{j+1}.{b[\"ext\"]}'), 'wb').write(b['image'])
doc.close()
"
```
