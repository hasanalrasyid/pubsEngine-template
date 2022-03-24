# Rotating tables

The process of rotating tables into landscape mode is slightly different in
\aastex v6.31. Instead of the `\rotate` command, a new environment
has been created to handle this task. To place a single page table in a
landscape mode start the table portion with
`\begin{rotatetable}` and end with
`\end{rotatetable}`.

Tables that exceed a print page take a slightly different environment since
both rotation and long table printing are required. In these cases start
with `\begin{longrotatetable}` and end with
`\end{longrotatetable}`. Table \ref{chartable} is an
example of a multi-page, rotated table. The `\movetabledown`
command can be used to help center extremely wide, landscape tables. The
command `\movetabledown=1in` will move any rotated table down 1
inch.

A handy "cheat sheet" that provides the necessary \latex to produce 17
different types of tables is available at \url{http://journals.aas.org/authors/aastex/aasguide.html#table_cheat_sheet}.

