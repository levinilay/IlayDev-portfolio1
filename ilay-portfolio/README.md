# פורטפוליו מקצועי - עילאי

אתר פורטפוליו מקצועי בעברית עם עיצוב מודרני בסגנון שחור וסגול.

## תכונות

- ✅ עיצוב RTL מלא בעברית
- ✅ ערכת צבעים שחור וסגול עם אפקטי זוהר
- ✅ אנימציות חלקות ומודרניות
- ✅ רספונסיבי מלא (מובייל ודסקטופ)
- ✅ טופס יצירת קשר פועל עם שליחת אימייל
- ✅ מוכן לפריסה ב-Vercel

## התקנה מקומית

1. **שכפל את הפרויקט:**
   ```bash
   cd "ilay portfolio"
   ```

2. **התקן תלויות:**
   ```bash
   npm install
   ```

3. **הגדר משתני סביבה:**
   - העתק את `.env.example` ל-`.env`
   - מלא את פרטי האימייל שלך:
     ```
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASS=your-gmail-app-password
     ```

4. **הרץ שרת מקומי:**
   ```bash
   npm run dev
   ```

## הגדרת Gmail App Password

כדי שהטופס יעבוד, תצטרך ליצור App Password ב-Gmail:

1. לך להגדרות Google Account שלך
2. בחר **Security** (אבטחה)
3. הפעל **2-Step Verification** (אימות דו-שלבי) אם עדיין לא מופעל
4. לך ל-**App passwords** (סיסמאות אפליקציה)
5. בחר **Mail** ו-**Other (Custom name)**
6. הזן שם (למשל: "Portfolio Website")
7. העתק את הסיסמה בת 16 תווים שנוצרה
8. השתמש בסיסמה זו ב-`EMAIL_PASS` ב-`.env`

**חשוב:** אל תשתמש בסיסמת Gmail הרגילה שלך! רק App Password יעבוד.

## פריסה ב-Vercel

1. **העלה את הפרויקט ל-GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **חבר את הפרויקט ל-Vercel:**
   - לך ל-[vercel.com](https://vercel.com)
   - התחבר עם GitHub
   - לחץ על **New Project**
   - בחר את הפרויקט שלך
   - לחץ על **Deploy**

3. **הגדר משתני סביבה ב-Vercel:**
   - בפרויקט ב-Vercel, לך ל-**Settings** > **Environment Variables**
   - הוסף את המשתנים הבאים:
     - `EMAIL_USER` = כתובת האימייל שלך
     - `EMAIL_PASS` = ה-App Password של Gmail
   - לחץ על **Save**
   - **Redeploy** את הפרויקט כדי שהמשתנים ייכנסו לתוקף

## מבנה הפרויקט

```
ilay portfolio/
├── api/
│   └── contact.js          # Vercel serverless function לשליחת אימיילים
├── index.html              # עמוד הבית הראשי
├── styles.css              # עיצוב CSS מלא
├── script.js               # JavaScript לאנימציות וטופס יצירת קשר
├── package.json            # תלויות הפרויקט
├── vercel.json             # הגדרות Vercel
├── .env.example            # דוגמה למשתני סביבה
├── .gitignore              # קבצים להתעלמות מ-Git
└── README.md               # קובץ זה
```

## התאמה אישית

### שינוי תוכן
- ערוך את `index.html` כדי לשנות את התוכן
- עדכן את הפרטים האישיים בכל הסעיפים

### שינוי צבעים
- ערוך את המשתנים ב-`styles.css` תחת `:root`:
  ```css
  --purple-primary: #9333ea;
  --purple-secondary: #a855f7;
  --bg-primary: #0f0f14;
  ```

### הוספת פרויקטים
- הוסף כרטיסיות פרויקטים חדשות ב-`index.html` בסעיף Projects
- עדכן את התמונות והקישורים

### שינוי פונטים
- החלף את הקישור ל-Google Fonts ב-`index.html`
- עדכן את `font-family` ב-`styles.css`

## תמיכה

אם נתקלת בבעיות:
1. ודא שמשתני הסביבה מוגדרים נכון
2. בדוק את ה-logs ב-Vercel Dashboard
3. ודא ש-2-Step Verification מופעל ב-Gmail
4. ודא שאתה משתמש ב-App Password ולא בסיסמה רגילה

## רישיון

MIT License - חופשי לשימוש אישי ומסחרי.

---

נבנה עם ❤️ על ידי עילאי
