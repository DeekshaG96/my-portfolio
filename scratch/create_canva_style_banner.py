import os
import math
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def draw_vector_globe(draw, x, y, size=16, color=(56, 189, 248, 255)):
    """Draws a clean minimalist vector globe icon"""
    r = size // 2
    cx, cy = x + r, y + r
    # Outer circle
    draw.ellipse([cx - r, cy - r, cx + r, cy + r], outline=color, width=1)
    # Equator line
    draw.line([(cx - r + 1, cy), (cx + r - 1, cy)], fill=color, width=1)
    # Prime meridian ellipse
    draw.ellipse([cx - r // 2, cy - r, cx + r // 2, cy + r], outline=color, width=1)

def draw_vector_github(draw, x, y, size=16, color=(241, 245, 249, 240)):
    """Draws a crisp code/git terminal icon for GitHub"""
    h = size
    # Draw terminal prompt < / > or octocat stylized badge
    # Draw a clean rounded code box with </>
    draw.rounded_rectangle([x, y, x + size + 2, y + size], radius=3, outline=color, width=1)
    # Simple crisp </> inside
    # <
    draw.line([(x + 4, y + size//2), (x + 7, y + 4)], fill=color, width=1)
    draw.line([(x + 4, y + size//2), (x + 7, y + size - 4)], fill=color, width=1)
    # /
    draw.line([(x + 10, y + 3), (x + 8, y + size - 3)], fill=color, width=1)
    # >
    draw.line([(x + 14, y + size//2), (x + 11, y + 4)], fill=color, width=1)
    draw.line([(x + 14, y + size//2), (x + 11, y + size - 4)], fill=color, width=1)

def draw_vector_linkedin(draw, x, y, size=16, color=(56, 189, 248, 255)):
    """Draws a crisp LinkedIn 'in' badge"""
    # Blue rounded box
    draw.rounded_rectangle([x, y, x + size + 2, y + size], radius=3, fill=color)
    # White 'in' letters
    # We can draw the dot and lines for 'in'
    # Dot on 'i'
    draw.rectangle([x + 4, y + 3, x + 5, y + 4], fill=(15, 23, 42, 255))
    # stem of 'i'
    draw.line([(x + 4, y + 6), (x + 4, y + size - 4)], fill=(15, 23, 42, 255), width=1)
    draw.line([(x + 5, y + 6), (x + 5, y + size - 4)], fill=(15, 23, 42, 255), width=1)
    # 'n'
    draw.line([(x + 8, y + 6), (x + 8, y + size - 4)], fill=(15, 23, 42, 255), width=1)
    draw.line([(x + 8, y + 6), (x + 12, y + 6)], fill=(15, 23, 42, 255), width=1)
    draw.line([(x + 12, y + 6), (x + 12, y + size - 4)], fill=(15, 23, 42, 255), width=1)

def create_canva_pro_banner(dark_theme=True):
    W, H = 1584, 396
    
    # 1. Base Gradient Canvas
    img_arr = np.zeros((H, W, 3), dtype=np.uint8)
    
    if dark_theme:
        # Deep Executive Slate / Navy (#080d1a to #0f1c3f)
        for i in range(H):
            for j in range(W):
                factor = (i / H) * 0.35 + (j / W) * 0.65
                img_arr[i, j, 0] = int(8 + factor * 10)    # R: 8 -> 18
                img_arr[i, j, 1] = int(14 + factor * 22)   # G: 14 -> 36
                img_arr[i, j, 2] = int(28 + factor * 48)   # B: 28 -> 76
    else:
        # Minimalist Studio Light (#f8fafc to #e2e8f0 with soft cobalt tint)
        for i in range(H):
            for j in range(W):
                factor = (i / H) * 0.3 + (j / W) * 0.7
                img_arr[i, j, 0] = int(248 - factor * 14)
                img_arr[i, j, 1] = int(250 - factor * 10)
                img_arr[i, j, 2] = int(252 - factor * 4)
                
    img = Image.fromarray(img_arr, mode="RGB").convert("RGBA")
    
    # 2. Geometric Accent Ribbon & Ambient Lighting (Right side)
    accent_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    acc_draw = ImageDraw.Draw(accent_layer)
    
    if dark_theme:
        # Subtle ambient radial glow
        glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        g_draw = ImageDraw.Draw(glow)
        g_draw.ellipse([1000, -80, 1600, 480], fill=(2, 132, 199, 45))
        g_draw.ellipse([1200, 20, 1550, 360], fill=(56, 189, 248, 25))
        glow = glow.filter(ImageFilter.GaussianBlur(60))
        img = Image.alpha_composite(img, glow)
        
        # Angled Canva modern geometric panels
        # Card 1: Slate geometric slice
        poly1 = [(1140, 0), (1584, 0), (1584, 396), (1280, 396)]
        acc_draw.polygon(poly1, fill=(15, 23, 42, 160))
        acc_draw.line([(1140, 0), (1280, 396)], fill=(56, 189, 248, 90), width=2)
        
        # Card 2: Sky Blue accent line
        poly2 = [(1280, 0), (1292, 0), (1432, 396), (1420, 396)]
        acc_draw.polygon(poly2, fill=(2, 132, 199, 70))
        
        # Card 3: Deep navy translucent overlay
        poly3 = [(1380, 0), (1584, 0), (1584, 396), (1520, 396)]
        acc_draw.polygon(poly3, fill=(10, 17, 36, 120))
    else:
        # Light theme geometric accents
        poly1 = [(1140, 0), (1584, 0), (1584, 396), (1280, 396)]
        acc_draw.polygon(poly1, fill=(241, 245, 249, 220))
        acc_draw.line([(1140, 0), (1280, 396)], fill=(203, 213, 225, 200), width=2)
        
        poly2 = [(1280, 0), (1292, 0), (1432, 396), (1420, 396)]
        acc_draw.polygon(poly2, fill=(14, 165, 233, 40))
        
    img = Image.alpha_composite(img, accent_layer)
    draw = ImageDraw.Draw(img)
    
    # 3. Typography Fonts
    font_dir = r"C:\Users\ganch\.gemini\antigravity-ide\scratch\repos\my-portfolio\scratch\fonts"
    font_bold_path = os.path.join(font_dir, "PlusJakartaSans-Bold.ttf")
    font_semi_path = os.path.join(font_dir, "Inter-SemiBold.ttf")
    font_sig_path = os.path.join(font_dir, "GreatVibes.ttf")
    
    font_name = ImageFont.truetype(font_bold_path, 44)
    font_title = ImageFont.truetype(font_bold_path, 25)
    font_tagline = ImageFont.truetype(font_semi_path, 16)
    font_pill = ImageFont.truetype(font_semi_path, 13)
    font_contact = ImageFont.truetype(font_semi_path, 14)
    font_badge = ImageFont.truetype(font_semi_path, 13)
    font_sig = ImageFont.truetype(font_sig_path, 54)
    
    # Theme color tokens
    if dark_theme:
        c_name = (255, 255, 255, 255)
        c_title_pri = (56, 189, 248, 255)       # Cyan 400
        c_title_sec = (241, 245, 249, 255)      # Slate 100
        c_tagline = (203, 213, 225, 230)        # Slate 300
        c_pill_bg = (15, 23, 42, 230)
        c_pill_border = (56, 189, 248, 90)
        c_pill_text = (241, 245, 249, 240)
        c_divider = (51, 65, 85, 180)
        c_label = (148, 163, 184, 220)          # Slate 400
        c_val_link = (56, 189, 248, 255)
        c_val_text = (241, 245, 249, 240)
        c_sig = (148, 163, 184, 90)              # Elegant watermark
    else:
        c_name = (15, 23, 42, 255)
        c_title_pri = (2, 132, 199, 255)        # Blue 600
        c_title_sec = (51, 65, 85, 255)         # Slate 700
        c_tagline = (71, 85, 105, 230)          # Slate 600
        c_pill_bg = (255, 255, 255, 240)
        c_pill_border = (203, 213, 225, 200)
        c_pill_text = (30, 41, 59, 240)
        c_divider = (226, 232, 240, 220)
        c_label = (100, 116, 139, 220)
        c_val_link = (2, 132, 199, 255)
        c_val_text = (15, 23, 42, 240)
        c_sig = (148, 163, 184, 70)
        
    # Safe Margin: 360px preserves circular LinkedIn avatar (bottom-left)
    content_x = 360
    
    # -------------------------------------------------------------
    # 1. STATUS BADGE + BATCH
    # -------------------------------------------------------------
    sy = 40
    # Green pulse dot + text
    badge_label = "Open to Software & AI Roles"
    b_box = draw.textbbox((0, 0), badge_label, font=font_badge)
    bw = (b_box[2] - b_box[0]) + 34
    bh = 26
    
    if dark_theme:
        draw.rounded_rectangle([content_x, sy, content_x + bw, sy + bh], radius=13,
                               fill=(15, 23, 42, 220), outline=(56, 189, 248, 140), width=1)
    else:
        draw.rounded_rectangle([content_x, sy, content_x + bw, sy + bh], radius=13,
                               fill=(255, 255, 255, 240), outline=(2, 132, 199, 120), width=1)
        
    # Pulse dot
    draw.ellipse([content_x + 10, sy + 8, content_x + 20, sy + 18], fill=(16, 185, 129, 255))
    draw.text((content_x + 25, sy + 4), badge_label, font=font_badge, fill=c_title_sec)
    
    # Batch tag
    batch_str = "Batch 2023–2027 • B.E. CSBS"
    draw.text((content_x + bw + 16, sy + 4), batch_str, font=font_badge, fill=c_label)
    
    # -------------------------------------------------------------
    # 2. NAME & TITLES
    # -------------------------------------------------------------
    name_y = 82
    draw.text((content_x, name_y), "DEEKSHA G", font=font_name, fill=c_name)
    
    title_y = 142
    draw.text((content_x, title_y), "Software Engineer", font=font_title, fill=c_title_pri)
    draw.text((content_x + 252, title_y), "|", font=font_title, fill=(100, 116, 139, 160))
    draw.text((content_x + 272, title_y), "Applied AI & Cloud Architect", font=font_title, fill=c_title_sec)
    
    # Specialization Tagline
    tag_y = 186
    draw.text((content_x, tag_y), "Full-Stack Web Development  •  Cloud Systems (AWS & GCP)  •  Zero-Trust Security", 
              font=font_tagline, fill=c_tagline)
    
    # -------------------------------------------------------------
    # 3. PILL TAGS (Credentials & Focus Areas)
    # -------------------------------------------------------------
    pills = [
        "React 19 & Next.js",
        "AWS Academy Graduate",
        "Google Cloud ACE",
        "Fortinet Security (Grade O)",
        "GSSoC '26 Contributor"
    ]
    
    py = 230
    px = content_x
    for p in pills:
        pb = draw.textbbox((0, 0), p, font=font_pill)
        pw = pb[2] - pb[0] + 20
        ph = 28
        draw.rounded_rectangle([px, py, px + pw, py + ph], radius=6,
                               fill=c_pill_bg, outline=c_pill_border, width=1)
        draw.text((px + 10, py + 5), p, font=font_pill, fill=c_pill_text)
        px += pw + 10
        
    # -------------------------------------------------------------
    # 4. SIGNATURE WATERMARK (Right Side)
    # -------------------------------------------------------------
    # Gives the authentic signature touch requested
    sig_text = "Deeksha G"
    draw.text((1310, 190), sig_text, font=font_sig, fill=c_sig)
    
    # -------------------------------------------------------------
    # 5. FOOTER BAR WITH CRISP VECTOR ICONS
    # -------------------------------------------------------------
    sep_y = 292
    draw.line([(content_x, sep_y), (W - 80, sep_y)], fill=c_divider, width=1)
    
    foot_y = 318
    
    # Item 1: Portfolio
    draw_vector_globe(draw, content_x, foot_y + 1, size=18, color=c_title_pri)
    p_label = "Portfolio:"
    draw.text((content_x + 26, foot_y), p_label, font=font_contact, fill=c_label)
    pl_box = draw.textbbox((0, 0), p_label, font=font_contact)
    site_x = content_x + 26 + (pl_box[2] - pl_box[0]) + 6
    draw.text((site_x, foot_y), "deekshag.vercel.app", font=font_contact, fill=c_val_link)
    
    # Item 2: GitHub
    gh_start_x = site_x + draw.textbbox((0, 0), "deekshag.vercel.app", font=font_contact)[2] + 36
    draw_vector_github(draw, gh_start_x, foot_y + 1, size=18, color=c_val_text)
    gh_label = "GitHub:"
    draw.text((gh_start_x + 26, foot_y), gh_label, font=font_contact, fill=c_label)
    ghl_box = draw.textbbox((0, 0), gh_label, font=font_contact)
    gh_user_x = gh_start_x + 26 + (ghl_box[2] - ghl_box[0]) + 6
    draw.text((gh_user_x, foot_y), "github.com/DeekshaG96", font=font_contact, fill=c_val_text)
    
    # Item 3: LinkedIn
    in_start_x = gh_user_x + draw.textbbox((0, 0), "github.com/DeekshaG96", font=font_contact)[2] + 36
    draw_vector_linkedin(draw, in_start_x, foot_y + 1, size=18, color=c_title_pri)
    in_label = "LinkedIn:"
    draw.text((in_start_x + 26, foot_y), in_label, font=font_contact, fill=c_label)
    inl_box = draw.textbbox((0, 0), in_label, font=font_contact)
    in_user_x = in_start_x + 26 + (inl_box[2] - inl_box[0]) + 6
    draw.text((in_user_x, foot_y), "deeksha-g-cybersec", font=font_contact, fill=c_val_link)

    return img.convert("RGB")

def main():
    # 1. Generate Dark Pro Canva Standard Banner
    banner_dark = create_canva_pro_banner(dark_theme=True)
    dark_paths = [
        r"C:\Users\ganch\.gemini\antigravity-ide\brain\b9be28c8-4492-4641-b458-3d4a976108d1\linkedin_banner_canva_pro.png",
        r"C:\Users\ganch\Downloads\Deeksha_G_LinkedIn_Banner_Canva_Pro.png",
        r"C:\Users\ganch\.gemini\antigravity-ide\scratch\repos\my-portfolio\public\linkedin-banner.png",
        r"C:\Users\ganch\.gemini\antigravity-ide\scratch\repos\my-portfolio\public\assets\linkedin-banner.png"
    ]
    for p in dark_paths:
        os.makedirs(os.path.dirname(p), exist_ok=True)
        banner_dark.save(p, "PNG", quality=98)
        print(f"Saved Dark: {p} ({os.path.getsize(p)} bytes)")
        
    # 2. Generate Light Studio Canva Standard Banner
    banner_light = create_canva_pro_banner(dark_theme=False)
    light_paths = [
        r"C:\Users\ganch\.gemini\antigravity-ide\brain\b9be28c8-4492-4641-b458-3d4a976108d1\linkedin_banner_canva_light.png",
        r"C:\Users\ganch\Downloads\Deeksha_G_LinkedIn_Banner_Canva_Light.png",
        r"C:\Users\ganch\.gemini\antigravity-ide\scratch\repos\my-portfolio\public\linkedin-banner-light.png"
    ]
    for p in light_paths:
        os.makedirs(os.path.dirname(p), exist_ok=True)
        banner_light.save(p, "PNG", quality=98)
        print(f"Saved Light: {p} ({os.path.getsize(p)} bytes)")

if __name__ == "__main__":
    main()
