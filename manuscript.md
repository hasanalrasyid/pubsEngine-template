---
title: "Paperlighter Template Implementation Example"
author:
  - number: 1
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
processDate:
  received: "March 11, 2022"
  accepted: "April 11, 2022"
linkDir:
  - Figure
  - Output
appendix:
  - appendix/1
  - appendix/2
abstractTex:
  \abstract{To investigate the physical nature of the 'nuc\-leated instability' of
  proto giant planets, the stability of layers in static, radiative gas spheres is analysed on the basis of Baker's standard one-zone model.}
  {To investigate the physical nature of the 'nuc\-leated instability' of
  proto giant planets, the stability of layers in static, radiative gas spheres is analysed on the basis of Baker's standard one-zone model.}
  {It is shown that stability depends only upon the equations of state, the opacities and the local thermodynamic state in the layer. Stability and instability can therefore be expressed in the form of stability equations of state which are universal for a given composition.}
  {The stability equations of state are calculated for solar composition and are displayed in the domain $-14 \leq \lg \rho / \mathrm{[g\, cm^{-3}]} \leq 0 $, $ 8.8 \leq \lg e / \mathrm{[erg\, g^{-1}]} \leq 17.7$. These displays may be used to determine the one-zone stability of layers in stellar or planetary structure models by directly reading off the value of the stability equations for the thermodynamic state of these layers, specified  by state quantities as density $\rho$, temperature $T$ or specific internal energy $e$. Regions of instability in the $(\rho,e)$-plane are described and related to the underlying microphysical processes.}
  {Vibrational instability is found to be a common phenomenon at temperatures lower than the second He ionisation zone. The $\kappa$-mechanism is widespread under 'cool' conditions.}
keywords: giant planet formation -- $\kappa$-mechanism -- stability of gas spheres
acknowledgements:
      Part of this work was supported by the German
      *Deutsche Forschungsgemeinschaft, DFG* project
      number Ts 17/2--1.
include-headers: |
  \newcommand\mC[1]{\multicolumn{1}{c}{#1}}
  \newcommand\latex{\LaTeX\xspace }
  \newcommand\v[1]{\verb-#1-}

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
We use \v{#} on various levels. Headings should be shown as a line that prefixed by \v{#}. (Ex. \v{# The First Level Heading}). Please include space after \v{#}.

## Paragraph
blank line stands as a paragraph separator. No indentation for the first line (it only required in multilined lists to show that the next line is part of the item if it is non-blank and indented).

## Italic
\v{*} Ex. \v{this text is *italic*} :  this text is *italic*

## Bold
\v{**} Ex. \v{this text is **bold**} : this text is **bold**

##  Bold and Italic
\v{***} Ex. \v{this text is ***bold and italic***} this text is ***bold and italic***

## Verbatim
Verbatim should use backticks \v{`text`}, Ex. ``this is `the text` `` this is `the text`.
To include backticks inside the text, use multiple bacticks.

~~~
``this is `the text` multiple``
~~~

## Lists
We can have either ordered or unordered list

### Ordered List
For ordered list, we just use numbers.

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


## Images

~~~
![the caption](Figure/icml_numpapers.eps)
{#fig:FigVibStab width=3.43in height=2.71in}
~~~

will produce Figure \ref{fig:FigVibStab}.

![the caption](Figure/icml_numpapers.eps){#fig:FigVibStab width=3.43in height=2.71in}

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

For equations, we can use several environment:

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

And this is another example for inline equation, such as: $$y = 5\cdot x^2$$
You can see that inline equation have automatically numbered.
Independent paragraph equation is not numbered, as below.

$$
\nabla \cdot  \vec{W} = \sigma W \nonumber
$$

The block should be as an independent paragraph (blank line above and under the block).

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

~~~{.multiTable}
|             |          Grouping           ||
First Header  | Second Header | Third Header |
 ------------ | :-----------: | -----------: |
Content       |          *Long Cell*          ||
Content       |   **Cell**        |         Cell |
New section   |     More      |         Data |
And more      | With an escaped '\|'        ||
[More complicated table can be done using multimarkdown in .multiTable Code Block. You have to use this format for all table as default.]
~~~

For the moment, we need to use `\begin{table*}` for full screen table as follows Table \ref{KapSou}.

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



