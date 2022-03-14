This paragraph came from another file.
We can put a full blown Markdown files in this file.
Under the hood, this included file will be translated into \LaTeX by pubsEngine.
Then the \LaTeX code produced will be inserted into the main output file.
\LaTeX macro that defined in the main source, would not implemented in this file.
For example, this beautifully formatted symbol of \LaTeX was produced by the real macro `\LaTeX` instead of the more convenience version of `\latex` from the main source.
This means, every figures that refered in this file should be refered as if relative to the main source, instead of that to this file.
