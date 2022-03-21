---
shorttitle: "pubsEngine"
shortauthor: "Author One, et al."
title: "pubsEngine: Manuscript Engine"
author:
  - number: 1
    orcid: "0000-0002-0786-7307"
    name: "Author One"
    correspond: true
    affiliation: "My City University"
    address: "Orenomachi, Orenoshi, Orenoken, Japan"
    email: "one@myuni.ac.jp"
  - number: 2
    name: "Author Two"
    affiliation: "My Other City University"
    address: "Hokanomachi, Orenoshi, Orenoken, Japan"
    email: "two@myuni.ac.jp"
collaborator:
  theme: "AAS Journal Data Editors"
  person:
    - number: 1
      orcid: "0000-0002-0786-7307"
      name: "Author One"
      correspond: true
      affiliation: "My City University"
      address: "Orenomachi, Orenoshi, Orenoken, Japan"
      email: "one@myuni.ac.jp"
    - number: 2
      name: "Author Two"
      affiliation: "My Other City University"
      address: "Hokanomachi, Orenoshi, Orenoken, Japan"
      email: "two@myuni.ac.jp"
  email: "xxx@myuni.ac.jp"
titleshort: "Paperlighter Example"
authorshort: "Author One et.al."
#% Reintroduced the \received and \accepted commands from AASTeX v5.2
#\received{March 1, 2021}
#\revised{April 1, 2021}
#\accepted{\today}
#\submitjournal{PSJ}
#% \watermark{text}
#% \setwatermarkfontsize{dimension}
#\correspondingauthor{August Muench}
#\email{greg.schwarz@aas.org, gus.muench@aas.org}
#end of docs
#\allauthors
#\listofchanges
processDate:
  received: "March 11, 2022"
  accepted: "April 11, 2022"
imageDir:
  - Figure
  - Output
appendix:
  - include/appendix1
  - include/appendix2
  - include/appendix3
  - include/appendix4
  - include/appendix5
graphicpaths:
  - Figure
abstract: |
  This example manuscript is intended to serve as a tutorial and template for
  authors to use when writing their own AAS Journal articles. The manuscript
  includes a history of \aastex and documents the new features in the
  previous versions as well as the bug fixes in version 6.31. This
  manuscript includes many figure and table examples to illustrate these new
  features.  Information on features not explicitly mentioned in the article
  can be viewed in the manuscript comments or more extensive online
  documentation. Authors are welcome replace the text, tables, figures, and
  bibliography with their own and submit the resulting manuscript to the AAS
  Journals peer review system.  The first lesson in the tutorial is to remind
  authors that the AAS Journals, the Astrophysical Journal (ApJ), the
  Astrophysical Journal Letters (ApJL), the Astronomical Journal (AJ), and
  the Planetary Science Journal (PSJ) all have a 250 word limit for the
  abstract\footnote{Abstracts for Research Notes of the American Astronomical
  Society (RNAAS) are limited to 150 words}.  If you exceed this length the
  Editorial office will ask you to shorten it. This abstract has 182 words.
