Vincent's Dev Logs!


<log>
This is a project that I did so that I can practice more vanilla Javascript

I also did this project so that I can practice some HTML and CSS

I don't know yet how you guys will comment on my work but any feedback to make me better will be taken.

-Vince 8/16/2020
</log>

<log>
I think that I should do more translations today, something easy.

Today I want to add a part where when I click the <a> about tag it would hover me to the about section
will do research about this part.

Found out that it is called smooth scrolling but I found a Jquery version. I just want to do vanilla version of javaScript to do it.

added objects where I think would be able to help to scroll smoothly. I will try it right now.

I found out how it works but now I want to do that if I click the hyperlink I will smooth scroll to the about div

changed scope of project to become my portfolio website to show what kind of things I can do with this webpage.

Today I will sleep earlier so that I can have more time tomorrow in making changes in this personal project

-Vince 8/18/2020
</log>

<log>
7:21 am
Good morning I woke up early today around 5 am and started working around 6 am
Today I started making a new section in this webpage which is a timer
Trying to learn the DOM and cleaning up my code so that there would be not so much javaScript on my html pages
Doing this sanity check so that my head can wrap around the idea behind creating buttons in my stop watch.

8:03 am
Finished the layout of the timer

note: Today I finished my stopwatch but I want to only display numbers 0 - 99 for milliseconds maybe tomorrow
      or another time haha. 

-Vince 8/19/2020
</log>

<log>
So today I am going to do an tic tac toe game for two humans

maybe if I finish this I will also look into AI so that it can be a much better application.
Right now as of 9:19 am it's going to be research time.

Planning time
Psuedocode:
- initialize turn checkers
- isX = true
- display win counter
- display game cells
- display reset button
- display name
- start game
- 1st turn is X
- Display X on clicked cell
- Next turn is O 
- Display O on clicked cell 
- do this until X or O wins by connecting 3 game cells 
- if no one wins Draw!!!
- if X win add winCounter X
- if O win add winCounter O
- if reset button clicked reset board

2 dim array
winning combinations are 
[0,0] [0,1] [0,2]; first row
[1,0] [1,1] [1,2]; second row
[2,0] [2,1] [2,2]; third row

[0,0]
[1,0] first col
[2,0] 

[0,1]
[1,1] second col
[2,1]

[0,2]
[1,2] third col
[2,2]

[0,0]
      [1,1]        diagonal 1
            [2,2]
______________________
            
            [0,2]
      [1,1]        diagonal 2
[2,0]

max number of turns = 9
min number of turns for win = 5



Store the contents of the first cell of the row/column/diagonal (starting from the top and/or right).

Go down each row/column/diagonal and see if the contents of all the successive cells match the first cell.

If they do, return the symbol for the winning piece, otherwise, return false;

-Vince 8/20/20
</log>

<log>
Today I am going to resume building the tic tac toe game today have a game plan and I am going to try to
implement it in my code.

- pass current object clicked using (this)
- 10:08 Implemented the idea and it worked.

- problem - how to clear all the elements when I click reset me
- I don't like the font and color

I will push this version on my repo so that can save my progress 

-Vince 8/21/20
</log>

<log>
I am going to try to do the scientific method so that I will be able to solve the problem of how to determine the winner of tic tac toe game

Question/Statement of the problem : How to determine the winner of Tic Tac toe?

Googles answer
If the board is n × n then there are n rows, n columns, and 2 diagonals.
 Check each of those for all-X's or all-O's to find a winner. 
 If it only takes x < n consecutive squares to win, then it's a little more complicated. 
 The most obvious solution is to check each x × x square for a winner
</log>