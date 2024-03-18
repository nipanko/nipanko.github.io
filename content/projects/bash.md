+++
title = 'Bash'
date = 2024-03-09T14:43:06+05:30
draft = false
tags = "code"
+++

- `pwd`: Displays the present working directory.
- `ls`: Lists the contents of the current directory.
- `echo`: Prints a string of text, or value of a variable to the terminal.
-  `#` : Comments
- country=India : we can directly assign value to a variable
- same_country = `$country`  : To access the variable value, append `$` to the variable name. 
- read : to take input (read var)
- Reading from a file

This code reads each line from a file named `input.txt` and prints it to the terminal. We'll study while loops later in this article.

```bash
while read line
do
  echo $line
done < input.txt
```

- Command line arguments

In a bash script or function, `$1` denotes the initial argument passed, `$2` denotes the second argument passed, and so forth.

This script takes a name as a command-line argument and prints a personalized greeting.

```bash
echo "Hello, $1!"
```

We have supplied `Zaira` as our argument to the script.

```bash
#!/bin/bash
echo "Hello, $1!"
```

-  Writing to a file:

```bash
echo "This is some text." > output.txt
```

This writes the text "This is some text." to a file named `output.txt`. Note that the `>`operator overwrites a file if it already has some content.

- Appending to a file:

```bash
echo "More text." >> output.txt
```

This appends the text "More text." to the end of the file `output.txt`.

- Redirecting output:

```bash
ls > files.txt
```

This lists the files in the current directory and writes the output to a file named `files.txt`. You can redirect output of any command to a file this way.

1. `cd`: Change the directory to a different location.
2. `ls`: List the contents of the current directory.
3. `mkdir`: Create a new directory.
4. `touch`: Create a new file.
5. `rm`: Remove a file or directory.
6. `cp`: Copy a file or directory.
7. `mv`: Move or rename a file or directory.
8. `echo`: Print text to the terminal.
9. `cat`: Concatenate and print the contents of a file.
10. `grep`: Search for a pattern in a file.
11. `chmod`: Change the permissions of a file or directory.
12. `sudo`: Run a command with administrative privileges.
13. `df`: Display the amount of disk space available.
14. `history`: Show a list of previously executed commands.
15. `ps`: Display information about running processes.


- ### Conditional statements (if/else)

Expressions that produce a boolean result, either true or false, are called conditions. There are several ways to evaluate conditions, including `if`, `if-else`, `if-elif-else`, and nested conditionals.

****Syntax****:

```bash
if [[ condition ]];
then
	statement
elif [[ condition ]]; then
	statement 
else
	do this by default
fi
```

Syntax of bash conditional statements

We can use logical operators such as AND `-a` and OR `-o` to make comparisons that have more significance.

```bash
if [ $a -gt 60 -a $b -lt 100 ]
```

This statement checks if both conditions are `true`: a is greater than 60 AND b is less than 100.

Let's see an example of a Bash script that uses `if`, `if-else`, and `if-elif-else` statements to determine if a user-inputted number is positive, negative, or zero:

```bash
#!/bin/bash

echo "Please enter a number: "
read num

if [ $num -gt 0 ]; then
  echo "$num is positive"
elif [ $num -lt 0 ]; then
  echo "$num is negative"
else
  echo "$num is zero"
fi
```



- ### While loop

While loops check for a condition and loop until the condition remains `true`. We need to provide a counter statement that increments the counter to control loop execution.

In the example below, `(( i += 1 ))` is the counter statement that increments the value of `i`. The loop will run exactly 10 times.

```bash
#!/bin/bash
i=1
while [[ $i -le 10 ]] ; do
   echo "$i"
  (( i += 1 ))
done
```

While loop that iterates 10 times.

- ### For loop

The `for` loop, just like the `while` loop, allows you to execute statements a specific number of times. Each loop differs in its syntax and usage.

In the example below, the loop will iterate 5 times.

```bash
#!/bin/bash

for i in {1..5}
do
    echo $i
done
```

For loop that iterates 5 times.


- ### Case statements

In Bash, case statements are used to compare a given value against a list of patterns and execute a block of code based on the first pattern that matches. The syntax for a case statement in Bash is as follows:

```bash
case expression in
    pattern1)
        # code to execute if expression matches pattern1
        ;;
    pattern2)
        # code to execute if expression matches pattern2
        ;;
    pattern3)
        # code to execute if expression matches pattern3
        ;;
    *)
        # code to execute if none of the above patterns match expression
        ;;
esac
```

Here, "expression" is the value that we want to compare, and "pattern1", "pattern2", "pattern3", and so on are the patterns that we want to compare it against.

The double semicolon ";;" separates each block of code to execute for each pattern. The asterisk "*" represents the default case, which executes if none of the specified patterns match the expression.