# ONC SPS — Setup Guide
## 3 Steps. Under 10 Minutes.

---

## STEP 1 — Set Up Google Sheets Backend

1. Go to **script.google.com**
2. Click **New Project**
3. Delete everything in the editor
4. Open `Code.gs` from this folder and **paste the entire contents**
5. Click **Save** (Ctrl+S)
6. Click **Deploy → New Deployment**
7. Select type: **Web App**
8. Set:
   - Execute as: **Me**
   - Who has access: **Anyone**
9. Click **Deploy** → Copy the **Web App URL**

---

## STEP 2 — Connect the URL to Both Apps

Open `index.html` and find this line near the bottom:
```
const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
```
Replace with your Web App URL.

Open `admin.html` and find the same line:
```
const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
```
Replace with the same URL.

---

## STEP 3 — Change the Admin PIN

Open `admin.html` and find:
```
const ADMIN_PIN = '1234';
```
Change `1234` to whatever PIN you want.

---

## STEP 4 — Deploy to GitHub Pages

1. Create a free account at **github.com**
2. Create a new repository called `onc-sps`
3. Upload all 3 files (`index.html`, `admin.html`, `Code.gs`)
4. Go to **Settings → Pages**
5. Set source to **main branch**
6. Your links will be:
   - **Shepherd App:** `https://yourusername.github.io/onc-sps/`
   - **Admin Dashboard:** `https://yourusername.github.io/onc-sps/admin.html`

---

## Send This to Shepherds

```
Good morning! 🙏

Your SPS Follow-Up Report Link:
👉 https://yourusername.github.io/onc-sps/

Click the link on your phone.
Takes less than 30 seconds to submit.
Please report after every contact with your member.

God bless you! 🌟
— ONC Admin
```

---

## Admin Dashboard

Share only with leadership:
```
https://yourusername.github.io/onc-sps/admin.html
PIN: [your chosen PIN]
```

---

That's it! The system is live. ✅
