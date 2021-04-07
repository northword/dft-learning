(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{422:function(s,a,t){s.exports=t.p+"assets/img/image-20210204181109031.9e406d76.png"},467:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"结构优化、自洽、非自洽"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#结构优化、自洽、非自洽"}},[s._v("#")]),s._v(" 结构优化、自洽、非自洽")]),s._v(" "),n("p",[s._v("结构优化计算是指将输入结构进行弛豫，得到一个稳定的结构（通常以能量变化或力作为收敛标准）。")]),s._v(" "),n("p",[s._v("静态自洽计算，顾名思义就是不对原子或离子的坐标进行改变，只是调整体系电子的运动，以达到该结构的最低能量。")]),s._v(" "),n("p",[s._v("非自洽计算，是在自洽基础上改变k点等等参数，根据不同需要选取能量或势函数或电子密度作为初始值，进行迭代计算，可用于求解DOS，能带或者光学等其他性质。")]),s._v(" "),n("p",[s._v("本页对"),n("eq",[n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("msub",[n("mi",[s._v("O")]),n("mn",[s._v("2")])],1)],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("O_2")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.83333em","vertical-align":"-0.15em"}}),n("span",{staticClass:"mord"},[n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[s._v("O")]),n("span",{staticClass:"msupsub"},[n("span",{staticClass:"vlist-t vlist-t2"},[n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.30110799999999993em"}},[n("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"-0.02778em","margin-right":"0.05em"}},[n("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),n("span",{staticClass:"sizing reset-size6 size3 mtight"},[n("span",{staticClass:"mord mtight"},[s._v("2")])])])]),n("span",{staticClass:"vlist-s"},[s._v("​")])]),n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[n("span")])])])])])])])])]),s._v("进行结构优化、静电自洽、非静电自洽。")],1),s._v(" "),n("h2",{attrs:{id:"目录结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[s._v("#")]),s._v(" 目录结构")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(".\n├── 1-geo\n│   ├── CONTCAR\n│   ├── INCAR\n│   ├── KPOINTS\n│   ├── POSCAR\n│   ├── POTCAR\n│   └── vasp.pbs\n├── 2-scf\n│   ├── CHGCAR\n│   ├── EIGENVAL\n│   ├── INCAR\n│   ├── KPOINTS -> ../1-geo/KPOINTS\n│   ├── POSCAR -> ../1-geo/CONTCAR\n│   ├── POTCAR -> ../1-geo/POTCAR\n│   └── vasp.pbs\n└── 3-nscf\n    ├── CHGCAR    复制自../2-scf/CHGCAR\n    ├── INCAR\n    ├── KPOINTS\n    ├── POSCAR -> ../2-scf/POSCAR\n    ├── POTCAR -> ../2-scf/POTCAR\n    └── vasp.pbs\n    \n只列出了输入文件和必要的输出文件。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("h2",{attrs:{id:"步骤"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[s._v("#")]),s._v(" 步骤")]),s._v(" "),n("h3",{attrs:{id:"结构优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#结构优化"}},[s._v("#")]),s._v(" 结构优化")]),s._v(" "),n("p",[s._v("在"),n("code",[s._v("1-geo")]),s._v("文件夹中对结构进行结构优化。")]),s._v(" "),n("code-group",[n("code-block",{attrs:{title:"POSCAR",active:""}},[n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("O2                                      \n1     \n10   0    0\n0   10    0\n0    0   12\nO \n2\nSelective dynamics\nDirect\n0.50  0.50  0.50   F   F   F\n0.50  0.50  0.62   F   F   T\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])])]),s._v(" "),n("code-block",{attrs:{title:"INCAR"}},[n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Global Parameters\n ISTART =  0            (Read existing wavefunction; if there)\n ISPIN  =  2           (Spin polarised DFT)\n ICHARG =  2         (Non-self-consistent: GGA/LDA band structures)\n LREAL  = .FALSE.          (Projection operators: automatic)\n ENCUT  =  400        (Cut-off energy for plane wave basis set, in eV)\n PREC   =  Normal       (Precision level)\n LWAVE  = .FALSE.        (Write WAVECAR or not)\n LCHARG = .FALSE.        (Write CHGCAR or not)\n ADDGRID= .TRUE.        (Increase grid; helps GGA convergence)\n NPAR   = 4           (Max is no. nodes; don't set for hybrids)\n\nElectronic Relaxation\n ISMEAR =  0            (Gaussian smearing; metals:1)\n SIGMA  =  0.05         (Smearing value in eV; metals:0.2)\n NELM   =  60           (Max electronic SCF steps)\n NELMIN =  4            (Min electronic SCF steps)\n EDIFF  =  1E-06        (SCF energy convergence; in eV)\n\nIonic Relaxation\n NSW    =  30          (Max electronic SCF steps)\n IBRION =  2            (Algorithm: 0-MD; 1-Quasi-New; 2-CG)\n ISIF   =  2            (Stress/relaxation: 2-Ions, 3-Shape/Ions/V, 4-Shape/Ions)\n EDIFFG = -2E-02        (Ionic convergence; eV/AA)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])])]),s._v(" "),n("code-block",{attrs:{title:"KPOINTS"}},[n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("KPT-Resolved Value to Generate K-Mesh: 0.000\n0\nGamma\n   1   1   1\n0.0  0.0  0.0\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])])],1),s._v(" "),n("p",[s._v("KPOINTS和POTCAR使用"),n("code",[s._v("vaspkit-103")]),s._v("生成")]),s._v(" "),n("p",[s._v("提交计算，在"),n("code",[s._v("stdout")]),s._v("里看到"),n("code",[s._v("reached required accuracy - stopping structural energy minimisation")]),s._v("即为收敛。")]),s._v(" "),n("p",[s._v("得到的"),n("code",[s._v("CONTCAR")]),s._v("（优化后的结构）见下，CONTCAR写入的默认是分数坐标，将其转换为笛卡尔坐标后见CONTCAR_Caresian。")]),s._v(" "),n("code-group",[n("code-block",{attrs:{title:"CONTCAR",active:""}},[n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("O2                                      \n   1.00000000000000     \n    10.0000000000000000    0.0000000000000000    0.0000000000000000\n     0.0000000000000000   10.0000000000000000    0.0000000000000000\n     0.0000000000000000    0.0000000000000000   12.0000000000000000\n   O \n     2\nSelective dynamics\nDirect\n  0.5000000000000000  0.5000000000000000  0.5000000000000000   F   F   F\n  0.5000000000000000  0.5000000000000000  0.6028684362988320   F   F   T\n \n  0.00000000E+00  0.00000000E+00  0.00000000E+00\n  0.00000000E+00  0.00000000E+00  0.00000000E+00\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])])]),s._v(" "),n("code-block",{attrs:{title:"CONTCAR_Cartesian"}},[n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(" O2\n   1.000\n   10.0000000000000000    0.0000000000000000    0.0000000000000000\n    0.0000000000000000   10.0000000000000000    0.0000000000000000\n    0.0000000000000000    0.0000000000000000   12.0000000000000000\n   O \n    2\nSelective Dynamics\nCartesian\n    5.0000000000000000    5.0000000000000000    6.0000000000000000    F  F  F\n    5.0000000000000000    5.0000000000000000    7.2344212355859838    F  F  T\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])])])],1),s._v(" "),n("p",[s._v("计算得到的键长为"),n("eq",[n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mtext",[s._v("1.234421235585984 ")]),n("mover",{attrs:{accent:"true"}},[n("mtext",[s._v("A")]),n("mo",[s._v("˚")])],1)],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\\text{1.234421235585984 \\AA}")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.9467699999999999em","vertical-align":"0em"}}),n("span",{staticClass:"mord text"},[n("span",{staticClass:"mord"},[s._v("1.234421235585984 ")]),n("span",{staticClass:"mord accent"},[n("span",{staticClass:"vlist-t"},[n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.9467699999999999em"}},[n("span",{staticStyle:{top:"-3em"}},[n("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),n("span",{staticClass:"mord"},[s._v("A")])]),n("span",{staticStyle:{top:"-3.25233em"}},[n("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),n("span",{staticClass:"accent-body",staticStyle:{left:"-0.375em"}},[n("span",{staticClass:"mord"},[s._v("˚")])])])])])])])])])])])]),s._v("，与实验值"),n("eq",[n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mtext",[s._v("1.2075")]),n("mover",{attrs:{accent:"true"}},[n("mtext",[s._v("A")]),n("mo",[s._v("˚")])],1)],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\\text{1.2075\\AA}")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.9467699999999999em","vertical-align":"0em"}}),n("span",{staticClass:"mord text"},[n("span",{staticClass:"mord"},[s._v("1.2075")]),n("span",{staticClass:"mord accent"},[n("span",{staticClass:"vlist-t"},[n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.9467699999999999em"}},[n("span",{staticStyle:{top:"-3em"}},[n("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),n("span",{staticClass:"mord"},[s._v("A")])]),n("span",{staticStyle:{top:"-3.25233em"}},[n("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),n("span",{staticClass:"accent-body",staticStyle:{left:"-0.375em"}},[n("span",{staticClass:"mord"},[s._v("˚")])])])])])])])])])])])]),s._v("相近（误差2.2%）。")],1),s._v(" "),n("p",[s._v("也可以将CONTCAR使用VESTA查看，键长为1.23442 "),n("eq",[n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mover",{attrs:{accent:"true"}},[n("mtext",[s._v("A")]),n("mo",[s._v("˚")])],1)],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\\text{\\AA}")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.9467699999999999em","vertical-align":"0em"}}),n("span",{staticClass:"mord text"},[n("span",{staticClass:"mord accent"},[n("span",{staticClass:"vlist-t"},[n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.9467699999999999em"}},[n("span",{staticStyle:{top:"-3em"}},[n("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),n("span",{staticClass:"mord"},[s._v("A")])]),n("span",{staticStyle:{top:"-3.25233em"}},[n("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),n("span",{staticClass:"accent-body",staticStyle:{left:"-0.375em"}},[n("span",{staticClass:"mord"},[s._v("˚")])])])])])])])])])])])]),s._v("。")],1),s._v(" "),n("p",[n("img",{attrs:{src:t(422),alt:"O2-geo-CONTCAR"}})]),s._v(" "),n("h3",{attrs:{id:"自洽计算"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自洽计算"}},[s._v("#")]),s._v(" 自洽计算")]),s._v(" "),n("p",[s._v("在"),n("code",[s._v("2-scf")]),s._v("文件夹中对已优化的结构进行静电自洽。")]),s._v(" "),n("ol",[n("li",[s._v("将结构优化得到的结果复制过来（CONTCAR变为POSCAR、改INCAR，POTCAR和KPOINTS不改）")]),s._v(" "),n("li",[s._v("修改INCAR使其符合自洽计算的要求")]),s._v(" "),n("li",[s._v("提交作业")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("zjb@op "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("-scf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/1-geo/CONTCAR POSCAR\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("zjb@op "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("-scf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/1-geo/POTCAR "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("zjb@op "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("-scf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/1-geo/KPOINTS "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("zjb@op "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("-scf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/1-geo/INCAR "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("zjb@op "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("-scf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/1-geo/vasp.pbs "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改INCAR")]),s._v("\n NSW    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n IBRION "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("  -1\n LWAVE  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" .TRUE.\n LCHARG "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" .TRUE.\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("提交计算。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[zjb@op 2-scf]$ cat EIGENVAL \n    2    2    1    2\n  0.6000000E+03  0.1000000E-08  0.1000000E-08  0.1200000E-08  0.5000000E-15\n  1.000000000000000E-004\n  CAR \n unknown system                          \n     12      1     12\n \n  0.0000000E+00  0.0000000E+00  0.0000000E+00  0.1000000E+01\n    1      -32.479163    -31.253398   1.000000   1.000000\n    2      -20.620813    -18.824373   1.000000   1.000000\n    3      -13.381535    -12.454501   1.000000   1.000000\n    4      -13.228318    -11.385151   1.000000   1.000000\n    5      -13.228318    -11.385151   1.000000   1.000000\n    6       -6.915025     -4.642110   1.000000   0.000000\n    7       -6.915024     -4.642110   1.000000   0.000000\n    8       -0.315761     -0.201192   0.000000   0.000000\n    9        0.533238      0.741194   0.000000   0.000000\n   10        0.791404      0.862512   0.000000   0.000000\n   11        1.120056      1.246772   0.000000   0.000000\n   12        1.120056      1.246772   0.000000   0.000000\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("h3",{attrs:{id:"非自洽计算"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#非自洽计算"}},[s._v("#")]),s._v(" 非自洽计算")]),s._v(" "),n("p",[s._v("在"),n("code",[s._v("3-nscf")]),s._v("文件夹中进行非自洽计算。")]),s._v(" "),n("ol",[n("li",[s._v("将自洽计算的POSCAR（CONTCAR也行，因为scf不改变结构）、POTCAR、INCAR、KPOINTS、CHGCAR复制过来。")]),s._v(" "),n("li",[s._v("修改INCAR和KPOINTS。")]),s._v(" "),n("li",[s._v("提交计算。")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("zjb@op "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("-nscf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/2-scf/POSCAR "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/2-scf/POTCAR "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("zjb@op "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("-nscf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/2-scf/INCAR "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/2-scf/KPOINTS "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/2-scf/CHGCAR "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/2-scf/vasp.pbs "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("INCAR中修改以下")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("改：\n ISTART =  1            (Read existing wavefunction; if there)\n ICHARG =  11           (Non-self-consistent: GGA/LDA band structures)\n ISMEAR =  0            (Gaussian smearing; metals:1)\n SIGMA  =  0.05         (Smearing value in eV; metals:0.2)\n\n删：\n# EDIFFG = -2E-02       (Ionic convergence; eV/AA)\n\n增：\nDOS\n NEDOS  = 6000\n LORBIT = 11 \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("KPOINTS重新生成，但是这次我没动K点（主要是不知道应该改成啥）。")]),s._v(" "),n("p",[s._v("提交计算。")]),s._v(" "),n("h2",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://blog.csdn.net/kyang_823/article/details/59110848",target:"_blank",rel:"noopener noreferrer"}},[s._v("VASP 结构优化、静态自洽、非自洽计算"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("a",{attrs:{href:"https://cndaqiang.github.io/2018/01/23/vasp-step1/",target:"_blank",rel:"noopener noreferrer"}},[s._v("vasp计算流程-结构优化"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("a",{attrs:{href:"https://blog.csdn.net/flowingsand/article/details/103656692",target:"_blank",rel:"noopener noreferrer"}},[s._v("【vasp笔记】结构优化（结构弛豫）"),n("OutboundLink")],1)])],1)}),[],!1,null,null,null);a.default=e.exports}}]);