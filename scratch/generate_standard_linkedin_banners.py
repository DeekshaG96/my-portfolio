import os
from PIL import Image, ImageDraw, ImageFont

def make_simple_dark_banner():
    W, H = 1584, 396
    img = Image.new("RGBA", (W, H), (15, 23, 42, 255)) # Slate-900
    draw = ImageDraw.Draw(img)
    
    # Subtle smooth ambient radial glow in the center-right
    for r in range(450, 0, -5):
        alpha = int((1.0 - (r / 450)) * 38)
        color = (2, 132, 199, alpha) # Sky-600 glow
        draw.ellipse([900 - r * 1.8, 198 - r, 900 + r * 1.8, 198 + r], fill=color)
        
    for r in range(300, 0, -5):
        alpha = int((1.0 - (r / 300)) * 25)
        color = (79, 70, 229, alpha) # Indigo glow
        draw.ellipse([1100 - r * 1.5, 198 - r, 1100 + r * 1.5, 198 + r], fill=color)

    # Clean, subtle grid accent lines (minimalist tech aesthetic)
    for y in [70, 198, 326]:
        draw.line([(340, y), (1530, y)], fill=(30, 41, 59, 120), width=1)
    for x in [340, 680, 1020, 1360]:
        draw.line([(x, 40), (x, 356)], fill=(30, 41, 59, 90), width=1)

    # Fonts
    font_dir = r"C:\Users\ganch\.gemini\antigravity-ide\scratch\repos\my-portfolio\scratch\fonts"
    font_sig = ImageFont.truetype(os.path.join(font_dir, "GreatVibes.ttf"), 62)
    font_title = ImageFont.truetype(os.path.join(font_dir, "PlusJakartaSans-Bold.ttf"), 48)
    font_sub = ImageFont.truetype(os.path.join(font_dir, "Inter-SemiBold.ttf"), 20)
    font_tag = ImageFont.truetype(os.path.join(font_dir, "Inter-SemiBold.ttf"), 14)
    font_foot = ImageFont.truetype(os.path.join(font_dir, "Inter-SemiBold.ttf"), 14)

    start_x = 360

    # 1. Top Brand / Signature & Available Pill
    draw.text((start_x, 36), "Deeksha", font=font_sig, fill=(255, 255, 255, 240))
    sig_bbox = draw.textbbox((start_x, 36), "Deeksha", font=font_sig)
    draw.ellipse([sig_bbox[2] + 2, 68, sig_bbox[2] + 10, 76], fill=(56, 189, 248, 255))
    
    # Available for roles badge on right
    pill_text = "● Open for Software & AI Roles"
    p_box = draw.textbbox((0, 0), pill_text, font=font_tag)
    pw = p_box[2] - p_box[0] + 28
    ph = 30
    px = 1534 - pw
    py = 46
    draw.rounded_rectangle([px, py, px + pw, py + ph], radius=15, fill=(30, 41, 59, 200), outline=(56, 189, 248, 120), width=1)
    draw.text((px + 12, py + 6), "●", font=font_tag, fill=(52, 211, 153, 255))
    draw.text((px + 28, py + 6), "Open for Software & AI Roles", font=font_tag, fill=(241, 245, 249, 240))

    # 2. Main Title: Clean, Standard, High-Impact
    draw.text((start_x, 120), "SOFTWARE ENGINEER", font=font_title, fill=(255, 255, 255, 255))

    # 3. Subtitle / Domains (Simple, Professional, Bulleted)
    draw.text((start_x, 182), "Full-Stack Web", font=font_sub, fill=(56, 189, 248, 255))
    draw.text((start_x + 160, 182), "•", font=font_sub, fill=(100, 116, 139, 200))
    draw.text((start_x + 185, 182), "Cloud Architecture (AWS & GCP)", font=font_sub, fill=(226, 232, 240, 240))
    draw.text((start_x + 520, 182), "•", font=font_sub, fill=(100, 116, 139, 200))
    draw.text((start_x + 545, 182), "Applied AI Systems", font=font_sub, fill=(129, 140, 248, 255))

    # 4. Clean Minimalist Tech Pills
    pills = [
        "React 19 & TypeScript",
        "AWS & Google Cloud ACE",
        "Google Gemini 2.5 Flash",
        "Zero-Trust (ZTNA) & Fortinet",
        "GSSoC '26 Contributor"
    ]
    
    bx = start_x
    by = 230
    for p in pills:
        pb = draw.textbbox((0, 0), p, font=font_tag)
        w = pb[2] - pb[0] + 24
        h = 28
        draw.rounded_rectangle([bx, by, bx + w, by + h], radius=6, fill=(30, 41, 59, 180), outline=(51, 65, 85, 200), width=1)
        draw.text((bx + 12, by + 5), p, font=font_tag, fill=(226, 232, 240, 230))
        bx += w + 10

    # 5. Clean Footer Details (Divider + Links)
    draw.line([(start_x, 290), (1534, 290)], fill=(51, 65, 85, 150), width=1)
    
    foot_text = "Portfolio: deekshag.vercel.app   |   GitHub: github.com/DeekshaG96   |   Education: B.E. in CSBS, SIT Mangaluru (Batch 2023–2027)"
    draw.text((start_x, 318), foot_text, font=font_foot, fill=(148, 163, 184, 220))

    return img.convert("RGB")

