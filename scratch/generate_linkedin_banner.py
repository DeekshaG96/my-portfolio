import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def create_linkedin_banner():
    # LinkedIn banner standard resolution
    W, H = 1584, 396
    
    # Backdrop image path
    backdrop_path = r"C:\Users\ganch\.gemini\antigravity-ide\brain\b9be28c8-4492-4641-b458-3d4a976108d1\abstract_cyber_backdrop_1789562291929.jpg"
    
    if os.path.exists(backdrop_path):
        bg = Image.open(backdrop_path).convert("RGBA")
        # Resize to cover 1584x396 with center crop
        bg_w, bg_h = bg.size
        scale = max(W / bg_w, H / bg_h)
        new_w, new_h = int(bg_w * scale), int(bg_h * scale)
        bg = bg.resize((new_w, new_h), Image.Resampling.LANCZOS)
        # Center crop
        left = (new_w - W) // 2
        top = (new_h - H) // 2
        img = bg.crop((left, top, left + W, top + H))
    else:
        # Fallback dark gradient
        img = Image.new("RGBA", (W, H), (11, 17, 32, 255))
    
    # Overlay layer for subtle dark vignette and readability gradient
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ov_draw = ImageDraw.Draw(overlay)
    
    # Left vignette so profile photo stands out with high contrast
    for x in range(W):
        # Darkness gradient: slightly darker on left and bottom for text pop
        left_factor = max(0.0, min(1.0, (500 - x) / 500)) * 0.55
        right_factor = max(0.0, min(1.0, (x - 1200) / 384)) * 0.25
        alpha = int((0.40 + left_factor + right_factor) * 255)
        ov_draw.line([(x, 0), (x, H)], fill=(7, 12, 22, min(220, alpha)))
        
    img = Image.alpha_composite(img, overlay)
    draw = ImageDraw.Draw(img)
    
    # Fonts
    font_dir = r"C:\Users\ganch\.gemini\antigravity-ide\scratch\repos\my-portfolio\scratch\fonts"
    font_sig_path = os.path.join(font_dir, "GreatVibes.ttf")
    font_bold_path = os.path.join(font_dir, "PlusJakartaSans-Bold.ttf")
    font_semi_path = os.path.join(font_dir, "Inter-SemiBold.ttf")
    
    font_signature = ImageFont.truetype(font_sig_path, 68)
    font_name_sub = ImageFont.truetype(font_bold_path, 20)
    font_hero = ImageFont.truetype(font_bold_path, 46)
    font_subhero = ImageFont.truetype(font_semi_path, 21)
    font_badge = ImageFont.truetype(font_semi_path, 15)
    font_footer = ImageFont.truetype(font_semi_path, 15)
    font_status = ImageFont.truetype(font_semi_path, 14)
    
    # -------------------------------------------------------------
    # CONTENT POSITIONING (Leaving left 320px clear for profile photo)
    # -------------------------------------------------------------
    start_x = 340
    
    # Top Bar: Signature Logo + Status Pill
    # 1. Signature Brand
    draw.text((start_x, 32), "Deeksha", font=font_signature, fill=(255, 255, 255, 245))
    # Signature dot
    sig_bbox = draw.textbbox((start_x, 32), "Deeksha", font=font_signature)
    draw.ellipse([sig_bbox[2] + 2, 70, sig_bbox[2] + 10, 78], fill=(56, 189, 248, 255))
    
    # Small divider & capitalized name tag
    draw.line([(sig_bbox[2] + 22, 54), (sig_bbox[2] + 22, 78)], fill=(100, 116, 139, 160), width=2)
    draw.text((sig_bbox[2] + 32, 56), "DEEKSHA G", font=font_name_sub, fill=(226, 232, 240, 230))
    
    # 2. Right Status Pill: "● Open to Software & AI Roles"
    pill_text = "● Open for Software & AI Roles"
    pill_bbox = draw.textbbox((0, 0), pill_text, font=font_status)
    pill_w = pill_bbox[2] - pill_bbox[0] + 32
    pill_h = 32
    pill_x = W - pill_w - 50
    pill_y = 42
    
    # Draw pill box
    draw.rounded_rectangle([pill_x, pill_y, pill_x + pill_w, pill_y + pill_h], radius=16, 
                           fill=(15, 23, 42, 190), outline=(56, 189, 248, 120), width=1)
    # Draw green dot
    draw.text((pill_x + 16, pill_y + 7), "●", font=font_status, fill=(52, 211, 153, 255))
    draw.text((pill_x + 32, pill_y + 7), "Open for Software & AI Roles", font=font_status, fill=(241, 245, 249, 240))
    
    # -------------------------------------------------------------
    # MAIN HEADLINE
    # -------------------------------------------------------------
    # Glowing title text
    title_y = 118
    # Subtle glow behind headline
    for offset in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
        draw.text((start_x + offset[0], title_y + offset[1]), "SOFTWARE ENGINEER", font=font_hero, fill=(2, 132, 199, 100))
    draw.text((start_x, title_y), "SOFTWARE ENGINEER", font=font_hero, fill=(255, 255, 255, 255))
    
    # Sub-headline / Domains
    domains_y = 176
    draw.text((start_x, domains_y), "Applied AI Systems", font=font_subhero, fill=(56, 189, 248, 255))
    draw.text((start_x + 220, domains_y), "•", font=font_subhero, fill=(148, 163, 184, 200))
    draw.text((start_x + 245, domains_y), "Cloud Architecture", font=font_subhero, fill=(129, 140, 248, 255))
    draw.text((start_x + 460, domains_y), "•", font=font_subhero, fill=(148, 163, 184, 200))
    draw.text((start_x + 485, domains_y), "Full-Stack Web & Security", font=font_subhero, fill=(52, 211, 153, 255))
    
    # -------------------------------------------------------------
    # CREDIBILITY & TECH PILL BADGES
    # -------------------------------------------------------------
    badges = [
        ("GSSoC '26 Contributor", (56, 189, 248, 35), (56, 189, 248, 160), (224, 242, 254)),
        ("Google Cloud ACE Certified", (99, 102, 241, 35), (129, 140, 248, 160), (238, 242, 255)),
        ("AWS Academy Cloud Architect", (245, 158, 11, 35), (251, 191, 36, 160), (254, 243, 199)),
        ("Fortinet & Palo Alto Security", (16, 185, 129, 35), (52, 211, 153, 160), (209, 250, 229)),
        ("React 19 • Node.js • Gemini AI", (14, 165, 233, 35), (56, 189, 248, 160), (240, 249, 255))
    ]
    
    badge_y = 224
    bx = start_x
    for text, bg_color, border_color, text_color in badges:
        b_box = draw.textbbox((0, 0), text, font=font_badge)
        bw = b_box[2] - b_box[0] + 24
        bh = 28
        
        draw.rounded_rectangle([bx, badge_y, bx + bw, badge_y + bh], radius=8,
                               fill=bg_color, outline=border_color, width=1)
        draw.text((bx + 12, badge_y + 5), text, font=font_badge, fill=text_color)
        bx += bw + 12
        
    # -------------------------------------------------------------
    # FOOTER CONTACT & CREDENTIALS BAR
    # -------------------------------------------------------------
    # Bottom separator line
    draw.line([(start_x, 305), (W - 50, 305)], fill=(51, 65, 85, 160), width=1)
    
    foot_items = [
        ("Portfolio:", "deekshag.vercel.app", (56, 189, 248)),
        ("GitHub:", "github.com/DeekshaG96", (241, 245, 249)),
        ("LinkedIn:", "deeksha-g-cybersec", (129, 140, 248)),
        ("Education:", "B.E. in CSBS • SIT Mangaluru (Batch 2023–2027)", (148, 163, 184))
    ]
    
    foot_x = start_x
    foot_y = 328
    for label, val, val_color in foot_items:
        draw.text((foot_x, foot_y), label, font=font_footer, fill=(148, 163, 184, 220))
        label_bbox = draw.textbbox((0, 0), label, font=font_footer)
        lw = label_bbox[2] - label_bbox[0] + 6
        
        draw.text((foot_x + lw, foot_y), val, font=font_footer, fill=val_color)
        val_bbox = draw.textbbox((0, 0), val, font=font_footer)
        vw = val_bbox[2] - val_bbox[0] + 24
        
        foot_x += lw + vw
        
    # Convert and save
    final_img = img.convert("RGB")
    
    # Save locations
    out_paths = [
        r"C:\Users\ganch\.gemini\antigravity-ide\scratch\repos\my-portfolio\public\linkedin-banner.png",
        r"C:\Users\ganch\.gemini\antigravity-ide\scratch\repos\my-portfolio\public\assets\linkedin-banner.png",
        r"C:\Users\ganch\Downloads\Deeksha_G_LinkedIn_Banner.png",
        r"C:\Users\ganch\.gemini\antigravity-ide\brain\b9be28c8-4492-4641-b458-3d4a976108d1\linkedin_banner_1584x396.png"
    ]
    
    for p in out_paths:
        os.makedirs(os.path.dirname(p), exist_ok=True)
        final_img.save(p, "PNG", quality=95)
        print(f"Saved: {p} ({os.path.getsize(p)} bytes)")

if __name__ == "__main__":
    create_linkedin_banner()
