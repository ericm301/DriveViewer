progress.txt:

NOTE: The author of this page is not affiliated with ANTP or any of its developers.

Yeah, ok, so maybe no widget, yet. Soon...

But, I'm starting to figure things out.

You see, I'm not a developer. I'm just a guy who likes to code.

I'm writing this so I can keep track of my experience and maybe someone else can learn something from it.

Maybe.

I'm also writing this assuming I'm the only one reading it, so I may be cryptic at times, or seem to make assumptions about your knowledge level, etc. Sorry. Ask me to explain later.

Jan 14, 2013:

So, First!1!!: How to Create an Extension for Chrome

Go to Getting Started: Building Chrome Extension

Note: As of this writing, the code given on that page has an error in it. To fix it, open popup.js and replace 'kittensOnFlickr_' with 'searchOnFlickr_'

Nice, google. A simple coding error in a tutorial. Well played. I thought you weren't evil.

Once you get all those files into a directory, open chrome://extensions, and click on the button "Load Unpacked Extensions" Point the file selector at your folder, and viola! kitties everywhere!

That's all for now. Soon, I'll turn this into an ANTP widget.

********

20130225:
-Feb 25, 2013

So, I've learned alot in a month, but I still don't know if I'm doing this right. ANTP seems to live on angular, so I'm picking that up, but it's sometimes confusing when I do something wrong, like not injecting a module...

As I've said, I have no experience with this sort of thing. I'm just relying on community help and docs, and trial and error.  Probably writing the kludgiest code in the world...

Anyway, I have this spreadsheet that I want to display in a widget. Just one sheet. I did the XMLHttpRequest thing, and found that gDrive doesn't do CORS (cors.org). Then I went jQuery and JSONP, got that to work. Then, angular. Angular is pretty straightforward, once you know the ropes, like injection.

