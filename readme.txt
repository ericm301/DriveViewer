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

*********
20130328:
-28/Mar/2013 9:04

GitHub is very confusing, to say the least. It is very powerful, and you can screw things up pretty easy if you don't know what you're doing, like me.
Luckily, I know a little bash, so using the shell isn't that hard. It seems as if Git just assumes you know how to fix things when you screw up. There's no 'undo'.
I have this widget installed for dev on my laptop and my work pc, so I figured GitHub would keep track. Well, it will, but I needed to figure out how to do the dance. It took two weeks to figure out how to remove my editor's project file! .gitignore works, but once the file is in the repo, you're screwed. I had to commit my other changes first, then edit .gitignore, commit that, remove the offeding file, and commit that. Then, on the other machine, do a full commit and sync. I had done all the edits and deleted the project file, and Git barfed all over it. I had to restore my backups and lost a couple hours work. :(  And, Git wouldn't tell me how to fix the problem. It just told me I had commit errors, and couldn't do anything. "Open a shell and fix the problem. Then, try to commit again." Not alot of help there... I eventually ended up reverting by deleting the repo on my pc, and re-cloning. Apparently, there's a way to do that in a shell one-liner, but I couldn't figure it out.

As far as actually getting this thing to work, I've pretty much got the code on the widget side tight. Angular makes all the mechanical stuff pretty easy. The gDrive spreadsheet is a pain. Google's FinanceApp API has quotas, but they don't make sense. I keep getting these "Daily limit exceeded" errors. I had one day, where I made API calls every 15 seconds, nearly all day long. 5100+ times, I called it. Then the next day, I tried every five secs. It errored after 1000, in about 3.5 hours! Then, after 30 minutes, it started working again, for 5 or 6 calls, then stopped. I left it alone for a few hours, with no calls at all, and when I restarted it, it worked fine at 15 second intervals. The GAS quotas page <insert link> doesn't specifically state what the limits are, but they must be more like hourly than daily. Meh.

Let's see if I can get these updates onto my laptop without too much fuss...


