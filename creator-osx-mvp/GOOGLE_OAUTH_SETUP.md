# Google OAuth Setup Guide

This guide will help you set up Google OAuth authentication for Creator OSX.

---

## 📋 Prerequisites

- Supabase project created
- `.env.local` file configured with Supabase credentials

---

## 🔧 Step-by-Step Setup

### Step 1: Enable Google Provider in Supabase

1. Go to https://app.supabase.com
2. Open your project
3. Navigate to **Authentication** → **Providers**
4. Find **Google** in the list
5. Toggle it **ON**

### Step 2: Create Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to **APIs & Services** → **Credentials**
4. Click **Create Credentials** → **OAuth client ID**
5. Choose **Application type**: **Web application**
6. Set **Name**: `Creator OSX` (or your preferred name)

### Step 3: Configure Authorized Redirect URIs

Add these redirect URIs:

**For Development:**
```
http://localhost:3000/auth/callback
https://<your-project-ref>.supabase.co/auth/v1/callback
```

**For Production:**
```
https://yourdomain.com/auth/callback
https://<your-project-ref>.supabase.co/auth/v1/callback
```

### Step 4: Get Client ID and Secret

1. After creating the OAuth client, you'll see:
   - **Client ID** (looks like: `xxxxx.apps.googleusercontent.com`)
   - **Client Secret** (random string)
2. Copy both values

### Step 5: Add Credentials to Supabase

1. Go back to **Supabase** → **Authentication** → **Providers** → **Google**
2. Paste your **Client ID** in the **Client ID** field
3. Paste your **Client Secret** in the **Client Secret** field
4. Click **Save**

### Step 6: Verify Configuration

1. Your Supabase callback URL should be:
   ```
   https://<your-project-ref>.supabase.co/auth/v1/callback
   ```
2. Make sure this matches what you entered in Google Console

---

## ✅ Testing Authentication

### Test Login Flow

1. Start your development server:
   ```bash
   pnpm dev
   ```

2. Navigate to the login page:
   ```
   http://localhost:3000/login
   ```

3. Click **Sign in with Google**

4. You should be redirected to Google's OAuth consent screen

5. After authorizing, you should be redirected back to:
   ```
   http://localhost:3000/dashboard
   ```

### Troubleshooting

#### Error: "redirect_uri_mismatch"
- **Cause**: The redirect URI in Google Console doesn't match the one used in the request
- **Fix**: Verify all redirect URIs are correctly configured in Google Console

#### Error: "Invalid client"
- **Cause**: Client ID or Secret is incorrect
- **Fix**: Double-check the credentials in Supabase match those from Google Console

#### Error: "unauthorized_client"
- **Cause**: OAuth consent screen not configured
- **Fix**: Configure the OAuth consent screen in Google Cloud Console

#### User redirected to login after successful sign-in
- **Cause**: Session not being set properly
- **Fix**: Check browser cookies are enabled and middleware is running

---

## 🔐 Security Best Practices

### OAuth Consent Screen

1. Go to **APIs & Services** → **OAuth consent screen**
2. Choose **External** (for public use) or **Internal** (for organization only)
3. Fill in:
   - **App name**: Creator OSX
   - **User support email**: Your email
   - **Developer contact email**: Your email
4. Add scopes:
   - `userinfo.email`
   - `userinfo.profile`
5. Save and continue

### Production Checklist

- [ ] OAuth consent screen configured
- [ ] Production redirect URI added to Google Console
- [ ] Client ID and Secret stored securely in environment variables
- [ ] Test authentication flow in production environment
- [ ] Monitor authentication logs in Supabase

---

## 📝 Additional Configuration

### User Metadata

Supabase automatically stores Google user data in `user_metadata`:

```typescript
{
  avatar_url: "https://...",
  email: "user@gmail.com",
  email_verified: true,
  full_name: "John Doe",
  iss: "https://accounts.google.com",
  name: "John Doe",
  picture: "https://...",
  provider_id: "123456789",
  sub: "123456789"
}
```

Access this data in your app:

```typescript
const { user } = useAuth();
const fullName = user?.user_metadata?.full_name;
const avatar = user?.user_metadata?.avatar_url;
```

### Customize OAuth Flow

You can customize the OAuth flow in `lib/hooks/use-auth.ts`:

```typescript
const { error } = await supabase.auth.signInWithOAuth({
  provider: 'google',
  options: {
    redirectTo: `${window.location.origin}/auth/callback`,
    queryParams: {
      access_type: 'offline', // Get refresh token
      prompt: 'consent',      // Always show consent screen
    },
  },
});
```

---

## 🎉 You're All Set!

Your Google OAuth authentication is now configured. Users can sign in with their Google accounts!

**Next Steps:**
1. Test the authentication flow
2. Proceed to Phase 1.5: Core Infrastructure
3. Start building dashboard features

---

**Resources:**
- [Supabase Auth Docs](https://supabase.com/docs/guides/auth)
- [Google OAuth 2.0 Docs](https://developers.google.com/identity/protocols/oauth2)
- [Next.js Authentication](https://nextjs.org/docs/authentication)