abstractTex:
  #\abstract{Context}{Aim}{Method}{Result}Conclusion}
  \abstract{To investigate the physical nature of the 'nuc\-leated instability' of
  proto giant planets, the stability of layers in static, radiative gas spheres is analysed on the basis of Baker's standard one-zone model.}
  {To investigate the physical nature of the 'nuc\-leated instability' of
  proto giant planets, the stability of layers in static, radiative gas spheres is analysed on the basis of Baker's standard one-zone model.}
  {It is shown that stability depends only upon the equations of state, the opacities and the local thermodynamic state in the layer. Stability and instability can therefore be expressed in the form of stability equations of state which are universal for a given composition.}
  {The stability equations of state are calculated for solar composition and are displayed in the domain $-14 \leq \lg \rho / \mathrm{[g\, cm^{-3}]} \leq 0 $, $ 8.8 \leq \lg e / \mathrm{[erg\, g^{-1}]} \leq 17.7$. These displays may be used to determine the one-zone stability of layers in stellar or planetary structure models by directly reading off the value of the stability equations for the thermodynamic state of these layers, specified  by state quantities as density $\rho$, temperature $T$ or specific internal energy $e$. Regions of instability in the $(\rho,e)$-plane are described and related to the underlying microphysical processes.}
  {Vibrational instability is found to be a common phenomenon at temperatures lower than the second He ionisation zone. The $\kappa$-mechanism is widespread under 'cool' conditions.}
keywords:
# will use --- as separator
 - Classical Novae (251)
 - Ultraviolet astronomy(1736)
 - History of astronomy(1868)
 - Interdisciplinary astronomy(804)
facilities: "HST(STIS), Swift(XRT and UVOT), AAVSO, CTIO:1.3m, CTIO:1.5m, CXO"
acknowledgements:
  We thank all the people that have made this AASTeX what it is today.  This
  includes but not limited to Bob Hanisch, Chris Biemesderfer, Lee Brotzman,
  Pierre Landau, Arthur Ogawa, Maxim Markevitch, Alexey Vikhlinin and Amy
  Hendrickson. Also special thanks to David Hogg and Daniel Foreman-Mackey
  for the new "modern" style design. Considerable help was provided via bug
  reports and hacks from numerous people including Patricio Cubillos, Alex
  Drlica-Wagner, Sean Lake, Michele Bannister, Peter Williams, and Jonathan
  Gagne.
header-includes: |
  \usepackage{chemfig}
  \newcommand\mC[1]{\multicolumn{1}{c}{#1}}
  \newcommand{\vdag}{(v)^\dagger}
  \newcommand\aastex{AAS\TeX}
  \newcommand\latex{\LaTeX\xspace}

---

# Introduction

In the 'nucleated instability' (also called core
instability) hypothesis of giant planet
formation, a critical mass for static core  envelope
protoplanets has been found. \citet{langley00} determined
the critical mass of the core to be about $12 \,M_\oplus$
($M_\oplus=5.975 \times 10^{27}\,\mathrm{g}$ is the Earth mass), which
is independent of the outer boundary
conditions and therefore independent of the location in the
solar nebula. This critical value for the core mass corresponds
closely to the cores of today's giant planets.

Although no hydrodynamical study has been available many workers
conjectured that a collapse or rapid contraction will ensue
after accumulating the critical mass. The main motivation for
this article
is to investigate the stability of the static envelope at the
critical mass. With this aim the local, linear stability of static
radiative gas  spheres is investigated on the basis of Baker's
(\citeyear{mitchell80}) standard one-zone model.

Phenomena similar to the ones described above for giant planet
formation have been found in hydrodynamical models concerning
star formation where protostellar cores explode
(Tscharnuter \citeyear{kearns89}, Balluch \citeyear{MachineLearningI}),
whereas earlier studies found quasi-steady collapse flows. The
similarities in the (micro)physics, i.e., constitutive relations of
protostellar cores and protogiant planets serve as a further
motivation for this study.

# Markdown

pubsEngine use Markdown text-file as an input to be processed into \latex document.
Markdown is a very simplified text markup language.
This section would shows several common syntax of Markdown.
More detailed syntax can be accessed in the Markdown cheatsheet.

## Headings
We use `#` on various levels. Headings should be shown as a line that prefixed by `#`. (Ex. `# The First Level Heading`). Please include space after `#`.

## Paragraph
blank line stands as a paragraph separator. No indentation for the first line (it only required in multilined lists to show that the next line is part of the item if it is non-blank and indented).

## Italic
`*` Ex. `this text is *italic*` :  this text is *italic*

## Bold
`**` Ex. `this text is **bold**` : this text is **bold**

##  Bold and Italic
`***` Ex. `this text is ***bold and italic***` this text is ***bold and italic***

## Verbatim
Verbatim should use backticks \v{`text`}, Ex. ``this is `the text` `` this is `the text`.
To include backticks inside the text, use multiple bacticks.

~~~
``this is `the text` multiple``
~~~

## CodeBlocks
Multiple verbatim lines in Markdown can be expressed as a CodeBlock.
This particular block is considered as special, due to its popular use in verbatim representation of source-code in the manuscript.
Technically, a CodeBlock is a range of lines that surrounded by triple tilde `~~~`, for example:

```
~~~
main :: IO ()
main = putStrLn "we are one"
~~~
```

will produce:

~~~
main :: IO ()
main = putStrLn "we are one"
~~~

The abuse of CodeBlocks for another purpose will be discussed in another section (Enhancement by pubsEngine).

## Mathematical Equations
By default, we may use `$$` environment for mathematical formula.
Nonetheless, actually, we can use any \latex scenario, such as:

~~~
$$ $$ is equal with \begin{equation}
\begin{eqnarray}
\begin{array}
\begin{displaymath}
\begin{align}
~~~

This is an example:

~~~
\begin{align}
\nabla \cdot  \vec{E} &= \rho \nonumber \\
\nabla \cdot  \vec{B} &= 0    \nonumber \\
\nabla \times \vec{E} &= -\frac{\vec{B}}{t}
\end{align}
~~~

\begin{align}
\nabla \cdot  \vec{E} &= \rho \nonumber \\
\nabla \cdot  \vec{B} &= 0    \nonumber \\
\nabla \times \vec{E} &= -\frac{\vec{B}}{t}
\end{align}

Equations as independent paragraph equation is not numbered, as below.

$$
\nabla \cdot  \vec{W} = \sigma W \nonumber
$$

And this is another example for inline equation, such as: $$y = 5\cdot x^2$$
You can see that inline equation have automatically numbered.

## Tables
Table creation will be described in another section (Enhancement by pubsEngine).

## Images
~~~
![the caption](Figure/icml_numpapers.eps)
{#fig:FigVibStab width=3.43in height=2.71in}
~~~

will produce Figure \ref{fig:FigVibStab}.
Make sure that you calculated by yourself the appropriate width and height for the image to fit in a column.
Full width image and automatic sized image for single-column will be described at another section (Enhancement by pubsEngine). Please be aware that `size` is considered as a multiplier of the `\linewidth`.

![the caption](Figure/icml_numpapers.eps){#fig:FigVibStab size=0.5}

## Lists
We can have either ordered or unordered list

### Ordered List
For ordered list, we just use numbers.
The block should be as an independent paragraph (blank line above and under the block).


~~~
1. first in line
2. second
3. and the third
~~~
will produce

1. first in line
2. second
3. and the third

## Unordered List
For unordered list, use dash sign (`-`).
We also can use asterisk and plus signs ( `* +`)

~~~
- first in line
- second
  should multiline
- and the third
~~~

will produce

- first in line
- second
  should multiline
- and the third


## Links

~~~
We use [Duck Duck Go](https://duckduckgo.com).
~~~

produces: We use [Duck Duck Go](https://duckduckgo.com).

## Email link

~~~
<myemail@myurl.org>
~~~

produces email link:

<myemail@myurl.org>

# Enhancement by pubsEngine

The enhancements provided by pubsEngine spans on various aspects.
Most parts of this are expressed in terms of CodeBlocks.

## Table

pubsEngine provides its table capability outside the defaults available in Pandoc.
Under the table, pubsEngine will use MultiMarkdown to process its table.
We can create Table \ref{tbl:multi} using the following template:

```
~~~{.multiTable #tbl:multi}
|              |          Grouping           ||
|First Header  | Second Header | Third Header |
| ------------ | :-----------: | -----------: |
|Content       |          *Long Cell*        ||
|Content       |   **Cell**    |         Cell |
|New section   |     More      |         Data |
|And more      | With an escaped '\|'        ||
[More complicated table caption.]
~~~
```

~~~{.multiTable #tbl:multi}
|              |          Grouping           ||
|First Header  | Second Header | Third Header |
| ------------ | :-----------: | -----------: |
|Content       |          *Long Cell*        ||
|Content       |   **Cell**    |         Cell |
|New section   |     More      |         Data |
|And more      | With an escaped '\|'        ||
[More complicated table can be done using MultiMarkdown in `.multiTable` CodeBlock. You have to use this format for all table as default.]
~~~

Currently, we cannot create full width two-columns table automatically using above default syntax.
For the moment, we should use a complete \latex syntax to fulfill this.
The detailed syntax for this purpose will be shown in the Appendix.

<!--
We use `\begin{table*}` for full screen table as follows Table \ref{KapSou}.

\begin{table*}
\centering

\caption[]{Opacity sources. Prototype for correct table. In full screen mode. \label{KapSou}}
\begin{tabular}{@{}cc
    *{4}{S[table-format=6.3,output-decimal-marker={,}]}
@{}}
\toprule
Lp. & Miejscowość
& \multicolumn{2}{@{}c}{Zapotrzebowanie na wodę, \si{m^3/\day}}
& \multicolumn{2}{c@{}}{Odpływ ścieków, \si{m^3/\day}} \\
& & \mC{$Q_{\text{śrd}}$} & \mC{$Q_{\text{maxd}}$} &
    \mC{$Q_{\text{rdś}}$} & \mC{$Q_{\text{maxd}}$} \\
\midrule
1.    & X1 & 57,2  & 74,4  & 54,3  & 70,7 \\
2.    & X2 & 82,5  & 107,3 & 78,4  & 101,9 \\
3.    & X3 & 47,3  & 61,5  & 44,9  & 58,4 \\
4.    & X4 & 24,2  & 31,5  & 23,0  & 29,9 \\
5.    & X5 & 211,2 & 274,7 & 200,6 & 260,9 \\
\bottomrule
\end{tabular}
\end{table*}
-->


## Include .md Files

We can create a rather decent categorical separation of our documents by dividing the .md files and gather them using includes.

```
~~~include
include/addition1.md
~~~
```

~~~include
include/addition1.md
~~~

Above paragraph was included from `include/addition1.md`.

## Diagrams

We can include a diagram script, following an Embedded domain-specific Language from Haskell package [`diagrams`](https://hackage.haskell.org/package/diagrams).
The implementation of following CodeBlock can be seen at Figure \ref{fig:dia1}.
Please be aware that the `size` will be considered as a multiplier from `\linewidth`.

```
~~~{#fig:dia1 .diagram size=0.8 caption="dia"}
let x = circle 10
 in x
~~~
```

~~~{#fig:dia1 .diagram size=0.8 caption="from Diagrams"}
let t = circle 100
 in t
~~~

## Running a subcommand

Currently, subcommand only valid for Python script.
There are two possible class available for this subcommand.

To make this document can stands on its own and to remove repetitive codes, we can also include a python library inside `_build/temp/lib` directory.
All script above, will include all files mentioned inside `_build/temp/lib`.
Furthermore, the `_build/temp/lib` will be populated by CodeBlock with `.lib` class.
This is an example of the block:

```
~~~{.script .py .lib #fig:py}
#!/usr/bin/env python3

print("this is new block")
~~~
```

We can choose the representation of this block inside the pdf output by providing `description` variable.
When there is no `description`, then this `lib` CodeBlock will be considered as a *hidden library*.
It will be included inside every script, but there will never be any indication shown inside the pdf result.
Please be aware that any code below `description` line will be neglected by the parser.
We expect the description should be enough for single paragraph.
This would remove the requirement for multiline description of a markdown code.
More verbose treatment can be done by adding `.show` class indicator.
With this indication, the script will be shown as a CodeBlock, and followed by the description.
The following CodeBlock was produced using the headings of `~~~{.script .py .lib .show file="libPy1"}`.


~~~{.script .py .lib .show file="libPy1"}
import subprocess

def sysrun(t,debug:bool=False):
    s = " ".join(t)
    res = subprocess.getoutput(s)
    if(debug):
        print(s)
        print(res)
    return res

description="This is the description of the additional `libPy1` library that will be inserted into the pdf output. Any **valid markdown syntax** can be used. The `import` statement to `libPy1` will be prepended by pubsEngine, thus removed the necessity of explicit import in any scripts below."
~~~

The class command `.md` will output a text document that translated to a markdown by pubsEngine.
In this scenario, the script should output a valid markdown document to the stdout.
We are expecting the usage of `.md` to produce some sort of table, or a dynamic paragraph.

```
~~~{.script .py .md #tbl:py caption="this is a table script"}
print("""
| as | dd |
|----|----|
| dd | dd |
Table: this is output of a python script
""")
~~~
```

The above snipplet would give us output:

~~~{.script .py .md #tbl:py caption="this is a table script"}
print("""
| as | dd |
|----|----|
| dd | dd |
Table: this is output of a python script
""")
~~~

On the otherhand, `.img` will produce an image in the document.
This scenario expects the script will run an IO and must create an image file inside directory `_build/auto` by the filename designated by `file`.
This responsibility is purely on the shoulder of the author.
The image at Figure \ref{fig:py} can be produced using:

```
~~~{.script .py .img #fig:py caption="this is a new image from script" width=400 height=300
file=pyImage}
#import subprocess
#subprocess.getoutput("wget 'https://upload.wikimedia.org/wikipedia/commons
/thumb/2/2c/Bismillah.svg/640px-Bismillah.svg.png' -O _build/auto/pyImage.png")

# we can call a function from included library above
sysrun(["wget 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c
/Bismillah.svg/640px-Bismillah.svg.png' -O _build/auto/pyImage.png"])
~~~
```

~~~{.script .py .img #fig:py caption="this is a new image from python script" width=400 height=300 file=pyImage}
sysrun(["wget 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Bismillah.svg/640px-Bismillah.svg.png' -O _build/auto/pyImage.png"])
~~~

The same rules apply to `.img .md .lib` of SHELL (`.sh`).
Under the hood, pubsEngine will run the script under `zsh`.
The library will be saved in `_build/temp/lib/sh`.
The picture at Figure \ref{fig:shImage} came from a `.sh` script.

~~~{.script .sh .img #fig:shImage caption="image from SHELL script (zsh)" width=400 height=300 file=shImage}
wget "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Bismillah_Calligraphy_37.svg/1200px-Bismillah_Calligraphy_37.svg.png" -O _build/auto/shImage.png
~~~

## Subprocess delegation

~~~{.delegate .multimarkdown #tbl:delegate}
|              |          Grouping           ||
|First Header  | Second Header | Third Header |
| ------------ | :-----------: | -----------: |
|Content       |          *Long Cell*        ||
|Content       |   **Cell**    |         Cell |
|
|New section   |     More      |         Data |
|And more      | With an escaped '\|'        ||
[Prototype table]
~~~

We can delegate the compilation of our CodeBlock to other application.
As an example, the creation of table \ref{tbl:delegate}, can be delegated to `multimarkdown` using following syntax. Please notice the use of `#tbl:delegate` for assignment of label that can be refered in the text using `\ref{tbl:delegate}`.

```
~~~{.delegate .multimarkdown #tbl:delegate}
|              |          Grouping           ||
|First Header  | Second Header | Third Header |
| ------------ | :-----------: | -----------: |
|Content       |          *Long Cell*        ||
|Content       |   **Cell**    |         Cell |
|
|New section   |     More      |         Data |
|And more      | With an escaped '\|'        ||
[Prototype table]
~~~
```

## Feynman diagram

Feynman diagram can be generated using the following syntax.
```
~~~{.feynmp caption="test feynman diagram"}
  \begin{equation}
    \begin{gathered}
      \begin{fmfgraph*}(65,50) %size 65,50
        \fmfleft{i1,i2}
        \fmfright{o1,o2}
        \fmf{fermion}{i1,v1,o1}
        \fmf{fermion}{i2,v2,o2}
        \fmf{photon}{v1,v2}
      \end{fmfgraph*}
    \end{gathered}=-i\lambda
  \end{equation}
~~~
```

~~~{.feynmp caption="test feynman diagram"}
  \begin{equation}
    \begin{gathered}
      \begin{fmfgraph*}(65,50) %size 65,50
        \fmfleft{i1,i2}
        \fmfright{o1,o2}
        \fmf{fermion}{i1,v1,o1}
        \fmf{fermion}{i2,v2,o2}
        \fmf{photon}{v1,v2}
      \end{fmfgraph*}
    \end{gathered}=-i\lambda
  \end{equation}
~~~

## Mermaid diagrams


Please make sure that Mermaid executables have already installed in `$PATH`.
pubsEngine need to call executable named `mermaid`.
Common ways to install Mermaid is:

~~~
npm install @mermaid-js/mermaid-cli
ln -sf  ~/node_modules/.bin/mmdc ~/.local/bin/mermaid
~~~
Inclusion of [Mermaid](https://github.com/hasanalrasyid/pandoc-mermaid) diagrams at Figure \ref{fig:mermaid} can be done by the following syntax:

```
~~~{.mermaid #fig:mermaid caption="new mermaid"
file=mermaidExample size=0.8}
sequenceDiagram
    participant Alice
    participant Bob
    Alice->John: Hello John, how are you?
    loop Healthcheck
        John->John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>
      prevail...
    John-->Alice: Great!
    John->Bob: How about you?
    Bob-->John: Jolly good!
~~~
```

Please be sure that the size is a relative size compared with `\linewidth`.
The size will always be in a constant aspect ratio of `800x600`.

~~~{.mermaid #fig:mermaid caption="new mermaid" file="mermaidExample" size=0.8}

sequenceDiagram
    participant Alice
    participant Bob
    Alice->John: Hello John, how are you?
    loop Healthcheck
        John->John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail...
    John-->Alice: Great!
    John->Bob: How about you?
    Bob-->John: Jolly good!
~~~

## Presentation and Poster (Beamer)

There are two CodeBlocks that can be used for beamer.
For a TextBlock, we can use `~~~{.textblock w=150pt pos=(140pt,160pt)}`.
We can include notes for beamer by `~~~{note}` CodeBlocks.

# Baker's standard one-zone model

<!-- we need figure* for make it full screen, so it must be in latex code as follows
-->

\begin{figure*}
\centering
\includegraphics{Figure/icml_numpapers.eps}
\caption{Adiabatic exponent $\Gamma_1$.
            $\Gamma_1$ is plotted as a function of
            $\lg$ internal energy $\mathrm{[erg\,g^{-1}]}$ and $\lg$
            density $\mathrm{[g\,cm^{-3}]}$.}
           \label{fig:FigGam}%
 \end{figure*}

In this section the one-zone model of \citet{DudaHart2nd},
originally used to study the Cephe\text{\"{\i}}d pulsation mechanism, will
be briefly reviewed. The resulting stability criteria will be
rewritten in terms of local state variables, local timescales and
constitutive relations.

\citet{DudaHart2nd} investigates the stability of thin layers in
self-gravitating,
spherical gas clouds with the following properties:

~~~
* hydrostatic equilibrium,
* thermal equilibrium,
* energy transport by grey radiation diffusion.
~~~

non-numbered list can be written as above, and shown as:

* hydrostatic equilibrium,
* thermal equilibrium,
* energy transport by grey radiation diffusion.

For the one-zone-model Baker obtains necessary conditions
for dynamical, secular and vibrational (or pulsational)
stability (Eqs. (34a,b,c) in Baker \citeyear{DudaHart2nd}). Using Baker's
notation:

\noindent
   and with the definitions of the *local cooling time*
   (see == [@fig:FigGam] == Fig. \ref{fig:FigGam})
   \begin{equation}
      \tau_{\mathrm{co}} = \frac{E_{\mathrm{th}}}{L_{r0}} \,,
   \end{equation}
   and the *local free-fall time*
   \begin{equation}
      \tau_{\mathrm{ff}} =
         \sqrt{ \frac{3 \pi}{32 G} \frac{4\pi r_0^3}{3 M_{\mathrm{r}}}
}\,,
   \end{equation}
   Baker's $K$ and $\sigma_0$ have the following form:
   \begin{eqnarray}
      \sigma_0 & = & \frac{\pi}{\sqrt{8}}
                     \frac{1}{ \tau_{\mathrm{ff}}} \\
      K        & = & \frac{\sqrt{32}}{\pi} \frac{1}{\delta}
                        \frac{ \tau_{\mathrm{ff}} }
                             { \tau_{\mathrm{co}} }\,;
   \end{eqnarray}
   where $E_{\mathrm{th}} \approx m (P_0/{\rho_0})$ has been used and
   \begin{equation}
   \begin{array}{l}
      \delta = - \left(
                    \frac{ \partial \ln \rho }{ \partial \ln T }
                 \right)_P \\
      e=mc^2
   \end{array}
   \end{equation}
   is a thermodynamical quantity which is of order $1$ and equal to $1$
   for nonreacting mixtures of classical perfect gases. The physical
   meaning of $\sigma_0$ and $K$ is clearly visible in the equations
   above. $\sigma_0$ represents a frequency of the order one per
   free-fall time. $K$ is proportional to the ratio of the free-fall
   time and the cooling time. Substituting into Baker's criteria, using
   thermodynamic identities and definitions of thermodynamic quantities,
   \begin{displaymath}
      \Gamma_1      = \left( \frac{ \partial \ln P}{ \partial\ln \rho}
                           \right)_{S}    \, , \;
      \chi^{}_\rho  = \left( \frac{ \partial \ln P}{ \partial\ln \rho}
                           \right)_{T}    \, , \;
      \kappa^{}_{P} = \left( \frac{ \partial \ln \kappa}{ \partial\ln P}
                           \right)_{T}
   \end{displaymath}
   \begin{displaymath}
      \nabla_{\mathrm{ad}} = \left( \frac{ \partial \ln T}
                             { \partial\ln P} \right)_{S} \, , \;
      \chi^{}_T       = \left( \frac{ \partial \ln P}
                             { \partial\ln T} \right)_{\rho} \, , \;
      \kappa^{}_{T}   = \left( \frac{ \partial \ln \kappa}
                             { \partial\ln T} \right)_{T}
   \end{displaymath}
   one obtains, after some pages of algebra, the conditions for
   *stability* given
   below:
   \begin{eqnarray}
      \frac{\pi^2}{8} \frac{1}{\tau_{\mathrm{ff}}^2}
                ( 3 \Gamma_1 - 4 )
         & > & 0 \label{ZSDynSta} \\
      \frac{\pi^2}{\tau_{\mathrm{co}}
                   \tau_{\mathrm{ff}}^2}
                   \Gamma_1 \nabla_{\mathrm{ad}}
                   \left[ \frac{ 1- 3/4 \chi^{}_\rho }{ \chi^{}_T }
                          ( \kappa^{}_T - 4 )
                        + \kappa^{}_P + 1
                   \right]
        & > & 0 \label{ZSSecSta} \\
     \frac{\pi^2}{4} \frac{3}{\tau_{ \mathrm{co} }
                              \tau_{ \mathrm{ff} }^2
                             }
         \Gamma_1^2 \, \nabla_{\mathrm{ad}} \left[
                                   4 \nabla_{\mathrm{ad}}
                                   - ( \nabla_{\mathrm{ad}} \kappa^{}_T
                                     + \kappa^{}_P
                                     )
                                   - \frac{4}{3 \Gamma_1}
                                \right]
        & > & 0   \label{ZSVibSta}
   \end{eqnarray}

   For a physical discussion of the stability criteria see \citet{DudaHart2nd} or \citet{anonymous}.

   We observe that these criteria for dynamical, secular and
   vibrational stability, respectively, can be factorized into

1. a factor containing local timescales only,
2. a factor containing only constitutive relations and
   their derivatives.
3. To make a numered list, make sure that:
    1. it stands on its own paragraph (blank line above and below the list),
    2. the number starts at first column on each line.

The first factors, depending on only timescales, are positive
by definition. The signs of the left hand sides of the
inequalities (\ref{ZSDynSta}), (\ref{ZSSecSta}) and (\ref{ZSVibSta})
therefore depend exclusively on the second factors containing
the constitutive relations. Since they depend only
on state variables, the stability criteria themselves are *functions of the thermodynamic state in the local zone*. The
one-zone stability can therefore be determined
from a simple equation of state, given for example, as a function
of density and temperature. Once the microphysics, i.e. the thermodynamics
and opacities (see Table \ref{KapSou}), are specified (in practice
by specifying a chemical composition) the one-zone stability can
be inferred if the thermodynamic state is specified.
The zone -- or in other words the layer -- will be stable or unstable in
whatever object it is imbedded as long as it satisfies the
one-zone-model assumptions. Only the specific growth rates
(depending upon the time scales) will be different for layers
in different objects.


<!--
|             |          Grouping           ||
First Header  | Second Header | Third Header |
 ------------ | :-----------: | -----------: |
Content       |          *Long Cell*        ||
Content       |   **Cell**    |         Cell |
New section   |     More      |         Data |
And more      | With an escaped '\|'         ||

Table: Simple table using default markdown table. Currently not working in two-columns environment due to [this issue](https://github.com/jgm/pandoc/issues/1023) \label{simpleTable}
-->

   We will now write down the sign (and therefore stability)
   determining parts of the left-hand sides of the inequalities
   (\ref{ZSDynSta}), (\ref{ZSSecSta}) and (\ref{ZSVibSta}) and thereby
   obtain *stability equations of state*.

   The sign determining part of inequality (\ref{ZSDynSta}) is
   $3\Gamma_1 - 4$ and it reduces to the criterion for dynamical stability
   \begin{equation}
     \Gamma_1 > \frac{4}{3}\,\cdot
   \end{equation}
   Stability of the thermodynamical equilibrium demands
   \begin{equation}
      \chi^{}_\rho > 0, \;\;  c_v > 0\, ,
   \end{equation}
   and
   \begin{equation}
      \chi^{}_T > 0
   \end{equation}
   holds for a wide range of physical situations.
   With
   \begin{eqnarray}
      \Gamma_3 - 1 = \frac{P}{\rho T} \frac{\chi^{}_T}{c_v}&>&0\\
      \Gamma_1     = \chi_\rho^{} + \chi_T^{} (\Gamma_3 -1)&>&0\\
      \nabla_{\mathrm{ad}}  = \frac{\Gamma_3 - 1}{\Gamma_1}         &>&0
   \end{eqnarray}
   we find the sign determining terms in inequalities (\ref{ZSSecSta})
   and (\ref{ZSVibSta}) respectively and obtain the following form
   of the criteria for dynamical, secular and vibrational
   *stability*, respectively:
   \begin{eqnarray}
      3 \Gamma_1 - 4 =: S_{\mathrm{dyn}}      > & 0 & \label{DynSta}  \\
      \frac{ 1- 3/4 \chi^{}_\rho }{ \chi^{}_T } ( \kappa^{}_T - 4 )
         + \kappa^{}_P + 1 =: S_{\mathrm{sec}} > & 0 & \label{SecSta} \\
      4 \nabla_{\mathrm{ad}} - (\nabla_{\mathrm{ad}} \kappa^{}_T
                             + \kappa^{}_P)
                             - \frac{4}{3 \Gamma_1} =: S_{\mathrm{vib}}
                                      > & 0\,.& \label{VibSta}
   \end{eqnarray}
   The constitutive relations are to be evaluated for the
   unperturbed thermodynamic state (say $(\rho_0, T_0)$) of the zone.
   We see that the one-zone stability of the layer depends only on
   the constitutive relations $\Gamma_1$,
   $\nabla_{\mathrm{ad}}$, $\chi_T^{},\,\chi_\rho^{}$,
   $\kappa_P^{},\,\kappa_T^{}$.
   These depend only on the unperturbed
   thermodynamical state of the layer. Therefore the above relations
   define the one-zone-stability equations of state
   $S_{\mathrm{dyn}},\,S_{\mathrm{sec}}$
   and $S_{\mathrm{vib}}$. See == [@fig:FigVibStab] == Fig. \ref{fig:FigVibStab} for a picture of
   $S_{\mathrm{vib}}$. Regions of secular instability are
   listed in Table 1.

<!-- calculate height and width of picture manually in inch, using evince -> Properties
create label for \ref{FigVibStab} using #FigVibStab
-->
![Vibrational stability equation of state $S_{\mathrm{vib}}(\lg e, \lg \rho)$. $>0$ means vibrational stability.](Figure/icml_numpapers.eps){#fig:FigVibStab width=3.43in height=2.71in}

<!--
   \begin{figure}
   \centering
      \caption{Vibrational stability equation of state
               $S_{\mathrm{vib}}(\lg e, \lg \rho)$.
               $>0$ means vibrational stability.
              }
         \label{FigVibStab}
   \end{figure}
-->

# Conclusions

1. The conditions for the stability of static, radiative
   layers in gas spheres, as described by Baker's (\citeyear{DudaHart2nd})
   standard one-zone model, can be expressed as stability
   equations of state. These stability equations of state depend
   only on the local thermodynamic state of the layer.
2. If the constitutive relations -- equations of state and
   Rosseland mean opacities -- are specified, the stability
   equations of state can be evaluated without specifying
   properties of the layer.
3. For solar composition gas the $\kappa$-mechanism is
   working in the regions of the ice and dust features
   in the opacities, the $\mathrm{H}_2$ dissociation and the
   combined H, first He ionization zone, as
   indicated by vibrational instability. These regions
   of instability are much larger in extent and degree of
   instability than the second He ionization zone
   that drives the Cephe\text{\"\i}d pulsations.



# Introduction

\latex \footnote{\url{http://www.latex-project.org/}} is a document markup
language that is particularly well suited for the publication of
mathematical and scientific articles \citep{lamport94}. \latex was written
in 1985 by Leslie Lamport who based it on the \TeX typesetting language
which itself was created by Donald E. Knuth in 1978.  In 1988 a suite of
\latex macros were developed to investigate electronic submission and
publication of AAS Journal articles \citep{1989BAAS...21..780H}.  Shortly
afterwards, Chris Biemesdefer merged these macros and more into a \latex\
2.08 style file called \aastex.  These early \aastex versions introduced
many common commands and practices that authors take for granted today.
Substantial revisions
were made by Lee Brotzman and Pierre Landau when the package was updated to
v4.0.  AASTeX v5.0, written in 1995 by Arthur Ogawa, upgraded to \latex 2e
which uses the document class in lieu of a style file.  Other improvements
to version 5 included hypertext support, landscape deluxetables and
improved figure support to facilitate electronic submission.
\aastex v5.2 was released in 2005 and introduced additional graphics
support plus new mark up to identifier astronomical objects, datasets and
facilities.

In 1996 Maxim Markevitch modified the AAS preprint style file, aaspp4.sty,
to closely emulate the very tight, two column style of a typeset
Astrophysical Journal article.  The result was emulateapj.sty.  A year
later Alexey Vikhlinin took over development and maintenance.  In 2001 he
converted emulateapj into a class file in \latex 2e and in 2003 Vikhlinin
completely rewrote emulateapj based on the APS Journal's RevTEX class.

During this time emulateapj gained growing acceptance in the astronomical
community as it filled an author need to obtain an approximate number of
manuscript pages prior to submission for cost and length estimates. The
tighter typeset also had the added advantage of saving paper when printing
out hard copies.

Even though author publication charges are no longer based on print pages
\footnote{see Section \ref{sec:pubcharge} in the Appendix for more details
about how current article costs are calculated.} the emulateapj class file
has proven to be extremely popular with AAS Journal authors.  An
analysis of submitted \latex manuscripts in 2015 revealed that sim65
either called emulateapj or have a commented emulateapj classfile call
indicating it was used at some stage of the manuscript construction.
Clearly authors want to have access to a tightly typeset version of the
article when corresponding with co-authors and for preprint submissions.

When planning the next \aastex release the popularity of emulateapj played
an important roll in the decision to drop the old base code and adopt and
modify emulateapj for \aastex v6.+ instead.  The change brings \aastex\
inline with what the majority of authors are already using while still
delivering new and improved features.  \aastex v6.0 through v6.31 were
written by Amy Hendrickson. The release dates were January 2016 (v6.0),
October 2016 (v6.1), January 2018 (v6.2), June 2019 (v6.3), and March 2010
(v6.31) respectively.

The new features in the recent releases includes:

\begin{itemize}
 \item{v6.0}
   \begin{enumerate}
      \item line numbering and watermarking,
      \item improved citations for third party data repositories and software,
      \item easier construction of matrix figures consisting of multiple
encapsulated postscript (EPS) or portable document format (PDF) files,
      \item figure set mark up for large collections of similar figures,
      \item color mark up to easily enable/disable revised text highlighting,
      \item improved url support, and
      \item numerous table options such as the ability to hide columns, column decimal alignment, automatic column math mode and numbering, plus splitting of wide tables (see Section \ref{subsec:tables} for details).
    \end{enumerate}
  \item{v6.1}
    \begin{enumerate}
      \item ORCID support for preprints,
      \item improved author, affiliation and collaboration mark up,
      \item reintroduced the old AASTeX v5.2 `\received`, `\revised`, `\accepted`, and `\published` commands plus added the new `\submitjournal` command to document which AAS Journal the manuscript was submitted to, plus
      \item new typeset style options including ` modern`.
    \end{enumerate}
  \item{v6.2}
    \begin{enumerate}
      \item A new RNAAS style option for Research Note manuscripts,
      \item Titles no longer put in all caps,
      \item No page skip between the title page and article body,
      \item re-introduce RevTeX's widetext environment for long lines in two column style formats, and
      \item upgrade to the `\doi` command.
    \end{enumerate}
  \item{v6.3}
    \begin{enumerate}
      \item New ` interactive` environment to highlight interactive figures (see Section \ref{animation}),
      \item Improved collaboration commands,
      \item New ` anonymous` style to keep the authors, affiliations and acknowledgments from showing in the compiled pdf for dual anonymous review, and
      \item Adoptions of IAU approved syntax for nominal units, see Section \ref{nominal}.
    \end{enumerate}
  \item{v6.31}
    \begin{enumerate}
      \item Fixes a bug in the ` anonymous` style for dual anonymous review.
      \item Improves line numbering with the ` linenumbers` style around equations due to the amsmath and lineno package compatibility issues.
      \item Depreciate the ` \\acknowledgment` command in favor of the ` acknowledgment` environment.
    \end{enumerate}
\end{itemize}

The rest of this article provides information and examples on how to create
your own AAS Journal manuscript with v6.31.  Special emphasis is placed on
how to use the full potential of \aastex v6+.  The next section describes
the different manuscript styles available and how they differ from past
releases.  Section \ref{sec:floats} describes table and figure placement.
Specific examples of tables, Section
\ref{subsec:tables}, and figures, Section \ref{subsec:figures}, are also
provided. A special emphasis is placed on interactive figures.
Section \ref{sec:displaymath} discusses how to display math and
incorporate equations in a manuscript while Section \ref{sec:highlight}
discuss how to use different ways to highlight revisions.  The last section,
\ref{sec:cite}, shows how recognize software and external data as first
class references in the manuscript bibliography.  An appendix is included
for additional information readers might find useful.
More documentation is embedded in the comments of this \latex file and in the online documentation at
\url{http://journals.aas.org/authors/aastex.html}.

# Manuscript styles

The default style in \aastex v6.31 is a tight single column style, e.g. 10
point font, single spaced.  The single column style is very useful for
article with wide equations. It is also the easiest to style to work with
since figures and tables, see Section \ref{sec:floats}, will span the
entire page, reducing the need for address float sizing.

To invoke a two column style similar to the what is produced in
the published PDF copy use

~~~
\documentclass[twocolumn]{aastex631}
~~~

Note that in the two column style figures and tables will only
span one column unless specifically ordered across both with the ``*`` flag,
e.g.

~~~
\begin{figure*}      ... \end{figure*},
\begin{table*}       ... \end{table*},
\begin{deluxetable*} ... \end{deluxetable*}.
~~~

This option is ignored in the onecolumn style.

Some other style options are outlined in the commented sections of this
article.  Any combination of style options can be used.

Two style options that are needed to fully use the new revision tracking
feature, see Section \ref{sec:highlight}, are `linenumbers` which
uses the lineno style file to number each article line in the left margin and
`trackchanges` which controls the revision and commenting highlight
output.

There is also a new ` modern` option that uses a Daniel
Foreman-Mackey and David Hogg design to produce stylish, single column
output that has wider left and right margins. It is designed to have fewer
words per line to improve reader retention. It also looks better on devices
with smaller displays such as smart phones.

The ` anonymous` option will prevent the author and affiliations
from being shown in the compiled pdf copy. This option allows the author
to keep this critical information in the latex file but prevent the reviewer
from seeing it during peer review if dual anonymous review (DAR) is requested.
Likewise, acknowledgments can also be hidden if placed in the new
`\begin{acknowledgments} ... \end{acknowledgments`
environment. The use of this option is highly recommended for PSJ submissions.
Advice for anonymizing your manuscript for DAR is provided at
\url{https://journals.aas.org/manuscript-preparation/#dar}.

# Floats

Floats are non-text items that generally can not be split over a page.
They also have captions and can be numbered for reference.  Primarily these
are figures and tables but authors can define their own. \latex tries to
place a float where indicated in the manuscript but will move it later if
there is not enough room at that location, hence the term ``float``.

Authors are encouraged to embed their tables and figures within the text as
they are mentioned.  Please do not place the figures and text at the end of
the article as was the old practice.  Editors and the vast majority of
referees find it much easier to read a manuscript with embedded figures and
tables.

Depending on the number of floats and the particular amount of text and
equations present in a manuscript the ultimate location of any specific
float can be hard to predict prior to compilation. It is recommended that
authors textbf{not} spend significant time trying to get float placement
perfect for peer review.  The AAS Journal's publisher has sophisticated
typesetting software that will produce the optimal layout during
production.

Note that authors of Research Notes are only allowed one float, either one
table or one figure.

For authors that do want to take the time to optimize the locations of
their floats there are some techniques that can be used.  The simplest
solution is to placing a float earlier in the text to get the position
right but this option will break down if the manuscript is altered.
A better method is to force \latex to place a
float in a general area with the use of the optional `[placement specifier]`
parameter for figures and tables. This parameter goes after
` \begin{figure}`, ` \begin{table}`, and
` \begin{deluxetable}`.  The main arguments the specifier takes
are ``h``, ``t``, ``b``, and ``!``.  These tell \latex to place the float
\underline{h}ere (or as close as possible to this location as possible), at
the \underline{t}op of the page, and at the \underline{b}ottom of the page.
The last argument, `!`, tells \latex to override its internal method of
calculating the float position.  A sequence of rules can be created by
using multiple arguments.  For example, ` \begin{figure[htb!]}`
tells \latex to try the current location first, then the top of the page
and finally the bottom of the page without regard to what it thinks the
proper position should be.  Many of the tables and figures in this article
use a placement specifier to set their positions.

Note that the \latex ` tabular` environment is not a float.  Only
when a ` tabular` is surrounded by `\begin{table} ...\end{table}` is it a true float and the rules and suggestions
above apply.

In AASTeX v6.31 all deluxetables are float tables and thus if they are
longer than a page will spill off the bottom. Long deluxetables should
begin with the `\startlongtable` command. This initiates a
longtable environment.  Authors might have to use `\clearpage` to
isolate a long table or optimally place it within the surrounding text.

## Tables

Tables can be constructed with \latex's standard table environment or the
\aastex's deluxetable environment. The deluxetable construct handles long
tables better but has a larger overhead due to the greater amount of
defined mark up used set up and manipulate the table structure.  The choice
of which to use is up to the author.  Examples of both environments are
used in this manuscript.

Tables longer than 200 data lines and complex tables should only have a
short example table with the full data set available in the machine
readable format.  The machine readable table will be available in the HTML
version of the article with just a short example in the PDF. Authors are
required to indicate in the table comments that the data in machine
readable format in the full article.
Authors are encouraged to create their own machine
readable tables using the online tool at
\url{http://authortools.aas.org/MRT/upload.html}.

\aastex v6 introduced five new table features that were designed to make
table construction easier and the resulting display better for AAS Journal
authors.  The items are:

1. Declaring math mode in specific columns,
2. Column decimal alignment,
3. Automatic column header numbering,
4. Hiding columns, and
5. Splitting wide tables into two or three parts.

Full details on how to create each type are given in the following
sections. Additional details are available in the AASTeX
guidelines at \url{http://journals.aas.org/authors/aastex.html}

### Column math mode

Both the \latex tabular and \aastex deluxetable require an argument to
define the alignment and number of columns.  The most common values are
``c``, ``l`` and ``r`` for \underline{c}enter, \underline{l}eft, and
\underline{r}ight justification.  If these values are capitalized, e.g.
``C``, ``L``, or ``R``, then that specific column will automatically be in math
mode meaning that \$s are not required.  Note that having embedded dollar
signs in the table does not affect the output.

### Decimal alignment

Aligning a column by the decimal point can be difficult with only center,
left, and right justification options.  It is possible to use phantom calls
in the data, e.g. `\phn`, to align columns by hand but this can
be tedious in long or complex tables.  To address this \aastex introduces
the `\decimals` command and a new column justification option,
`D`, to align data in that column on the decimal.  In deluxetable the
`\decimals` command is invoked before the `\startdata`
call but can be anywhere in \latex's tabular environment.

Two other important thing to note when using decimal alignment is that each
decimal column \textit{must end with a space before the ampersand}, e.g.
``&&`` is not allowed.  Empty decimal columns are indicated with a decimal,
e.g. ``.``.  Do not use deluxetable's `\nodata` command.

The ``D`` alignment token works by splitting the column into two parts on the
decimal.  While this is invisible to the user one must be aware of how it
works so that the headers are accounted for correctly.  All decimal column
headers need to span two columns to get the alignment correct. This can be
done with a multicolumn call, e.g `\multicolumn2c{}` or
`\multicolumn{2}{c}{}`, or use the new
`\twocolhead{}` command in deluxetable.  Since \latex is
splitting these columns into two it is important to get the table width
right so that they appear joined on the page.  You may have to run the
\latex compiler twice to get it right.

### Automatic column header numbering

The command `\colnumbers` can be included to automatically number
each column as the last row in the header. Per the AAS Journal table format
standards, each column index numbers will be surrounded by parentheses. In
a \latex tabular environment the `\colnumbers` should be invoked
at the location where the author wants the numbers to appear, e.g. after
the last line of specified table header rows. In deluxetable this command
has to come before `\startdata`.  `\colnumbers` will
not increment for columns hidden by the ``h`` command, see Section
\ref{subsubsec:hide}.

Note that when using decimal alignment in a table the command
`\decimalcolnumbers` must be used instead of
`\colnumbers` and `\decimals`.

### Hiding columns

Entire columns can be \underline{h}idden from display simply by changing
the specified column identifier to ``h``.  In the \latex tabular environment
this column identifier conceals the entire column including the header
columns.   In \aastex's deluxetables the header row is specifically
declared with the `\tablehead` call and each header column is
marked with `\colhead` call.  In order to make a specific header
disappear with the ``h`` column identifier in deluxetable use
`\nocolhead` instead to suppress that particular column header.

Authors can use this option in many different ways.  Since column data can
be easily suppressed authors can include extra information and hid it
based on the comments of co-authors or referees.  For wide tables that will
have a machine readable version, authors could put all the information in
the \latex table but use this option to hid as many columns as needed until
it fits on a page. This concealed column table would serve as the
example table for the full machine readable version.  Regardless of how
columns are obscured, authors are responsible for removing any unneeded
column data or alerting the editorial office about how to treat these
columns during production for the final typeset article.

Table \ref{tab:messier} provides some basic information about the first ten
Messier Objects and illustrates how many of these new features can be used
together.  It has automatic column numbering, decimal alignment of the
distances, and one concealed column.  The Common name column
is the third in the \latex deluxetable but does not appear when the article
is compiled. This hidden column can be shown simply by changing the ``h`` in
the column identifier preamble to another valid value.  This table also
uses `\tablenum` to renumber the table because a \latex tabular
table was inserted before it.

~~~
\begin{deluxetable*}{cchlDlc}
\tablenum{1}
\tablecaption{Fun facts about the first 10 messier objects\label{tab:messier}}
\tablewidth{0pt}
\tablehead{
\colhead{Messier} & \colhead{NGC/IC} & \nocolhead{Common} & \colhead{Object} &
\multicolumn2c{Distance} & \colhead{} & \colhead{V} \\
\colhead{Number} & \colhead{Number} & \nocolhead{Name} & \colhead{Type} &
\multicolumn2c{(kpc)} & \colhead{Constellation} & \colhead{(mag)}
}
\decimalcolnumbers
\startdata
M1 & NGC 1952 & Crab Nebula & Supernova remnant & 2 & Taurus & 8.4 \\
M2 & NGC 7089 & Messier 2 & Cluster, globular & 11.5 & Aquarius & 6.3 \\
M3 & NGC 5272 & Messier 3 & Cluster, globular & 10.4 & Canes Venatici &  6.2 \\
M4 & NGC 6121 & Messier 4 & Cluster, globular & 2.2 & Scorpius & 5.9 \\
M5 & NGC 5904 & Messier 5 & Cluster, globular & 24.5 & Serpens & 5.9 \\
M6 & NGC 6405 & Butterfly Cluster & Cluster, open & 0.31 & Scorpius & 4.2 \\
M7 & NGC 6475 & Ptolemy Cluster & Cluster, open & 0.3 & Scorpius & 3.3 \\
M8 & NGC 6523 & Lagoon Nebula & Nebula with cluster & 1.25 & Sagittarius & 6.0 \\
M9 & NGC 6333 & Messier 9 & Cluster, globular & 7.91 & Ophiuchus & 8.4 \\
M10 & NGC 6254 & Messier 10 & Cluster, globular & 4.42 & Ophiuchus & 6.4 \\
\enddata
\tablecomments{This table ``hides`` the third column in the \latex when compiled.
The Distance is also centered on the decimals.  Note that when using decimal
alignment you need to include the `\decimals` command before
`startdata` and all of the values in that column have to have a
space before the next ampersand.}
end{deluxetable*}
~~~

### Splitting a table into multiple horizontal components

Since the AAS Journals are now all electronic with no print version there is
no reason why tables can not be as wide as authors need them to be.
However, there are some artificial limitations based on the width of a
print page.  The old way around this limitation was to rotate into
landscape mode and use the smallest available table font
sizes, e.g. `\tablewidth`, to get the table to fit.
Unfortunately, this was not always enough but now along with the hide column
option outlined in Section \ref{subsubsec:hide} there is a new way to break
a table into two or three components so that it flows down a page by
invoking a new table type, splittabular or splitdeluxetable. Within these
tables a new ``B`` column separator is introduced.  Much like the vertical
bar option, ``$\vert$``, that produces a vertical table lines
the new ``B`` separator indicates where to \underline{B}reak
a table.  Up to two ``B``s may be included.

Table 2 % \ref{tab:deluxesplit} this freaks it out when it is used!
shows how to split a wide deluxetable into three parts with
the `\splitdeluxetable` command.  The `\colnumbers`
option is on to show how the automatic column numbering carries through the
second table component, see Section \ref{subsubsec:autonumber}.

\begin{splitdeluxetable*}{lccccBcccccBcccc}
\tabletypesize{\scriptsize}
\tablewidth{0pt}
\tablenum{5}
\tablecaption{Measurements of Emission Lines: two breaks \label{tab:deluxesplit}}
\tablehead{
\colhead{Model} & \colhead{Component}& \colhead{Shift} & \colhead{FWHM} &
\multicolumn{10}{c}{Flux} \\
\colhead{} & \colhead{} & \colhead{($\rm
km~s^{-1}$)}& \colhead{($\rm km~s^{-1}$)} & \multicolumn{10}{c}{($\rm
10^{-17}~erg~s^{-1}~cm^{-2}$)} \\
\cline{5-14}
\colhead{} & \colhead{} &
\colhead{} & \colhead{} & \colhead{Ly$\alpha$} & \colhead{N\,{\footnotesize
V}} & \colhead{Si\,{\footnotesize IV}} & \colhead{C\,{\footnotesize IV}} &
\colhead{Mg\,{\footnotesize II}} & \colhead{H$\gamma$} & \colhead{H$\beta$}
& \colhead{H$\alpha$} & \colhead{He\,{\footnotesize I}} &
\colhead{Pa$\gamma$}
}
\colnumbers
\startdata
{       }& BELs& -97.13 &    9117$\pm      38$&    1033$\pm      33$&$< 35$&$<     166$&     637$\pm      31$&    1951$\pm      26$&     991$\pm 30$&    3502$\pm      42$&   20285$\pm      80$&    2025$\pm     116$& 1289$\pm     107$\\
{Model 1}& IELs& -4049.123 & 1974$\pm      22$&    2495$\pm      30$&$<     42$&$<     109$&     995$\pm 186$&      83$\pm      30$&      75$\pm      23$&     130$\pm      25$& 357$\pm      94$&     194$\pm      64$& 36$\pm      23$\\
{       }& NELs& \nodata &     641$\pm       4$&     449$\pm 23$&$<      6$&$<       9$&       --            &     275$\pm      18$& 150$\pm      11$&     313$\pm      12$&     958$\pm      43$&     318$\pm 34$& 151$\pm       17$\\
\hline
{       }& BELs& -85 &    8991$\pm      41$& 988$\pm      29$&$<     24$&$<     173$&     623$\pm      28$&    1945$\pm 29$&     989$\pm      27$&    3498$\pm      37$&   20288$\pm      73$& 2047$\pm     143$& 1376$\pm     167$\\
{Model 2}& IELs& -51000 &    2025$\pm      26$& 2494$\pm      32$&$<     37$&$<     124$&    1005$\pm     190$&      72$\pm 28$&      72$\pm      21$&     113$\pm      18$&     271$\pm      85$& 205$\pm      72$& 34$\pm      21$\\
{       }& NELs& 52 &     637$\pm      10$&     477$\pm 17$&$<      4$&$<       8$&       --            &     278$\pm      17$& 153$\pm      10$&     317$\pm      15$&     969$\pm      40$&     325$\pm 37$&
     147$\pm       22$\\
\enddata
\tablecomments{This is an example of how to split a deluxetable. You can
split any table with this command into two or three parts.  The location of
the split is given by the author based on the placement of the ``B``
indicators in the column identifier preamble.  For more information please
look at the new \aastex instructions.}
\end{splitdeluxetable*}

## Figures

%% The "ht!" tells LaTeX to put the figure "here" first, at the "top" next
%% and to override the normal way of calculating a float position
\begin{figure}[ht!]
\plotone{cost.pdf}
\caption{The subscription (squares) and author publication (asterisks)
costs from 1991 to 2013. Subscription cost are on the left Y axis while
the author costs are on the right Y axis. All numbers in US dollars and
adjusted for inflation. The author charges also account for the change
from page charges to digital quanta in April 2011.  \label{fig:general}}
\end{figure}

Authors can include a wide number of different graphics with their articles
but encapsulated postscript (EPS) or portable document format (PDF) are
encouraged. These range from general figures all authors are familiar with
to new enhanced graphics that can only be fully experienced in HTML.  The
later include figure sets, animations and interactive figures.  All
enhanced graphics require a static two dimensional representation in the
manuscript to serve as the example for the reader. All figures should
include detailed and descriptive captions.  These captions are absolutely
critical for readers for whom the enhanced figure is inaccessible either
due to a disability or offline access.  This portion of the article
provides examples for setting up all these types in with the latest version
of \aastex.

## General figures

\aastex has a `\plotone` command to display a figure consisting
of one EPS/PDF file.  Figure \ref{fig:general} is an example which shows
the approximate changes in the subscription costs and author publication
charges from 1991 to 2013 in the AAS Journals.  For a general figure
consisting of two EPS/PDF files the `\plottwo` command can be
used to position the two image files side by side.

Both `\plotone` and `\plottwo` take a
`\caption` and an optional `\figurenum` command to
specify the figure number\footnote{It is better to not use
`\figurenum` and let \latex auto-increment all the figures. If you
do use this command you need to mark all of them accordingly.}.  Each is
based on the ` graphicx` package command,
`\includegraphics`.  Authors are welcome to use
`\includegraphics` along with its optional arguments that control
the height, width, scale, and position angle of a file within the figure.
More information on the full usage of `\includegraphics` can be
found at \break
\url{https://en.wikibooks.org/wiki/LaTeX/Importing\_Graphics\#Including\_graphics}.

## Grid figures

Including more than two EPS/PDF files in a single figure call can be tricky to
easily format.  To make the process easier for authors \aastex v6 offers
`\gridline` which allows any number of individual EPS/PDF file
calls within a single figure.  Each file cited in a `\gridline`
will be displayed in a row.  By adding more `\gridline` calls an
author can easily construct a matrix X by Y individual files as a
single general figure.

For each `\gridline` command a EPS/PDF file is called by one of
four different commands.  These are `\fig`,
`\rightfig`, `\leftfig`, and `\boxedfig`.
The first file call specifies no image position justification while the
next two will right and left justify the image, respectively.  The
`\boxedfig` is similar to `\fig` except that a box is
drawn around the figure file when displayed. Each of these commands takes
three arguments.  The first is the file name.  The second is the width that
file should be displayed at.  While any natural \latex unit is allowed, it
is recommended that author use fractional units with the
`\textwidth`.  The last argument is text for a subcaption.

Figure \ref{fig:pyramid} shows an inverted pyramid of individual
figure constructed with six individual EPS files using the
`\gridline` option.

\begin{figure*}
\gridline{\fig{V2491_Cyg.pdf}{0.3\textwidth}{(a)}
          \fig{HV_Cet.pdf}{0.3\textwidth}{(b)}
          \fig{LMC_2009.pdf}{0.3\textwidth}{(c)}
          }
\gridline{\fig{RS_Oph.pdf}{0.3\textwidth}{(d)}
          \fig{U_Sco.pdf}{0.3\textwidth}{(e)}
          }
\gridline{\fig{KT_Eri.pdf}{0.3\textwidth}{(f)}}
\caption{Inverted pyramid figure of six individual files. The nova are
(a) V2491 Cyg, (b) HV Cet, (c) LMC 2009, (d) RS Oph, (e) U Sco, and (f)
KT Eri. These individual figures are taken from \citet{2011ApJS..197...31S}.
\label{fig:pyramid}}
\end{figure*}

## Enhanced graphics

Enhanced graphics have an example figure to serve as an example for the
reader and the full graphical item available in the published HTML article.
This includes Figure sets, animations, and interactive figures. The
Astronomy Image Explorer (\url{http://www.astroexplorer.org/}) provides
access to all the figures published in the AAS Journals since they offered
an electronic version which was in the mid 1990s. You can filter image
searches by specific terms, year, journal, or type. The type filter is
particularly useful for finding all published enhanced graphics. As of
March 2021 there are over 4000 videos, 1300 figure sets, and 100 interactive
figures. The next sections describe how to include these types of graphics
in your own manuscripts.

### Figure sets

The grid commands given above works great for a limited set of individual
figure files but what do you do if you have many 10s or 100s or even 1000s of
individual figure files? Figure sets represents a virtual flip book of a
large group of similar style figures.  The derived PDF article will only
shows an example figure while the enhanced content is available in the
figure set in the HTML edition.  The advantage of a figure set gives the
reader the ability to easily sort through a large collection to find
individual component figures.  The advantage to the author is that grouping
similar figures into a figure set can result in significant cost savings in
terms of reduced publication charges, see Appendix B. All of the figure set
components, along with their html framework, are also available to the reader
for download in a single .tar.gz package.

Special \latex mark up is required to create a figure set.  Prior to
\aastex v6 the underlying mark up commands had to be inserted by hand
but is now included.  Note that when an article with figure set is compiled
in \latex none of the component figures are shown and a floating Figure
Set caption will appear in the resulting PDF.

\figsetstart
\figsetnum{4}
\figsettitle{Swift X-ray light curves}

\figsetgrpstart
\figsetgrpnum{1.1}
\figsetgrptitle{KT Eri}
\figsetplot{KT_Eri.pdf}
\figsetgrpnote{The Swift/XRT X-ray light curve for the first year after
outburst of KT Eri.}
\figsetgrpend

\figsetgrpstart
\figsetgrpnum{1.2}
\figsetgrptitle{RS Oph}
\figsetplot{RS_Oph.pdf}
\figsetgrpnote{The Swift/XRT X-ray light curve for the first year after
outburst of RS Oph.}
\figsetgrpend

\figsetgrpstart
\figsetgrpnum{1.3}
\figsetgrptitle{U Sco}
\figsetplot{U_Sco.pdf}
\figsetgrpnote{The Swift/XRT X-ray light curve for the first year after
outburst of U Sco.}
\figsetgrpend

\figsetgrpstart
\figsetgrpnum{1.4}
\figsetgrptitle{V2491 Cyg}
\figsetplot{V2491_Cyg.pdf}
\figsetgrpnote{The Swift/XRT X-ray light curve for the first year after
outburst of V2491 Cyg.}
\figsetgrpend

\figsetgrpstart
\figsetgrpnum{1.5}
\figsetgrptitle{Nova LMC 2009}
\figsetplot{LMC_2009.pdf}
\figsetgrpnote{The Swift/XRT X-ray light curve for the first year after
outburst of nova LMC 2009.}
\figsetgrpend

\figsetgrpstart
\figsetgrpnum{1.6}
\figsetgrptitle{HV Cet}
\figsetplot{HV_Cet.pdf}
\figsetgrpnote{The Swift/XRT X-ray light curve for the first year after
outburst of HV Cet.}
\figsetgrpend

\figsetend

\begin{figure}
\plotone{KT_Eri.pdf}
\caption{The Swift/XRT X-ray light curve for the first year after
outburst of the suspected recurrent nova KT Eri. At a maximum count rate of
328 ct/s, KT Eri was the brightest nova in X-rays observed to date. All
the component figures (6) are available in the Figure Set. Note that
these components that are {\bf not} shown in the compiled pdf. The figure
set consists of the same figures as shown in Figure \ref{fig:pyramid}.
The example figure shown for figure sets can be one component or many.
\label{fig:fig4}}
\end{figure}

Authors are encouraged to use an online tool at
\url{http://authortools.aas.org/FIGSETS/make-figset.html} to generate their
own specific figure set mark up to incorporate into their \latex articles.

### Animations

Authors may, and are in fact encouraged, to include animations in their
manuscripts. The video will stream inline with the published article and
also be available for download.  When writing the manuscript, a stand alone
figure is necessary to serve as an example for the reader.  Ideally, this
is a single still frame from the animation but in some case the animation
may only represent a small portion of the example figure, say one many
panels as shown in Figure \ref{fig:video}. Regardless, it is very
important that the author provide descriptive text in the figure caption
including start and stop times and the video duration. Authors should
review the AAS animation guidelines in the graphics guide at
\url{https://journals.aas.org/graphics-guide/#animations}.

\begin{figure}
\begin{interactive}{animation}{movie.mp4}
\plotone{f4.pdf}
\end{interactive}
\caption{Figure 1 from \citet{2018ApJ...868L..33L}. AIA 171\AA (a,b),
AIA 131\AA (c), and AIA 304\AA images are shown. The red rectangle
in (a) shows the field of view of the other panels. An animation of
panels (b-d) is available. It covers 8 hours of observing beginning
at 01:00 UT on 2012 January 19. The video duration is 20 seconds.
\label{fig:video}}
\end{figure}

Animations and interactive figures (Section \ref{sec:interactive}) should
use the `\begin{interactive}` environment in the figure call. This
environment
places a blue border around the figure to indicate that the figure is
enhanced in the published HTML article. The
command also serves to alert the publisher what files are used to generate
the dynamic HTML content. `\interactive` takes two arguments. The
first details the type and currently only three are allowed. The types are
` js` for generic javascript interactive figures,
` animation` for inline videos, and
` timeseries` for interactive light curves produced
by astropy \citet{2013A&A...558A..33A}\footnote{To be release in the
summer of 2019}. If these types are not provide the compiler will issue an
error and quit. The second argument is the file that produces the enhanced
feature in the HTML article.

### Interactive figures

Interactive figures give the reader the ability to manipulate the
information contained in an image which can add clarity or help further the
author's narrative.  These figures consist of two parts, a static
representative figure for the manuscript and the dynamic javascript plus
HTML framework that allows for interactive control.

An example of an interactive figure is a 3D model.
The underlying figure is a X3D file while x3dom.js is the javascript driver
that displays it. An author created interface is added via a html wrapper.
The first 3D model published by the AAS Journals using this technique was
\citet{2014ApJ...793..127V}.

Figure \ref{fig:interactive} provides an interactive example which can be
run locally to demonstrate how a simple javascript plus html interface
allows a reader to switch between figures. The necessary files for this
particular interactive figure are in the ` interactive.tar.gz`
file included with this package. Unpack the file and point the browser to
the local html file. In this case, the javascript that runs the interactive
buttons is embedded in the html file but it could just as easily be calls
to external javascript libraries. Ideally, the javascript should be
included with the submitted package of interactive files to minimize
external dependencies within the published article.

\begin{figure}
\begin{interactive}{js}{interactive.tar.gz}
\plotone{f5.pdf}
\end{interactive}
\caption{Figure 4 from \citet{2018AJ....156...82C}. \emph{Upper panel}: the
cumulative median observing time to measure the $3\sigma$ RV masses of TESS
planets as a function of host star spectral type and up to $10^3$ hours.
The \emph{dashed blue curves} represent the results from the optical
spectrograph whereas the \emph{solid red curves} represent the near-IR
spectrograph. \emph{Lower panel}: the time derivative of the cumulative
observing time curves used to indicate the RV planet detection efficiency.
The \emph{horizontal dashed line} highlights the value of the detection
efficiency at 20 hours per detection.  Note that unlike the lower panels,
the upper panels do not share a common ordinate due to the differing number
of planet detections around stars in each spectral type bin. The
interactive version has two buttons that allows one to turn the optical and
NIR layers. \label{fig:interactive}}
\end{figure}

Authors should consult the online tutorials at
\url{https://journals.aas.org/graphics-guide/#interactive_figures}
for more information on what is currently supported and links to
tutorials and examples.

# Displaying mathematics

The most common mathematical symbols and formulas are in the amsmath
package. \aastex requires this package so there is no need to
specifically call for it in the document preamble.  Most modern \latex\
distributions already contain this package.  If you do not have this
package or the other required packages, revtex4-1, latexsym, graphicx,
amssymb, longtable, and epsf, they can be obtained from
\url{http://www.ctan.org}

Mathematics can be displayed either within the text, e.g. $E = mc^2$, or
separate from in an equation.  In order to be properly rendered, all inline
math text has to be declared by surrounding the math by dollar signs (\$).

A complex equation example with inline math as part of the explanation
follows.

\begin{equation}
\bar v(p_2,\sigma_2)P_{-\tau}\hat a_1\hat a_2\cdots
\hat a_nu(p_1,\sigma_1) ,
\end{equation}
where $p$ and $\sigma$ label the initial $e^{\pm}$ four-momenta
and helicities $(\sigma = \pm 1)$, $\hat a_i=a^\mu_i\gamma_\nu$
and $P_\tau=\frac{1}{2}(1+\tau\gamma_5)$ is a chirality projection
operator $(\tau = \pm1)$.  This produces a single line formula.  \latex will
auto-number this and any subsequent equations.  If no number is desired then
the ` equation` call should be replaced with ` displaymath`.

\latex can also handle a a multi-line equation.  Use ` eqnarray`
for more than one line and end each line with a
\textbackslash\textbackslash.  Each line will be numbered unless the
\textbackslash\textbackslash is preceded by a `\nonumber`
command.  Alignment points can be added with ampersands (\&).  There should be
two ampersands per line. In the examples they are centered on the equal
symbol.
\begin{eqnarray}
\gamma^\mu  & = &
 \left(
\begin{array}{cc}
0 & \sigma^\mu_+ \\
\sigma^\mu_- & 0
\end{array}     \right) ,
 \gamma^5= \left(
\begin{array}{cc}
-1 &   0\\
0 &   1
\end{array}     \right)  , \\
\sigma^\mu_{\pm}  & = &   ({\bf 1} ,\pm \sigma) ,
\end{eqnarray}

\begin{eqnarray}
\hat a & = & \left(
\begin{array}{cc}
0 & (\hat a)_+\\
(\hat a)_- & 0
\end{array}\right), \nonumber \\
(\hat a)_\pm & = & a_\mu\sigma^\mu_\pm
\end{eqnarray}

<!--
%% Putting eqnarrays or equations inside the mathletters environment groups
%% the enclosed equations by letter. For instance, the eqnarray below, instead
%% of being numbered, say, (4) and (5), would be numbered (4a) and (4b).
%% LaTeX the paper and look at the output to see the results.
-->

# Revision tracking and color highlighting

Authors sometimes use color to highlight changes to their manuscript in
response to editor and referee comments.  In \aastex new commands
have been introduced to make this easier and formalize the process.

The first method is through a new set of editing mark up commands that
specifically identify what has been changed.  These commands are
`\added{<text>}`, `\deleted{<text>}`, and
`\replaced{<old text>\`{<replaced text>\}}. To activate these
commands the ` trackchanges` option must be used in the
`\documentclass` call.  When compiled this will produce the
marked text in red.  The `\explain{<text>}` can be used to add
text to provide information to the reader describing the change.  Its
output is purple italic font. To see how `\added{<important added info>}`, `\deleted{<this can be deleted text>}`,
`\replaced{<old data>}{<replaced data>}` and
`\explain{<text explaining the change>}` commands will produce
\added{important added information}\deleted{, deleted text, and }
\replaced{old data}{and replaced data,} toggle between versions compiled with
and without the ` \trackchanges` option.\explain{text explaining
the change}

A summary list of all these tracking commands can be produced at the end of
the article by adding the `\listofchanges` just before the
`\end{document}` call.  The page number for each change will be
provided. If the ` linenumbers` option is also included in the
documentclass call then not only will all the lines in the article be
numbered for handy reference but the summary list will also include the
line number for each change.

The second method does not have the ability to highlight the specific
nature of the changes but does allow the author to document changes over
multiple revisions.  The commands are `\edit1{<text>}`,
`\edit2{<text>}` and `\edit3{<text>}` and they
produce `<text>` that is highlighted in bold, bold+italic and
bold+underline, respectively.  Authors should use the first command to
\edit1{indicated which text has been changed from the first revision.}  The
second command is to highlight \edit2{new or modified text from a second
revision}.  If a third revision is needed then the last command should be used
\edit3{to show this changed text}.  Since over 90\% of all manuscripts are
accepted after the 3rd revision these commands make it easy to identify
what text has been added and when.  Once the article is accepted all the
highlight color can be turned off simply by adding the
`\turnoffediting` command in the preamble. Likewise, the new commands
`\turnoffeditone`, `\turnoffedittwo`, and
`\turnoffeditthree` can be used to only turn off the
`\edit1{<text>}`, `\edit2{<text>}` and
`\edit3{<text>}`, respectively.

Similar to marking editing changes with the `\edit` options there
are also the `\authorcomments1{<text>}`,
`\authorcomments2{<text>}` and
`\authorcomments3{<text>}` commands.  These produce the same
bold red, italic blue and underlined purple text but when the
`\turnoffediting` command is present the `<text>`
material does not appear in the manuscript.  Authors can use these commands
to mark up text that they are not sure should appear in the final
manuscript or as a way to communicate comments between co-authors when
writing the article.

# Software and third party data repository citations

The AAS Journals would like to encourage authors to change software and
third party data repository references from the current standard of a
footnote to a first class citation in the bibliography.  As a bibliographic
citation these important references will be more easily captured and credit
will be given to the appropriate people.

The first step to making this happen is to have the data or software in
a long term repository that has made these items available via a persistent
identifier like a Digital Object Identifier (DOI).  A list of repositories
that satisfy this criteria plus each one's pros and cons are given at \break
\url{https://github.com/AASJournals/Tutorials/tree/master/Repositories}.

In the bibliography the format for data or code follows this format:

\noindent author year, title, version, publisher, prefix:identifier

\citet{2015ApJ...805...23C} provides a example of how the citation in the
article references the external code at
\doi{10.5281/zenodo.15991}.  Unfortunately, bibtex does
not have specific bibtex entries for these types of references so the
``@misc`` type should be used.  The Repository tutorial explains how to
code the ``@misc`` type correctly.  The most recent aasjournal.bst file,
available with \aastex v6, will output bibtex ``@misc`` type properly.

<!--
%% IMPORTANT! The old "\acknowledgment" command has be depreciated. It was
%% not robust enough to handle our new dual anonymous review requirements and
%% thus been replaced with the acknowledgment environment. If you try to
%% compile with \acknowledgment you will get an error print to the screen
%% and in the compiled pdf.
-->

<!--
%% To help institutions obtain information on the effectiveness of their
%% telescopes the AAS Journals has created a group of keywords for telescope
%% facilities.
%
%% Following the acknowledgments section, use the following syntax and the
%% \facility{} or \facilities{} macros to list the keywords of facilities used
%% in the research for the paper.  Each keyword is check against the master
%% list during copy editing.  Individual instruments can be provided in
%% parentheses, after the keyword, but they are not verified.
-->

<!--
%% Similar to \facility{}, there is the optional \software command to allow
%% authors a place to specify which programs were used during the creation of
%% the manuscript. Authors should list each code and include either a
%% citation or url to the code inside ()s when available.
-->
\software{astropy \citep{2013A&A...558A..33A,2018AJ....156..123A}, Cloudy \citep{2013RMxAA..49..137F}, Source Extractor \citep{1996A&AS..117..393B}}

<!--
%% Appendix material should be preceded with a single \appendix command.
%% There should be a \section command for each appendix. Mark appendix
%% subsections with the same markup you use in the main body of the paper.

%% Each Appendix (indicated with \section) will be lettered A, B, C, etc.
%% The equation counter will reset when it encounters the \appendix
%% command and will number appendix equations (A1), (A2), etc. The
%% Figure and Table counter will not reset.
-->
