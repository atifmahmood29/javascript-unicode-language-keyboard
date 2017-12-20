# HTML javascript unicode languages without keyboard, extention or app
Write different language characters (Arabic, Urdu, Persian etc), no need to install any application on computer, laptop, broser or mobile

**Step 1:** Prepare your language<br/>
My code is using Urdu language at file lang-urdu.js, you can create different files for different languages. Find any language unicodes by Google or Wikipedia.<br/>
**Step 2:** Include that file in your HTML file
```ruby
<script type="text/javascript" src = "lang-urdu.js" ></script>
```
**Step 3:** Call function myUnicode on Key Press
```ruby
<input dir="rtl" type="text" onKeyPress="return myUnicode(this,event)" >
```
You can change text direction by dir attribute
