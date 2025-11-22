# 🔧 Quick Authentication Fix Guide

**Issue**: Error after Step 2, Point 4 (Google Authorization → Redirect Back)

---

## 🔍 Most Common Issues at This Step

### Issue 1: "redirect_uri_mismatch" Error

**Symptoms:**
- Google shows error: "Error 400: redirect_uri_mismatch"
- Cannot complete authorization

**Cause:** The redirect URI in Google Console doesn't match what Supabase is using.

**Fix:**

1. **Find your Supabase Project Reference:**
   - Go to https://app.supabase.com
   - Open your project
   - Look at the URL: `https://app.supabase.com/project/YOUR-PROJECT-REF`
   - Copy `YOUR-PROJECT-REF` (it's a random string like `abc123xyz`)

2. **Go to Google Cloud Console:**
   - https://console.cloud.google.com/apis/credentials
   - Click your OAuth client ID

3. **Add BOTH redirect URIs:**
   ```
   http://localhost:3000/auth/callback
   https://YOUR-PROJECT-REF.supabase.co/auth/v1/callback
   ```
   (Replace `YOUR-PROJECT-REF` with your actual project reference)

4. **Click Save**

5. **Try again** - Go back to http://localhost:3000/login

---

### Issue 2: Redirected to Login After Successful Google Auth

**Symptoms:**
- Successfully authorize with Google
- Get redirected but end up back on login page
- OR see a blank page

**Possible Causes:**
- Callback route not working
- Middleware blocking the callback
- Session not being set

**Fix Option 1 - Check Browser Console:**
1. Open browser console (F12)
2. Go to http://localhost:3000/login
3. Click "Sign in with Google"
4. After authorization, check console for errors
5. Send me the error message

**Fix Option 2 - Check Redirect URI:**
1. After clicking "Sign in", what URL are you on after Google auth?
2. Does it include `/auth/callback?code=...`?
3. If not, the redirect URI might be wrong

**Fix Option 3 - Check Environment Variables:**
1. Make sure `.env.local` exists in `creator-osx-mvp/` folder
2. Make sure it has:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://YOUR-PROJECT-REF.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```
3. Restart dev server: Stop (Ctrl+C) and run `pnpm dev` again

---

### Issue 3: "Invalid client" or "unauthorized_client"

**Symptoms:**
- Google shows: "Error 401: invalid_client"
- OR "Error 401: unauthorized_client"

**Fix:**

1. **Verify Client ID and Secret in Supabase:**
   - Go to Supabase → Authentication → Providers → Google
   - Make sure Client ID matches Google Console
   - Make sure Client Secret matches Google Console
   - Click **Save**

2. **Check OAuth Consent Screen:**
   - Go to Google Console → OAuth consent screen
   - Make sure it's configured:
     - App name filled in
     - User support email filled in
     - Developer contact email filled in
   - Save

3. **Try again**

---

### Issue 4: CORS Error

**Symptoms:**
- Browser console shows CORS error
- "Access to fetch has been blocked by CORS policy"

**Fix:**
- This usually means Supabase URL is wrong
- Check `.env.local` has correct Supabase URL
- Make sure URL starts with `https://` not `http://`
- Restart dev server

---

### Issue 5: "Failed to fetch" or Network Error

**Symptoms:**
- Error in console: "Failed to fetch"
- OR "Network request failed"

**Fix:**
1. Check internet connection
2. Check Supabase project is active (not paused)
3. Check `.env.local` credentials are correct
4. Try restarting dev server

---

## 🆘 If None of These Work

Please provide:

1. **Exact error message** (screenshot or text)
2. **Browser console errors** (F12 → Console tab)
3. **What URL you're on when error happens**
4. **Terminal output** (any errors in terminal?)

I'll help you debug it!

---

## 🧪 Quick Test

Try this to verify your setup:

1. Open browser console (F12)
2. Go to: http://localhost:3000/test-supabase
3. Check if:
   - Environment variables are "Set"
   - Database connection works
   - All tables show checkmarks

If test page shows errors, that's the issue!

---

## 📞 What to Send Me

Please copy and send:

1. **The exact error message:**
   ```
   [paste error here]
   ```

2. **Browser console errors:**
   - Press F12
   - Go to Console tab
   - Screenshot or copy any red errors

3. **What step you're at:**
   - "Clicked sign in"
   - "Google auth page loaded"
   - "Authorized and got redirected"
   - "Stuck at [this URL]"

This will help me identify the exact issue quickly!

