cd /d %~dp0
::sass --stop-on-error --watch -t nested .
::sass --stop-on-error --watch -t expanded .
::sass --stop-on-error --line-comments --watch -t compact .
::sass --stop-on-error --watch -t compressed .
compass w