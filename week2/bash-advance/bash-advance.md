what is bash
bash is a command line interpreted language

- pwd ==> present working directory
- ls ==> check the directories
- ls -l ==> -rw-r--r-- 1 Dell 197121 124 Jul 13 21:34 bash-advance.md
  here `-rw-r--r--` is the permissions for that particular file or folder
  here ` Dell` is the owner of the file or folder
  `124` is tehe size of the file
  `21:34` id the last modified date
- ls -a ==> it shows you all the hidden files as well like the env's
- ls -s ==> sorts on the basis of the size of the folders and files
- ls -lR | grep .md it will fing all the files and folders with .md filetype
  Together, ls -lR will recursively list all files and directories starting from the current directory.
- ls \*.md it will give you the list of files ending with .md
- cat ==> it is used to view the file contents
- cat > [filename] ==> than enter whatever you wanted to write and than enter ctrl + c
- mkdir ==> create a new folder
- mkdir -p [what_you_want_to_do] example mkdir -p frontend/scripts
  it will recursivey create the folders and files
- mv [current_file_or_directory] [what_you_want_it_toBe_called] ==> renaming the file
- mv [file] [directory] ==> to move the files from one place to another
- rm [file_name] ==> remove something
- rm -r [directory] ==> remove the directory
- head [filename] ==> gives us the first 10 rows of the file
- tail [filename] ==> gives us the last 10 lines of the file
- head -20 [filename] ==> 20 lines
- grep [word] [filename] ==> to find the number of occurances of a particular word in a particular file
- grep -c [word] [filename] ==> it will give you the number of times the phrase has occured
-

#
