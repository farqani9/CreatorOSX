# 🧪 Authentication Testing Guide

**Status**: Ready to test!  
**Server**: Running on http://localhost:3000 (or 3001)  
**Google OAuth**: Configured ✅

---

## 🎯 Testing Checklist

### Test 1: Login Page Access ✅

**What to test:**
- Can you access the login page?
- Does the UI look correct?

**Steps:**
1. Open your browser
2. Navigate to: **http://localhost:3000/login** (or 3001 if port 3000 is in use)
3. You should see:
   - "Creator OSX" logo
   - "Welcome back" heading
   - "Sign in with Google" button
   - Clean, modern design

**Expected Result:**
✅ Login page loads successfully  
✅ Google sign-in button is visible  
✅ No console errors  

---

### Test 2: Google OAuth Sign-In 🔐

**What to test:**
- Can you sign in with Google?
- Does OAuth flow work correctly?

**Steps:**
1. On the login page (http://localhost:3000/login)
2. Click the **"Sign in with Google"** button
3. You should be redirected to Google's authorization page
4. Sign in with your Google account
5. Authorize the app
6. You should be redirected back to: **http://localhost:3000/dashboard**

**Expected Result:**
✅ Redirected to Google OAuth  
✅ Can authorize the app  
✅ Redirected back to dashboard  
✅ User info displayed in top-right menu  

**If you see an error:**
- Check browser console (F12)
- Check terminal for errors
- Verify Google OAuth credentials in Supabase
- Check redirect URIs match

---

### Test 3: Dashboard Protection 🛡️

**What to test:**
- Is the dashboard protected?
- Can unauthenticated users access it?

**Steps:**
1. **While signed out**, try to access: **http://localhost:3000/dashboard**
2. You should be automatically redirected to: **http://localhost:3000/login?next=/dashboard**
3. The URL should include a `?next=/dashboard` parameter

**Expected Result:**
✅ Cannot access dashboard when signed out  
✅ Redirected to login page  
✅ `next` parameter preserved in URL  

---

### Test 4: Session Persistence 💾

**What to test:**
- Does the session persist across page refreshes?

**Steps:**
1. Sign in successfully
2. You should be on the dashboard
3. Refresh the page (F5 or Ctrl+R)
4. You should remain signed in (no redirect to login)

**Expected Result:**
✅ Session persists after refresh  
✅ Still on dashboard  
✅ User menu still shows your info  

---

### Test 5: User Menu 👤

**What to test:**
- Does the user menu display correctly?
- Does it show your Google info?

**Steps:**
1. While signed in, look at the top-right corner
2. You should see:
   - Your avatar or initial circle
   - Your name (from Google)
   - Your email (from Google)
3. Click on your avatar/name
4. A dropdown should appear with:
   - Your name and email
   - "Settings" link
   - "Sign out" button

**Expected Result:**
✅ User info displayed correctly  
✅ Avatar shows Google profile picture or initial  
✅ Dropdown menu works  

---

### Test 6: Sign Out 🚪

**What to test:**
- Can you sign out successfully?
- Are you redirected correctly?

**Steps:**
1. While signed in, click your avatar/name in the top-right
2. Click **"Sign out"** in the dropdown
3. You should be redirected to: **http://localhost:3000/login**
4. Try to access **http://localhost:3000/dashboard**
5. You should be redirected back to login

**Expected Result:**
✅ Sign-out button works  
✅ Redirected to login page  
✅ Session cleared  
✅ Cannot access dashboard  

---

### Test 7: Auto-Redirect (Already Signed In) 🔄

**What to test:**
- Are signed-in users redirected away from login?

**Steps:**
1. Sign in successfully
2. While still signed in, navigate to: **http://localhost:3000/login**
3. You should be automatically redirected to: **http://localhost:3000/dashboard**

**Expected Result:**
✅ Cannot access login when signed in  
✅ Auto-redirected to dashboard  

---

### Test 8: Landing Page Access 🏠

**What to test:**
- Can you still access the public landing page?

**Steps:**
1. Navigate to: **http://localhost:3000/**
2. You should see the landing page (Hero, Features, Pricing, etc.)
3. This should work whether signed in or not

**Expected Result:**
✅ Landing page accessible  
✅ No authentication required  
✅ Page loads correctly  

---

## 🐛 Common Issues & Solutions

### Issue 1: "redirect_uri_mismatch"

**Error Message:**
```
Error 400: redirect_uri_mismatch
```

**Solution:**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to **APIs & Services** → **Credentials**
3. Click your OAuth client ID
4. Under **Authorized redirect URIs**, make sure you have:
   ```
   http://localhost:3000/auth/callback
   https://<your-project-ref>.supabase.co/auth/v1/callback
   ```
5. Click **Save**
6. Try again

---

### Issue 2: "Invalid client"

**Error Message:**
```
Invalid client: The OAuth client was not found
```

**Solution:**
1. Go to Supabase → **Authentication** → **Providers** → **Google**
2. Double-check:
   - Client ID matches Google Console
   - Client Secret matches Google Console
3. Make sure Google provider is **ON** (toggle should be blue)
4. Click **Save**
5. Try again

---

### Issue 3: Stuck on "Signing in..."

**Symptoms:**
- Button shows loading state forever
- Nothing happens after clicking sign-in

**Solution:**
1. Open browser console (F12)
2. Check for errors
3. Common fixes:
   - Check network tab for failed requests
   - Verify Supabase credentials in `.env.local`
   - Restart dev server
   - Clear browser cache

---

### Issue 4: Redirected to login after successful OAuth

**Symptoms:**
- Successfully authorize with Google
- Redirected back but end up on login page

**Solution:**
1. Check browser console for errors
2. Verify middleware is running correctly
3. Check cookies are enabled in browser
4. Try in incognito/private mode
5. Check `middleware.ts` for issues

---

### Issue 5: "unauthorized_client"

**Error Message:**
```
Error 401: unauthorized_client
```

**Solution:**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to **APIs & Services** → **OAuth consent screen**
3. Fill out all required fields:
   - App name
   - User support email
   - Developer contact email
4. Add scopes:
   - `userinfo.email`
   - `userinfo.profile`
5. Save and publish (if applicable)
6. Try again

---

## 📊 Success Criteria

Your authentication is working perfectly if:

- ✅ Can access login page
- ✅ Can sign in with Google
- ✅ Redirected to dashboard after sign-in
- ✅ User menu shows Google name and email
- ✅ Dashboard is protected (can't access when signed out)
- ✅ Session persists across page refreshes
- ✅ Can sign out successfully
- ✅ Auto-redirected when trying to access login while signed in

---

## 🎥 Testing Workflow

Here's the complete testing workflow:

```
1. Start at: http://localhost:3000
   → Landing page loads ✅

2. Navigate to: http://localhost:3000/login
   → Login page loads ✅

3. Click "Sign in with Google"
   → Redirected to Google OAuth ✅

4. Authorize with Google account
   → Redirected to dashboard ✅
   → User menu shows your info ✅

5. Refresh the page
   → Still signed in ✅

6. Try to access: http://localhost:3000/login
   → Redirected to dashboard ✅

7. Click user menu → Sign out
   → Redirected to login ✅

8. Try to access: http://localhost:3000/dashboard
   → Redirected to login ✅
```

---

## 📝 Report Your Results

After testing, please let me know:

**If everything works:**
```
"Authentication tested successfully! All tests passed."
```

**If there's an issue:**
```
"I'm getting an error at step X: [describe what happened]"
```

Include:
- Which test failed
- What error message you see
- Browser console errors (F12)
- Any network errors

---

## 🚀 Next Steps

### If All Tests Pass ✅

Congratulations! Your authentication is fully functional. You can now:

1. **Proceed to Phase 1.5:**
   ```
   "@MVP_TASKS.md finish ### 1.5 Core Infrastructure"
   ```

2. **Or start building features:**
   ```
   "@MVP_TASKS.md finish ### 2.1 Feature: Contacts & Leads"
   ```

### If Tests Fail ❌

Don't worry! Let me know which test failed and I'll help you fix it.

---

**Ready?** Open your browser and start testing! 🎉

**Test URL**: http://localhost:3000/login (or 3001 if port 3000 is in use)

