# 🧪 Contacts Feature - Testing Guide

**Feature**: Contacts & Leads Management  
**Status**: Ready to Test  
**Server**: Running on `http://localhost:3000`

---

## 🚀 Quick Start

### 1. Access the Application

The dev server is already running. Open your browser and navigate to:

```
http://localhost:3000
```

### 2. Sign In

1. Click **"Sign in with Google"**
2. Authorize with your Google account
3. You'll be redirected to the dashboard

### 3. Navigate to Contacts

Once logged in, go to:
```
http://localhost:3000/dashboard/contacts
```

Or click on **"Contacts"** in the sidebar (if available).

---

## ✅ Testing Checklist

### Test 1: View Contacts Page

**What to Test:**
- [ ] Page loads without errors
- [ ] Header shows "Contacts" title
- [ ] "Add Contact" button is visible
- [ ] Stats cards show: Total, New, In Discussion, Closed (all showing 0 initially)
- [ ] Filter buttons are visible: All, New, Contacted, In Discussion, Closed
- [ ] Search bar is visible
- [ ] Empty state appears: "No contacts found"

**Expected Result:**
- Clean, professional page with slate colors
- Empty state with helpful message
- All UI elements render correctly

---

### Test 2: Create Your First Contact

**Steps:**
1. Click **"Add Contact"** button (top right, sky blue)
2. Dialog opens with form
3. Fill in the form:
   - **Name**: John Doe (required)
   - **Brand**: Acme Corp (optional)
   - **Status**: Select "New" from dropdown
   - **Tags**: Type "lead" and press Enter, type "tech" and press Enter
   - **Notes**: "Met at conference, interested in collaboration"
4. Click **"Create Contact"**

**Expected Result:**
- [ ] Dialog closes automatically
- [ ] Toast notification appears: "Contact created successfully"
- [ ] Contact card appears in the grid
- [ ] Stats update: Total = 1, New = 1

**What to Check on the Card:**
- [ ] Avatar with initials "JD" (purple/blue gradient)
- [ ] Name "John Doe" displayed
- [ ] Brand "Acme Corp" with building icon
- [ ] Status badge: "New" (blue)
- [ ] Tags: "lead" and "tech" (slate badges)
- [ ] Notes preview: First 2 lines visible
- [ ] "Added just now" at bottom
- [ ] Three-dot menu button (top right)

---

### Test 3: Create Multiple Contacts

**Create 2 more contacts to test the grid:**

**Contact 2:**
- Name: Sarah Smith
- Brand: TechFlow
- Status: Contacted
- Tags: client, priority
- Notes: "Sent proposal last week"

**Contact 3:**
- Name: Mike Johnson
- Brand: AudioGear
- Status: In Discussion
- Tags: partner
- Notes: "Negotiating terms"

**Expected Result:**
- [ ] 3 contacts displayed in grid
- [ ] Stats show: Total = 3, New = 1, Contacted = 1, In Discussion = 1
- [ ] Cards are arranged in responsive grid (3 columns on desktop)

---

### Test 4: Test Status Filtering

**Steps:**
1. Click **"New"** filter button (should turn blue with background)
2. Only John Doe should be visible
3. Click **"Contacted"** filter button
4. Only Sarah Smith should be visible
5. Click **"In Discussion"** filter button
6. Only Mike Johnson should be visible
7. Click **"All Contacts"** button
8. All 3 contacts visible again

**Expected Result:**
- [ ] Filtering works instantly
- [ ] Selected filter button is highlighted
- [ ] Correct contacts shown for each filter
- [ ] "All Contacts" shows everything

---

### Test 5: Test Search

**Steps:**
1. Clear any filters (click "All Contacts")
2. Type "john" in search bar
3. Only John Doe should appear
4. Clear search (click X or delete text)
5. Type "tech" in search bar
6. John Doe and Sarah Smith should appear (matches "TechFlow" brand)
7. Clear search

**Expected Result:**
- [ ] Search works for names
- [ ] Search works for brands
- [ ] Search is case-insensitive
- [ ] Clear button (X) works
- [ ] Results update as you type

---

### Test 6: Edit a Contact

