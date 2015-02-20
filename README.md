# electrolyte

##When your team has pushed some changes to the github master branch:
1.	From local master: git pull
2.	Git checkout [your branch]
3.	Git merge master
4.	Git checkout gh-pages
5.	Get merge master

##After you’ve done some work that you’ve saved:
1.	Git branch [you should be on your branch, if you’re not do a git checkout to your branch before you add and commit changes]
2.	git status [text in red should appear that needs to be added]
3.	from your local branch: git add .
4.	git status [text in green should appear that needs to be commited]
5.	git commit –m “[why you made the changes]”
6.	git checkout master
7.	git merge [your branch]
8.	git checkout gh-pages
9.	git merge master
10.	git checkout master
11.	git push



