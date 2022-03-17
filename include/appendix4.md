# IAU recommendations for nominal units

The IAU 2015 resolution B3 defines nominal solar and planetary values by
establishing conversions between solar and planetary values and SI units.
The rational and specifications are given in \citet{2016AJ....152...41P}.
The recommended nominal conversion constants for \latex have been
incorporate into v6.31 to help authors follow the IAU resolution.

The general commands take this form:

\vskip12pt
\begin{center}
\begin{tabular}{@{\vrule height 14pt depth 6pt width0pt}lll}
Command&Example&Results\\
\verb+\nom{}+&\verb+\nom{Q}+&\nom{Q}\\
\verb+\Eenom{}+&\verb+\Eenom{Q}+&\Eenom{Q}\\
\verb+\Epnom{}+&\verb+\Epnom{Q}+&\Epnom{Q}\\
\verb+\Jenom{}+&\verb+\Jenom{Q}+&\Jenom{Q}\\
\verb+\Jpnom{}+&\verb+\Jpnom{Q}+&\Jpnom{Q}\\
\end{tabular}
\end{center}
\vskip12pt

which can be used for any units the author requires. Examples of
the most common uses would be:

\vskip12pt
\begin{tabular}{@{\vrule height 14pt depth 6pt width 0pt}llllp{3in}}
1.&\verb+\nom{(GM)}+& \nom{(GM)} &=& nominal solar mass parameter\\
2.&\verb+\nom{R}+&\nom{R} &=& nominal solar radius\\
3.&\verb+\nom{S}+& \nom{S}&=&  nominal total solar irradiance\\
4.&\verb+\nom{L}+& \nom{L}  &=&nominal solar luminosity\\
\end{tabular}
\vskip12pt

AASTeX v6.31 also contains specific commands for other commonly used
units. These are:

\vskip24pt
\begin{tabular}{@{\vrule height 14pt depth 6pt width 0pt}llllp{3in}}
1.&\verb+\nomSolarEffTemp+& \nomSolarEffTemp&=& nominal solar effective temperature\\
2.&\verb+\nomTerrEqRadius+&\nomTerrEqRadius  &=& nominal terrestrial
equatorial radius\\
&\verb+\nomTerrPolarRadius+ &\nomTerrPolarRadius &=& nominal
terrestrial polar radius\\
&\verb+\nomTerrEqRadius+&\nomTerrEqRadius&& should be used if equatorial
vs.~polar radius is not explicitly specified.\\
3.&\verb+\nomJovianEqRadius+&\nomJovianEqRadius&=& nominal one-bar equatorial radii of
Jupiter\\
&\verb+\nomJovianPolarRadius+&\nomJovianPolarRadius &=& nominal polar radii of Jupiter\\
&\verb+\nomJovianEqRadius+&\nomJovianEqRadius&& should be used if Jovian equatorial
vs.~polar radius is not explicitly specified.\\
4.&\verb+\nomTerrMass+ &\nomTerrMass &=& nominal terrestrial mass
parameter\\
&\verb+\nomJovianMass+ &\nomJovianMass &=& nominal Jovian mass parameter\\
\end{tabular}
\vskip12pt

All of these commands work equally well in text and math mode.

# Using Chinese, Japanese, and Korean characters

Authors have the option to include names in Chinese, Japanese, or Korean (CJK)
characters in addition to the English name. The names will be displayed
in parentheses after the English name. The way to do this in AASTeX is to
use the CJK package available at \url{https://ctan.org/pkg/cjk?lang=en}.
Further details on how to implement this and solutions for common problems,
please go to \url{https://journals.aas.org/nonroman/}.