**Steps:**
1. Hover over John Doe's card
2. Click the three-dot menu (top right of card)
3. Click **"Edit"**
4. Dialog opens with pre-filled data
5. Change:
   - Brand: "Acme Corporation"
   - Status: "Contacted"
   - Add tag: "follow-up"
6. Click **"Update Contact"**

**Expected Result:**
- [ ] Dialog closes
- [ ] Toast: "Contact updated successfully"
- [ ] Card updates immediately (optimistic update)
- [ ] New brand name displayed
- [ ] Status badge changes to "Contacted" (yellow)
- [ ] New tag appears
- [ ] Stats update: New = 0, Contacted = 2

---

### Test 7: View Contact Details

**Steps:**
1. Click anywhere on John Doe's card (not the menu button)
2. Detail page opens

**Expected Result:**
- [ ] Page shows: `/dashboard/contacts/[some-id]`
- [ ] Large avatar with initials "JD"
- [ ] Name "John Doe" in large text
- [ ] Brand "Acme Corporation"
- [ ] Status badge "Contacted"
- [ ] Tags displayed
- [ ] Notes section with full text
- [ ] "Back to Contacts" button (top left)
- [ ] Edit and Delete buttons (top right)
- [ ] Quick Actions sidebar: "Convert to Deal"
- [ ] Details sidebar: Created and Updated dates

**Test Navigation:**
- [ ] Click "Back to Contacts" → returns to list
- [ ] Click browser back button → returns to list

---

### Test 8: Delete a Contact

**Steps:**
1. Go back to contacts list
2. Hover over Mike Johnson's card
3. Click three-dot menu
4. Click **"Delete"** (should be red text)
5. Confirmation dialog appears: "Are you sure you want to delete Mike Johnson?"
6. Click **"Cancel"** first
7. Dialog closes, contact still there
8. Open menu again, click Delete
9. This time click **"Delete"** button in dialog

**Expected Result:**
- [ ] Confirmation dialog appears before deletion
- [ ] Cancel works (contact not deleted)
- [ ] Delete removes the contact
- [ ] Toast: "Contact deleted successfully"
- [ ] Contact disappears from list
- [ ] Stats update: Total = 2, In Discussion = 0

---

### Test 9: Tag Management

**Steps:**
1. Click "Add Contact"
2. Type a tag and press Enter → tag appears as badge
3. Add 3 more tags
4. Click X on one of the tags → tag is removed
5. Create contact

**On Contact Card:**
- [ ] First 2 tags are shown
- [ ] "+2" badge shows for remaining tags

**Expected Result:**
- [ ] Tags can be added with Enter key
- [ ] Tags can be removed with X button
- [ ] Duplicate tags are prevented
- [ ] Tags persist when contact is created

---

### Test 10: Loading States

**Steps:**
1. Open browser DevTools (F12)
2. Go to Network tab
3. Throttle network to "Slow 3G"
4. Refresh the page

**Expected Result:**
- [ ] Loading spinner appears while fetching contacts
- [ ] Spinner is centered with brand color
- [ ] Page doesn't show empty state before loading completes
- [ ] Smooth transition from loading to content

---

### Test 11: Empty States

**Steps:**
1. Delete all contacts
2. Search for "xyz" (non-existent)

**Expected Result:**
- [ ] After deleting all: "No contacts found" with helpful message
- [ ] After search: Same empty state
- [ ] Empty state has icon, heading, and description
- [ ] Suggests creating first contact or adjusting filters

---

### Test 12: Responsive Design

**Steps:**
1. Resize browser to mobile width (375px)
2. Check contacts page

**Expected Result:**
- [ ] Grid changes to 1 column
- [ ] Header stacks properly
- [ ] Search bar takes full width
- [ ] Filter buttons wrap nicely
- [ ] Cards are readable
- [ ] Actions menu still accessible

---

### Test 13: Convert to Deal (Navigation)

**Steps:**
1. Open contact three-dot menu
2. Click "Convert to Deal"

**Expected Result:**
- [ ] Navigates to `/dashboard/deals/new?contactId=[id]`
- [ ] URL includes contact ID as query parameter
- [ ] (Deal page not built yet, so 404 is expected)

---

### Test 14: Error Handling

**Test Backend Validation:**
1. Click "Add Contact"
2. Leave name empty
3. Click "Create Contact"

