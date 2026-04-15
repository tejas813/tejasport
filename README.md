# Portfolio CMS — Admin + Public Portfolio

## 📁 Files
- `admin.html`     → Your private admin panel (you only)
- `portfolio.html` → Public portfolio (what visitors see)

## 🚀 How to Use

### Step 1 — Open Admin Panel
Open `admin.html` in your browser.
- Default password: **admin123**
- Change it in Settings → Change Admin Password

### Step 2 — Edit Your Content
Use the sidebar to navigate:
| Section      | What you can edit |
|--------------|-------------------|
| Hero         | Name, tagline, typing texts, social links, resume URL |
| About        | Bio, stats (projects/hackathons/year), interests |
| Skills       | Add/remove/rename skills, adjust % bars |
| Projects     | Add/edit/remove projects with tech stack & links |
| Resume       | Timeline entries, highlights, PDF link |
| Achievements | Add/edit/remove achievements & certifications |
| Contact      | Email, location, status message |
| Appearance   | Neon accent color, dark/light default, SEO title |

### Step 3 — Save & Publish
Click **💾 Save & Publish** in the top bar.

### Step 4 — Preview
Click **👁 Preview Portfolio** at the bottom of the sidebar.
This opens `portfolio.html` which reads your saved data.

## ⚙️ How It Works
- Admin panel saves all data to browser **localStorage** as JSON
- Portfolio page reads from the same **localStorage** on load
- Both files must be open in the **same browser** on the **same machine**

## 🌐 Deploying Online (Optional)
For a live website where anyone can see it, you'd need a backend.
For local/demo use, both files work perfectly as-is.

## 🔑 Data Backup
- Go to Settings → **Export Data (JSON)** to download a backup
- Use **Import Data** to restore from a backup file
- Use **Reset to Defaults** to start fresh

## 🎨 Customization
- Change accent color in Appearance → Theme Colors
- All 8 sections are fully editable from the admin panel
- No coding required!
