---
title: "Paperlighter Template Implementation Example"
author:
  - number: 1
    name: "Author One"
    correspond: true
    affiliation: "My City University"
    address: "Orenomachi, Orenoshi, Orenoken, Japan"
  - number: 2
    name: "Author Two"
    affiliation: "My Other City University"
    address: "Hokanomachi, Orenoshi, Orenoken, Japan"
email: "xxx@myuni.ac.jp"
titleSmall: "Paperlighter Example"
authorSmall: "Author One et.al."
linkDir: |
  - Figure
  - Output
appendix: |
  - appendix/1
  - appendix/2
abstract:
    Using \LaTeX\{\} to write papers is concise and convenient. However, for
    writing in life, complicated \LaTeX\{\} style-files (e.g., elegantpaper)
    are difficult to access, or submission style-files (e.g., journal or
    conference) are not free indeed. To tackle these problems and satisfy an
    elegant and straightforward scientific writing,
    \textbf{paperlighter.sty}, a one-column style-file, is designed. This
    document is edited from icml2022.sty and provides a basic paper
    template. Compared to icml2022.sty, paperlighter.sty contain fewer
    operations, reducing adjustment while keep graceful.
    \textbf{\textit{Notably, the paper's main content only describes the format of icml2022.sty. We place the content to show the actual effect of paperlighter.sty.}}

---


# Format of the Paperlighter}

Format of paperlighter is defined in this section.

## Dimensions}\label{dimensions}}

The text of the paper has an overall width of
6.75\textasciitilde{}inches, and height of 9.0\textasciitilde{}inches.
The left margin should be 0.75\textasciitilde{}inches and the top margin
1.0\textasciitilde{}inch (2.54\textasciitilde{}cm). The right and bottom
margins will depend on whether you print on US letter or A4 paper, but
all final versions must be produced for US letter size.

The paper body should be set in 10\textasciitilde{}point type with a
vertical spacing of 11\textasciitilde{}points. Please use Times typeface
throughout the text.

## Title}\label{title}}

The paper title should be set in 14\textasciitilde{}point bold type and
centered between two horizontal rules that are 1\textasciitilde{}point
thick, with 1.0\textasciitilde{}inch between the top rule and the top
edge of the page. Capitalize the first letter of content words and put
the rest of the title in lower case.

## Author Information for Submission

Use \verb+\lighterauthor{...}+ to specify authors and
\verb+\lighteraddress{...}+ to specify affiliations. (Read the TeX code
used to produce this document for an example usage.) The author
information will not be printed unless \texttt{accepted} is passed as an
argument to the style file.

## Abstract}\label{abstract}}

The paper abstract should begin in the left column,
0.4\textasciitilde{}inches below the final address. The heading
`Abstract’ should be centered, bold, and in 11\textasciitilde{}point
type. The abstract body should use 10\textasciitilde{}point type, with a
vertical spacing of 11\textasciitilde{}points, and should be indented
0.25\textasciitilde{}inches more than normal on left-hand and right-hand
margins. Insert 0.4\textasciitilde{}inches of blank space after the
body. Keep your abstract brief and self-contained, limiting it to one
paragraph and roughly 4–6 sentences. Gross violations will require
correction at the camera-ready phase.

## Partitioning the Text

You should organize your paper into sections and paragraphs to help
readers place a structure on the material and understand its
contributions.

### Sections and Subsections

Section headings should be numbered, flush left, and set in
11\textasciitilde{}pt bold type with the content words capitalized.
Leave 0.25\textasciitilde{}inches of space before the heading and
0.15\textasciitilde{}inches after the heading.

Similarly, subsection headings should be numbered, flush left, and set
in 10\textasciitilde{}pt bold type with the content words capitalized.
Leave 0.2\textasciitilde{}inches of space before the heading and
0.13\textasciitilde{}inches afterward.

Finally, subsubsection headings should be numbered, flush left, and set
in 10\textasciitilde{}pt small caps with the content words capitalized.
Leave 0.18\textasciitilde{}inches of space before the heading and
0.1\textasciitilde{}inches after the heading.

Please use no more than three levels of headings.

### Paragraphs and Footnotes

Within each section or subsection, you should further partition the
paper into paragraphs. Do not indent the first line of a given
paragraph, but insert a blank line between succeeding ones.

You can use footnotes\footnote{Footnotes
should be complete sentences.} to provide readers with additional
information about a topic without interrupting the flow of the paper.
Indicate footnotes with a number in the text where the point is most
relevant. Place the footnote in 9\textasciitilde{}point type at the
bottom of the column in which it appears. Precede the first footnote in
a column with a horizontal rule of
0.8\textasciitilde{}inches.\footnote{Multiple footnotes can
appear in each column, in the same order as they appear in the text,
but spread them across columns and pages if possible.}

\begin{figure}[ht]
\vskip 0.2in
\begin{center}
\centerline{\includegraphics[width=\columnwidth]{Figure/icml_numpapers.eps}}
\caption{Historical locations and number of accepted papers for International
Machine Learning Conferences (ICML 1993 -- ICML 2008) and International
Workshops on Machine Learning (ML 1988 -- ML 1992). At the time this figure was
produced, the number of accepted papers for ICML 2008 was unknown and instead
estimated.}
\label{icml-historical}
\end{center}
\vskip -0.2in
\end{figure}

## Figures

You may want to include figures in the paper to illustrate your approach
and results. Such artwork should be centered, legible, and separated
from the text. Lines should be dark and at least
0.5\textasciitilde{}points thick for purposes of reproduction, and text
should not appear on a gray background.

Label all distinct components of each figure. If the figure takes the
form of a graph, then give a name for each axis and include a legend
that briefly describes each curve. Do not include a title inside the
figure; instead, the caption should serve this function.

Number figures sequentially, placing the figure number and caption
\emph{after} the graphics, with at least 0.1\textasciitilde{}inches of
space before the caption and 0.1\textasciitilde{}inches after it, as in
\cref{icml-historical}. The figure caption should be set in
9\textasciitilde{}point type and centered unless it runs two or more
lines, in which case it should be flush left. You may float figures to
the top or bottom of a column, and you may set wide figures across both
columns (use the environment \texttt{figure*} in \LaTeX). Always place
two-column figures at the top or bottom of the page.

## Algorithms

If you are using \LaTeX, please use the
\texttt{algorithm\textquotesingle{}\textquotesingle{}\ and}algorithmic’’
environments to format pseudocode. These require the corresponding
stylefiles, algorithm.sty and algorithmic.sty, which are supplied with
this package. \cref{alg:example} shows an example.

\begin{algorithm}[tb]
   \caption{Bubble Sort}
   \label{alg:example}
\begin{algorithmic}
   \STATE {\bfseries Input:} data $x_i$, size $m$
   \REPEAT
   \STATE Initialize $noChange = true$.
   \FOR{$i=1$ {\bfseries to} $m-1$}
   \IF{$x_i > x_{i+1}$}
   \STATE Swap $x_i$ and $x_{i+1}$
   \STATE $noChange = false$
   \ENDIF
   \ENDFOR
   \UNTIL{$noChange$ is $true$}
\end{algorithmic}
\end{algorithm}

## Tables

You may also want to include tables that summarize material. Like
figures, these should be centered, legible, and numbered consecutively.
However, place the title \emph{above} the table with at least
0.1\textasciitilde{}inches of space before the title and the same after
it, as in \cref{sample-table}. The table title should be set in
9\textasciitilde{}point type and centered unless it runs two or more
lines, in which case it should be flush left.

\begin{table}[t]
\caption{Classification accuracies for naive Bayes and flexible
Bayes on various data sets.}
\label{sample-table}
\vskip 0.15in
\begin{center}
\begin{small}
\begin{sc}
\begin{tabular}{lcccr}
\toprule
Data set & Naive & Flexible & Better? \\
\midrule
Breast    & 95.9$\pm$ 0.2& 96.7$\pm$ 0.2& $\surd$ \\
Cleveland & 83.3$\pm$ 0.6& 80.0$\pm$ 0.6& $\times$\\
Glass2    & 61.9$\pm$ 1.4& 83.8$\pm$ 0.7& $\surd$ \\
Credit    & 74.8$\pm$ 0.5& 78.3$\pm$ 0.6&         \\
Horse     & 73.3$\pm$ 0.9& 69.7$\pm$ 1.0& $\times$\\
Meta      & 67.1$\pm$ 0.6& 76.5$\pm$ 0.5& $\surd$ \\
Pima      & 75.1$\pm$ 0.6& 73.9$\pm$ 0.5&         \\
Vehicle   & 44.9$\pm$ 0.6& 61.5$\pm$ 0.4& $\surd$ \\
\bottomrule
\end{tabular}
\end{sc}
\end{small}
\end{center}
\vskip -0.1in
\end{table}

Tables contain textual material, whereas figures contain graphical
material. Specify the contents of each row and column in the table’s
topmost row. Again, you may float tables to a column’s top or bottom,
and set wide tables across both columns. Place two-column tables at the
top or bottom of the page.

## Theorems and such

The preferred way is to number definitions, propositions, lemmas, etc.
consecutively, within sections, as shown below.

\begin{definition}
\label{def:inj}
A function $f:X \to Y$ is injective if for any $x,y\in X$ different, $f(x)\ne f(y)$.
\end{definition}

Using \cref{def:inj} we immediate get the following result:

\begin{proposition}
If $f$ is injective mapping a set $X$ to another set $Y$,
the cardinality of $Y$ is at least as large as that of $X$
\end{proposition}
\begin{proof}
Left as an exercise to the reader.
\end{proof}

\cref{lem:usefullemma} stated next will prove to be useful.

\begin{lemma}
\label{lem:usefullemma}
For any $f:X \to Y$ and $g:Y\to Z$ injective functions, $f \circ g$ is injective.
\end{lemma}
\begin{theorem}
\label{thm:bigtheorem}
If $f:X\to Y$ is bijective, the cardinality of $X$ and $Y$ are the same.
\end{theorem}

An easy corollary of \cref{thm:bigtheorem} is the following:

\begin{corollary}
If $f:X\to Y$ is bijective,
the cardinality of $X$ is at least as large as that of $Y$.
\end{corollary}
\begin{assumption}
The set $X$ is finite.
\label{ass:xfinite}
\end{assumption}
\begin{remark}
According to some, it is only the finite case (cf. \cref{ass:xfinite}) that is interesting.
\end{remark}

## Citations and References

If you rely on the \LaTeX\{\} bibliographic facility, use
\texttt{natbib.sty} included in the style-file package to obtain
reference.

Citations within the text should include the authors’ last names and
year. If the authors’ names are included in the sentence, place only the
year in parentheses, for example when referencing Arthur Samuel’s
pioneering work \yrcite{Samuel59}. Otherwise place the entire reference
in parentheses with the authors and year separated by a comma
\cite{Samuel59}. List multiple references separated by semicolons
\cite{kearns89,Samuel59,mitchell80}. Use the `et\textasciitilde{}al.’
construct only for citations with three or more authors or after listing
all authors to a publication in an earlier reference
\cite{MachineLearningI}.

Use an unnumbered first-level section heading for the references, and
use a hanging indent style, with the first line of the reference flush
against the left margin and subsequent lines indented by 10 points. The
references at the end of this document give examples for journal
articles \cite{Samuel59}, conference publications \cite{langley00}, book
chapters \cite{Newell81}, books \cite{DudaHart2nd}, edited volumes
\cite{MachineLearningI}, technical reports \cite{mitchell80}, and
dissertations \cite{kearns89}.

Alphabetize references by the surnames of the first authors, with single
author entries preceding multiple author entries. Order references for
the same authors by year of publication, with the earliest first. Make
sure that each reference includes all relevant information (e.g., page
numbers).

Please put some effort into making references complete, presentable, and
consistent, e.g.~use the actual current name of authors. If using
bibtex, please protect capital letters of names and abbreviations in
titles, for example, use \{B\}ayesian or \{L\}ipschitz in your .bib
file.

# Acknowledgements

Acknowledgements is an unnumbered section at the end of the paper.
Typically, this will include thanks to colleagues who contributed to the
ideas, and to funding agencies and corporate sponsors that provided
financial support.

<!--
# Basic properties of protein and nucleic acids
## Basic principle of protein
### Unit structure of protein
There are 4 levels of protein organization:

* Primary structure \
  It consists of a chain arrangement/sequence of amino acids that are joined together to make protein. It usually uses abbreviations for the amino and residues. The example in figure (1) is Polypeptide amino.

* Secondary structure \
  This is the region within the long protein chains organized into regular structures known as alpha-helices ($\alpha$-helices) and beta sheet.

* Tertiary structure \
  Tertiary structure is a description of the way that whole chain from one or several units folds and forms 3-dimensional shape, called domain.

* Fourth order structure \
  This structure is formed from several tertiary structure proteins or domains with more complex shape.

![Structure of protein](./Figures/Figure1)
-->

<!--
\begin{figure}[h!]
  \centering
  \includegraphics[width=0.7\linewidth]{Figure1}
  \caption{Structure of protein}
  \label{fig:figure1}
\end{figure}
-->
<!--
### Basic motif of protein
There are two types of secondary structure for hydrophobic type:

* $\alpha$-helix\
  This is one of common motif in secondary structure of protein. It consists of hydrogen bond with conformation of N-H group donates a hydrogen bond to the C=O group of amino acid. This structure has small Coulomb interaction in hydrogen bond and has dipole moment.

* $\beta$ sheet\
  Beta sheet is also one of common motif in protein, consist of $\beta$ strands connected hydrogen bonds, forming a generally twisted and pleated sheet.

![Secondary alpha-helix and beta sheet structures](./Figures/Alpha_beta_structure_full)
-->

<!--
\begin{figure}[h!]
  \centering
  \includegraphics[width=0.7\linewidth]{Alpha_beta_structure_(full)}
  \caption{Secondary alpha-helix and beta sheet structures}
  \label{fig:alphabetastructurefull}
\end{figure}
-->

<!--
## Structure of nucleic acid, DNA and protein

###  3 structures of DNA:
  DNA has 3 conformation that include A-DNA, B-DNA, and Z-DNA forms

* A-DNA, has same periodic double helical structure\
* B-DNA, slightly similar to A-DNA, but with longer and less compact than A-DNA\
* Z-DNA, has double helical structure which the helix winds to the left in a zigzag pattern.

![3 types of DNA conformations: A-DNA, B-DNA, and Z-DNA](./Figures/Dnaconformations)
-->
<!--
\begin{figure}[h!]
  \centering
  \includegraphics[width=0.4\linewidth]{Dnaconformations}
  \caption{3 types of DNA conformations: A-DNA, B-DNA, and Z-DNA}
  \label{fig:dnaconformations}
\end{figure}
-->
<!--
# Lipid and membrane protein
  Membrane is a function of protein that divides the biological cell into inside and outside part.
  Functions of lipid bilayer are formation of boundary, permeability, and domain formation.
  Lipids are divided into 2 types, hydrophobic and amphiphilic molecule. \

##  Phospholipid
  This is one kind of lipid which is a major component in all cell membranes.
  Phospholipids can form lipid bilayers because of their amphiphilic characteristic.
  There are 3 kinds of self-assemble and conformation of phospholipid:

* Spherical liposome\
* Bilayer\
* Micelle\
  Micelles and bilayers form in the polar medium by a process of hydrophobic effect.

![Self-organization of phospholipids: a spherical liposome, a micelle, and a lipid bilayer.](./Figures/phospholipid)
-->
<!--
  \begin{figure}[h!]
    \centering
    \includegraphics[width=0.5\linewidth]{phospholipid}
    \caption{Self-organization of phospholipids: a spherical liposome, a micelle, and a lipid bilayer.}
    \label{fig:phospholipid}
  \end{figure}
-->

<!--
# Molecular dynamics simulation
## Simulation (Computational science)
  Simulation is the one that connect the theory and experiment in science.
  When the theory contributes in analysis and prediction, and experiments are contributing in confirming the theory and developing, simulation takes part in calculation in advanced theoretical and virtual simulation experiment.
  Simulation is using the computer to do things, such as reproduce, understand, and predict the theory and also the experiment.
  Simulation is applied in many fields, such as science, pharmacy, climate, earthquake, finance and social, and many other things.

## Supercomputer\
  Supercomputer is a computer with high level of performance.
  One of the biggest supercomputer in Japan is K Computer, located in Kobe, is having 705,024 cores and 10.510 PFlops (floating-point operations per second).
  Supercomputer is practically used in computational science, such as biological, material, earth, and fundamental physical sciences.
  Also, supercomputer is used in simulation of next-generation technology.

## Computational science in biology\
  Computational science is usually used in exploring phenomena in biological system; substances, structure and functions of proteins, membranes, and enzymes, energy and chemical reaction, and signal transduction.
  These can be modeled using molecular dynamics (MD) simulation.
  The fundamental parts in MD are analytical mechanics (Newton's equation), Schrodinger's equation in quantum mechanics, statistical mechanics, and electromagnetization principle.


###  _Brownian Dynamics_
  Brownian dynamics describes the physical phenomena of zig-zag motion of particle. The motion is arising from collision between the particles. This motion resulted diffusion equation that obeys the law of mass conservation, formulated in the equation:
  \begin{equation}
    \frac{\partial \rho (x,t)}{\partial t} = -\frac{\partial J(x,t)}{\partial x}
  \end{equation}
  where $\rho (x,t)$ is density of material and $J (x,t)$ is flux, the rate of flow.

###  _Langevin Equation_
  This equation describes the \textit{Brownian motion} that uses Newton's equation of motion and degree of freedom. $\varrho$ is denoted as the friction coefficient.
  \begin{equation}
    m\frac{d^2 x}{d t^2} = F - \varrho \frac{dx}{dt} + \xi (t)
  \end{equation}

###  Einstein's relational expression:
  \begin{equation}
    D=\frac{k_BT}{\varrho}
  \end{equation}
-->