**Expected Result:**
- [ ] Error message appears: "Name is required"
- [ ] Form doesn't submit
- [ ] Error text is red

**Test Network Error:**
1. Turn off internet
2. Try to create contact
3. Turn internet back on

**Expected Result:**
- [ ] Toast error appears
- [ ] Form stays open
- [ ] Can retry when internet is back

---

### Test 15: Data Persistence

**Steps:**
1. Create a contact
2. Refresh the page (F5)
3. Contact is still there

**Steps (Second Browser):**
1. Open Chrome
2. Sign in with same account
3. Go to contacts
4. Same contacts appear

**Expected Result:**
- [ ] Data persists across refreshes
- [ ] Data syncs across browsers
- [ ] No data loss

---

## 🎨 Design System Verification

### Color Check
- [ ] Primary buttons: Sky blue (#0ea5e9)
- [ ] Text: Slate colors (not gray)
- [ ] Borders: Subtle slate-100
- [ ] Backgrounds: White cards on slate-50 page
- [ ] Status badges: Blue, yellow, orange, green

### Typography Check
- [ ] Headings: Bold, dark slate
- [ ] Body text: Regular, slate-700
- [ ] Small text: slate-500/600
- [ ] Font: Inter (sans-serif)

### Spacing Check
- [ ] Cards have consistent padding (p-6)
- [ ] Grid gaps are even (gap-6)
- [ ] Buttons have proper spacing (px-6 py-3)

### Shadows Check
- [ ] Cards have subtle shadows (shadow-sm)
- [ ] No harsh drop shadows
- [ ] Hover states work smoothly

---

## 🐛 Common Issues & Solutions

### Issue: "Unauthorized" Error
**Solution:** 
- Make sure you're signed in
- Check if session expired (sign in again)
- Verify Supabase credentials in `.env.local`

### Issue: Contacts Don't Appear
**Solution:**
- Check browser console for errors
- Verify database schema is applied
- Check RLS policies are enabled

### Issue: Form Validation Errors
**Solution:**
- Fill in required fields (Name, Status)
- Check error messages under fields
- Ensure tags are added with Enter key

### Issue: Styles Look Different
**Solution:**
- Hard refresh (Ctrl+Shift+R)
- Clear browser cache
- Check Tailwind CSS is loaded

---

## 📊 Success Criteria

### Your contacts feature passes if:
- ✅ All CRUD operations work (Create, Read, Update, Delete)
- ✅ Filtering and search work correctly
- ✅ UI matches the landing page design
- ✅ No console errors
- ✅ Data persists across refreshes
- ✅ Loading and empty states appear
- ✅ Toast notifications show for actions
- ✅ Responsive on mobile
- ✅ Navigation works between pages

---

## 🎯 Next Steps After Testing

### If Everything Works ✅
1. Celebrate! 🎉 Your first feature is complete!
2. Document any feedback or improvements
3. Ready to start Phase 2.2: Deals Pipeline

### If Issues Found 🐛
1. Note down all issues
2. Share them for debugging
3. Fix issues before moving to next feature

---

## 📝 Testing Notes Template

Use this template to track your testing:

```
FEATURE: Contacts & Leads
TESTED BY: [Your Name]
DATE: [Today's Date]
BROWSER: [Chrome/Firefox/Edge]

PASS/FAIL:
- Create Contact: ✅ / ❌
- Edit Contact: ✅ / ❌
- Delete Contact: ✅ / ❌
- Status Filter: ✅ / ❌
- Search: ✅ / ❌
- Tag Management: ✅ / ❌
- Detail Page: ✅ / ❌
- Responsive Design: ✅ / ❌

ISSUES FOUND:
1. [Description]
2. [Description]

NOTES:
[Any additional observations]
```

---

## 🚀 Quick Test Sequence (5 minutes)

**For a quick smoke test:**
1. ✅ Open `/dashboard/contacts`
2. ✅ Create 1 contact
3. ✅ Edit the contact
4. ✅ Filter by status
5. ✅ Search for contact
6. ✅ View detail page
7. ✅ Delete contact
8. ✅ Check empty state

**If all 8 steps work → Feature is ready!** 🎉

---

**Happy Testing!** 🧪

Let me know if you find any issues or if everything works perfectly!