def make_simple_light_banner():
    W, H = 1584, 396
    img = Image.new("RGBA", (W, H), (248, 250, 252, 255)) # Slate-50
    draw = ImageDraw.Draw(img)
    
    # Subtle soft blue/indigo wash on the right
    for r in range(400, 0, -5):
        alpha = int((1.0 - (r / 400)) * 25)
        color = (2, 132, 199, alpha)
        draw.ellipse([1000 - r * 1.6, 198 - r, 1000 + r * 1.6, 198 + r], fill=color)

    # Subtle minimal grid lines
    for y in [70, 198, 326]:
        draw.line([(340, y), (1530, y)], fill=(226, 232, 240, 180), width=1)
    for x in [340, 680, 1020, 1360]:
        draw.line([(x, 40), (x, 356)], fill=(226, 232, 240, 140), width=1)

    font_dir = r"C:\Users\ganch\.gemini\antigravity-ide\scratch\repos\my-portfolio\scratch\fonts"
    font_sig = ImageFont.truetype(os.path.join(font_dir, "GreatVibes.ttf"), 62)
    font_title = ImageFont.truetype(os.path.join(font_dir, "PlusJakartaSans-Bold.ttf"), 48)
    font_sub = ImageFont.truetype(os.path.join(font_dir, "Inter-SemiBold.ttf"), 20)
    font_tag = ImageFont.truetype(os.path.join(font_dir, "Inter-SemiBold.ttf"), 14)
    font_foot = ImageFont.truetype(os.path.join(font_dir, "Inter-SemiBold.ttf"), 14)

    start_x = 360

    # 1. Signature Brand
    draw.text((start_x, 36), "Deeksha", font=font_sig, fill=(15, 23, 42, 240))
    sig_bbox = draw.textbbox((start_x, 36), "Deeksha", font=font_sig)
    draw.ellipse([sig_bbox[2] + 2, 68, sig_bbox[2] + 10, 76], fill=(2, 132, 199, 255))
    
    # Status Pill
    pill_text = "● Open for Software & AI Roles"
    p_box = draw.textbbox((0, 0), pill_text, font=font_tag)
    pw = p_box[2] - p_box[0] + 28
    ph = 30
    px = 1534 - pw
    py = 46
    draw.rounded_rectangle([px, py, px + pw, py + ph], radius=15, fill=(255, 255, 255, 240), outline=(2, 132, 199, 140), width=1)
    draw.text((px + 12, py + 6), "●", font=font_tag, fill=(16, 185, 129, 255))
    draw.text((px + 28, py + 6), "Open for Software & AI Roles", font=font_tag, fill=(15, 23, 42, 240))

    # 2. Main Title
    draw.text((start_x, 120), "SOFTWARE ENGINEER", font=font_title, fill=(15, 23, 42, 255))

    # 3. Subtitle
    draw.text((start_x, 182), "Full-Stack Web", font=font_sub, fill=(2, 132, 199, 255))
    draw.text((start_x + 160, 182), "•", font=font_sub, fill=(148, 163, 184, 255))
    draw.text((start_x + 185, 182), "Cloud Architecture (AWS & GCP)", font=font_sub, fill=(51, 65, 85, 255))
    draw.text((start_x + 520, 182), "•", font=font_sub, fill=(148, 163, 184, 255))
    draw.text((start_x + 545, 182), "Applied AI Systems", font=font_sub, fill=(79, 70, 229, 255))

    # 4. Clean Pills
    pills = [
        "React 19 & TypeScript",
        "AWS & Google Cloud ACE",
        "Google Gemini 2.5 Flash",
        "Zero-Trust (ZTNA) & Fortinet",
        "GSSoC '26 Contributor"
    ]
    
    bx = start_x
    by = 230
    for p in pills:
        pb = draw.textbbox((0, 0), p, font=font_tag)
        w = pb[2] - pb[0] + 24
        h = 28
        draw.rounded_rectangle([bx, by, bx + w, by + h], radius=6, fill=(255, 255, 255, 240), outline=(203, 213, 225, 220), width=1)
        draw.text((bx + 12, by + 5), p, font=font_tag, fill=(51, 65, 85, 240))
        bx += w + 10

    # 5. Footer Line
    draw.line([(start_x, 290), (1534, 290)], fill=(226, 232, 240, 200), width=1)
    foot_text = "Portfolio: deekshag.vercel.app   |   GitHub: github.com/DeekshaG96   |   Education: B.E. in CSBS, SIT Mangaluru (Batch 2023–2027)"
    draw.text((start_x, 318), foot_text, font=font_foot, fill=(100, 116, 139, 220))

    return img.convert("RGB")

if __name__ == "__main__":
    dark_banner = make_simple_dark_banner()
    light_banner = make_simple_light_banner()
    
    artifact_dir = r"C:\Users\ganch\.gemini\antigravity-ide\brain\b9be28c8-4492-4641-b458-3d4a976108d1"
    downloads_dir = r"C:\Users\ganch\Downloads"
    public_dir = r"C:\Users\ganch\.gemini\antigravity-ide\scratch\repos\my-portfolio\public"
    
    # Save dark version
    dark_banner.save(os.path.join(artifact_dir, "linkedin_banner_simple_dark.png"), quality=95)
    dark_banner.save(os.path.join(downloads_dir, "Deeksha_G_LinkedIn_Banner_Dark.png"), quality=95)
    dark_banner.save(os.path.join(public_dir, "linkedin-banner.png"), quality=95)
    dark_banner.save(os.path.join(public_dir, "assets", "linkedin-banner.png"), quality=95)
    print("Saved Simple Dark Banner")

    # Save light version
    light_banner.save(os.path.join(artifact_dir, "linkedin_banner_simple_light.png"), quality=95)
    light_banner.save(os.path.join(downloads_dir, "Deeksha_G_LinkedIn_Banner_Light.png"), quality=95)
    print("Saved Simple Light Banner")
